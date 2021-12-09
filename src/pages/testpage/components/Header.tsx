import React, { useEffect, useState } from 'react';

import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

import avatar from "../assets/img/avatar.png"

const Header = () => {
    const [view, setView] = useState<boolean>(false)

    const scrollFun = (event: any) => {
        if (window.scrollY > 100) setView(true)
        if (window.scrollY < 150) setView(false)
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollFun)
    }, [])



    return (
        <>
            < header className={view ? "header header-shadow" : "header "}  >
                <p className="header-avatar">
                    <img src={avatar} alt="Avatar img" className="header-avatar-img" />
                </p>
                <section className="header-section">
                    <ul className="header-social">
                        <li><a className="header-social-link" href="#instagram"><AiFillInstagram className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="#facebook"><AiFillFacebook className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="#linkedin"><AiFillLinkedin className='nav-icon' /></a></li>
                        <li><a className="header-social-link" href="#github"><AiFillGithub className='nav-icon' /></a></li>
                    </ul>
                    <p className={view ? "header-title" : "header-title-hidden"}>Name</p>
                </section>
                <a className="header-cart" href="#cart"><FaShoppingCart className='nav-icon-cart' /></a>
            </header >
        </>
    );
};

export default Header;