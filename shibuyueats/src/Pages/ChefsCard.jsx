import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { id, experience, like, name, num_of_recipes, photoUrl } = chef
    // console.log(chef);
    return (
        <div className={`card border h-[32rem] border-gray-300 lg:card-side bg-base-100 shadow-xl`}>
            <figure className='bg-black'><img src={photoUrl} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-2xl">{name}</h2>
                <div>
                    <p>Experience: {experience}</p>
                    <p className=' font-bold text-green-700'>Number of Recipes: {num_of_recipes}</p>
                    <p className='flex justify-start items-center text-lg font-extrabold text-blue-700'><BiLike /> {like} Likes</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`chefs/${id}`}>
                        <button className="btn btn-primary">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;