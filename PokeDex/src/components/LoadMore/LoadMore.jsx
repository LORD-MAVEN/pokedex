import "./LoadMore.css"

function LoadMore({ loadMore, nextUrl }) {

    return(
        <>
            <div className="loadmore">
                <button className="load" disabled={nextUrl == null} onClick={()=>{loadMore()}}>Load More</button>
            </div>
        </>
    )
}
export default LoadMore