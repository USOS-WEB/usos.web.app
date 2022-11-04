import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  const { state } = useAppContext()

  return (
    <>
      <div>{title}</div>
      <div>{state.appTitle}</div>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            console.log(result)
          }

          if (error) {
          }
        }}
        constraints={{}}
      />
    </>
  )
}
