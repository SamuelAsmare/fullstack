 import { useState, useEffect } from 'react';
 import './App.css';
 import axios from 'axios';
import React from 'react';

const App = () => {
  const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", { name, email, phone });
    try {
      const res = await axios.post('https://fullstack-3-for-uptimerobot-modification.onrender.com/users', {
        name,
        email,
        phone
      });
      alert(res.data.message);
      // Clear inputs after submission
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error('Error submitting data:', err.response?.data || err.message);
    }
  };
  return (
    <>
    <div id="large">
      <div id="large">
        <form id="formm" onSubmit={handleSubmit} >
          <input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder="eg. s@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" placeholder="+251928210736" onChange={(e)=>setPhone(e.target.value)} />
          <button type="submit">Click It</button>
        </form>
      </div>

      <div>
     </div></div>
    </>
  );
};

export default App;
