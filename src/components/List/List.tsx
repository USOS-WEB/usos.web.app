import React from 'react';
import styles from './List.module.css';
import {PathPoint} from '../../types'

interface ListProps {
    items: PathPoint[];
}

export const List: React.FC<ListProps> = ({items}) => {
    return (
        <ol className={styles.list}>
            { items.map( item => (
                <li>{item.name}</li>
            )) }
        </ol>
    )
}