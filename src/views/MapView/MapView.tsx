import React, {useEffect, useRef} from 'react';
import { useAppContext } from '../../context/AppContext'
import {SET_APP_TITLE} from '../../context/Actions'
import styles from './MapView.module.css'
import mapView from '../../images/Map.png'
import { Button } from '../../components/Button/Button'
import { List } from '../../components/List/List'
import mockData from '../../mocks/searchMock.json'
import {MapResponse} from '../../types'
import * as d3 from 'd3';

interface MapViewProps {

}

export const MapView: React.FC<MapViewProps> = () => {

const { state, dispatch } = useAppContext()

const data = JSON.parse(JSON.stringify(mockData)) as MapResponse;

const ref = useRef(null)

useEffect(() => {
    // const svgRef = d3.select(ref.current)
    // data.path.map(
    //     point => (
    //         svgRef.append('polygon')
    //         .attr('points', `${point.mapCoordinates.join(" ")}`)
    //         .attr('fill', 'green').attr('opacity', '0.1')
    //     ) 
    // )


            d3.select(ref.current).append('polygon')
            .attr('points', `359,49 400,49 400,311 380,310 372,223 370,194 364,120 346,120 346,104 363,104 `)
            .attr('fill', '#001D3D').attr('opacity', '0.3') 
})


function getPath(){
    
}
 
    function changeTitle(){
        dispatch({type: SET_APP_TITLE, payload: 'USOS.THE.BEST'})
    }

    //249,36 358,36 363,104 347,104 347,120 275,120 275,92 249,92

    //359,49 400,49 400,311 380,310 372,223 370,194 364,120 346,120 346,104 363,104
 
    return (
        <>
        <svg ref={ref} width={400} height={400}/>
        <div className={styles.container} >
            <img src={mapView} className={styles.img} />
            <List items={data.path}/>
            <Button onClick={changeTitle} text='changeTitle' /> 
        </div>
        </>
    )
}