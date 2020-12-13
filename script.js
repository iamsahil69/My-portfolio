var btn = document.querySelector("#switch");
var body = document.querySelector(".box");
var headings = document.querySelectorAll("h1");
var subHeadings = document.querySelectorAll("h2");
var paragraphs = document.querySelectorAll("p");
var lastpara = document.querySelector(".lastParagraph");
var lasth1 = document.querySelector(".lasth1");
var lasth2 = document.querySelector(".lasth2");
var firstH1 = document.querySelectorAll(".firstH1");
var flag = false;


//console.log(btn);
console.log(headings);
//console.log(body);
btn.addEventListener( "click", ()=>{
if(!flag){
body.style.background = "#414a4c";
headings.forEach( (heading) => {
heading.style.color = "whitesmoke";
});
subHeadings.forEach( (heading) => {
heading.style.color = "whitesmoke";
});
firstH1.forEach( (h) => {
h.style.color = "whitesmoke";
});
paragraphs.forEach( (para) => {
para.style.color = "whitesmoke";
});
lastpara.style.color = "black";
lasth1.style.color ="black";
lasth2.style.color ="black";
btn.innerHTML = "Light Mode";
flag = true;
}else{
body.style.background = "white";
headings.forEach( (heading) => {
heading.style.color = "black";
});
subHeadings.forEach( (heading) => {
heading.style.color = "black";
});
firstH1.forEach( (h) => {
h.style.color = "whitesmoke";
});

paragraphs.forEach( (para) => {
para.style.color = "grey";
});
lastpara.style.color = "black";
lasth1.style.color ="black";
lasth2.style.color ="black";

btn.innerHTML = "Dark Mode";
flag = false;
}
});



