import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    );
}