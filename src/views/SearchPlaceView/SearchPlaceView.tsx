import { useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import { Header } from '../../components/Header/Header' 
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';

import { SearchBar } from '../../components/SearchBar/SearchBar'
import { LinkButton } from '../../components/LinkButton/LinkButton'

import buildingIcon from '../../images/building.svg'
import searchIcon from '../../images/search.svg'

import styles from './SearchPlaceView.module.css';
import { DestinationSelection } from '../../components/DestinationSelection/DestinationSelection'

import {fetchPossiblePoints, fetchPath} from '../../api'


type NavigateProps = {
  to: string;
  replace: boolean;
  state: any;
}

const Navigate: React.FC<NavigateProps> = ({ to, replace, state }) => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  useEffect(() => {
    navigateRef.current(to, { replace, state });
  }, [to, replace, state]);

  return null;
};



export const SearchPlaceView = () => {

  console.log('render SearchPlaceView')

  const {startId} = useParams();
  const { dispatch } = useAppContext()


  const [isLoading, setIsLoading] = useState(false)

  const [currentChosenPathName, setCurrentChosenPathName] = useState('');
  const [points, setPoints] = useState([])
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    fetchPossiblePoints().then((result: any) => { setPoints(result.points as any)});
  }, [])

  function setData(result: any){
    dispatch({ type: 'CHANGE_MAP_RESPONSE_DATA', payload: result })
  }

  async function fetchChosenPath(){
    if(startId && selectedId){
      setIsLoading(true);
      fetchPath(startId, selectedId).then(result => { setIsLoading(false); setData(result); })
    }
  }

  function selectPathId(point: any){
    setSelectedId(point.id)
    setCurrentChosenPathName(point.name)
  }

  if(!points.length || isLoading){
    return <h3>Is Loading</h3>
  }
  
  return (
    <div className={styles.page}> 
      <Header title='Uniwersalny System Odnalezienia Sali' />
      <div className={styles.container}>
          <div className={styles.searchbars}>
              <SearchBar caption='Wybierz budynek' source={buildingIcon} alt='budynek' filterText={"CW/BT"} onFilterTextChange={() => {}} />
              <SearchBar caption='Wybierz salę' source={searchIcon} alt='wyszukiwanie' filterText={currentChosenPathName} onFilterTextChange={() => {}}   />
          </div>
          <DestinationSelection caption='Wybierz miejsce docelowe' filterText={''} points={points as any} onClick={selectPathId} selectedId={selectedId}/>
          <LinkButton href="/Path" text="Nawiguj" onClick={fetchChosenPath}/>
      </div>
    </div>
  )
}
