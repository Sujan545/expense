// src/components/DataFetching.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/transections/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Data from Backend</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Reference</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
               <td>{item.date}</td> 
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.reference}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default DataFetching;
