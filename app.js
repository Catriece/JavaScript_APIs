console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchBtn = document.querySelector("button");
const input = document.querySelector("#searchWord");
const image = document.querySelector("img");
const feedback = document.querySelector("#feedback")

const gif_url = "https://api.giphy.com/v1/gifs/translate"
const gif_key = "JHXhghZMJ45WoYxd7hRq73Ta0HKkLMsH"

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(`${gif_url}?api_key=${gif_key}&s=${input.value}`).then((res) => {
        return res.json();
    }).then((body) => {
        console.log(body);
        image.src = body.data.images.original.url;
        image.alt = body.data.title
        image.username = body.data.username
        feedback.textContent = image.alt
    }).catch((err) => {
        console.error(err);
        image.value = ""
        feedback.textContent = "Error, please input a valid entry"
    }).finally(() => { 
        input.value = ""
})
});

