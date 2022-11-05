import React from 'react';
import styles from './PathView.module.css'
import { List } from '../../components/List/List'
import { Header } from '../../components/Header/Header'
import mockData from '../../mocks/searchMock.json'
import {MapResponse} from '../../types'

interface PathViewProps {

}

export const PathView: React.FC<PathViewProps> = () => {

const data = JSON.parse(JSON.stringify(mockData)) as MapResponse;

    return (
        <>
        <Header title="USOS"/>
        <main className={styles.container} >
            <h1 className={styles.heading}>Twoja trasa</h1>
            <p className={styles.subheading}>Naciśnij na nazwę aby zobaczyć szczegóły budynku lub miejsca.</p>
            <List items={data.path} floors={data.floors}/>
        </main>
        </>
    )
}