import React from "react";
import ReactDOM from "react-dom";
import HomeClub from "../guest/Home";
import AboutClub from "../guest/About";
import AdminClubActivitiy from "./AdminActivity";

class AdminApp extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {show:"home"};
		this.roleChange = props.roleChange;
	}

    homeHandler(event)
	{
		this.setState({show:"home"});
	}
	editActivityHandler(event)
	{
		this.setState({show:"editActivity"});
	}
	aboutHandler(event)
	{
		this.setState({show:"about"});
	}

	logoutHandler(event)
	{
		this.setState({show:"logout"});
		this.roleChange("guest",null);

	}
	
	membersOnlyHandler(event)
	{
		this.setState({show:"membersOnly"})
	}
	render() {
        let navBar= <nav className="navbox">
		<ul className = "main-menu">
			<li className = {this.state.show == "home" ? "active" : null}><a onClick={this.homeHandler.bind(this)}>Home</a></li>
			<li className = {this.state.show == "editActivity" ? "active" : null}><a onClick={this.editActivityHandler.bind(this)}>EditActivities</a></li>
			<li className = {this.state.show == "about" ? "active" : null}><a onClick={this.aboutHandler.bind(this)}>About</a></li>
			<li className = {this.state.show == "logout" ? "active" : null}><a onClick={this.logoutHandler.bind(this)}>Logout</a></li>
			<li className = {this.state.show == "membersOnly" ? "active" : null}><a onClick={this.membersOnlyHandler.bind(this)}>MembersOnly</a></li>
		</ul>
	</nav> ;

   let contents = null;
	switch (this.state.show) {
            case "home":
                contents = <HomeClub />;
                break;
            case "about":
                contents = <AboutClub />;
                break;
            case "editActivity":
                contents = <AdminClubActivitiy />;
                break;
            default:
                contents = <h2>This page is not implemented yet!!!</h2>;
        }
        return <div className="bodyStyle">{navBar}{contents}</div>
    }
}
export default AdminApp;