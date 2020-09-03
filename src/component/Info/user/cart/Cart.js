import React from 'react';

const Cart = (props) => {
    console.log(props.user);
    const {name, picture, location, email,cell} = props.user;
    const countryStyle = {
        border: "1px solid purple",
        margin: "20px",
        borderRadius: "20px",
        textAlign: "center",
        width: "45%",
        float: "left",
        boxShadow: "5px 5px 10px grey"
       
        
    }
    return (
        <div style = {countryStyle}>
            <h1>Name: {name.first}</h1>
             <img src={picture.large } alt=""/>
             <p>Country: {location.country}</p>
             <p>E-mail: {email}</p>
             <p>cell: {cell}</p>
        </div>
    );
};

export default Cart;