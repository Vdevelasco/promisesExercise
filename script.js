// Función para obtener un Pokémon aleatorio
"use strict";
const getPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) {
            throw new Error('Failed to fetch Pokémon');
        }
        const data = await response.json();
        new Promise((resolve, reject) => {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => {
                    if (!response.ok) {
                        reject(new Error('Failed to fetch Pokémon'));
                    }
                    resolve(response.json());
                })});
        const userText = document.getElementById('pokemon-id').value;
        const randomPokemonId = Number(userText);
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`).then(console.log('Succesfully connected to the Pokémon API'));
        if (!pokemonResponse.ok) {
            throw new Error('Failed to fetch Pokémon data');
        }
        const pokemonData = await pokemonResponse.json();
        return {
            imageUrl: pokemonData.sprites.front_default,
            name: pokemonData.name
        };
}

// Función para mostrar los datos en la interfaz
const displayData = (imageUrl, name) => {
    const imageElement = document.getElementById('pokemon-image');
    const nameElement = document.getElementById('pokemon-name');
    imageElement.src = imageUrl;
    nameElement.textContent = name;
}

// Función principal para manejar el clic del botón y mostrar el Pokémon
const fetchData = async () => {
    try {
        const { imageUrl, name } = await getPokemon();
        displayData(imageUrl, name);
    } catch (error) {
        console.error(error.message);
        alert('Error fetching data, couldn\'t find a pokemon with that ID.');
    }
}
