import searchMock from '../../mocks/searchMock.json'

const PlaceDetailsView = () => {
  const getData = () => {
    return JSON.parse(JSON.stringify(searchMock))
  }
  return (
    <>
      <h2>{getData().path.name}</h2>
      <br />
      <img src={getData().path.img}></img>
      <br />
      <p>{getData().path.description}</p>
      <br />
      <p style={{ fontWeight: 'bold' }}>Lista pięter</p>
      <ul>
        {getData().path.floors.map((floor: any) => (
          <li>{floor.text}</li>
        ))}
      </ul>
    </>
  )
}

export default PlaceDetailsView
