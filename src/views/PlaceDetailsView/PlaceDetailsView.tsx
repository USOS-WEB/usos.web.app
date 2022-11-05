import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import i110210 from '../../images/points/110210.jpg'
import i111021 from '../../images/points/111021.jpg'
import i111022 from '../../images/points/111022.jpg'
import i111027 from '../../images/points/111027.jpg'
import i111028 from '../../images/points/111028.jpg'
import i111029 from '../../images/points/111029.jpg'
import i142355 from '../../images/points/142355.jpg'
import i192834 from '../../images/points/192834.jpg'
import i333111 from '../../images/points/333111.jpg'
import i342461 from '../../images/points/342461.jpg'
import i555551 from '../../images/points/555551.jpg'
import i666111 from '../../images/points/666111.jpg'
import i666123 from '../../images/points/666123.jpg'
import i769221 from '../../images/points/769221.jpg'
import i777700 from '../../images/points/777700.jpg'
import i785312 from '../../images/points/785312.jpg'
import i873686 from '../../images/points/873686.jpg'
import i987658 from '../../images/points/987658.jpg'
import styles from './PlaceDetails.module.css'

const PlaceDetailsView = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const images: any = {
    '/images/points/987658.jpg': i987658,
    '/images/points/873686.jpg': i873686,
    '/images/points/785312.jpg': i785312,
    '/images/points/777700.jpg': i777700,
    '/images/points/769221.jpg': i769221,
    '/images/points/666123.jpg': i666123,
    '/images/points/666111.jpg': i666111,
    '/images/points/555551.jpg': i555551,
    '/images/points/342461.jpg': i342461,
    '/images/points/333111.jpg': i333111,
    '/images/points/192834.jpg': i192834,
    '/images/points/142355.jpg': i142355,
    '/images/points/111029.jpg': i111029,
    '/images/points/111028.jpg': i111028,
    '/images/points/111027.jpg': i111027,
    '/images/points/111022.jpg': i111022,
    '/images/points/111021.jpg': i111021,
    '/images/points/110210.jpg': i110210,
  }

  return (
    <>
      <Header title="Uniwersalny System Ochrony Studentów" />
      <div className={styles.container}>
        <h2>{state.item.name}</h2>
        <img className={styles.image} src={images[state.item.img]}></img>
        <p>{state.item.description}</p>
        <p className={styles.header}>Lista pięter</p>
        {
          <ul>
            {state.item.floors.map((floor: any) => (
              <li>{floor}</li>
            ))}
          </ul>
        }
      </div>
      <Button
        text="Wróć do widoku trasy"
        onClick={() => {
          navigate('/Path')
        }}
      ></Button>
    </>
  )
}

export default PlaceDetailsView
