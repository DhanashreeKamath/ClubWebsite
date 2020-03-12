import React from "react";
import ReactDOM from "react-dom";
import indexImg from "./clubimages/IndexImg.jpg";
import "./club.css";


function Home(props){
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
 {mainPageBody}
 </div>
}

export default Home;
