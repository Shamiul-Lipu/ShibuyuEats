import React from 'react';
import group from '../../assets/chefs/group.jpg'
import { HiCheckCircle } from "react-icons/hi2";

const Contributor = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='bg-black'><img className=' lg:h-96' src={group} alt="Movie" /></figure>
                <div className="card-body">
                    <h3 className="text-5xl font-bold">Become a Contributor <br />
                        and enjoy program <br />
                        benefits!</h3>
                    <div>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Access to exclusive content: A paid user may have access to exclusive recipes and content that is not available to free users.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Personalized recommendations: A paid user may receive personalized recipe recommendations based on their dietary preferences, cooking skills, and other criteria.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Cooking tips and tutorials: Paid users may receive access to cooking tips, tutorials, and videos that can help them improve their cooking skills and techniques.</p>
                        <p className='flex justify-start gap-2'><HiCheckCircle className='w-12 h-12 text-lime-500' />Priority support: Paid users may receive priority support from the website's customer service team, ensuring that their questions and concerns are addressed promptly.</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="form-control">
                            <label className="input-group border border-lime-500 rounded-lg">
                                <span className='bg-lime-500 font-semibold'>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributor;