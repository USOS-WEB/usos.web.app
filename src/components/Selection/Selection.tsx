import styles from './Selection.module.css';
import pinIcon from '../../images/pin.svg'

interface SelectionProps {
    name: string
    onClick: () => void
    isActive: boolean
} 

export const Selection: React.FC<SelectionProps> = ({name, onClick, isActive}) => {
    return (
        <div className={isActive ? styles.selectionActive: styles.selection} onClick={onClick}>
            <img src={pinIcon} alt="pin icon"></img>
            <span>{name}</span>
        </div>
    );
}