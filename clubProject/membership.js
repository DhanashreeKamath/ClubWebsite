

function getRegisterBtn()
{
var registerButton = document.getElementById("register");
registerButton.addEventListener("click",onClickOfRegisterBtn);
}


function onClickOfRegisterBtn()
{
	// var x = document.getElementById("dialogBox");
	// x.show();
	let thanksDialog = document.getElementById("ThanksDialog");
	let h2Child = document.createElement("h2");
    let parChild = document.createElement("p");
    let closeBtn = document.createElement("button");
  
    thanksDialog.appendChild(h2Child);
    thanksDialog.appendChild(parChild);
    thanksDialog.appendChild(closeBtn);
	
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value; 
	var activityType = document.getElementById("activityType").value;
	var activityLevel = document.getElementById("activityLevel").value; 
	var questionComments = document.getElementById("questionComments").value;    

	var userInfo = "Name: " + name +"  Email Address:" + email +"  ActivityType: "+ activityType +"  ActivityLevel: "+ activityLevel+ "  Questions and comments:" + questionComments;
	console.log(userInfo);
	h2Child.innerHTML = "Thanks for Registering!!!!";
	parChild.innerHTML = userInfo;
	closeBtn.innerHTML = "Close";
}
window.onload = function() {
	getRegisterBtn();
};