import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../actions/orderActions";

function Orders(props) {
  const orderList = useSelector((state) => state.orderList);
  const { orders, loading, error } = orderList;
  console.log(orderList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());

    return () => {
      //
    };
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="container">
      <div className="dashboard-content-holder mb-3 ">
        <h3>USER DASHBOARD</h3>
      </div>
      <div className="mt-5 mb-5"></div>

      <div className="deliver-table ">
        <h3>Delivery Orders</h3>
        <table
          id="datatable"
          className="table table-striped table-bordered hidden-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>parcelName</th>
              <th>phone</th>
              <th>userName</th>
              <th> receipient</th>
              <th>destination</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>parcelName</th>
              <th>phone</th>
              <th>userName</th>
              <th> receipient</th>
              <th>destination</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </tfoot>
          <tbody>
            {orders.orders?.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>
                  <Link className="link-text" to={"/order/" + order._id}>
                    {order.parcelName}
                  </Link>
                </td>

                <td>{order.phone}</td>
                <td>{order.userName}</td>
                <td>{order.receipient}</td>
                <td>{order.destination}</td>
                <td>{order.status}</td>
                <td>
                  <button type="button" className="button secondary">
                    Edit
                  </button>{" "}
                  <button type="button" className="button secondary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
