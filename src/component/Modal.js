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
import image1 from '../ecommerce/images/image-product-1.jpg'
import image2 from '../ecommerce/images/image-product-2.jpg'
import image3 from '../ecommerce/images/image-product-3.jpg'
import image4 from '../ecommerce/images/image-product-4.jpg'

const Modal = (props) => {

    const handleClick = (e) => {
        const image = document.querySelector('.bigimg2')
        if (e.target.getAttribute('src') === img1) {
            image.setAttribute('src', image1)
            console.log(image.getAttribute('src'))
        }
        if (e.target.getAttribute('src') === img2) {
            image.setAttribute('src', image2)
        }
        if (e.target.getAttribute('src') === img3) {
            image.setAttribute('src', image3)
        }
        if (e.target.getAttribute('src') === img4) {
            image.setAttribute('src', image4)
        }
    }
 
    return ReactDOM.createPortal(
        <div className="mode">
            <div className="image2">
            <img src={props.imgsrc}  className='bigimg2' alt="canvas shoe" />
            <div className="small2">
                <img src={img1} onClick={handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img2} onClick={handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img3} onClick={handleClick} className='smallimg2' alt="canvas shoe" />
                <img src={img4} onClick={handleClick} className='smallimg2' alt="canvas shoe" />
            </div>
            <img src={back} className='front' alt="back icon" />
                <img src={front} className='back' alt="front icon" />
                <img src={close} className='close' alt="close icon" />
        </div>
        
    </div>, document.getElementById('modal')
    )
    
}

export default Modal;