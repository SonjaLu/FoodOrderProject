import { useState, useEffect } from 'react';

export default function Meals() {
const [loadedMeals, setLoadedMeals] = useState([]);

useEffect(() => {
    async function fetchMeals() {
        try {
         const response = await fetch('http://localhost:3000/meals');
       
            if (!response.ok) {
                throw new Error('Failed to fetch meals');
            }
    
            const meals = await response.json();
            setLoadedMeals(meals);
        } catch (error) {
            console.log(error.message);
        }
    }
    fetchMeals();
}, []);


    
  return (
    <ul id="meals">{loadedMeals.map(meal => <li key={meal.id}>{meal.name}</li>)}</ul>
  )  
}