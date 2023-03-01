// import axios from "axios"
// import React, {useState, useEffect} from "react";


// const Data = () => {
//     const [search, setSearch] = useState("");
//     const [myMeal, setMeal] = useState();
//     const [searchMeal, setSearchMeal] = useState();
//     const [choice, setChoice] = useState()

// useEffect(() => {
//     const searchedMeal = async () => {
//     const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//     setSearchMeal(response.data)
//     }

//     searchedMeal();
//     },[])



//     // const handleChange = (e) => 
//     //     console.log(choice)
//     // setChoice({...choice,[e.target.id]: e.target.value})
//         // }

//         const handleChange = (e) => {
//             e.preventDefault()
//         setChoice(e.target.value)
//         }
//     }
