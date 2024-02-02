import React, { useState} from 'react';
import { CiMail } from "react-icons/ci";
import { IoMdPerson,IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Account = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibles, setIsVisibles] = useState(false);
    return (
        <form className="container">
            <p className="text-center h1 fw-bold my-4">Sign up</p>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control p-2" placeholder="Your Name" />
                        <span className="position-absolute end-0 m-2"><IoMdPerson /></span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <input type="email" className="form-control p-2" placeholder="Your Email" />
                        <span className="position-absolute end-0 m-2"><CiMail /></span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <input type="number" className="form-control p-2" placeholder="Phone No." />
                        <span className="position-absolute end-0 m-2"><FaPhoneAlt /></span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <input type="address" className="form-control p-2" placeholder="Address" />
                        <span className="position-absolute end-0 m-2"><IoMdHome /></span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <input
                    type={isVisible ? "text" : "password"}
                    className="form-control p-2"
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
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                    <input
                    type={isVisibles ? "text" : "password"}
                    className="form-control pr-5"
                    placeholder="Repeat Password"
                />
                <span
                    className="position-absolute end-0 m-2"
                    style={{ right: "10px", cursor: "pointer" }}
                    onClick={() => setIsVisibles(!isVisibles)}
                >
                    {isVisibles ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="form-check d-flex justify-content-center">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        <label className="form-check-label">
                            I agree all statements in <a href="#">Terms of service</a>
                        </label>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                </div>
            </div>
        </form>
    );
}

export default Account;
