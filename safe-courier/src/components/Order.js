import React from 'react'
import data from '../data';

function Order(props) {
    console.log(props.match.params.id);
    const order = data.orders.find(x =>x._id === props.match.params.id )
    return <div>
        <div className="breadcrum ">
      <div className="container">
        <h1>Parcel Details</h1>
      </div>
    </div>
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
    </div>
   
}

export default Order
