import React from 'react';
import { useAppContext } from '../../context/AppContext'
import {SET_APP_TITLE} from '../../context/Actions'

interface MapViewProps{
}

export const MapView: React.FC<MapViewProps> = () => {

const { state, dispatch } = useAppContext()

    function changeTitle(){
        dispatch({type: SET_APP_TITLE, payload: 'USOS.THE.BEST'})
    }
 
    return (
        <div>
            <h1>{state.appTitle}</h1>
            <button onClick={changeTitle}>changeTitle</button>
        </div>
    )
}