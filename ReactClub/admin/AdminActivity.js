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
		let newEventDict = {name:eventname.value,dates: dateArr};
		this.setState({activityList:this.state.activityList.concat(newEventDict)});

	}

	deleteActivity(i) {
       let newArray = this.state.activityList.filter(function(activity, index){
      if (index === i) 
        return false;
       else 
        return true;
    })
    console.log(newArray)
    this.setState({activityList:newArray});

	}


	render(){

		let that=this;

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
		
		<button type="button" id = "Add" onClick = {this.addActivity.bind(this)} >Add</button>
		</section>
		</details>

	{/* Activity tabel*/}
		<h3> Activities</h3>
     
        <table><thead><tr> 
        <td></td>
		<td>Event</td>
		<td>Dates</td>
		</tr></thead>

        <tbody>
		{/*<ul className="clubEvents">*/}

		{(this.state.activityList).map((activity,i) => {
			
		return <tr key = {"activity"+i}>
		<td><button type="button" id = "Delete" onClick={that.deleteActivity.bind(that,i)}>Delete</button></td>
		<td>{activity.name} </td>
		<td> {(activity.dates).join(", ")}</td>
		</tr>
	}

	)}
	</tbody>
	</table>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925;</footer></div>;
}
}
export default AdminActivity;