import React from "react";


const Card = (props) => {
    return (
        <div>
            <span>
                <img src={props.logo} ></img>
            </span>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>{props.label}</button>
        </div>
    )
}

export default Card