import React from "react";
import ReactDOM from "react-dom";
import indexImg from "./clubimages/IndexImg.jpg";
import "./club.css";
import MemberApp from "./memberApp";
import AdminApp from "./adminApp";
import GuestApp from "./guestApp";


class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {role: "guest"}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {
    let contents = null;
        switch (this.state.role) {
            case "member":
                contents = <MemberApp role={this.state.member}/>;
                break;
            case "admin":
                contents = <AdminApp role={this.state.admin}/>;
                break;
            case "guest":
                contents = <GuestApp role={this.state.guest}/>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
        }
        return <div>
        {contents}
        </div>
   
    }
}
ReactDOM.render(<App />, document.getElementById("root"));