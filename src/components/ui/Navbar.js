import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const handleClick = async () => {   
        dispatch(logout());        
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark custom-nav">
                
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Radio Pa Cuba
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                        onClick={handleClick}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}