import React from "react";
import ReactDOM from "react-dom";
//import activityList from "../activities.json";
import images from '../clubimages/*.jpg';

class MemberActivity extends React.Component {

	constructor(props) {
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

	render(){
    return <div><main className ="box">
		<header>
			<h1 className="fh-custom-font"> Union City Music Club</h1>
			<h2> Our Activities</h2>
		</header>
		<table>
		<thead> 
		<tr> 
		<td>Event </td>
		<td> Dates </td>
		</tr>
		</thead>

     <tbody>
     {console.log(this.state.activityList)}
	{(this.state.activityList).map((activity) => {
		console.log(activity);
		return <tr key = {activity.name}>
		<td>{activity.name}</td>
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
export default MemberActivity;