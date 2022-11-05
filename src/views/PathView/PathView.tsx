import React from 'react';
import styles from './PathView.module.css'
import { List } from '../../components/List/List'
import { Header } from '../../components/Header/Header'
import { useAppContext } from '../../context/AppContext'
import { Spinner } from '../../components/Spinner/Spinner'

interface PathViewProps {

}

export const PathView: React.FC<PathViewProps> = () => {


  console.log('render PathView')

    const { state } = useAppContext()

    // if(!state.currentChosenFloor){
    //     return <Navigate to="/" />
    // } 

    if(!state.mapResponseData?.path.length){
        return <Spinner/>
    }

    return (
        <>
        <Header title="USOS"/>
        <main className={styles.container} >
            <h1 className={styles.heading}>Twoja trasa</h1>
            <p className={styles.subheading}>Naciśnij na nazwę aby zobaczyć szczegóły budynku lub miejsca.</p>
            <List items={state.mapResponseData.path} floors={state.mapResponseData.floors}/>
        </main>
        </>
    )
}