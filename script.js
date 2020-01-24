var button = document.getElementById("Enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function creatListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    creatListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    creatListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
