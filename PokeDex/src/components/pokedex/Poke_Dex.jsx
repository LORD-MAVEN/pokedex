import Search from "../search/Search"
import PokemonList from "../PokemonList/PokemonList"
import "./Poke_Dex.css"
import { useState } from "react";
import SearchPoke from "../searchPoke/SearchPoke";

function Pokedex() {
    //console.log("check")
    const [inputValue, setInputValue] = useState('');
   
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          setInputValue(event.target.value);
        }
    };
    
    return(
        <>  
        <div className="page">
                <div className="header">
                    POKEDEX
                    <Search handleKeyPress={handleKeyPress}/>
                </div>
            <div className="list">
                    { (inputValue=='') ? <PokemonList /> : <SearchPoke inputValue={inputValue} setInputValue={setInputValue} /> }
             </div>
        </div>    
        </>    
    )
}

export default Pokedex