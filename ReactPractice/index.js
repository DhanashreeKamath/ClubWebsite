import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";
import PeriodicTable from "./periodic.js";


// What is this? HTML mixed with JavaScript
let cols = ["atomic_number", "name", "symbol", "phase", "year_of_discovery"];
let htmlTags = <div>
			   <h1> The Periodic Table</h1>
    		   <h2> Brought to you by Dhanashree Kamath Kasaragod and Net ID hs4947</h2>
    		   <p> There are {chemElements.length} chemical elements. </p>
    		   <PeriodicTable chemElements={chemElements} desiredCols={cols} />
    		    </div>;
ReactDOM.render(
    htmlTags,
    document.getElementById("root")
);
