import styles from './SearchBar.module.css';

interface SearchBarProps {
    caption: string;
    source: string;
    alt: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({caption, source, alt}) => {
    return (
        <>
            <label htmlFor={caption}>{caption}</label>
            <div className={styles.searchbar}>
                <img src={source} alt={alt}></img>
                <input name={caption} id={caption} className={styles.input}></input>
            </div>
        </>
    );
}