import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

interface LinkButtonProps {
    text: string;
    href: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({text, href}) => {
    return (
        <Link to={href} className={styles.button}>{text}</Link>
    );
}