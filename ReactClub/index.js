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

    let mainPageBody = <div className ="divStyle">
	<main className ="box">
		<header>
			<h1 className="fh-custom-font"> Union City Music Club</h1>
			<h2> Introduction</h2>
		</header>
		<p>Union city music is the best destination for the music lovers to interact and perform.It provides ways for people to learn , mentor and play music. It is not only for professionals but also for hobbyists.Learn from expert teachers.</p>
		<figure>
			<img src = {indexImg} alt="Music Instrument Image" id="indexImg"/>
			<figcaption>Music Club,Union City.</figcaption>
		</figure>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925; </footer>
	</div>;

        return <div>
        {contents}
        {mainPageBody}
        </div>

   
    }
}
ReactDOM.render(<App />, document.getElementById("root"));