import styles from './SearchBar.module.scss';

import Icon from '../Icon/Icon';
import search from "../../Assets/Icons/ic_search.svg"

const SearchBar = (props) => {
    return (
        <div className={styles.container}>
            <input
                placeholder={props.placeholder}
                onChange={props.onChange}
            />

            <div 
                className={styles.container__button}
                onClick={props.onClick}
            >
                <h1>{props.label}</h1>

                <Icon
                    className={styles['container__button--icon']}
                    icon={search}
                />
            </div>
        </div>
    );
};

export default SearchBar;