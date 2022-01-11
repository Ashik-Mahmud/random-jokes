// app js 

// Selection 

const getJokeBtn = document.querySelector(".get-jokes"),
    jokeText = document.querySelector(".jokes-details p"),
    coypBtn = document.querySelector(".copy-jokes"),
    jokeImage = document.querySelector(".jokes-img img");

// Generate Random Jokes 
function GenerateJokes() {
    getJokeBtn.textContent = "Getting....";
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => {
            // joke text 
            jokeText.textContent = data.value;
            // joke image 
            jokeImage.src = data.icon_url;
            getJokeBtn.textContent = "Get Joke";
        })
};
getJokeBtn.addEventListener("click", GenerateJokes);
GenerateJokes();


// Copy Jokes 
coypBtn.addEventListener("click", function () {
    if (navigator.clipboard.writeText(jokeText.textContent)) {
        coypBtn.textContent = "Copied";
    }
    setTimeout(function () {
        coypBtn.textContent = "Copy";
    }, 2000)
})