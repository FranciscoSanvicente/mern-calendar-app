import React from 'react';
import { useDispatch } from 'react-redux'
import Wobble from 'react-reveal/Wobble';
import { eventStartDelete } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch( eventStartDelete() );
    }

    return (
        <Wobble>
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trash"></i>
            <span> Borrar evento </span>
        </button>
        </Wobble>
    )
}
