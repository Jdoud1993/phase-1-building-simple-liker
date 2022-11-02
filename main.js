// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Add event listeners to all empty hearts
document.querySelectorAll(".like-glyph").forEach(item => {
  item.addEventListener("click", () => {
    mimicServerCall()
    .then(res => {
      console.log (res);
      if (item.innerText === EMPTY_HEART) {
        item.innerText = FULL_HEART;
        item.classList.add("activated-heart");
      } else {
        item.innerText = EMPTY_HEART
        item.classList.remove("activated-heart")
      }
    })
    .catch(err => {
      const modal = document.querySelector("#modal");
      modal.classList = "";
      modal.lastElementChild.innerText = `${err}`;
      setTimeout(() => modal.classList = "hidden", 3000)
    })
  });
})




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
