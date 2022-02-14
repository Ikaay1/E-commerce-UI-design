import React from 'react'
import img1 from '../ecommerce/images/image-product-1-thumbnail.jpg'
import img2 from '../ecommerce/images/image-product-2-thumbnail.jpg'
import img3 from '../ecommerce/images/image-product-3-thumbnail.jpg'
import img4 from '../ecommerce/images/image-product-4-thumbnail.jpg'
import plus from '../ecommerce/images/icon-plus.svg'
import minus from '../ecommerce/images/icon-minus.svg'
import cart from '../ecommerce/images/icon-cart.svg'
import Modal from './Modal'
import Basket from './Basket'

const Collection = (props) => {

    return (
        <section className='second'>
            {props.check ? <Modal imgsrc={props.imgsrc} close={props.close} handleClick={props.handleClick} move={props.move} /> : null}
            <div className="container cont">
                <div className="image">
                    <img src={props.imgsrc} onClick={props.handleClicktwo} className='bigimg' alt="canvas shoe" />
                    <div className="small">
                        <img src={img1} onClick={props.handleClick} className='smallimg' alt="canvas shoe" />
                        <img src={img2} onClick={props.handleClick} className='smallimg' alt="canvas shoe" />
                        <img src={img3} onClick={props.handleClick} className='smallimg' alt="canvas shoe" />
                        <img src={img4} onClick={props.handleClick} className='smallimg' alt="canvas shoe" />
                    </div>
                </div>
                <div className="texts">
                    <p className="company">SNEAKER COMPANY</p>
                    <h1 className='topic'>Fall Limited Edition Sneakers</h1>
                    <p className="details">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a double rubber outer sole, 
                        they'll withstand everything the weather can offer
                    </p>
                    <h1 className="price">
                        <span className='spanprice'>$125.00</span>
                        <span className='spanpercent'>50%</span>
                    </h1>
                    <p className="linethrough">
                        $250.00
                    </p>

                    <span className="plusdiv">
                        <img src={minus} onClick={(e) => props.mathClick(e, '.zero')}  className='minus' alt="minus icon" />
                        <span className="zero">{props.num}</span>
                        <img src={plus} onClick={(e) => props.mathClick(e, '.zero')}  className='plus' alt="plus icon" />
                    </span>
                    <button className="btn cartbtn" onClick={props.click}>
                        <img src={cart} className='iconcart' alt="cart icon" />
                        Add to cart
                    </button>
                </div>
            </div>
            {props.open?<Basket order={props.order} bin={props.bin} binclk={props.binclk} />:null}
        </section>
        
    )
}

export default Collection;