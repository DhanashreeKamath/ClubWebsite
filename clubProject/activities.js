//Adding events to the activity page
function addEvents(argument) {
	events.map(item => addLi(item,"clubEvents"));
}
function addLi(events, className) {
	var liChild = document.createElement("li");

	var figChild = document.createElement("figure");
	var imgChild = document.createElement("img");
	imgChild.src = events.image;
	imgChild.classList.add("activityImage");
	var childInfo = document.createTextNode(events.name+" will be held on "+events.dates);
	figChild.appendChild(imgChild);
	liChild.appendChild(childInfo);
	liChild.appendChild(figChild);
	document.getElementsByClassName(className)[0].appendChild(liChild);
}
window.onload = function() {
	addEvents();
};