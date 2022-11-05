import { useAppContext } from '../../context/AppContext'
import React, { useState } from 'react'
import { Header } from '../../components/Header/Header' 

import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Button } from '../../components/Button/Button'

import buildingIcon from '../../images/building.svg'
import searchIcon from '../../images/search.svg'

import styles from './SearchPlaceView.module.css';
import { DestinationSelection } from '../../components/DestinationSelection/DestinationSelection'

export const SearchPlaceView = () => {

  const [filterText, setFilterText] = useState('');

  const onFilterTextChange = (newText: string) => {
    console.log(newText)
    setFilterText(newText);
  }

  return (
    <div className={styles.page}>
      <Header title='Uniwersalny System Odnalezienia Sali' />
      <div className={styles.container}>
          <div className={styles.searchbars}>
              <SearchBar caption='Wybierz budynek' source={buildingIcon} alt='budynek' filterText={"CW/BT"} onFilterTextChange={() => console.log('todo later')} />
              <SearchBar caption='Wybierz salę' source={searchIcon} alt='wyszukiwanie' filterText={filterText} onFilterTextChange={onFilterTextChange} />
          </div>
          <DestinationSelection caption='Wybierz miejsce docelowe' filterText={filterText}/>
          <Button text="Nawiguj" onClick={() => {console.log("button clicked")}}/>
      </div>
    </div>
  )
}
