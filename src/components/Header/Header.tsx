import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

    const navigate = useNavigate()
    return (
    <header onClick={() => {
        navigate("/")
    }} className={styles.container}>{title}</header>
    );
}