import axios from "axios";
async function downloadPokemon(setIsLoading, pokedexUrl,  setPokeData, setNextUrl, setPrevUrl, setPokemonList, pokeType, load, setPokeIndex ) {
    setPokeIndex(null)
    setIsLoading(true);
    
    let response = await axios.get(pokedexUrl);
    //console.log(response)
    const pokemonResults = response.data.results;
  
    setPokeData(pokemonResults);

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
   
    async function filterPokemon(filteredData, pokedexUrl) {
        try {
            const response = await axios.get(pokedexUrl);
            const pokemonResult = response.data.results;
            //console.log(response)
            const promise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await axios.all(promise);
            //console.log(pokemonData)
            const updatedPokemonData = pokemonData.map((i) => {
                if(pokeType!='all'){
                if (i.data?.types[0]?.type.name == pokeType || i.data?.types[1]?.type.name == pokeType) {
                    return i;
                } else {
                    return null;
                }
            }
            else{
                return i;
            }
            });
            const tempData = updatedPokemonData.filter(value => value !== null);
            filteredData = filteredData.concat(tempData);
    
            if (filteredData.length < load && response.data.next) {
                return filterPokemon(filteredData, response.data.next);
            } else {
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);
                return filteredData;
            }
        } catch (error) {
            console.error('Error fetching additional data:', error);
            return filteredData; // Return filtered data even if there's an error
        }
    }
    
    // Usage
    let filteredData = [];
    const initialPokedexUrl = pokedexUrl;
    const filteredPokemonData = await filterPokemon(filteredData, initialPokedexUrl);
    //console.log(filteredPokemonData);
    const result = filteredPokemonData.map((pokeData)=>{
        const pokemon = pokeData.data;
        return {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types,
            image: pokemon.sprites?.other?.dream_world?.front_default || pokemon.sprites?.other["official-artwork"]?.front_default || pokemon.sprites?.front_shiny || null
        }
   })
    //console.log(filteredPokemonData)
    //console.log(result);
    setPokeData(filteredPokemonData);
    setPokemonList(result);
    setIsLoading(false);
}
export default downloadPokemon