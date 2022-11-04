import { useAppContext } from '../../context/AppContext'

interface ScanQRViewProps{
    title: string;
}

export const ScanQRView = ({title}: ScanQRViewProps) => {

const { appTitle } = useAppContext()
 
return (
    <>
        <div>{title}</div>
        <div>{appTitle}</div>
    </>
)

}