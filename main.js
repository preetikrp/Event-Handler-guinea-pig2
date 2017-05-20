console.log("Hello");
var sec = document.getElementsByClassName("article-section");
var output = document.getElementById("output-target");
for (var i = 0; i < sec.length; i++) {
    sec.item(i).addEventListener("click", myfun);
}

function myfun(event) {
    output.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
    console.log(`You clicked on the ${event.target.innerHTML} section`);
}
var h = document.getElementById("page-title");

h.addEventListener("mouseover", dis);

function dis(event) {
    output.innerHTML = `You moved your mouse over the ${event.target.innerHTML}`;


}
h.addEventListener("mouseleave", show);

function show(event) {
    output.innerHTML = `You left me!! ${
		event.target.innerHTML}`;
}
var input = document.getElementById("keypress-input");
input.addEventListener("keyup", mirror);
function mirror(event){
	output.innerHTML = event.target.value;
}
var dav = document.getElementById("guinea-pig");
var col = document.getElementById("add-color");
col.addEventListener("click", function(){
dav.classList.toggle("blue");
});


var lg = document.getElementById("make-large");
lg.addEventListener("click", function(){
dav.classList.toggle("large");

})

var bd = document.getElementById("add-border");
bd.addEventListener("click", function(){
	dav.classList.toggle("border");


})

var rd = document.getElementById("add-rounding");
rd.addEventListener("click", function(){
dav.classList.toggle("round");
})

var secf = document.getElementsByClassName("article-section").item(0);
   secf.classList.add("bold");



var lastsec = document.getElementsByClassName("article-section").item(5);
lastsec.classList.add("font");