import React from "react";
import ReactDOM from "react-dom";

function GuestApp(props){
        return <div>
	    <nav className="navbox">
		<ul className = "main-menu">
			<li className="active"><a href="index.html">Home</a></li>
			<li><a href="activities.html">Activities</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="login.html">Login</a></li>
			<li><a href="membership.html">Membership</a></li>
		</ul>
	</nav>
	 </div>;
}
export default GuestApp;