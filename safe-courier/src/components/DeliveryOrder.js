import React, { useState } from "react";
import { Link } from "react-router-dom";

function DeliveryOrder() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setText({ ...text, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <div className="container">
        <div className="dashboard-content-holder mb-3">
          <h3>PARCEL DELIVERY ORDER</h3>
          <div className="dash-home">
            <Link to="/Home">Home </Link> / Place Order
          </div>
        </div>
        <div className="order-section">
          <div className="card-1">
            <div className="container mt-5 ">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <h5 className="text-center mb-3">
                    Fill this Form to send your package
                  </h5>
                  <hr />
                  <form className="" onSubmit={handleSubmit}>
                    {submitted ? (
                      <div className="popup-msg">
                        You have sucessfully placed your order
                      </div>
                    ) : null}
                    <div className="form-group">
                      <h5 className="form-title my-4">Sender's info</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            value={text.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            required="required"
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            value={text.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Package Name"
                            name="name"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            value={text.address}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            required="required"
                            name="address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            value={text.email}
                            onChange={handleChange}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required="required"
                            name="text"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            value={text.phone}
                            onChange={handleChange}
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            required="required"
                            name="phone"
                          />
                        </div>
                      </div>
                    </div>

                    <h5 className=" form-title my-4">Deliver To?</h5>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            value={text.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            required="required"
                            placeholder="Recipient's Name"
                            name="name"
                          />
                        </div>

                        <div className="col-md-6">
                          <input
                            value={text.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            placeholder="Pickup Location"
                            required="required"
                            name="name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            required="required"
                            name="address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            value={text.email}
                            onChange={handleChange}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="text"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            value={text.phone}
                            onChange={handleChange}
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
