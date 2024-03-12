//import { useState } from "react";
import { useParams } from "react-router-dom";
import "./SelectPoke.css"
//import axios from "axios";

function 
SelectPoke({ pokemonList, pokeAdditionalData, image, setPokeIndex }) {
    const {id} = useParams()
    //console.log(id);
    let ids= id
    //console.log(ids)
    //let newId={pokeIndex}.pokeIndex.index;
    const name = (pokemonList[ids].name)?.charAt(0).toUpperCase()+(pokemonList[ids].name.slice(1))
    const type1 = pokemonList[ids]?.types[0]?.type.name
    const type2 = pokemonList[ids]?.types[1]?.type.name
    const Weight = pokeAdditionalData[ids].data?.weight
    const Height = pokeAdditionalData[ids].data?.height
    const moves = pokeAdditionalData[ids].data?.moves
    //console.log(moves)
    const Image = {image}?.image.image

    return(
        <>
            <div className="template">
                <img className="img" src={Image} alt="{name}" />
                <div className="about">
                    <div style={{color: "rgba(5, 35, 117, 0.808)", backgroundColor:"#9dc5f5", letterSpacing:"3px"}}>{name}</div>
                </div>
                <div className="types">
                    <div style={{color: "rgba(5, 35, 117, 0.808)", backgroundColor:"#9dc5f5", letterSpacing:"3px"}}>{type1}</div>
                    {(type2)?<div style={{color: "rgba(5, 35, 117, 0.808)", backgroundColor:"#9dc5f5", letterSpacing:"3px"}}>{type2}</div>:null}
                </div>
                <div className="weight_height">
                    <div style={{color: "rgba(5, 35, 117, 0.808)", backgroundColor:"#9dc5f5", letterSpacing:"1px"}}>Weight: {Weight}</div>
                    <div style={{color: "rgba(5, 35, 117, 0.808)", backgroundColor:"#9dc5f5", letterSpacing:"1px"}}>Height: {Height}</div>
                </div>
                {(moves)?
                <div className="moves">
                    {(moves[0]||moves[1]||moves[2])?<div className="set1">
                        {(moves[0])?<div>{moves[0]?.move.name}</div>:null}
                        {(moves[1])?<div>{moves[1]?.move.name}</div>:null}
                        {(moves[2])?<div>{moves[2]?.move.name}</div>:null}
                    </div>:null}  
                    {(moves[3]||moves[4]||moves[5])?<div className="set2"> 
                        {(moves[3])?<div>{moves[3]?.move.name}</div>:null} 
                        {(moves[4])?<div>{moves[4]?.move.name}</div>:null}
                        {(moves[5])?<div>{moves[5]?.move.name}</div>:null}
                    </div>:null}  
                    {(moves[6]||moves[7]||moves[8])?<div className="set3">
                        {(moves[6])?<div>{moves[6]?.move.name}</div>:null}
                        {(moves[7])?<div>{moves[7]?.move.name}</div>:null}
                        {(moves[8])?<div>{moves[8]?.move.name}</div>:null}
                    </div>:null}    
                </div>:null}
                <button className="back" onClick={()=>{setPokeIndex(null)}}>BACK</button>
            </div>
        </>
    )
}

export default SelectPoke