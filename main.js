// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.querySelector('.hidden');
const hearts = document.querySelectorAll('.like-glyph');

hearts.forEach(heart => heart.addEventListener("click", servResponse ))


function servResponse(hearts) {
  mimicServerCall()
  .then(() => {
    if(hearts.target.textContent === EMPTY_HEART){
      hearts.target.textContent = FULL_HEART
      hearts.target.classList.add('activated-heart')
    }
    else if (hearts.target.textContent === FULL_HEART){
      hearts.target.textContent = EMPTY_HEART
    }
  })
  .catch(() => {
    error.classList.remove('#hidden')
    error.textContent = "error occured"

    setTimeout(() => {
      error.classList = "hidden"}, 3000)
    })
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
