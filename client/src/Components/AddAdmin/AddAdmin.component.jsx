import React from 'react';
import styles from "./AddAdmin.module.scss";
import Input from '../Input/Input.component';

const AddAdmin = () => {
    return (
        <div className={styles.container}>

            <h3>Add an Admin</h3>
            <Input
                // id={error ? styles.err : ""}
                label={"Enter Github Link"}
                value={""}
                type="text"
                name="githubLink"
                required={true}
                // onChange={handleChange}
            />
        </div>
    );
};

export default AddAdmin;