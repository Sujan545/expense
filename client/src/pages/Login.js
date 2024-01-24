import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Layout/Spinner";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/api/users/login",
        { email, password }
      );
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "users",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("somthing went wrong");
    }
  };
  //prevent or login ser
  useEffect(() => {
    if (localStorage.getItem("users")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical">
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Password" name="passwrd">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user? Check Here to Register</Link>
            <button className="btn btn-primary" onClick={submitHandler}>
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
