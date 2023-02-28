import React, { useEffect, useState } from "react";
import axios from "axios";
import Mealitem from "./Mealitem"


const Meal = () => {
    const [search, setSearch] = useState(null);
    const [myMeal, setMeal] = useState();
    const [searchMeal, setSearchMeal] = useState("");

        useEffect(() => {
            const getSearch = async () => {
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?=${search}`) 
              
            }
            getSearch()
          },[])


          return (
                <div className="main">
                    <div className="heading">
                        <h1> Bone-apple-teeth! </h1>
                    <h3>Find a beautifully curated new recipe to try from easy, to gourmet!</h3>
                    <h5>Just type below in the search bar a keyword to find your new culinary adventure</h5>
                    </div>

                    <div className="searchBox">
                        <input type="search" className="search-bar" placeholder="Search Item Here">
                        </input>

                    <div className="container">
                        <Mealitem />
                    </div>

                    </div>
                </div>

            
        )
}
export default Meal;