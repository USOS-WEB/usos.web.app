import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { useEffect, useState } from 'react'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  console.log('render ScanQRView')
  const { state, dispatch } = useAppContext()
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    if (result) {
      dispatch({ type: 'setQrData', payload: result })
      navigate('/Search/' + result)
    }
  }, [result])

  return (
    <>
      <Header title="Uniwersalny System Odnalezienia Sal" />
      <br />
      <br />
      <h2 style={{ fontSize: 'bold', paddingLeft: '15px' }}>Nie możesz znaleźć sali?</h2>
      <h3 style={{ paddingLeft: '15px' }}>Zeskanuj najbliższy kod QR...</h3>
      <div style={{ margin: '0 15px' }}>
        <QrReader
          onResult={r => {
            if (!!r) {
              if (r.getText() !== result) {
                setResult(r.getText())
              }
            }
          }}
          constraints={{ facingMode: 'environment' }}
        />
      </div>

      <div className="downPanel" style={{ textAlign: 'center' }}>
        <p>...lub wpisz liczbę pod kodem QR:</p>
        <input placeholder="6 cyfrowy kod" onChange={e => setInputValue(e.target.value)}></input>
        <br />
        <br />
        <Button
          text="Submit"
          onClick={() => {
            navigate('/Search/' + inputValue)
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
    </>
  )
}
