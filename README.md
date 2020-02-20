# Homework #4 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)


### (b)
```
<script>
        //document.querySelector("button").onclick = function(event) { 
            var loginButton = document.getElementById("loginBtn");
            loginButton.addEventListener("click",onClickOfLoginBtn);
            function onClickOfLoginBtn()
            {
            var userEmail = document.getElementById("email").value;
            var password = document.getElementById("password").value;     

            var userInfo = "Email Address: " + userEmail +" Password: "+password;
            console.log(userInfo);
        }
    </script>
```
![Screen Shot](images/ScreenShot23.png)




## Question 2

### (a)
```
events = [{"name": "Karaoke Nights",
           "dates": ["March 10th", "March 17th", "April 15th", "April 26th",
                     "June 9th", "June 23rd", "July 7th", "July 21",
                     "August 8th", "August 25th"],
           "image":"clubimages/KaraokeImg.jpg"},
         {"name": "Instrumental classes for kids",
          "dates": ["every monday and tuesday"],
          "image":"clubimages/KidInstrument.jpg"},
         {"name": "Vocal Classes", 
         "dates": ["every Saturday and Sunday"],
          "image":"clubimages/VocalImage.jpg"}];

```

### (b)


### (c)

script on activities.js
```
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
```
![Screen Shot](images/ScreenShot24.png)

## Question 3

### (a)   
```
<form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder ="Enter your name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">

            <label for="actType">Choose an Activity:</label>
            <select id="activityType">
                <option value="karokeNights">Karoke Nights</option>
                <option value="instrument">Instrumental</option>
                <option value="vocal">Vocal</option>
                <option value="online">Online</option>
            </select>

            <label for="level">Choose a level:</label>
            <select id="activityLevel">
                <option value="beginner">Beginner</option>
                <option value="intermediate1">Intermediate1</option>
                <option value="intermediate2">Intermediate2</option>
                <option value="advanced">Advanced</option>
            </select>
            <br><br>
            <label for="comments">Questions or Comments?</label><br>
            <textarea id="questionComments" cols="30" rows="6" placeholder="Questions or Comments"></textarea>
            <button type="button" id = "register">Register</button>
        </form> 
```
                  
### (b)



### (c)


## Question 4

### (a)

### (b)

### (c)


## Question 5

