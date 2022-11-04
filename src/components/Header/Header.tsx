import styles from './Header.module.css';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
    return (
    <header className={styles.container}>{title}</header>
    );
}