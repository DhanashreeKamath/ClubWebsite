import React from "react";
import ReactDOM from "react-dom";


function MemberApp(props){

        return <div>
	    <nav className="navbox">
		<ul className = "main-menu">
			<li><a href="index.html">Home</a></li>
			<li><a href="activities.html">Activities</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="login.html">Logout</a></li>
			<li><a href="membership.html">MembersOnly</a></li>
		</ul>
	</nav>
   </div>;
}
export default MemberApp;