const Search=({search,setSearch}) => {
    return(
        
        <form className="search" onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="search">Search post</label>
                <div className="search-container">
                    <input
                         type="text"
                        placeholder="Search a post"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="material-symbols-outlined search-icon">search</span>
                </div>
        </form>               
    )
}

export default Search