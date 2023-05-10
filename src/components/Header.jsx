import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './../styles/header.scss'
import logo from '../images/logo.png';
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 1120 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    return(
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__content__link">
                  <div className="header__content__logo">
                    <img width="200" src={logo} alt="logo" />
                    <p>ломать не строить</p>
                  </div>
                </Link>
                <nav className={`header__content__nav ${ menuOpen  ? 'isMenu' : ""}`}>
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={() => setMenuOpen(false)}>
                                Страница
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={() => setMenuOpen(false)}>
                                Страница
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={() => setMenuOpen(false)}>
                                Страница
                            </Link>
                        </li>
                    </ul>
                    <button className="header__content__butt" onClick={() => setMenuOpen(false)}><a href="#thereToJump2">Связаться с нами</a></button>
                </nav>
                <div className='header__content__toggle'>
                    {
                        menuOpen ? <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)}/> : <BiMenuAltRight onClick={() => setMenuOpen(!menuOpen)}/>
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;