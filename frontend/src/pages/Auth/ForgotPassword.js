import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./register.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
          email,
          newPassword,
          answer,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate( "/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
   <Layout title={'ForgotPassword'}>
     <div className="form-container forgot" style={{ minHeight: "90vh" }}>
        <div className="forgot-box">
        <form onSubmit={handleSubmit}>
          <h4 className="form-title fw-bold text-center fs-2">Reset Password</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleAnswer1"
              placeholder="Enter Your Pet Name"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark forgot-btn">
            Reset
          </button>
        </form>
      </div>
      </div>
   </Layout>
  )
}

export default ForgotPassword