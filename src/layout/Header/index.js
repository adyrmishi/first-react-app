import React from "react";
import { NavLink } from 'react-router-dom';

import { BackButton } from "../../components";
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to='/' activeClassName="current"><i class="bi bi-house fa-3x"></i></NavLink>
            <NavLink to='/tour' activeClassName="current"><i class="bi bi-calendar-event"></i></NavLink>
            <BackButton />
        </nav>
    );
};

export default Header;