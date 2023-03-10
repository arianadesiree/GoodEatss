import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
const initialState = ""

    
    const [search, setSearch] = useState(initialState);


    const handleChange = (e) => {
        setSearch(e.target.value)
    }
      
    const searchMeal = async () => {
        console.log(search)
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);



 
        props.setSearchMeal(response.data.meals)
        console.log(response.data.meals)
        }
 
        return (
            <div className="searchBar">
                        
            <input type="text" className="search-bar" placeholder="Type Food Item Here" name='searchBar'
            onChange={handleChange}
            value={search}
            />
            
            <button type='button' className="searchbtn"
            onClick={searchMeal}> Search </button>

        

            </div>
        )

}

export default SearchBar