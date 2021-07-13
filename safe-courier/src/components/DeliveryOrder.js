import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrder } from '../actions/orderActions';


function DeliveryOrder(props) {
  
  const [userName, setUserName] = useState('');
  const [parcelName, setParcelName] = useState('');
  const [phone, setPhone] = useState('');
  const [receipient, setReceipient] = useState('');
  const [destination, setDestination] = useState('');
  
  

  const orderSave = useSelector(state => state.orderSave);
  const {loading: loadingSave, success:successSave, error:errorSave}= orderSave; 

  const dispatch = useDispatch();

  useEffect(()=>{
    return() =>{
      //
    };
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveOrder({userName, parcelName, phone, receipient, destination}));
  }

  
  return (
    <div>
      <div className="container">
        <div className="dashboard-content-holder mb-3">
          <h3>PARCEL DELIVERY ORDER</h3>
          <div className="dash-home">
            <Link to="/">Home </Link> / Place Order
          </div>
        </div>
        <div className="order-section">
          <div className="card-1">
            <div className="container mt-5 ">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <h5 className="text-center mb-3">
                    Fill this Form to Create your Order
                  </h5>
                  <hr />
                  <form className="" onSubmit={handleSubmit}>
                   <div>
                     {loadingSave && <div>Loading...</div>}
                     {errorSave && <div>{errorSave}</div>}
                   </div>
                    <div className="form-group">
                      <h5 className="form-title my-4">Sender's info</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            onChange={(e) => setUserName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            name="userName"
                            required="required"
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                         onChange={(e) => setParcelName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Package Name"
                            name="parcelName"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                          
                          onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            className="form-control"
                            placeholder="Phone Contact"
                            required="required"
                            name="phone"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            onChange={(e) => setDestination(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Destination"
                            required="required"
                            name="destination"
                          />
                        </div>
                      </div>
                    </div>
                   

                    <h5 className=" form-title my-4">Deliver To?</h5>

                    <div className="form-group">
                      <div className="row">
                      <div className="col-md-6">
                          <input
                           onChange={(e) => setReceipient(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="receipient"
                            required="required"
                            name="receipient"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                           onChange={(e) => setDestination(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            required="required"
                            name="destination"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">  
                        <div className="col-md-6">
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            required="required"
                            name="phone"
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            required="required"
                            name="phone"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="btn-contain py-4">
                          <button
                            type="submit"
                            className="btn btn-danger btn-block"
                          >
                            Create Order
                          </button>
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
  );
}

export default DeliveryOrder;
