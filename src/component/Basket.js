import React from 'react'
import img1 from '../ecommerce/images/image-product-1-thumbnail.jpg'
import del from '../ecommerce/images/icon-delete.svg'

const Basket = (props) => {

    return (
        <div className="basketdiv">
            <p className="cartasname">Cart</p>
            {props.bin ? <div><div className="cartinfo">
                <div className="divforimg">
                    <img src={img1} className='shoeimg' alt="shoe" />
                </div>
                
                <div className="paras">
                    <p className='name'>Fall Limited Edition Sneakers</p>
                    <p className="amt">$125.00 x {props.order} <span className="span">${125.00 * props.order}.00</span></p>
                </div>
                <span className="imgspan">
                    <img src={del} className='imgg' alt="" onClick={props.binclk} />
                </span>
                
            </div>
            <button className="btn check">Checkout</button></div>: ''}
        </div>
    )
}

export default Basket;