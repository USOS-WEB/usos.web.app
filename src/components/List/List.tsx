import React from 'react';
import styles from './List.module.css';
import {PathPoint, Floor} from '../../types'

interface ListProps {
    items: PathPoint[];
    floors: Floor[];
}
 
export const List: React.FC<ListProps> = ({items, floors}) => {

    let currentFloor = '';

    function generateTitle(item: PathPoint){
        if (currentFloor !== item.floors[0]){
            currentFloor = item.floors[0] as any
            // @ts-ignore
            return <h1>{floors[currentFloor].name}</h1> 
        }
        return <div></div>
    }

    return (
        <ol className={styles.list}>
            { items.map( item => {
                return (
                    <div>
                        {generateTitle(item)}
                        <li>
                            {item.name}
                        </li>
                    </div>
                )
            }) }
        </ol>
    )
}