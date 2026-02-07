import React, {useState} from "react";

import axios from "axios";


const Signup = () => {
    const [form , setForm] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setLoading(true);
        setError("");

        const {email,username,password } = form;
        if (!email || !username || !password)
            return ("all fields are required")

        try{
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, form, { withCredentials: true })
            console.log(res.data);
            // redirect to dashboard after successful signup
            if(res.data.success){
                setTimeout(() => {
                    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
                 },1000);
            }
        }catch(err){
            setError(err.response?.data?.message || "Signup failed, Try again");
        }finally{
            setLoading(false);
        }
    };

    return (
        <>
            
            <div className="auth-container">
                <h2>Create your Zeerodha account</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input type = "email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type = "text" name="username" placeholder="Username" onChange={handleChange} required />
                    <input type = "password" name="password" placeholder="Password" onChange={handleChange} required />

                    {error && <p className="error">{error}</p>}

                    <button className="btn btn-primary btn-lg fs-5 mb-5" type="submit" disabled={loading}>
                     {loading ? "creating account..." : "Sign Up"}
                     </button>

                     <p className="auth-switch">
                      Already have an account?{" "}
                     <a href={`${process.env.REACT_APP_FRONTEND_URL}/login`}>Login</a>
                     </p>
                </form>
            </div>
        
        </>
    );
};

export default Signup;