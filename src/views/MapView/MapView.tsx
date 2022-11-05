import React, {useEffect, useRef} from 'react';
import {Navigate} from 'react-router-dom';
import * as d3 from 'd3';

import { useAppContext } from '../../context/AppContext'

import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'

import styles from './MapView.module.css'
import mapView from '../../images/Map.png'
import mockData from '../../mocks/searchMock.json'
import {MapResponse} from '../../types'


interface MapViewProps {

}

export const MapView: React.FC<MapViewProps> = () => {

    // implement useContext 
    const data = JSON.parse(JSON.stringify(mockData)) as MapResponse;

    const ref = useRef(null) 
    const { state } = useAppContext()

    console.log('state');
    console.log(state);

    const filteredData = data.path.filter( point => point.floors[0] === state.currentChosenFloor)

    useEffect(() => {
        const svgRef = d3.select(ref.current)
        filteredData.map(
            point => {
                console.log('point')
                console.log(point)
                const area = JSON.parse(JSON.parse(JSON.stringify(point.floorArea)));
                console.log('area')
                console.log(area)
                return (
                    svgRef.append('polygon') 
                    .attr('points', `${area[state.currentChosenFloor].join(" ")}`).
                    attr('fill', '#001D3D').attr('opacity', '0.3') 
                )  
            }
        )
    })

    //249,36 358,36 363,104 347,104 347,120 275,120 275,92 249,92
    //359,49 400,49 400,311 380,310 372,223 370,194 364,120 346,120 346,104 363,104

    if(!state.currentChosenFloor){
        return <Navigate to="/" />
    }
 
    return (
        <>
            <Header title="USOS - Uprzejmie Ssij OS" />
            <svg ref={ref} width={400} height={400}/>
            <div className={styles.container} >
                <img src={mapView} className={styles.img} />
                {/* <List items={filteredData} floors={{ [state.currentChosenFloor]: data.floors.find( floor => floor === state.currentChosenFloor as any) } as any} />  */}
                <div className={styles.buttonContainer}>
                <LinkButton href="/Path" text="Wróć do widoku trasy"/>
                </div>
            </div>
        </> 
    )
}