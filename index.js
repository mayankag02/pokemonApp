let pokemon;
const url = "https://pokeapi.co/api/v2/pokemon/"
const pokemonImg = document.getElementById("pokemon_img");
let flag = true;

function searchPokemon(){
    const searchInput = document.getElementById('search').value;
    fetch(url + searchInput)
    .then(response => response.json())
    .then(data => {
        console.log('data: ', data);
        pokemon = data;
        displayPokemon();
    });
}

function displayPokemon(){
    if (pokemon && pokemon.sprites){
        pokemonImg.src = pokemon.sprites.front_default;
     }
}

function displayImg(){
    if (flag) {
        pokemonImg.src = pokemon.sprites.front_default;
    }
    else{
        pokemonImg.src = pokemon.sprites.back_default;
    }
}

function flip(){
    flag = !flag;
    displayImg();
}
