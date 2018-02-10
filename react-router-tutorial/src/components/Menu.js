import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    const activateStyle = {
        color : 'green',
        fontSize : '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activateStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activateStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activateStyle}>About foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activateStyle}>Posts</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
