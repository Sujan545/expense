import React, { useState ,useEffect} from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Layout/Spinner'
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  //form submit
  const submitHandler =  async(values) => {
  //console.log(values);
    try {
      setLoading(true)
     await axios.post('http://localhost:8080/api/users/register', values)
      //console.log(response.data)
      message.success("Registeratrion successfull");
      setLoading(false)
      navigate("/login");
    } catch (error) {
      setLoading(false)
      message.error("somthing went wrong")
    }
  };
  //prevent or login ser
  useEffect(()=>{
    if(localStorage.getItem("users")){
      navigate("/")
    }
  },[navigate]);
  return (
    <div className='register-page'>
      {loading && <Spinner />}
      <Form layout='vertical' onFinish={submitHandler}>
        <h1>Register Form</h1>
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type='email' />
        </Form.Item>
        <Form.Item label="Paswod" name="passwrd">
          <Input type='password' />
        </Form.Item>
        <div className='d-flex justify-content-between'>
          <Link to="/login">Already Register ? Check Here to Login</Link>
          <button className='btn btn-primary'>Register</button>
        </div>
      </Form>
    </div>
  )
}

export default Register