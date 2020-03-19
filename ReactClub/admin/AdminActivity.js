import React from "react";
import ReactDOM from "react-dom";
import activityList from "../activities.json";
import images from '../clubimages/*.jpg';


class AdminActivity extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = { activityList:activityList};
	}

	addActivity() {
		let dateArr = (date.value).split(",")
		let newEventDict = {name:eventname.value,dates: dateArr,image:eventimage.value};
		this.setState({activityList:this.state.activityList.concat(newEventDict)});
         
	}


	render(){

    return <div><main className ="box">
		<header>
			<h1 className="fh-custom-font"> Union City Music Club</h1>
			<h2> Activity Management</h2>
		</header>
		<details>
		<summary>Add Activity</summary>
		<section id = "loginForm">
			<label htmlFor="name">Name: </label>
			<input type="text" name="eventname" id="eventname" required placeholder="EventName"/>
			<label htmlFor="date">Date(s): </label>
			<input type="text" name="date" id="date" placeholder="Dates"/>
			<label htmlFor="imageSelect">Choose a image:</label>

		    <select name="eventimage" id="eventimage">
		    <option value="">--Please choose an option--</option>
		    <option value="KaraokeImg">image1</option>
		    <option value="KidInstrument">image2</option>
		    <option value="VocalImage">image3</option>
		    </select>
			<button type="button" id = "Add" onClick = {this.addActivity.bind(this)} >Add</button>
		</section>
		</details>
		<h3> Activities</h3>

		<ul className="clubEvents">
	    {(this.state.activityList).map((activity) => {
		//console.log(activity.name);
		console.log(activity.image);	
		return <li key = {activity.name}>
		<p>{activity.name} will be held on following days {(activity.dates).join(", ")}</p>
		<figure>
		   <img className="activityImage" src={images[activity.image]}/>
		</figure>
		<button type="button" id = "Delete" >Delete</button>
		</li>
	}

	)}
	</ul>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925;</footer></div>;
}
}
export default AdminActivity;