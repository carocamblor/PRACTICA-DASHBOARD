import React from "react";
import RowOne from "../RowOne/RowOne";
import RowTwo from "../RowTwo/RowTwo";
import Personajes from "../Personajes/Personajes";

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

        {/* <!-- Personajes --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h4 className="h4 mb-0 text-gray-600">Personajes de películas</h4>
        </div>
        <Personajes/>

    </div>
    );
};

export default PageContent;