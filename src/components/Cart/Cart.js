import React from 'react';

const Cart = (props) => {

    const { name, img, salary, club, country } = props.cart;


    const CartStle = {
        width: "230px",
        height: "300px",
        boxShadow: "8px 8px 16px tomato",
        margin: "10px",
        borderRadius: "10px",
        float: "left"
    }
    const cartImage = {
        width: "50%",
        height: "40%",
        borderRadius: "20px",
        margin: "20px"
    }

    return (
        <div className="container">
            <div style={CartStle}>
                <img style={cartImage} src={img} alt=""></img>
                <h5>Name: {name}</h5>
                <h5>Country: {country}</h5>
                <h5>Club: {club}</h5>
                <h5>Salary: {salary}</h5>
            </div>
        </div>
    );
};

export default Cart;