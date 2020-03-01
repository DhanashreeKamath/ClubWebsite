# Homework #5 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)
* Node.js version - v12.16.1
* npm version - 6.13.7


### (b)


### (c)


### (d)
![Screen Shot](images/ScreenShot29.png)


## Question 2 

### (a)


### (b)


### (c)

![Screen Shot](images/ScreenShot30.png)

## Question 3

### (a)   

### (b)
code inside ```<body>```  of processMD.html 
``` html
<body> <!-- Nothing here yet. -->
	<section class="central">
	<h1 >Markdown Processor</h1>
	<h3 >Type MarkDown here:</h3>
	<section id ="input" class="main_section">
		<textarea id="inputTA"></textarea>
	</section>
	<button id="convert"> Convert to HTML</button>
	<h3 > Rendered HTML here:</h3>
</section>
	<section id="output" class="main_section"></section>
	<script src ="./ProcessMD.js"></script>
</body>
```
code of  of processMD.js 
``` javascript

import commonmark from "commonmark";

function getHtmlElements() {

var convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click",onClickOfConvertBtn);
var output = document.getElementById("output");
}

function onClickOfConvertBtn() {
	var inputText = document.getElementById("inputTA").value;
	var reader = new commonmark.Parser();
	var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(inputText); // parsed is a 'Node' tree
	// transform parsed if you like...
	var result = writer.render(parsed);
	console.log(result);
	output.innerHTML = result;
 
}

window.onload = function() {
	getHtmlElements();
};
```
![Screen Shot](images/ScreenShot31.png)


## Question 4

### (a)
```
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';
```
There is nothing odd about the above code. Highlight.js is a syntax highlighter written in JavaScript. It works in the browser and on the server. It works with markup and doen't depend on any framework .It also has automatic language detection.

### (b)

``` javascript
import commonmark from "commonmark";
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

function getHtmlElements() {
var convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click",onClickOfConvertBtn);
var output = document.getElementById("output");
}

function onClickOfConvertBtn() {
	var inputText = document.getElementById("inputTA").value;
	var reader = new commonmark.Parser();
	var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(inputText); // parsed is a 'Node' tree
	// transform parsed if you like...
	var result = writer.render(parsed);
	console.log(result);
	output.innerHTML = result;
	// Highlighting code
	output.querySelectorAll('pre code').forEach((block) => {
		hljs.highlightBlock(block);
	});
 
}

window.onload = function() {
	getHtmlElements();
};
```
![Screen Shot](images/ScreenShot32.png)

### (c)
load n link
### (d)
* CSS file- ProcessMD.5c138e5f.css"> 
File Size - 1 KB
* script file -"ProcessMD.5b9da170.js"> 
File Size - 1.3 MB

Yes, The file size seems larger. It is because we are importing large library and using very few functions of it in this project.Instead of that if we pick and choose specific functions or components, which are required for the project then it is possible to reduce the file size.


## Question 5

