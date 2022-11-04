import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { useState } from 'react'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  const { state, dispatch } = useAppContext()
  let navigate = useNavigate()
  const [value, setVal] = useState()
  const handleInput = (e: any) => {
    const val = e.target.value
    setVal(val)
  }
  return (
    <>
      <Header title="kutas" />
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

      <div className="downPanel" style={{ textAlign: 'center' }}>
        <p>...lub wpisz liczbę pod kodem QR:</p>
        <input placeholder="6 cyfrowy kod" onChange={e => handleInput(e)}></input>
        <Button text="Submit" onClick={() => navigate('/search/' + value)}></Button>
      </div>
    </>
  )
}
