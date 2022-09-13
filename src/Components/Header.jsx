import { Routes, Route, Router, NavLink, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import About from './About';
import Home from './Home';

import { HiHome, HiMenu } from "react-icons/hi";
import { FaCog, FaSearch, FaTools } from "react-icons/fa";

import './Css/Header.css';

function Header() {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="Header-nav" data-isopen={expanded ? "true" : "false"}>
                <img className='Main-logo' src='./img/Logo.png' />
                <HiMenu onClick={() => setExpanded(!expanded)} fontSize={30} className='menu-burger'/>
                <div className='Nav-list'>
                    <NavLink to='About'><strong><FaCog fontSize={20} className='burger-list-icon' /></strong></NavLink>
                </div>
                <div className='Nav-list'>
                    <NavLink to='/'><strong><HiHome fontSize={20} className='burger-list-icon'/></strong></NavLink>
                </div>
                <div className='Nav-list'>
                    <NavLink to='Search'>
                        <FaSearch className='Search-icon' fontSize={23} />
                    </NavLink>
                </div>
                <div className='burger-list'>
                    <p onClick={() => setExpanded(!expanded)}><NavLink to='/'><strong><HiHome fontSize={20} className='burger-list-icon'/>홈</strong></NavLink></p>
                    <p onClick={() => setExpanded(!expanded)}><NavLink to='Search'><strong><FaSearch fontSize={20} className='burger-list-icon' />검색</strong></NavLink></p>
                    <p onClick={() => setExpanded(!expanded)}><NavLink to='About'><strong><FaCog fontSize={20} className='burger-list-icon' />설정</strong></NavLink></p>
                </div>
            </div>
        </>

    );
}

export default Header;