import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from 'axios'

import signinImage from '../assets/signup.jpg'
const initialState = {
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    avatarURL:'',
}


const Auth = ()=>{
    const [isSignup, setIsSignup] = useState(true)
    const [form, setForm]=useState(initialState)

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})

    }

    const switchMode= ()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(form)
    }

    return(
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup?'Sign Up': 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup&&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup&&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup&&(
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignup&&(
                            <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmpassword"> Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                            />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                                <button>{isSignup? "Sign Up":"Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                                {isSignup?"Already have an account? "
                                :"Don't have and account? "}
                        <span onClick={switchMode}>{isSignup?' Sign In': ' Sign Up'}</span>
                    </div>
                </div>

            </div>
                <div className="auth__form-container-image">
                    <img src={signinImage} alt="Sign In" width={1000}/>
                </div>
        </div>
    )
}

export default Auth