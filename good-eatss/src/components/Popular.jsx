import { useEffect } from "react";


function Popular() {

useEffect(() => {
  getPopular();
},[]);
// means running this component as soon as it gets mounted


const getPopular = async () => {
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_API_KEY}&number=6`);
  const data = await api.json();
  console.log(data);
}

  return (
    <div>Popular</div>
  )
}


export default Popular