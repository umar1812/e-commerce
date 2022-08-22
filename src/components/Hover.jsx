import React from "react";

const Hover = (props) => {
    return (props.trigger) ? (
        <div className='hover'>
            <h4>{props.title}</h4>
            <img src={props.image} alt="Product" />
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.rating}/5 stars</p>
        </div>
    ) : ""
}

export default Hover;