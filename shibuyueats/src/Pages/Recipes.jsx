import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({ id }) => {
    const [recipes, setRecipes] = useState([])
    // console.log(recipes.length)
    useEffect(() => {
        fetch(`https://shibuyueats-server-side-shamiul-lipu.vercel.app/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                // setData(data)
                setRecipes(data)
            })
    }, [])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-10'>
            {
                recipes && recipes.map((detail, index) => <RecipeCard key={index} detail={detail}></RecipeCard>)
            }
        </div>
    );
};

export default Recipes;