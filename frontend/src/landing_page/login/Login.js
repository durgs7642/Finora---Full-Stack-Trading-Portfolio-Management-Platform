import React, { useState } from "react";
import axios from "axios";
import { handleError } from "../../utils";


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { email, password } = form;
    if (!email || !password)
      return handleError("all fields are required")
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, form, { withCredentials: true });
      console.log(res.data);
      // Redirect to dashboard
      if(res.data.success){
        setTimeout(() => {
          window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/dashboard`;
      },1000);
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      

      <div className="auth-container">
        <h2>Login to Zerodha</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="username"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button className="btn btn-primary btn-lg fs-5 mb-5" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

     
    </>
  );
};

export default Login;
