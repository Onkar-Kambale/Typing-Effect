const words = ["Onkar", "a Developer", "an Innovator", "a Creator"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
let typingSpeed = 150;

const typingElement = document.getElementById("typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    }

    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typingElement.textContent = currentWord;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 800); // pause before deleting
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
