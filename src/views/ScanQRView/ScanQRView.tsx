import { useAppContext } from '../../context/AppContext'
import { QrReader } from 'react-qr-reader'

interface ScanQRViewProps {
  title: string
}

export const ScanQRView = ({ title }: ScanQRViewProps) => {
  const { appTitle } = useAppContext()

  return (
    <>
      <div>{title}</div>
      <div>{appTitle}</div>
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
