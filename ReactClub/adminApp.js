import React from "react";
import ReactDOM from "react-dom";
import HomeClub from "./Home"
import AboutClub from "./About"

class AdminApp extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {show:"home"};
	}

	render() {
        let navBar= <div>
	    <nav className="navbox">
		<ul className = "main-menu">
			<li><a href="">Home</a></li>
			<li><a href="">EditActivities</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Logout</a></li>
			<li><a href="">MembersOnly</a></li>
		</ul>
	</nav>
   </div>;
   let contents = null;
	switch (this.state.show) {
            case "home":
                contents = <HomeClub role={this.state.home}/>;
                break;
            case "about":
                contents = <AboutClub role={this.state.about}/>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }
        return <div>{navBar}{contents}</div>
    }
}
export default AdminApp;