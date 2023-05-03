import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';
import Loading from './Loading';
import LazyLoad from 'react-lazy-load';


const Chefs = () => {
    const [data, setData] = useState([]);
    // console.log(data);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <h2 className='text-center mb-5 text-4xl text- font-bold font-mono bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-600 text-transparent bg-clip-text'>Discover The Culinary Geniuses Behind Our Dishes</h2>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data
                        ? data.map(chef => <LazyLoad key={chef.id} height={512} threshold={0.70}><ChefsCard key={chef.id} chef={chef}></ChefsCard></LazyLoad>)
                        : <Loading />
                }
            </div>
        </>
    );
};

export default Chefs;