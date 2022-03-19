import React from "react";

function Category(props) {
    return (

    props.category.map((unCategory, idx) => 
    
    <div key={unCategory + idx} className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {unCategory}
            </div>
        </div>
    </div>

    )
    
   
    );
};

export default Category;