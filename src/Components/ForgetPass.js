import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = () => {
      navigate("/")
    }
    return (
        <form className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <h3 className='my-4'>Change Password</h3>
            <div className=" mb-4 px-3">
                <label className="text-start py-2 w-100">Email ID</label>
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter Email address" />
                    <span className="position-absolute end-0 m-2"><CiMail /></span>
                </div>
            </div>

            <div className=" mb-2 px-3">
                <label className="text-start py-2 w-100">New Password</label>
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

            <div className=" m-2 px-3">
                <label className="text-start py-2 w-100">Re-Enter Password</label>
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

            <button type="button" className="btn btn-primary form-outline m-4 px-5" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Login