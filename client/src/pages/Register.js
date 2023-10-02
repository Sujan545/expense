import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Layout/Spinner";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      message.success("Registration successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };
  //prevent or login ser
  useEffect(() => {
    if (localStorage.getItem("users")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="register-page">
      {loading && <Spinner />}
      <Form layout="vertical">
        <h1>Register Form</h1>
        <Form.Item label="name" name="name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
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
          <Link to="/login">Already Register ? Check Here to Login</Link>
          <button className="btn btn-primary" onClick={submitHandler}>
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
