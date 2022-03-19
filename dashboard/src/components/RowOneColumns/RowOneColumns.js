import React from "react";

function RowOneColumns(props) {
    return (
    props.columns.map((column, idx) => 
         <div className="col-md-4 mb-4" key={column + idx}>
            <div className={`card ${column.color} shadow h-100 py-2`}> 
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold ${column.text} text-uppercase mb-1`}>{column.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{column.data}</div>
                        </div>
                        <div className="col-auto">
                            <i className={column.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
   
    );
};

export default RowOneColumns;