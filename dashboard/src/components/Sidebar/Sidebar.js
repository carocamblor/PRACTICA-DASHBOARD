import React from "react";
import SidebarItems from "../SidebarItems/SidebarItems";

function Sidebar() {

	let sidebarItems = [
		{
			title: 'Pages',
			icon: 'fas fa-fw fa-folder'
		},
		{
			title: 'Charts',
			icon: 'fas fa-fw fa-chart-area'
		},
		{
			title: 'Table',
			icon: 'fas fa-fw fa-table'
		},
	]

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0"/>

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider"/>

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{sidebarItems.map((item, idx) => <SidebarItems key={item.title + idx} data={item}/>)}
			
            {/* <SidebarItems title="Pages" icon="fas fa-fw fa-folder"/>
            <SidebarItems title="Charts" icon="fas fa-fw fa-chart-area"/>
            <SidebarItems title="Tables" icon="fas fa-fw fa-table"/> */}

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    );
};

export default Sidebar;