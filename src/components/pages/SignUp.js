import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpValidation from '../SignUpValidation';
import axios from 'axios';

function SignUp() {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        verifyPassword: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = SignUpValidation(values);
        setErrors(validationErrors);

        // Check if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/SignUp', values, { withCredentials: true })
                .then(res => {
                    navigate('/SignIn');
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="w-screen h-fit pl-10 pr-10 pb-20 bg-red-600 md:pb-60 md:pr-60 md:pl-60 md:pt-20">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full bg-zinc-900 pl-2 pr-2 border rounded-md gap-10 md:p-20">
                <h1 className="font-black text-4xl text-white">Sign Up</h1>
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="text" id="userName" name="userName" required placeholder="Your UserName"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="userName">Your UserName</label>
                    {errors.userName && <span className="text-danger">{errors.userName}</span>}
                </div>
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="email" id="email" name="email" required placeholder="Your Email"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="email">Your Email</label>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="password" id="password" name="password" required placeholder="Your Password"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="password">Your Password</label>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="password" id="verifyPassword" name="verifyPassword" required placeholder="Verify Your Password"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="verifyPassword">Verify Your Password</label>
                    {errors.verifyPassword && <span className="text-danger">{errors.verifyPassword}</span>}
                </div>
                <p className="text-white">You already have an account? <Link to="/SignIn" className="text-blue-400 underline">Sign In</Link></p>
                <button type='submit' className="bg-blue-500 text-white font-bold text-xl py-2 px-4 rounded mt-4">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
