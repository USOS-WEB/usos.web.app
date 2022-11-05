import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'

import styles from './MapView.module.css'
import mapView from '../../images/Map.png'
import mockData from '../../mocks/searchMock.json'
import {MapResponse} from '../../types'


interface MapViewProps {

}

export const MapView: React.FC<MapViewProps> = () => {

    const data = JSON.parse(JSON.stringify(mockData)) as MapResponse;

    const ref = useRef(null) 

    useEffect(() => {
        // const svgRef = d3.select(ref.current)
        // data.path.map(
        //     point => (
        //         svgRef.append('polygon')
        //         .attr('points', `${point.mapCoordinates.join(" ")}`).
        //         attr('fill', '#001D3D').attr('opacity', '0.3') 
        //     ) 
        // )
    })

    //249,36 358,36 363,104 347,104 347,120 275,120 275,92 249,92
    //359,49 400,49 400,311 380,310 372,223 370,194 364,120 346,120 346,104 363,104
 
    return (
        <>

        <Header title="USOS - Uprzejmie Ssij OS" />
        <svg ref={ref} width={400} height={400}/>
        <div className={styles.container} >
            <img src={mapView} className={styles.img} />
            {/* <List items={data.path}/> */}
            <div className={styles.buttonContainer}>
            <Button onClick={() => {console.log('')}} text="Wróć do widoku trasy"/>
            </div>
        </div>
        </>
    )
}