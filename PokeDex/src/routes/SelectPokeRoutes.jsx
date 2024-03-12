import { Route, Routes } from "react-router-dom";
import SelectPoke from "../components/selectPoke/SelectPoke";

function SelectPokeRoutes({pokemonList, image, pokeAdditionalData, setPokeIndex}) {
    console.log(pokeAdditionalData)
    return(
        <Routes>
            <Route path="/pokemon/:id" element={<SelectPoke pokemonList={pokemonList}  image={image} pokeAdditionalData={pokeAdditionalData} setPokeIndex={setPokeIndex}/>} />
        </Routes>
    )
}

export default SelectPokeRoutes;