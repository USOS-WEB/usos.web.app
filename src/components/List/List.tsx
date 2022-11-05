import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import styles from './List.module.css';
import {PathPoint, Floor} from '../../types'
import building from '../../images/building.svg'

interface ListProps {
    items: PathPoint[];
    floors: Floor[];
}
 
export const List: React.FC<ListProps> = ({items, floors}) => {


    let currentFloor = ''
    const { dispatch } = useAppContext()

    function changeCurrentFloor(){
        dispatch({type: 'CHANGE_CURRENT_CHOSEN_FLOOR', payload: currentFloor})
    }

    function generateTitle(item: PathPoint){

        console.log('floors');
        console.log(floors);
        console.log('item.floors[0]')
        console.log(item.floors[0])


        if (currentFloor !== item.floors[0]){
            currentFloor = item.floors[0];
            const chosenFloor = floors.find(floor => { console.log('floor'); console.log(floor);  return floor.id == item.floors[0] as any})
            console.log('chosenFloor')
            console.log(chosenFloor)
            return (<div className={styles.titleContainer}>
                <div className={styles.floor}>
                <img src={building} className={styles.image}/>
                {/*  @ts-ignore */}
                <h2>{chosenFloor.name}</h2> 
            </div>
            <div className={styles.showMapButtonContainer}>
                <Link to='/Map' onClick={changeCurrentFloor} className={styles.showMapButton}>Wyświetl mapę piętra</Link>
            </div>
            </div>)
        }
        return <div></div>
    }

    return (
        <ol className={styles.list}>
            { items.map( (item, index) => {
                return (
                    <>
                        {generateTitle(item)}
                        <li className={styles.listItem}>
                            <h4 className={styles.index}>{index}.</h4>
                            <p>{item.name}</p>
                        </li>
                    </>
                )
            }) }
        </ol>
    )
}