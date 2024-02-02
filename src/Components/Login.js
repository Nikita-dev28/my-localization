import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);

    const handClick = () => 
    {
        navigate("/home")
    };
    return (
        <form className='d-flex flex-column justify-content-center align-items-center'>
            <h3 className='my-4'>Login to your Account</h3>
            <div className=" mb-4 px-3">
                <label className="text-start py-2 w-100">Email ID</label>
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter Email address" />
                    <span className="position-absolute end-0 m-2"><CiMail /></span>
                </div>
            </div>

            <div className=" mb-2 px-3">
                <label className="text-start py-2 w-100">Password</label>
                <div className="input-group">
                <input
                    type={isVisible ? "text" : "password"}
                    className="form-control pr-5"
                    placeholder="Enter Password"
                />
                <span
                    className="position-absolute end-0 m-2"
                    style={{ right: "10px", cursor: "pointer" }}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
                </div>
            </div>


            <div className="pb-3">
                <a href="#!">Forgot password?</a>
            </div>

            <button type="button" className="btn btn-primary form-outline mb-4 px-5" onClick={handClick}>Login</button>

            <div className="text-center">
                <p>Don't have account <Link to="/account"> Create account</Link></p>
            </div>
        </form>
    )
}

export default Login