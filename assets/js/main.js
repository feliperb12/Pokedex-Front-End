function convertPokemonTypesToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot)=> `<li class="type">${typeSlot.type.name}</li> `)
}

function convertPokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt=${pokemon.name}>

    </div>
</li>
    
    
    `;
}

const pokemonList = document.getElementById("pokemonList");

// ISSO É O PROMISE(PROMESA), COMO SE FOSSSE UM TRY, CATCH, FINALLY
pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(convertPokemonToHtml).join("");
  pokemonList.innerHTML = newHtml;
});
