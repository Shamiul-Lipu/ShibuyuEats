import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
import Recipes from './Recipes';

const ChefDetails = () => {
    const [data, setData] = useState([])
    const [recipe, setRecipe] = useState({})
    const { id } = useParams();

    // console.log(typeof recipe)

    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setRecipe(data.recipes)
            })

    }, [])


    return (
        <section>
            {/* banner */}
            {
                data && <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >
                    <div className="hero-content flex-col lg:flex-row-reverse text-white">
                        <img src={data.photoUrl} className="max-w-sm rounded-lg shadow-2xl " />
                        <div>
                            <h3 className="text-5xl font-bold">{data.name}</h3>
                            <p className="py-6">{data.description}</p>
                            <div>
                                <p>Experience: {data.experience}</p>
                                <p className=' font-bold text-green-200'>Number of Recipes: {data.num_of_recipes}</p>
                                <p className='flex justify-start items-center text-lg font-extrabold text-blue-100'><BiLike /> {data.like}</p>
                            </div>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            }
            <div>
                {/* recipe section */}
                {
                    data && <Recipes id={id}></Recipes>
                }
            </div>
        </section>
    );
};

export default ChefDetails;