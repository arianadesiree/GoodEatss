import React from "react";

const MealList = (props) => {

    console.log(props)

    return (
        <div className="card">

            {/* {mealArray.map((meal, index) => ( */}
            <img src={props.data.strMealThumb}></img>

                <div className="info">

                    <h2>{props.data.strMeal}</h2>
                    <p>{props.data.strArea}</p>

                </div>

        <div className="recipe">

            <h2> Recipe </h2>
            <p>{props.data.strInstructions}</p>
            <img src={props.data.strMealThumb}></img>
            <a href={props.data.strYoutube}> Watch Video </a>
            
        </div>

        </div>
    )
}

export default MealList