import React from 'react'
import cart from '../ecommerce/images/icon-cart.svg'
import avatar from '../ecommerce/images/image-avatar.png'
import {NavLink, Link} from 'react-router-dom'

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container conn">
                <Link className="navbar-brand disabled" to="#" >sneakers</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >   
                    <div class='ordersec'>{props.order}</div>
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Collections</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href='/'>Contact</a>
                        </li>
                        <li className="nav-item mt-2 cartt">
                            <img src={cart} alt="cart icon" onClick={props.clk} />
                            <div className="order">{props.order}</div>
                        </li>
                        <li className="nav-item avatar-link">
                            <img src={avatar} alt="avatar" className='avatar'/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;