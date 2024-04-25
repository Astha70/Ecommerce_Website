import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import './register.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name, email, password, phone, address, answer
            });
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <Layout title={"Register - Solistice app"} >
            <div className='register '>
                <div className='register-box'>
                    <h1 className='form-title text-center fw-bold fs-2'>Register Page</h1>
                    <form onSubmit={handleSubmit} className='register-form part' >
                        <div className="mb-3 input-container">
                            <input type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="form-control" id="exampleInputName1" placeholder="Name" required />
                                
                        </div>
                        <div className="mb-3">
                            <input type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="form-control" id="exampleInputEmail1" placeholder='Email' required />
                        </div>
                        <div className="mb-3">
                            <input type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="exampleInputPassword1" placeholder='Password' required />
                        </div>
                        <div className="mb-3">
                            <input type="text"
                                value={phone} onChange={(e) => { setPhone(e.target.value) }}
                                className="form-control" id="exampleInputPhond1" placeholder='Phone no' required />
                        </div>
                        <div className="mb-3">
                            <input type="text"
                                value={address}
                                onChange={(e) => { setAddress(e.target.value) }} className="form-control" id="exampleInputAdd1" placeholder='Address' required />
                        </div>
                        <div className="mb-3">
                            <input type="text"
                                value={answer}
                                onChange={(e) => { setAnswer(e.target.value) }} className="form-control" id="exampleInputAns1" placeholder='What is your pet name' required />
                        </div>
                        <button type="submit" className="btn btn-dark submit-btn ">Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
};

export default Register