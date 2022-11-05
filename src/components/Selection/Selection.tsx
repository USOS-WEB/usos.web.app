import styles from './Selection.module.css';
import pinIcon from '../../images/pin.svg'

interface SelectionProps {
    name: string
} 

export const Selection: React.FC<SelectionProps> = ({name}) => {
    return (
        <div className={styles.selection}>
            <img src={pinIcon} alt="pin icon"></img>
            <span>{name}</span>
        </div>
    );
}