let btn = document.getElementById("btn");

let section = document.getElementById("section");

btn.addEventListener("click", function () {
  let createdElement = document.createElement("p");
  console.log(createdElement);

  createdElement.innerText = "this tag is created";
  section.append(createdElement);
});
