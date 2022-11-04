import { useAppContext } from '../../context/AppContext'
import { Header } from '../../components/Header/Header' 

import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Button } from '../../components/Button/Button'

import buildingIcon from '../../images/building.svg'
import searchIcon from '../../images/search.svg'

import styles from './SearchPlaceView.module.css';

export const SearchPlaceView = () => {
  return (
    <div className={styles.page}>
      <Header title='Uniwersalny System Odnalezienia Sali' />
      <div className={styles.container}>
          <div className={styles.searchbars}>
              <SearchBar caption='Wybierz budynek' source={buildingIcon} alt='budynek' />
              <SearchBar caption='Wybierz salę' source={searchIcon} alt='wyszukiwanie' />
          </div>
          <Button text="Nawiguj" onClick={() => {console.log("button clicked")}}/>
      </div>
    </div>
  )
}
