import styles from './SearchBar.module.scss';

import Icon from '../Icon/Icon';

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
                    icon={'ic_search'}
                />
            </div>
        </div>
    );
};

export default SearchBar;