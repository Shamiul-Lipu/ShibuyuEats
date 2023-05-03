import React, { useState } from 'react';
import group from '../../assets/chefs/group.jpg'
import { HiCheckCircle } from "react-icons/hi2";
import { FaHandPointUp } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Member = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value
        setEmail(value);
    };
    const handleEmail = (event) => {
        event.preventDefault();
        // console.log(email);
        if (email) return toast.success(`You will get email to ${email}`, {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        })
    };
    return (
        <div className='container mx-auto py-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className=' bg-black'><img className='hidden md:block lg:h-96' src={group} alt="Movie" /></figure>
                <div className="card-body">
                    <h3 className="text-5xl font-bold">Become a Member <br />
                        and enjoy program <br />
                        benefits!</h3>
                    <div>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Access to exclusive content: A paid user may have access to exclusive recipes and content that is not available to free users.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Personalized recommendations: A paid user may receive personalized recipe recommendations based on their dietary preferences, cooking skills, and other criteria.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Cooking tips and tutorials: Paid users may receive access to cooking tips, tutorials, and videos that can help them improve their cooking skills and techniques.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className={`w-[48px] h-[48px] text-lime-500`} />Priority support: Paid users may receive priority support from the website's customer service team, ensuring that their questions and concerns are addressed promptly.</p>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <div className="form-control">
                            <button onSubmit={handleEmail} className=" input-group border border-lime-500 rounded-lg">
                                <span className='bg-lime-500 font-semibold'>Email</span>
                                <input type="email"
                                    name="email" placeholder="info@site.com" className="input input-bordered w-full" />
                            </button>
                            <p className='flex justify-start items-center font-bold text-gray-500'><FaHandPointUp /> to get details input your email and click</p>
                        </div>
                    </div> */}
                    <form onSubmit={handleEmail} className="card-actions justify-end">
                        <div className="form-control">
                            <button type="submit" className="input-group border border-lime-500 rounded-lg">
                                <span className='bg-lime-500 font-semibold'>Email</span>
                                <input type="text" name="email" placeholder="info@site.com" className="input input-bordered w-full" onChange={handleInputChange} />
                                {/* <button type="submit">Submit</button> */}
                            </button>
                            <p className='flex justify-start items-center font-bold text-gray-500'><FaHandPointUp /> to get details input your email and click</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Member;