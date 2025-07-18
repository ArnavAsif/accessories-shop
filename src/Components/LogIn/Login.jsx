import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../Utility/firebase.init";
import { Link } from "react-router";

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 shadow-2xl p-15 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>

                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" name="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>

                            <label className="label">Password</label>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                <input
                                    name="password"
                                    type={showPass ? 'text' : 'password'}
                                    required
                                    placeholder="Password"
                                    minlength="6"
                                    pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                                    title="Must be more than 8 characters, including number, lowercase letter"
                                />
                                <a className="btn btn-xs" onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </a>
                            </label>

                            <p className="validator-hint hidden">
                                Must be more than 6 characters, including
                                <br />At least one number <br />At least one lowercase letter
                            </p>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className="mt-8">Creat a New <Link className="font-bold text-blue-300" to='/signUp'>Account?</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;