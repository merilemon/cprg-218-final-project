/* accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* footer date */

document.getElementById('yr').innerHTML = new Date().getFullYear();

// button

document.getElementById('myButton').addEventListener('click', function() {
  var button = document.getElementById('myButton');
  if (button.innerText === 'submit') {
      button.innerText = 'just kidding!';
  } else {
      button.innerText = 'submit';
  }
});

