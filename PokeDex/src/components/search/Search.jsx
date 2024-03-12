import "./Search.css"

function Search({ handleKeyPress }) {
    
    return(
        <div className="search-bar">
            <input type="text"
            placeholder="Enter Pokemon Name....." onKeyPress={handleKeyPress}/>
        </div>   
    )
}

export default Search 
