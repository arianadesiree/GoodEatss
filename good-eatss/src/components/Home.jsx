import React, { useEffect, useState } from "react";
import MealList from "./MealList";
import axios from "axios";
import SearchBar from "./SearchBar";


const Home = () => {
    const [search, setSearch] = useState("");
    const [myMeal, setMeal] = useState();
    const [searchMeal, setSearchMeal] = useState([]);
    const [results, setResults] = useState([]);
    
//using axios to get meals from api
    useEffect(() => {
        const searchMeal = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

    // if (Event.key=="Enter")
        setSearchMeal(response.data.meals)
        console.log(response.data.meals)
        }

        searchMeal()
        },[search]);
              
//console.log(searchMeal)

          return (

                <div className="main">
                    <div className="heading">
                        <h1> Bone-apple-teeth! </h1>
                    <h3>Find a beautifully curated new recipe to try from easy, to gourmet!</h3>
                    <h5>Just type below in the search bar a keyword to find your new culinary adventure</h5>
                    </div>

                    <div className="container">
                        
                        <SearchBar setSearchMeal={setSearchMeal}/>
                        <MealList searchMeal={searchMeal}/>

                    </div>
                    </div>
                
        )
          }

export default Home;