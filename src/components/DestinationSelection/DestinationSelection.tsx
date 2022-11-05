import styles from './DestinationSelection.module.css';
import pointsMock from '../../mocks/pointsMock.json';
import { Selection } from '../../components/Selection/Selection'
import reportWebVitals from '../../reportWebVitals';

interface DestinationSelectionProps {
    caption: string;
    filterText: string;
}

export const DestinationSelection: React.FC<DestinationSelectionProps> = ({caption, filterText}) => {

    const rooms = JSON.parse(JSON.stringify(pointsMock));
    const roomElements: Array<JSX.Element> = [];

    rooms.points.forEach((room: any) => {
        if (room.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        roomElements.push(
            <Selection name={room.name} key={room.id} />
        )    
    })

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={caption}>{caption}</label>
            <div className={styles.selection}>
                {roomElements}
            </div>
        </div>
    );

}