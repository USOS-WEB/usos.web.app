import styles from './Selection.module.css';
import pinIcon from '../../images/pin.svg'

interface SelectionProps {
    name: string
    onClick: () => void
} 

export const Selection: React.FC<SelectionProps> = ({name, onClick}) => {
    return (
        <div className={styles.selection} onClick={onClick}>
            <img src={pinIcon} alt="pin icon"></img>
            <span>{name}</span>
        </div>
    );
}