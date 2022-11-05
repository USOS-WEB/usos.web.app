import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import { useEffect, useState } from 'react'

import styles from './ScanQRView.module.css'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  console.log('render ScanQRView')
  const { state, dispatch } = useAppContext()
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    if(inputValue.length === 6){
      dispatch({ type: 'setQrData', payload: inputValue })
    }
  } , [inputValue])

  let navigate = useNavigate()

  useEffect(()=>{
    if(result){
      dispatch({ type: 'setQrData', payload: result })
      navigate('/Search/' + result)
    }
  }, [result])
  
  return (
    <>
      <Header title="Uniwersalny System Odnalezienia Sali" />
      <br />
      <h2 className={styles.texth}>Nie możesz znaleźć sali?</h2>
      <h3 className={styles.text}>Zeskanuj najbliższy kod QR...</h3>
        <div style={{ margin: '0 15px' }}>
          <QrReader
            onResult={(r) => {
              if (!!r) {
                if(r.getText() !== result){
                  setResult(r.getText())
                }
              }
            }}
            constraints={{}}
          />
        </div>
       
        <div className="downPanel">
          <p className={styles.text}>...lub wpisz liczbę pod kodem QR:</p>
          <div className={styles.center}>
          <input maxLength={6} placeholder="6-cyfrowy kod" onChange={e => setInputValue(e.target.value)} className={styles.qrInput}></input>
          <br />
          <br />
          <Button
            text="Zatwierdź"
            onClick={() => {
              navigate('/Search/' + state.qrData)
            }} 
          ></Button>
          </div>
          <br />
          <footer>
            <p className={styles.footer}>
              Pamiętaj aby zezwolić przeglądarce na korzystanie z kamery.
              Brak Permisji może oznaczać czarny ekran.
            </p>
          </footer>
        </div>
    </>
  )
}
