import React from "react";

const MealList = (props) => {

    //console.log(props.searchMeal)

    return (
        <div className="card">

            {props.searchMeal.map((meal) => (
            <div className="info" key={meal.strMeal}>
                <img src={meal.strMealThumb}></img>
                <h2>{meal.strMeal}</h2>
                <p>{meal.strArea}</p>
                
            </div>          
            ))}

            {props.searchMeal.map((meal) => (
         <div className="recipe" key={meal.strMeal}>
            <h2> Recipe </h2>
            <p>{meal.strInstructions}</p>
            <img src={meal.strMealThumb}></img>
            <a href={meal.strYoutube}> Watch Video </a>
            
            
        </div> 
        ))} 

        </div>
    )
}

export default MealList