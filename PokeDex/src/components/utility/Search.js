import axios from "axios";

let URL = 'https://pokeapi.co/api/v2/pokemon';
let data = 0
async function searchPokemon(inputValue){
    //console.log(inputValue)
    let response = await axios.get(URL);
    let results = response.data.results;
    
    const pokemon = results.find((item)=>{return item.name === inputValue.toLowerCase() }) 
    //console.log(pokemon);

    if(pokemon==null&&response.data.next!=null){
        URL = response.data.next
        return searchPokemon(inputValue)
    }
    else if(pokemon!=null){
        data = pokemon
        URL = 'https://pokeapi.co/api/v2/pokemon'
        //console.log(data)
        return data
    }
    else{
        URL = 'https://pokeapi.co/api/v2/pokemon'
        console.log("pokemon not found")
        data=-1
    }
    console.log(data)
    return data
}

export default searchPokemon