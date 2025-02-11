let elem = document.getElementById("btn2");
console.log(elem);
// geid() always return a html element
// and we always attach events to an html element
elem.addEventListener("click", function () {
  document.body.style = "red";
  document.body.style.fontSize = "20px";
  // elem2=document.getElementById()
  // elem2.style
});
