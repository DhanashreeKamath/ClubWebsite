
import commonmark from "commonmark";
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

function getHtmlElements() {
var convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click",onClickOfConvertBtn);
}

function onClickOfConvertBtn() {
	var inputText = document.getElementById("inputTA").value;
    var output = document.getElementById("output");

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