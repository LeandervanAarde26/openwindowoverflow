/* Styling */
import styles from './SearchBar.module.scss';

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import search from "../../Assets/Icons/ic_search.svg"

const SearchBar = ({placeholder, onClick, label, handleSearch}) => {

    const onChange = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input
                placeholder={placeholder}
                onChange={onChange}
            />

            <div 
                className={styles.container__button}
                onClick={onClick}
            >
                <h1>{label}</h1>

{/*                 <Icon
                    className={styles['container__button--icon']}
                    icon={search}
                /> */}
            </div>
        </div>
    );
};

export default SearchBar;