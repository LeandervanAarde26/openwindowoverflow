import styles from './SearchBar.module.scss';

import Icon from '../Icon/Icon';
import search from "../../Assets/Icons/ic_search.svg"

const SearchBar = ({placeholder, onChange, onClick, label}) => {
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