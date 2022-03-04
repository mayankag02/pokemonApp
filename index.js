let pokemon;

const searchInput = document.getElementById('search')
const url = "https://pokeapi.co/api/v2/pokemon/"

const clearButton = document.getElementById('clear')

searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    fetch(url + value)
    .then((response) => response.json())
    .then((data) => {
        pokemon = data
    });

 if (pokemon && pokemon.sprites){
    document.getElementById("pokemon_img").src = pokemon.sprites.front_default;
 }
    console.log(pokemon);
});

clearButton.addEventListener("click", () => {
    // 1. write a function that removes any previous results from the page
    clearList()
});

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){
    clearList()
    for (const person of results){
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item')
        const text = document.createTextNode(person.name)
        resultItem.appendChild(text)
        list.appendChild(resultItem)
    }

    if (results.length === 0 ){
        noResults()
    }
}

function noResults(){
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!')
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}

function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}