import React, { useState } from 'react'
import Hover from './Hover'

const Product = (props) => {

    const [isHovering, setHover] = useState(false)

    const mouseIn = () => {
        setHover(!isHovering)
    }
    const mouseOut = () => {
        setHover(false)
    }

    return (
        <>
            <div className='prod' onClick={mouseIn} onMouseLeave={mouseOut}>
                <img src={props.image} alt="Product" />
            </div>

            {/* {isHovering && ( */}
            <Hover
                trigger={isHovering}
                title={props.title}
                image={props.image}
                catagory={props.catagory}
                price={props.price}
                rating={props.rating}
                description={props.description} />
            {/* )} */}
        </>
    )
}

export default Product

