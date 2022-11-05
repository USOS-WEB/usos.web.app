import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { useState } from 'react'
import Spinner from '../../components/Spinner/Spinner'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  const { state, dispatch } = useAppContext()
  let navigate = useNavigate()
  const [value, setVal] = useState()
  const handleInput = (e: any) => {
    const val = e.target.value
    dispatch({ type: 'setQrData', payload: val })
  }

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  return (
    <>
      <Header title="Uniwersalny System Odnalezienia Sal" />
      <br />
      <br />
      <h2 style={{ fontSize: 'bold', paddingLeft: '15px' }}>Nie możesz znaleźć sali?</h2>
      <h3 style={{ paddingLeft: '15px' }}>Zeskanuj najbliższy kod QR...</h3>
      {!isSpinnerVisible && (
        <div style={{ margin: '0 15px' }}>
          <QrReader
            onResult={(result, error) => {
              if (result) {
                dispatch({ type: 'setQrData', payload: result.getText() })
                navigate('/search/' + result.getText())
              }

              if (error) {
              }
            }}
            constraints={{}}
          />
        </div>
      )}

      {!isSpinnerVisible && (
        <div className="downPanel" style={{ textAlign: 'center' }}>
          <p>...lub wpisz liczbę pod kodem QR:</p>
          <input placeholder="6 cyfrowy kod" onChange={e => handleInput(e)}></input>
          <br />
          <br />
          <Button
            text="Submit"
            onClick={() => {
              if (state.qrData) {
                setIsSpinnerVisible(true)
                setTimeout(() => navigate('/search/' + state.qrData), 5000)
              }
            }}
          ></Button>
          <br />
          <footer>
            <h5 style={{ padding: '10px' }}>
              Pamiętaj aby zezwolić przeglądarce na korzystanie z kamery. {<br />}
              Brak Permisji może oznaczać czarny ekran.
            </h5>
          </footer>
        </div>
      )}

      {isSpinnerVisible && <Spinner />}
    </>
  )
}
