import React from "react";

const MealList = (props) => {

    //console.log(props.searchMeal)

    return (       
<div className="full-card">
            {props.searchMeal.map((meal) => (

            <div className="info card" key={meal.strMeal}>
                <img src={meal.strMealThumb}/>
                <h2>{meal.strMeal}</h2>
                <p>{meal.strArea}</p>

                <div className="recipe card">
                    <p>{meal.strInstructions}</p>
                    <a href={meal.strYoutube}> Play Video </a>
                </div>
                
            </div>          

            ))}
</div>
    )
}

export default MealList