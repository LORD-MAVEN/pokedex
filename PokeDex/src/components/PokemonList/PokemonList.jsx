import { useEffect, useState } from "react"
import Pokemon from "../pokemon/Pokemon";
import "./PokemonList.css"
import Navigate from "./Navigate";
import downloadPokemon from "../utility/DownloadPokemon";
import Sidebar from "../sidebar/Sidebar";
import LoadMore from "../LoadMore/LoadMore";
import SelectPokeRoutes from "../../routes/SelectPokeRoutes";

function PokemonList() {
    const[pokeData, setPokeData] = useState([])
    const[pokeImage, setPokeImage] = useState(null);
    const[pokeIndex, setPokeIndex] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[pokemonList, setPokemonList] = useState([]);
    const[nextUrl, setNextUrl] = useState('');
    const[prevUrl, setPrevUrl] = useState('');
    const[pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const[pokeType, setPokeType] = useState('all');
    const[load, setLoad] = useState(20)

    function pokeDetails(id, index, image) {
        setPokeIndex(index);
        setPokeImage(image);
    }
    function changeType(type) {
        setPokedexUrl('https://pokeapi.co/api/v2/pokemon')
        setLoad(20)
        setPokeType(type)
    }
    function loadMore(){
        setLoad(load+20)
    }
    useEffect(() => {
        downloadPokemon(setIsLoading, pokedexUrl,  setPokeData, setNextUrl, setPrevUrl, setPokemonList, pokeType, load, setPokeIndex)
    }, [pokedexUrl, pokeType, load] );
    
    return(
        <>
               
            <div className="pokemonList">
                <div className="view">
                    <Sidebar changeType={changeType} />
                </div>
                {
                    (pokeIndex==null) ? null : /*<SelectPoke pokemonList={pokemonList}  image={pokeImage} pokeIndex={pokeIndex} pokeAdditionalData={pokeData} setPokeIndex={setPokeIndex}/>*/ <SelectPokeRoutes pokemonList={pokemonList}  image={pokeImage} pokeAdditionalData={pokeData} setPokeIndex={setPokeIndex} />
                    }
                {
                    (pokeIndex!=null) ? null : (isLoading) ? 'LOADING...' : pokemonList.map((i, index) => 
                    <Pokemon name={i.name} image={i.image} key={i.id} id={i.id} index={index} pokeDetails={pokeDetails}/>)
                    }
                {
                    (pokeType!='all' && !isLoading && pokeIndex==null) ? <LoadMore loadMore={loadMore} nextUrl={nextUrl}/>: (isLoading||pokeIndex!=null) ? null : <Navigate prevUrl={prevUrl} nextUrl={nextUrl} setPokedexUrl={setPokedexUrl} />
                }
            </div>
            
        </>
    )
}
export  default PokemonList