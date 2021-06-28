import React from 'react';
import { useDispatch } from 'react-redux';
import Spin from 'react-reveal/Spin';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch( uiOpenModal() );
    }


    return (
        <Spin>
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
        </Spin>
    )
}
