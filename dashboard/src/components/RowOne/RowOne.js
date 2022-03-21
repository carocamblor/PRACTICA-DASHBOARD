import React from "react";
import RowOneColumns from "../RowOneColumns/RowOneColumns";

function RowOne() {

    let rowOneColumns = [
        {
            title: "Products in Data Base",
            data: "135",
            color: "border-left-primary",
            text: "text-primary",
            icon: "fas fa-clipboard-list fa-2x text-gray-300"
        },
        {
            title: "Amount in products",
            data: "$546.456",
            color: "border-left-success",
            text: "text-success",
            icon: "fas fa-dollar-sign fa-2x text-gray-300"
        },
        {
            title: "Users quantity",
            data: "38",
            color: "border-left-warning",
            text: "text-warning",
            icon: "fas fa-user-check fa-2x text-gray-300"
        },

    ]

    return (
        <div className="row">

        {rowOneColumns.map((column, idx) => <RowOneColumns key={column.title + idx} data={column}/>)}

        </div> 
    );
};

export default RowOne;