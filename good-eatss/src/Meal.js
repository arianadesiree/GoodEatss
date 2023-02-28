import React, { useEffect, useState } from "react";
import axios from "axios";

const Meal = () => {
    const [search, setSearch] = useState(null);
    const [myMeal, setMeal] = useState();

    useEffect(() => {
    
    async function getSearch () {
      const response = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
      console.log(response)
    }})}


    return (
            <div className="main">
                <div className="heading">
                    <h1> Good Eatss! </h1>
                    <h4>Find a beautifully curated new recipe to try from easy to gourmet!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>

    )

export default Meal;