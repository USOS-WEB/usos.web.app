import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  const { state, dispatch } = useAppContext()
  let navigate = useNavigate()

  return (
    <>
      <div>{title}</div>
      <div>{state.appTitle}</div>
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
    </>
  )
}
