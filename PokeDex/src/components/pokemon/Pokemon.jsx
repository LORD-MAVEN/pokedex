import { Link } from "react-router-dom"
import "./Pokemon.css"

function Pokemon({ name, image, id, pokeDetails, index }) {
    
    return(
        <>    
            <div className="poke">    
                <div className="poke-name">{name.charAt(0).toUpperCase()+name.slice(1)}</div>

            <Link to={`/pokemon/${index}`}>    
                <div className="poke-img">
                    <img style={{height: "250px", width: "250px"}} src={image} onClick={()=>pokeDetails({id}, {index}, {image})}/>
                </div>
            </Link>    
            
            </div>    
        </>
    )
}

export default Pokemon