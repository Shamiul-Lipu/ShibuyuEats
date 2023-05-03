import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const RecipeCard = ({ detail }) => {
    const [favorite, setFavorite] = useState(false)
    const { recipe_name, cooking_method, ingredients, photoUrl, rating } = detail;
    const lists = ingredients.map((e, index) => <li key={index}>{e}</li>)
    // console.log(detail)
    return (
        <div>
            <div className="card border border-gray-300  w-full md:w-96 lg:96 bg-base-100 shadow-xl">
                <figure className='bg-black'><img src={photoUrl} alt="Shoes" /></figure>
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
                    <div className='flex justify-start items-center'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-2 font-bold'> {rating} out of 5.00</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            setFavorite(true);
                            toast.success(`${recipe_name} your favorite recipe!`,
                                {
                                    style: {
                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff',
                                    },
                                }
                            );
                        }} disabled={favorite} className="btn btn-primary">Favorite </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;