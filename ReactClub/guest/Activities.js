import React from "react";
import ReactDOM from "react-dom";
import activityList from "../activities.json";
import images from '../clubimages/*.jpg';


function Activities(props) {
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
	{(activityList).map((activity) => {
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
export default Activities;