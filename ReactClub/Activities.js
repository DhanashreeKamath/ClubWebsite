import React from "react";
import ReactDOM from "react-dom";
import activityList from "./activities.json";


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
		  <img className="activityImage" src= {require(activity.image)}/>
		</figure>
		</li>
	}

	)}
	</ul>
	</main>
	<footer>&#127926;&copy; Copyright Union City Music Club 2019 &#127925;</footer></div>;
}
export default Activities;