import { useAppContext } from '../../context/AppContext'

interface ScanQRViewProps{
    title: string;
}

export const ScanQRView = ({title}: ScanQRViewProps) => {

const { state } = useAppContext()
 
return (
    <>
        <div>{title}</div>
        <div>{state.appTitle}</div>
    </>
)

}