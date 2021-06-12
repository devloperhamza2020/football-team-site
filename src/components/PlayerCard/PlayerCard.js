import React from 'react';

const PlayerCard = (props) => {

    console.log(props.info);

    const { name, club, img, country, salary } = props.info; // destructure.

    const divStyle = {
        // border: "1px solid red",
        height: "350px",
        width: "320px",
        padding: "20px",
        margin: "20px",
        borderRadius: "5px",
        float: "left",
        boxShadow: "10px 10px 20px lightgray"
    }

    const btnStyle = {
        padding: "4px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: "tomato",
        color: "white",
        fontWeight: "bolder",
        border: "2px solid black"
    }

    const imageStyle = {
        width: "60%",
        height: "42%",
        borderRadius: "50%"
    }
    
    return (
        <div className="container">
            <div style={divStyle}>
                <h3 style={{ color: "green", fontWeight: "bold"}}>{name}</h3>
                <img style={imageStyle} src={img} alt="" />
                <h5>Country: {country}</h5>
                <h5>Club: {club}</h5>
                <h5 style={{color: "green"}}>Salary: {salary}</h5>
                <button onClick={() => props.handleSelect(props.info)} style={btnStyle}>Add Player</button>
            </div>
        </div>
    );
};

export default PlayerCard;