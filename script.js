const API_URL = "http://api.quotable.io/random";
const quoteContent = document.getElementById("content");
const quoteAuthor = document.getElementById("author");

//Fetch Quotes from API
function getRandomQuote() {
  fetch(API_URL)
    .then((response) => response.json())
    .then(({ content, author }) => {
      quoteContent.innerText = content;
      quoteAuthor.innerText = `- ${author}`;
    })
    .catch((error) => console.log(error));
}

//On Window Load
document.addEventListener("DOMContentLoaded", getRandomQuote());
