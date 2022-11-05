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
      {!isSpinnerVisible && (
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
        </div>
      )}

      {isSpinnerVisible && <Spinner />}
    </>
  )
}
