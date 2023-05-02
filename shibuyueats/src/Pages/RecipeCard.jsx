import React from 'react';

const RecipeCard = ({ detail }) => {
    const { recipe_name, cooking_method, ingredients } = detail;
    const lists = ingredients.map(e => <li>{e}</li>)
    console.log(detail)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <ul>
                        <h5 className='text-lg font-semibold'>Ingredients</h5>
                        {
                            lists
                        }
                    </ul>
                    <h5 className='text-lg font-semibold'>Cooking Methods</h5>
                    <p>{cooking_method}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;