# Homework #6 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)

### (b)
![ScreenShot](images/ScreenShot35.png)

### (c)
Guest App

![ScreenShot](images/ScreenShot36.png)

Member App

![ScreenShot](images/ScreenShot37.png)

Admin App

![ScreenShot](images/ScreenShot38.png)

### (d)
As of now club main page is kept inside index.js along with state change code.
```index.js
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
                contents = <MemberApp/>;
                break;
            case "admin":
                contents = <AdminApp/>;
                break;
            case "guest":
                contents = <GuestApp/>;
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
```

## Question 2 

### (a)


### (b)
guestApp.js

``` guestApp.js
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

	loginHandler(event)
	{
        this.setState({show:"login"});
	}
	activityHandler(event)
	{
		this.setState({show:"activities"});
	}
	membershipHandler(event)
	{
		this.setState({show:"membership"})
	}
   


 render(){ 
        let navBar = <nav className="navbox">
		<ul className = "main-menu">
			<li className = {this.state.show == "home" ? "active" : null}><a onClick={this.homeHandler.bind(this)}>Home</a></li>
			<li className = {this.state.show == "activities" ? "active" : null}><a onClick={this.activityHandler.bind(this)}>Activities</a></li>
			<li className = {this.state.show == "about" ? "active" : null}><a onClick={this.aboutHandler.bind(this)}>About</a></li>
			<li className = {this.state.show == "login" ? "active" : null}><a onClick={this.loginHandler.bind(this)}>Login</a></li>
			<li className = {this.state.show == "membership" ? "active" : null}><a onClick={this.membershipHandler.bind(this)}>Membership</a></li>
		</ul>
	</nav>;
	
	let contents = null;
	switch (this.state.show) {
            case "home":
                contents = <HomeClub/>;
                break;
            case "about":
                contents = <AboutClub/>;
                break;
            default:
                contents = <h2>This page is not implemented yet!!!</h2>;
        }
        return <div className="bodyStyle">{navBar}{contents}</div>
    }

}

export default GuestApp;
```
GuestApp home state

![ScreenShot](images/ScreenShot39.png)

GuestApp about state

![ScreenShot](images/ScreenShot40.png)


## Question 3

### (a)   

Member State 

![ScreenShot](images/ScreenShot42.png)

### (b)

Admin State

![ScreenShot](images/ScreenShot43.png)



## Question 4

### (a)
Login 

![ScreenShot](images/ScreenShot44.png)


### (b)

roleChange(roleVal, userInfo) dunction is added to set the role 

``` index.js 
   constructor(props) {
		super(props);
		this.roleChange = this.roleChange.bind(this);
        this.state = {role: "guest", userInfo:{}}; 
        // We will have "user" and "admin" roles too.
    }

    roleChange(roleVal, userInfo) {
     	this.setState({role: roleVal, userInfo:userInfo});
     	console.log(userInfo)
    }
```

code to handle login button click

``` Login.js code to handle login button click

import React from "react";
import ReactDOM from "react-dom";


class Login extends React.Component {
  constructor(props)
  {
  	super(props)
  	{
  		this.roleChange = props.roleChange;
		this.loginParse = this.loginParse.bind(this);
  	}
  }

 loginParse() {
	let userinfo = {"name": "Dhanashree Kamath K", "NetID": "hs4947"};
	 if(email.value == "admin@email.org")
      	this.roleChange("admin", userinfo)
     else if (email.value == "member@email.org")  
        this.roleChange("member", userinfo)
     else
     	this.roleChange("guest", userinfo)
}

render()
{
	return <div><main className ="box">
		<header>
			<h1 className="fh-custom-font">Login</h1>
		</header>
		<section id="loginForm">
			<label htmlFor="email">Email: </label>
			<input type="email" name="email" id="email" required placeholder="email" />
			<label htmlFor="password">Password: </label>
			<input type="password" id="password" placeholder="password"/>
			<button type="button" id = "loginBtn" onClick={this.loginParse}>Login</button>
		</section>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925; </footer>
	</div>;
}
	
}

export default Login;
```


### (c)
Code snippet to handle logout in adminApp.js. Following function is called when logout option is clicked.
```adminApp.js 
logoutHandler(event)
	{
		this.setState({show:"logout"});
		this.roleChange("guest",null);

	}
```

## Question 5

### (a)
``` activities.json
[{"name": "Karaoke Nights",
           "dates": ["January 2nd","February 14th","March 12th", "March 17th", "April 15th", "April 26th",
                     "June 9th", "June 24rd", "July 9th", "July 25",
                     "August 8th", "August 25th"],
           "image":"KaraokeImg"},
         {"name": "Instrumental classes for kids",
          "dates": ["every monday and tuesday"],
          "image":"KidInstrument"},
         {"name": "Vocal Classes", 
         "dates": ["every Saturday and Sunday"],
          "image":"VocalImage"},
          {"name": "Online Classes", 
         "dates": ["every Friday"],
          "image":"OnlineImg"}];
```

### (b)
![ScreenShot](images/ScreenShot45.png)

code of Activities.js
``` Activities.js
import React from "react";
import ReactDOM from "react-dom";
import activityList from "./activities.json";
import images from './clubimages/*.jpg';


function Activities(props) {
    return <div><main className ="box">
		<header>
			<h1 className="fh-custom-font"> Union City Music Club</h1>
			<h2> Our Activities</h2>
		</header>
		<ul className="clubEvents">
	{(activityList).map((activity) => {
		console.log(activity.image);
		return <li key = {activity.name}>
		<p>{activity.name} will be held on following days {activity.dates}</p>
		<figure>
		   <img className="activityImage" src={images[activity.image]}/>
		</figure>
		</li>
	}

	)}
	</ul>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925;</footer></div>;
}
export default Activities;
```

### (c)
[ReactClubLink](http://csweb01.csueastbay.edu/~hs4947/hw6/)



