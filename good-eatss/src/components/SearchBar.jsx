import React from "react";
import { useState } from "react";

const SearchBar = () => {

    const [search, setSearch] = useState("");
    

    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    //     }

    const handleClick = (e) => {
        setSearch({...search,[e.target.value]: e.target.value})
    }
      
        return (
            <div className="searchBar">
                        
            <input type="text" className="search-bar" placeholder="Type Item Here"
            //onKeyDown={handleKeyDown}
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            //onChange={handleChange}
            //onChange={handleInputChange}
            />
            
            <button type='button' className="searchbtn"
            onClick={handleClick}> Search </button>

        

            </div>
        )

}

export default SearchBar