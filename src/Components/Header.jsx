import { Routes, Route, Router, NavLink, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import About from './About';
import Home from './Home';

import './Css/Header.css';

function Header() {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="Header-nav" data-isopen={expanded ? "true" : "false"}>
                <img className='Main-logo' src='./img/Logo.png' />
                <img className='Menu-burgur' onClick={() => setExpanded(!expanded)} src='./img/Menu-burgur.png' />

                <div className='Nav-list'>
                    <NavLink to='About'><strong>더보기</strong></NavLink>
                </div>
                <div className='Nav-list'>
                    <NavLink to='/'><strong>홈</strong></NavLink>
                </div>
                <div className='Nav-list'>
                    <NavLink to='Search'>
                        <img className='Search-icon' src='./img/Search-icon.png' />
                    </NavLink>
                </div>
                <div className='burger-list'>
                    <NavLink to='/'><strong>홈</strong></NavLink>
                    <NavLink to='About'><strong>더보기</strong></NavLink>
                </div>

            </div>
        </>

    );
}

export default Header;