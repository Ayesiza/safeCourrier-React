import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>

            <div className="container">
        <div className="about pt-5 mb-5 ">
            <h3>About Us</h3>
            <div className="row">
              <div className="col-md-6  fadeInUp ">
                <p>Safe Courier is a courier service that helps users deliver parcels to different destinations. Safe Courier provides courier quotes based on weight categories..</p> 
                  <p>Our company is currently located in the heart of Kampala city we are working on setting up branches currently in at least 15 districts in the country.</p>
                  <div className="about-content">
                    <div>
                      <h5>Fast Delivery</h5>
                      <p>Despite the hitches and traffic in our country,SafeCourier ensures that parcels are delivered quickly.</p>
                    </div>
                  </div>
                  <div className="about-content">
                      <div>
                        <h5>Secured</h5>
                        <p>With SafeCourier, security of parcels is guaranteed. we make it a point of interest to see that your goods are delivered in perfect shape.</p>
                      </div>
                    </div>
                    <div className="about-content">
                     
                      <div>
                        <h5>National Wide Delivery</h5>
                        <p>SafeCourier delivers Parcels to all parts of the country. We have great drivers and hands on deck who know the terrains of this country like their backyard.</p>
                      </div>
                    </div>
                    <Link  className="btn btn-danger">Read More</Link>
              </div>
              <div className="col-md-6  slideInRight">
                  <img src={"/images/about-img.png"} alt="courrierman"/>                   
              </div>
            </div>
        </div>
        <div className="calculate-cost header-cal  fadeInUp">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="./images/Courier-Man.png" className="image-fluid" alt="courrierman"/>
            </div>
            <div className="col-md-6 col-12">
              <h3 className="fw-b">Calculate Cost</h3>
              <form className="pt-5" action="">
                <div className="form-group">
                  <div className="row">
                      <div className="col-md-2">
                          <label for="email">Weight(kg):</label>
                      </div>
                      <div className="col-md-10">
                          <input type="number" className="form-control" id="number" placeholder="kg" name="number"/>
                      </div>
                  </div>
                </div> 
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-2">
                            <label for="email">Package:</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="text" placeholder="Package" name="text"/>
                        </div>
                    </div>
                  </div> 
                  <div className="form-group">
                    <div className="row">
                        <div className="col-md-2">
                            <label for="email">Location:</label>
                        </div>
                        <div className="col-md-10">
                            
                          <div className="locat-input">
                            <input type="text" className="form-control mr-3" id="text" placeholder="From" name="text"/>
                            <input type="text" className="form-control ml-3" id="text" placeholder="To" name="text"/>
                        </div>
                        </div>
                    </div>
                  </div>  
                  <div className="total-cost-btn">
                    <button type="submit" className=" width-5 text-center btn btn-danger ">Total Cost</button>
                    <div className=" bg-black">1000UGX</div>
                  </div>
            </form>
            </div>
          </div>
        </div>
    </div>
    
        </div>

    )
}

export default Home
