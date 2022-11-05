import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
    text: string;
    href: string;
    onClick?: () => void
}

export const LinkButton: React.FC<LinkButtonProps> = ({text, href, onClick}) => {
    return (
        <Link to={href} className={styles.button} onClick={onClick}>{text}</Link>
    );
}