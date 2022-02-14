import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Collection from './Collection'
import {BrowserRouter, Route} from 'react-router-dom'
import image1 from '../ecommerce/images/image-product-1.jpg'
import image2 from '../ecommerce/images/image-product-2.jpg'
import image3 from '../ecommerce/images/image-product-3.jpg'
import image4 from '../ecommerce/images/image-product-4.jpg'
import img1 from '../ecommerce/images/image-product-1-thumbnail.jpg'
import img2 from '../ecommerce/images/image-product-2-thumbnail.jpg'
import img3 from '../ecommerce/images/image-product-3-thumbnail.jpg'
import img4 from '../ecommerce/images/image-product-4-thumbnail.jpg'

function App() {

  const [order, setOrder] = useState('')
  const [open, setOpen] = useState(false)
  const [check, setCheck] = useState(false)
  const [imgsrc, setImgsrc] = useState(image1)
  const [bin, setBin] = useState(true)
  const [num, setNum] = useState(0)

  const cartClick = (e) => {
    setBin(true)
    if (num === 0){
      return;
    }
    setOrder(num)
  }

  const iconClick = () => {
    if (open === true) {
      setOpen(false)
      return;
    }
    if (order === "") {
      return
    }
    setOpen(true)
  }
  
    

    const handleClick = (e) => {
        if (e.target.getAttribute('src') === img1) {
            setImgsrc(image1)
        }
        if (e.target.getAttribute('src') === img2) {
            setImgsrc(image2)
        }
        if (e.target.getAttribute('src') === img3) {
            setImgsrc(image3)
        }
        if (e.target.getAttribute('src') === img4) {
            setImgsrc(image4)
        }
    }

    const handleClicktwo = (e) => {
        setImgsrc(e.target.getAttribute('src'))
        setCheck(true)
    }

    const mathClick = (e, cls) => {
        setOpen(false)
        const num = document.querySelector(cls)
        if (e.target.className === "minus") {
            if (parseInt(num.textContent) === 0) return;
            setNum(parseInt(num.textContent) - 1)
        }
        if (e.target.className === "plus") {
            setNum(parseInt(num.textContent) + 1)
        }
    }

    const closeClick = () => {
      setCheck(false)
    }

    const binClick = (e, cls) => {
      setBin(false)
      setOrder('')
      setNum(0)
    }

    const moveClick = (e) => {
        if (e.target.className === "front") {
          if (imgsrc === image1) {
            setImgsrc(image2)
          }
          if (imgsrc === image2) {
            setImgsrc(image3)
          }
          if (imgsrc === image3) {
            setImgsrc(image4)
          }
          if (imgsrc === image4) {
            setImgsrc(image1)
          }
        }
        if (e.target.className === "back") {
          if (imgsrc === image1) {
            setImgsrc(image4)
          }
          if (imgsrc === image2) {
            setImgsrc(image1)
          }
          if (imgsrc === image3) {
            setImgsrc(image2)
          }
          if (imgsrc === image4) {
            setImgsrc(image3)
          }
        }
    }

  return (
    
    <BrowserRouter>
        <div className="App">
        <Navbar order={order} clk={iconClick} />
        <Route path='/' component={() => (<Collection click={cartClick} open={open} handleClick={handleClick} handleClicktwo={handleClicktwo} mathClick={mathClick} check={check} imgsrc={imgsrc} num={num} order={order} bin={bin} binclk={binClick} close={closeClick} move={moveClick} />)} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
