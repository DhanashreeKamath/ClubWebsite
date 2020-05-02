import React from "react";
import ReactDOM from "react-dom";
//import activityList from "../activities.json";
import images from '../clubimages/*.jpg';


class AdminActivity extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = {activityList:[]};
	}

	componentDidMount() {
		let that = this;
		fetch('/activities').then(function(response) {
        	if (response.status == 200) {
        		return response.json();
        }
        })
        .then(function(data) {
        	if (data) {
            	that.setState({activityList:data});
			}
        });
	}


	addActivity() {
	  let that = this;
	  let dateArr = (date.value).split(",")
      fetch('/activities', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name:eventname.value,
                dates: dateArr
            }),
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
            if (response.status == 200) {
        		return response.json();}
        }).then(function(data) {
                console.log(data);
                that.setState({activityList:data})
        });
	}

	deleteActivity(i) {
	
	  let that = this;
	  let id = this.state.activityList[i]._id;
	  console.log(id);

      fetch('/activities/'+id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
            if (response.status == 200) {
        		return response.json();
        	}
        }).then(function(data) {
                console.log(data);
                that.setState({activityList:data})
        });
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
	        {console.log(activity)}
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