import React from "react";
import Category from "../Category/Category";

function RowTwo() {
    return (
        <div className="row">
        {/* <!-- Last Product in DB --> */}
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="assets/images/product_dummy.svg" alt="image dummy"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>

        {/* <!-- Categories in DB --> */}
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <Category name="Category 01"/>
                        <Category name="Category 02"/>
                        <Category name="Category 03"/>
                        <Category name="Category 04"/>
                        <Category name="Category 05"/>
                        <Category name="Category 06"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RowTwo;