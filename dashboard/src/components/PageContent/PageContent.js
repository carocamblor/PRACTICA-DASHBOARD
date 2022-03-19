import React from "react";
import RowOne from "../RowOne/RowOne";
import RowTwo from "../RowTwo/RowTwo";

function PageContent() {
    return (
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* <!-- Content Row --> */}
        <RowOne/>

        {/* <!-- Content Row --> */}
        <RowTwo/>
    </div>
    );
};

export default PageContent;