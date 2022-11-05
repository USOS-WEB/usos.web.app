import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import searchMock from '../../mocks/searchMock.json'

const PlaceDetailsView = () => {
  const getData = () => {
    return JSON.parse(JSON.stringify(searchMock))
  }
  let navigate = useNavigate()

  return (
    <>
      <Header title="Uniwersalny System Ochrony Studentów" />
      <h2>{getData().path[0].name}</h2>
      <br />
      <img src={getData().path[0].img}></img>
      <br />
      <p>{getData().path[0].description}</p>
      <br />
      <p style={{ fontWeight: 'bold' }}>Lista pięter</p>
      <ul>
        {getData().path[0].floors.map((floor: any) => (
          <li>{floor}</li>
        ))}
      </ul>
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
