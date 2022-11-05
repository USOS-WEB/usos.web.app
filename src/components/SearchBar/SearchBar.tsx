import styles from './SearchBar.module.css';

interface SearchBarProps {
    caption: string;
    source: string;
    alt: string;
    filterText: string;
    onFilterTextChange: (newText: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({caption, source, alt, filterText, onFilterTextChange}) => {
    return (
        <>
            <label htmlFor={caption}>{caption}</label>
            <div className={styles.searchbar}>
                <img src={source} alt={alt}></img>
                <input name={caption} id={caption} value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} className={styles.input} ></input>
            </div>
        </>
    );
}