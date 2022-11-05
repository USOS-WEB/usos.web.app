import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import styles from './List.module.css'
import { PathPoint, Floor } from '../../types'
import building from '../../images/building.svg'

interface ListProps {
  items: PathPoint[]
  floors: Floor[]
}

export const List: React.FC<ListProps> = ({ items, floors }) => {
  let currentFloor = ''
  const { dispatch } = useAppContext()
  const nav = useNavigate()
  function changeCurrentFloor(currentFloor: any) {
    return function () {
      console.log('currentFloor')
      console.log(currentFloor)
      dispatch({ type: 'CHANGE_CURRENT_CHOSEN_FLOOR', payload: currentFloor })
    }
  }

  function generateTitle(item: PathPoint) {
    if (currentFloor !== item.floors[0]) {
      currentFloor = item.floors[0]
      const chosenFloor = floors.find(floor => {
        return floor.id == (item.floors[0] as any)
      })
      const onClick = changeCurrentFloor(item.floors[0])
      return (
        <div className={styles.titleContainer}>
          <div className={styles.floor}>
            <img src={building} className={styles.image} />
            {/*  @ts-ignore */}
            <h2>{chosenFloor.name}</h2>
          </div>
          <div className={styles.showMapButtonContainer}>
            <Link to="/Map" onClick={onClick} className={styles.showMapButton}>
              Wyświetl mapę piętra
            </Link>
          </div>
        </div>
      )
    }
    return <div></div>
  }

  return (
    <ol className={styles.list}>
      {items.map((item, index) => {
        return (
          <>
            <label onClick={() => nav('/PlaceDetails', { state: { item } })}>
              {generateTitle(item)}
              <li className={styles.listItem}>
                <h4 className={styles.index}>{index}.</h4>
                <p>{item.name}</p>
              </li>
            </label>
          </>
        )
      })}
    </ol>
  )
}
