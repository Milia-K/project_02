import React from "react";
import {
    NavLink
} from "react-router-dom";
import './navigation.scss'


export default function Navigation() {
    return (
            <div>
                <nav className="navigation" >
                    <ul >
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list">Words</NavLink>
                        </li>
                        <li>
                            <NavLink to="/game">Game</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mywords">My words</NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
    );
}
