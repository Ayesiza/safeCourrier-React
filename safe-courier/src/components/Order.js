import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsOrder } from '../actions/orderActions';


function Order(props) {
    const orderDetails = useSelector(state => state.orderDetails);
    const {order, loading, error} = orderDetails;
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(detailsOrder(props.match.params.id));
         return () =>{
             //
         };

    },[])
    return <div>
        <div className="breadcrum ">
      <div className="container">
        <h1>Parcel Details</h1>
      </div>
    </div>
    {loading ? <div>Loading... </div> :
error ? <div>{error} </div>:(
<div className="container">
      <div className="about pt-6 mb-5 ">
 
        <div className="row ">
          <div className="col-md-6">
            <div className="card  mb-5">
              <div className="card-body text-center">
                <div className="" width="100%">
                <img   className="laptop" src={"/images/laptop.jpg"} className="laptop" alt="Parcel Details"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card  mb-5">
                <div className="card-body">
               
                   <table className="table table-striped table-bordered ">
                     <tr>
                       <td>ParcelName</td>
                       <td>{order.parcelName}</td>

                      </tr> 
                      <tr>
                        <td>Phone</td>
                        <td>{order.phone}</td>
                      </tr> 
                      <tr>
                        <td>UserName</td>
                        <td>{order.userName}</td>
                      </tr> 
                      <tr>
                        <td>Destination</td>
                        <td>{order.destination}</td>
                      </tr> 
                      <tr>
                        <td>Order Status</td>
                        <td>{order.status}</td>
                      </tr> 
                      <tr>
                        <td>Receipient</td>
                        <td>{order.receipient}</td>
                      </tr>  
                   </table>
                </div>
                </div>
            </div>
          </div>
          </div>
    </div>

)}  
    
    </div>
   
}

export default Order
