import React from 'react'
import ReactDOM from 'react-dom'
import img1 from '../ecommerce/images/image-product-1-thumbnail.jpg'
import img2 from '../ecommerce/images/image-product-2-thumbnail.jpg'
import img3 from '../ecommerce/images/image-product-3-thumbnail.jpg'
import img4 from '../ecommerce/images/image-product-4-thumbnail.jpg'
import front from '../ecommerce/images/icon-next.svg'
import back from '../ecommerce/images/icon-previous.svg'
import close from '../ecommerce/images/icon-close.svg'
import './index.css'

const Modal = (props) => {
    
 
    return ReactDOM.createPortal(
        <div className="mode">
            <div className="image2">
            <img src={props.imgsrc}  className='bigimg2' alt="canvas shoe" />
            <div className="small2">
                <img src={img1} onClick={props.handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img2} onClick={props.handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img3} onClick={props.handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img4} onClick={props.handleClick} className='smallimg2' alt="canvas shoe" />
            </div>
                <img src={back} className='back' onClick={props.move} alt="back icon" />
                <img src={front} className='front' onClick={props.move} alt="front icon" />
                <img src={close} className='close' onClick={props.close} alt="close icon" />
        </div>
        
    </div>, document.getElementById('modal')
    )
    
}

export default Modal;