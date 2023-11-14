import React from "react";
import App from "../App";

const container = {
    padding: "30px",
    height: "400px",
    width: "210px"
}

const buttonstyle = {
    borderRadius: "50px",
    padding: "15px 30px",
    border: "none",
    marginTop: "35px"
}

const image = {
    display: "flex",
    marginTop: "15px"
}

const imagebutton = {
    display: "flex",
}

const Card = (props) => {
    return (
        <div style = {container}>
            <div style = {image}>
                <img src={props.logo} ></img>
            </div>

            <div style = {image}>
                <h1>{props.title}</h1>
            </div>
            
            <div style = {image}>
                <p>{props.description}</p>
            </div>

            <div style = {imagebutton}>
                <button style= {buttonstyle}>{props.label}</button>
            </div>
        
            
        </div>
    )
}

export default Card