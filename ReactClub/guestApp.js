import React from "react";
import ReactDOM from "react-dom";
import HomeClub from "./Home";
import AboutClub from "./About";

class GuestApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: "home"}
	}
	homeHandler(event)
	{
		this.setState({show:"home"});
	}
	aboutHandler(event)
	{
		this.setState({show:"about"});
	}

 render(){ 
        let navBar =  <div>
	    <nav className="navbox">
		<ul className = "main-menu">
			<li className = {this.state.show == "home" ? "active" : null}><a onClick={this.homeHandler.bind(this)}>Home</a></li>
			<li><a >Activities</a></li>
			<li className = {this.state.show == "about" ? "active" : null}><a onClick={this.aboutHandler.bind(this)}>About</a></li>
			<li><a >Login</a></li>
			<li><a>Membership</a></li>
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
                contents = <h2>Not implemented yet!!!</h2>;
        }
        return <div>{navBar}{contents}</div>
    }

}

export default GuestApp;