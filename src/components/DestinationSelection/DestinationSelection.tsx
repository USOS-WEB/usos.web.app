import styles from './DestinationSelection.module.css';
import { Selection } from '../../components/Selection/Selection'

interface DestinationSelectionProps {
    caption: string;
    filterText: string;
    points: any[]
    onClick: (point: any) => void
    selectedId: string
}

export const DestinationSelection: React.FC<DestinationSelectionProps> = ({caption, points, onClick, selectedId}) => {

    // const rooms = JSON.parse(JSON.stringify(pointsMock));
    // const roomElements: Array<JSX.Element> = [];

    // rooms.points.forEach((room: any) => {
    //     if (room.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    //         return;
    //     }
    //     roomElements.push(
    //         <Selection name={room.name} key={room.id} />
    //     )    
    // })

    const realPoints = points;

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={caption}>{caption}</label>
            <div className={styles.selection}>
                {realPoints.length && realPoints.map( (point: any) => <Selection isActive={selectedId === point.id} name={point.name} key={point.id} onClick={() => { onClick(point)}}/>)}
            </div>
        </div>
    );

}