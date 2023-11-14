import React from "react";
import App from "../App";

const container = {
    padding: "20px"
}

const buttonstyle = {
    borderRadius: "50px",
    padding: "15px 30px",
    border: "none"
}

const Card = (props) => {
    return (
        <div style = {container}>
            <span>
                <img src={props.logo} ></img>
            </span>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button style= {buttonstyle}>{props.label}</button>
        </div>
    )
}

export default Card