import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import logo from "../../assets/img/simple-calendar-app-icon.png";


export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-primary mb-4">
           
            <img  src={logo} alt="Calendar" style={{width: "45px"}}/>  

            <span className="navbar-brand ">
                { name }
            </span>
            
            <button 
                 className="btn btn-success mr-4" data-toggle="button" aria-pressed="false" autocomplete="off"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
