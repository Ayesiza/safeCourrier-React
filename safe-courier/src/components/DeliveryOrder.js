import React from 'react';
import {Link } from 'react-router-dom'

function DeliveryOrder() {
    return (
        <div>
            <div className="container">
<div className="dashboard-content-holder mb-3">
<h3>PARCEL DELIVERY ORDER</h3>
<div className="dash-home"><Link to="/DeliveryOrder">Home </Link> / Place Order</div>              
</div>
<div className="order-section">
<div className="card-1">
  <div className="container mt-5 ">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h5 className="text-center mb-3">Fill this Form to send your package</h5>
          <form className="" action="payment-slip.html">
              <div className="form-group">
                  <h5 className="form-title my-4">Sender's info</h5>
                <div className="row">
                    <div className="col-md-6">
                      <input type="text" className="form-control"  placeholder="Your Name" name="name"/>
                    </div>

                    <div className="col-md-6">
                      <input type="text" className="form-control"  placeholder="Package Name" name="name"/>
                      </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                      <select>
                          <option value="Akwa Ibom">Kampala</option>
                          <option value="Abia">Mbarara</option>
                          <option value="Adamawa">Hoima</option>
                          <option value="Anambra">Arua</option>
                        </select>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control"  placeholder="Address" name="address"/>
                  </div>
                </div>
              </div> 
              <div className="form-group">
                  <div className="row">
                      <div className="col-md-6">
                          <input type="email" className="form-control"  placeholder="Email" name="text"/>
                      </div>
                      <div className="col-md-6">
                          <input type="tel" className="form-control" placeholder="Phone Number" name="phone"/>
                      </div>
                  </div>
                </div> 


                <h5 className=" form-title my-4">Deliver To?</h5>
                
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" className="form-control"  placeholder="Recipient's Name" name="name"/>
                    </div>

                    <div className="col-md-6">
                      <input type="text" className="form-control"  placeholder="Package Name" name="name"/>
                    </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                      <select>
                          <option value="Akwa Ibom">Kampala</option>
                          <option value="Abia">Mbarara</option>
                          <option value="Adamawa">Hoima</option>
                          <option value="Anambra">Gulu</option>
                        </select>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control"  placeholder="Address" name="address"/>
                  </div>
                </div>
              </div> 
              <div className="form-group">
                  <div className="row">
                      <div className="col-md-6">
                          <input type="email" className="form-control"  placeholder="Email" name="text"/>
                      </div>
                      <div className="col-md-6">
                          <input type="tel" className="form-control"  placeholder="Phone Number" name="phone"/>
                      </div>
                  </div>
                </div> 

                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-contain py-4">
                      <button type="submit" className="btn btn-danger btn-block">Create Order</button>
                    </div>
                  </div>
                </div>
              
            </form>
        </div>
      
    </div>
      
      </div>
     
    </div>
  </div>
</div>


</div>
       
    )
}

export default DeliveryOrder

