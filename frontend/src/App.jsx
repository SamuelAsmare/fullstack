// import { useState, useEffect } from 'react';
 import './App.css';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [servivedData, setServivedData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/servived');
//         setServivedData(res.data);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting:", { name, email, phone });
//     try {
//       const res = await axios.post('https://fullstack-1-3xdv.onrender.com/users', {
//         name,
//         email,
//         phone
//       });
//       alert(res.data.message);
//       // Clear inputs after submission
//       setName('');
//       setEmail('');
//       setPhone('');
//     } catch (err) {
//       console.error('Error submitting data:', err.response?.data || err.message);
//     }
//   };

//   return (
//     <div style={{ padding: '50px', maxWidth: '600px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           style={{ width: '100%', height: '30px', margin: '15px 0' }}
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           style={{ width: '100%', height: '30px', margin: '15px 0' }}
//         />
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Phone"
//           style={{ width: '100%', height: '30px', margin: '15px 0' }}
//         />
//         <button type="submit" style={{ width: '100%', height: '40px', marginTop: '10px' }}>
//           Submit
//         </button>
//       </form>

//       <div style={{ width: '100%', border: '1px solid red', padding: '20px', borderRadius: '8px' }}>
//         <h4>Employee Data from "servived" table:</h4>
//         {servivedData.length === 0 ? (
//           <p>No data found.</p>
//         ) : (
//           servivedData.map((employee) => (
//             <div key={employee.employee_id} style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
//               <p><strong>First Name:</strong> {employee.firstname}</p>
//               <p><strong>Last Name:</strong> {employee.lastname}</p>
//               <p><strong>Hourly Pay:</strong> {employee.hourlypay}</p>
//               <p><strong>Hire Date:</strong> {employee.hiredatedate}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React from 'react';

const App = () => {
  const hand=()=>{
      alert("clicked");
  }
  return (
    <>
    <div id="large">
      <div id="large">
        <form id="formm" onSubmit={hand}>
          <input type="text" placeholder="Your name"/>
          <input type="email" placeholder="eg. s@gmail.com" />
          <button type="submit">Click It</button>
        </form>
      </div>

      <div>
     </div></div>
    </>
  );
};

export default App;
