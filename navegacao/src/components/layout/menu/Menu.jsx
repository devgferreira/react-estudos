import './Menu.css'
import React from "react";
import { Link } from 'react-router-dom'; 

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/param/123">Param</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu

