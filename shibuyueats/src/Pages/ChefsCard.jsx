import React from 'react';
import { BiLike } from "react-icons/bi";

const ChefsCard = ({ chef }) => {
    const { experience, like, name, num_of_recipes, photoUrl } = chef
    console.log(chef);
    return (
        <div className="card border border-gray-300 lg:card-side bg-base-100 shadow-xl">
            <figure className='bg-black'><img src={photoUrl} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-2xl">{name}</h2>
                <div>
                    <p>Experience: {experience}</p>
                    <p className=' font-bold text-green-700'>Number of Recipes: {num_of_recipes}</p>
                    <p className='flex justify-start items-center text-lg font-extrabold text-blue-700'><BiLike /> {like}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;