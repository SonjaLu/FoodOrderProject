import 

export default function Meals() {
async function fetchMeals() {
    try {
     const response = await fetch('http://localhost:3000/meals');
    } catch (error) {
        if (!response.ok) {
            throw new Error('Failed to fetch meals');
        }

        const meals = await response.json();
}

    
  return (
    <ul id="meals"></ul>
  )  
}}