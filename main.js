// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const errorModal = document.querySelector("#modal");
const likeButtons = document.querySelectorAll(".like-glyph");

document.addEventListener("DOMContentLoaded", () => {
  errorModal.classList.add("hidden");

  findLikes();
});

function hideError() {
  errorModal.classList.add("hidden");
}

function findLikes() {
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          likeButton.classList.toggle("activated-heart");
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          setTimeout(hideError, 3000);
        });
    });
  });
}

function mimicServerCall() {
  // Simulating a server call with a Promise
  return new Promise((resolve, reject) => {
    // Simulating a random server response
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        reject("Error: Server Call Failed");
      }
    }, 500);
  });
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
