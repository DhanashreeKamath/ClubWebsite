import React from "react";
import ReactDOM from "react-dom";


function AdminApp(props) {
        return <div>
	    <nav className="navbox">
		<ul className = "main-menu">
			<li><a href="index.html">Home</a></li>
			<li><a href="activities.html">EditActivities</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="login.html">Logout</a></li>
			<li><a href="membership.html">MembersOnly</a></li>
		</ul>
	</nav>
   </div>;
    
}
export default AdminApp;