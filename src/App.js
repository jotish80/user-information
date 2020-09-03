import React, { useState, useEffect } from 'react';
 
import './App.css';
import Info from './component/Info/Info';
import User from './component/Info/user/User';
import Cart from './component/Info/user/cart/Cart';

function App() {
const [users, setUsers] = useState([]);
  
 console.log(users)

useEffect(() => {
   fetch('https://randomuser.me/api?results=16')
   .then(res => res.json())
   .then(data =>  setUsers(data.results))
   
}, [])
 const divStyle = {
  textAlign:"center" 
 }

  return (
     
    <div style={divStyle}>
         
          <h2>Users Information</h2>
        <ul>
          {
            users.map(user =><Cart user={user}></Cart>)
          }
        
        </ul>
   </div>
   
      
     
  );
}

export default App;
