import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, message, Table, Dropdown } from 'antd'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Layout/Spinner'
import axios from "axios";
import DataFetching from './DataFetching';
import DropdownList from './selectOption';

const HomePage = () => {
  const [showModal, setShoWModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [allTransection, setAllTrasection] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  


  //table data
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amunt'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Reference',
      dataIndex: 'reference',
      key: 'reference'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Actions'
    }

  ];

  

  //useEffect Hook
  useEffect(() => {
    const getAllTransections = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('users'))
        setLoading(true)
        const res = await axios.get('http://localhost:8080/api/transections/get', { userid: user._id,selectedValue })
        setLoading(false)
        console.log(res.data);
        setAllTrasection(false)
        console.log(res.data)
      } catch (error) {
        console.log(error)
        message.error('Fetch Issue with Transection')
  
  
      }
    }
    getAllTransections();
  }, [selectedValue])

  //form handleing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('users'))
      setLoading(true)
      await axios.post("http://localhost:8080/api/transections/add",
        { amount, type, date, description, reference, category, userid: user._id })
      setLoading(false)
      message.success('Transection Added Successfully')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      message.error('Failed to add transection')
    }
  }


  return (

    <Layout>{loading && <Spinner />}
      <div className='filters'>
        <div> <DropdownList /></div>
        
        <div>
          <button className='btn btn-primary'
            onClick={() => setShoWModal(true)}
          >Add new</button>
        </div>
      </div>
      <div className='content'>
        {/* <Table dataSource={allTransection} columns={columns}/> */}
        <DataFetching />

      </div>
      <Modal title="Add Transection"
        open={showModal}
        onCancel={() => setShoWModal(false)}
        footer={false}
      >
        <Form layout="vertical" >
          <Form.Item label="Amount" name="amount">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)} />
          </Form.Item>
          <Form.Item label="Type (Income/Expens)" name="type">
            <Input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)} />

          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)} />

          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <div className='d-flex justify-content-end'>
            <button type="submit" className='btn btn-primary' onClick={handleSubmit}>
              {" "}
              SAVE</button>
          </div>
        </Form>
      </Modal>

    </Layout >
  )
}

export default HomePage