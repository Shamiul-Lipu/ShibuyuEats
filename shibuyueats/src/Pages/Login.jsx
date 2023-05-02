import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { user, signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-lime-900">Login Please!</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                        </form>

                        <div className='flex justify-evenly pb-2'>
                            <p>or Login with</p>
                        </div>
                        <div className='flex justify-evenly'>
                            <button className="btn btn-outline btn-info"><FaGoogle className='m-1' /> Google</button>
                            <button className="btn btn-outline"><FaGithub className='m-1' /> Github</button>
                        </div>


                        <Link to='/register'>
                            <p className="text-center py-2">If you are New here, <span className='link link-primary font-semibold'>Please Register...</span> </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;