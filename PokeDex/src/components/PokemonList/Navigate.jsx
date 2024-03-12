import "./Navigate.css"

function Navigate({ prevUrl, nextUrl, setPokedexUrl }) {
    
    return(
        <div className="navigate">
                    <button className="prev" disabled={prevUrl == null} onClick={()=>setPokedexUrl(prevUrl)}>Previous</button>
                    <button className="next" disabled={nextUrl == null} onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
        </div>
    )
}

export default Navigate