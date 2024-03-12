import { useEffect, useState } from "react";
import searchPokemon from "../utility/Search";
import axios from "axios";
import "./SearchPoke.css"

function SearchPoke({ inputValue, setInputValue }) {
    const [pokemonData, setPokemonData] = useState(null);
    const [name, setName] = useState(null)
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [image, setImage] = useState(null)
    const [type1, setType1] = useState(null)
    const [type2, setType2] = useState(null)
    const [moves, setMoves] = useState([])

    function reset(){
        setPokemonData(null)
        setInputValue('')
        setHeight(null)
        setImage(null)
        setWeight(null)
        setType1(null)
        setType2(null)
        setName(null)
        setMoves(null)
        //console.log(pokemonData)
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const x = await searchPokemon(inputValue);
                if(x==0){
                    setPokemonData(0)
                }
                if(x!=null){
                    setPokemonData(x);
                }
                else{
                    reset()
                }
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
        fetchData();
    }, [inputValue]);

    useEffect(() => {
        async function fetchAdditionalData(url) {
            try {

                const reqData = await axios.get(url);
                //console.log(reqData)
                
                setImage(reqData.data.sprites?.other?.dream_world?.front_default || reqData.data.sprites?.other["official-artwork"]?.front_default ||reqData.data.sprites?.front_shiny || null);
                setName(reqData.data.name.charAt(0).toUpperCase()+(reqData.data.name.slice(1)) || null);
                setHeight(reqData.data.height || null);
                setWeight(reqData.data.weight || null);
                setType1(reqData.data.types?.[0]?.type?.name || null);
                setType2(reqData.data.types?.[1]?.type?.name || null);
                setMoves(reqData.data.moves);
                //console.log(reqData.data.moves)
            } catch (error) {
                console.error('Error fetching additional data:', error);
            }
        }

        if (pokemonData!=null) {
            fetchAdditionalData(pokemonData.url);
        }
    }, [pokemonData]);

    return (
        <>
        {pokemonData === -1 ?
            <div className="noPokemon">
                <div>
                    <h1>NO POKEMON FOUND</h1>
                    <h3>Please enter the correct name</h3>
                </div>
                <button className="back_button" onClick={reset}>BACK</button>
            </div>
            :
            (pokemonData!=null &&
                <div className="template">
                    <img className="img" src={image} alt="{name}" />
                    <div className="about">
                        <div style={{ color: "rgba(5, 35, 117, 0.808)", backgroundColor: "#9dc5f5", letterSpacing: "3px" }}>{name}</div>
                    </div>
                    <div className="types">
                        <div style={{ color: "rgba(5, 35, 117, 0.808)", backgroundColor: "#9dc5f5", letterSpacing: "3px" }}>{type1}</div>
                        {type2 && <div style={{ color: "rgba(5, 35, 117, 0.808)", backgroundColor: "#9dc5f5", letterSpacing: "3px" }}>{type2}</div>}
                    </div>
                    <div className="weight_height">
                        <div style={{ color: "rgba(5, 35, 117, 0.808)", backgroundColor: "#9dc5f5", letterSpacing: "1px" }}>Weight: {weight}</div>
                        <div style={{ color: "rgba(5, 35, 117, 0.808)", backgroundColor: "#9dc5f5", letterSpacing: "1px" }}>Height: {height}</div>
                    </div>
                    {moves.length > 0 &&
                        <div className="moves">
                            <div className="set1">
                                {moves.slice(0, 3).map(move => <div key={move.move.name}>{move.move.name}</div>)}
                            </div>
                            <div className="set2">
                                {moves.slice(3, 6).map(move => <div key={move.move.name}>{move.move.name}</div>)}
                            </div>
                            <div className="set3">
                                {moves.slice(6, 9).map(move => <div key={move.move.name}>{move.move.name}</div>)}
                            </div>
                        </div>
                    }
                    <button className="back" onClick={reset}>BACK</button>
                </div>
            )
        }
    </>
    );
}

export default SearchPoke;