import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({text, onClick, disabled=false}) => {
    return (
        <button disabled={disabled} className={styles.button} onClick={onClick}>{text}</button>
    );
}