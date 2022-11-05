import React, {useEffect, useRef} from 'react';
import {Navigate} from 'react-router-dom';
import * as d3 from 'd3';

import { useAppContext } from '../../context/AppContext'

import { LinkButton } from '../../components/LinkButton/LinkButton'
import { Header } from '../../components/Header/Header'
import { Spinner } from '../../components/Spinner/Spinner'

import CW from '../../images/CW.png'
import BT from '../../images/BT.png'

import styles from './MapView.module.css'
import mapView from '../../images/BT.png'
import mockData from '../../mocks/searchMock.json'
import {MapResponse} from '../../types'


interface MapViewProps {

}

export const MapView: React.FC<MapViewProps> = () => {

    console.log('render mapView')

    const ref = useRef(null) 
    const { state } = useAppContext()



    useEffect(() => {
        if(state.mapResponseData){
            const filteredData = state.mapResponseData.path.filter( point => point.floors[0] === state.currentChosenFloor)

            const svgRef = d3.select(ref.current)
            filteredData.map(
                point => {
                    const area = JSON.parse(JSON.parse(JSON.stringify(point.floorArea)));
                    return (
                        svgRef.append('polygon') 
                        .attr('points', `${area[state.currentChosenFloor].join(" ")}`).
                        attr('fill', '#001D3D').attr('opacity', '0.3') 
                    )  
                }
            )
        }
        
    }, [])

    if(!state.mapResponseData?.path){
        return <Spinner/>
    }

    //249,36 358,36 363,104 347,104 347,120 275,120 275,92 249,92
    //359,49 400,49 400,311 380,310 372,223 370,194 364,120 346,120 346,104 363,104

    if(!state.currentChosenFloor){
        return <Navigate to="/" />
    }

    const currentFloor = state.mapResponseData.floors.find(floor => {

        console.log('floor')
        console.log(floor)
        console.log('state.currentChosenFloor')
        console.log(state.currentChosenFloor)

        return (
            floor.id == state.currentChosenFloor as any
        )
    }) 

    console.log('currentFloor')
    console.log(currentFloor)

    const cf = currentFloor!.image!.url as any

    const imgSrc = ( cf === '/images/CW.png') ? CW : BT;


    return (
        <>
            <Header title="USOS - Uprzejmie Ssij OS" />
            <svg ref={ref} width={400} height={400}/>
            <div className={styles.container} > 
                <img src={imgSrc} className={styles.img} />
                <div className={styles.buttonContainer}>
                <LinkButton href="/Path" text="Wróć do widoku trasy"/>
                </div>
            </div>
        </> 
    )
}