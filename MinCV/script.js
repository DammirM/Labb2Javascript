// 2:1 backgroung color

const button = document.getElementById("secret1");
button.addEventListener("click", function () {
  document.body.style.background = "yellow";
});

// 2:2 modal popup

function openLink() {
  window.open("#popup1", "_parent");
}

const elit = [1, 3, 3, 7];
let rightAnswer = [];
let counter = 0;

const kombination = document.getElementById("secretKey");

kombination.addEventListener("keypress", function (event) {
  if (event.key == elit[counter]) {
    rightAnswer.push(event.key);
    console.log(rightAnswer);
    counter++;
  } else {
    counter = 0;
    rightAnswer.length = 0;
  }
  if (counter == 4) {
    openLink();
    counter = 0;
    rightAnswer.length = 0;
  }
});
