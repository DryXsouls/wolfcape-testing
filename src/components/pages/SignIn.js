import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const [values, setValues] = useState({ email: '', password: ''});
    const [serverMessage, setServerMessage] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/SignIn', values, { withCredentials: true })
            .then(res => {
                if (res.data.Login) {
                    navigate('/profile');
                } else {
                    setServerMessage(res.data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                setServerMessage('An error occurred. Please try again.');
            });
    };

    return (
        <div className="w-screen h-fit pl-10 pr-10 pb-20 bg-red-600 md:pb-60 md:pr-60 md:pl-60 md:pt-20">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full bg-zinc-900 pl-2 pr-2 border rounded-md gap-10 md:p-20">
                <h1 className="font-black text-4xl text-white">Sign In</h1>
                {serverMessage && <p className="text-red-500">{serverMessage}</p>}
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="email" id="email" name="email" required placeholder="Your Email"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="email">Your Email</label>
                </div>
                <div className="relative w-full flex flex-col gap-2">
                    <input onChange={handleInput} className="input-field font-normal text-xl p-2 border border-gray-300 rounded bg-zinc-900 text-white placeholder-transparent" type="password" id="password" name="password" required placeholder="Your Password"/>
                    <label className="input-label absolute font-bold text-xl text-gray-500 pointer-events-none" htmlFor="password">Your Password</label>
                </div>
                <p className="text-white">Don't have an account? <Link to="/SignUp" className="text-blue-400 underline">Sign Up</Link></p>
                <button type='submit' className="bg-blue-500 text-white font-bold text-xl py-2 px-4 rounded mt-4">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
