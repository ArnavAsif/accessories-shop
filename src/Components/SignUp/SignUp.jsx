import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utility/firebase.init";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";


const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const [success, setSuccess] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [errorMassage, setErrorMassage] = useState('');
    const [showPass, setShowPass] = useState(false)
    
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        if(!terms){
            setErrorMassage(
                toast.error('Please Accept Our Terms and Conditions')
            )
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(
                    toast.success('Successfully Created an Account')
                )
            })
            .catch(error => {
                console.log(error.message);
                setErrorMassage(toast.error('Email Already Used'))
            })
    }

    return (
        <div>
            <form onSubmit={handleSignUp} className="shadow-2xl flex flex-col card-body justify-center items-center gap-6 py-24 px-5 w-3/12 mx-auto rounded-2xl my-12">

                <label className="input validator w-10/12">
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
                <label className="input validator w-10/12">
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

                <label className="label mr-40">
                    <input type="checkbox" name="terms" className="checkbox" />
                   Accept Tarms and Conditions
                </label>

                <button className="btn w-10/12">Sign Up</button>
                <p>Already Have an <Link className="font-bold text-blue-300" to='/logIn'>Account?</Link></p>

            </form>
                    

        </div>


    );
};

export default SignUp;