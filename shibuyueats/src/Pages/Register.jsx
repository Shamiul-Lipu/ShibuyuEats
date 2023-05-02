import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { createUser, auth } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('The password is less than 6 characters')
        }
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: `${photo}`
                })
                toast.success('Successfully User Created!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='container mx-auto py-10'>
            <div className="card flex-shrink-0 w-full mt-4 shadow-2xl bg-base-100">
                <div className="card-body items-center ">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-lime-900 py-2">Register Please!</h1>


                    <form action="" onSubmit={handleSubmit} >
                        <label className="input-group input-group-md mb-2">
                            <span className='w-1/3'>Name</span>
                            <input type="text" name='name' placeholder="name" className="input input-bordered input-md w-full" />
                        </label>
                        <label className="input-group input-group-md">
                            <span className='w-1/3'>Email</span>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" name='email' placeholder="Enter email" className="input input-bordered input-md w-full" required />
                        </label>
                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3'>Password</span>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered input-md w-full" required />
                        </label>
                        <p className='text-red-500 font-medium'>{error}</p>
                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3'>PhotoUrl:</span>
                            <input onChange={(e) => setPassword(e.target.value)} type="text" name='photo' placeholder="url" className="input input-bordered input-md w-full" />
                        </label>
                        {/* <input type='submit' value='Register' className="btn btn-info" /> */}
                        <button type='submit' className='btn btn-primary w-full'>Register</button>
                    </form>

                    <Link to='/login'>
                        <p className="link link-primary font-semibold">Already have an account?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;