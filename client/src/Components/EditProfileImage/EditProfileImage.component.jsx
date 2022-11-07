import React from 'react';
import Button from '../Button/Button.component';
import styles from "./EditProfileImage.module.scss"
import ProfileCard from '../Profile/ProfileCard';
const EditProfileImage = ({images, changeImage, selected, closeModal, selectImage}) => {

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalBody}>
            <h3>Choose a new Profile Image!</h3>
                <div className={styles.imageContainer}>
                    {images.map( image => ((<ProfileCard key={image} profileImage={image} function={selected}/>)))}
                </div>

                    <div className={styles.buttonContainer}>
                    {/* Link didnt work because it is looking for a local path to redirect ti, a href takes anylink */}
                        <Button
                            buttonType={"primary"}
                            children={"Update Profile Image"}
                            onClick={changeImage}
                        />
                        <Button
                            buttonType={"outline"}
                            children={"Cancel update"}
                            onClick={closeModal}
                        />
                </div>
            </div>
        </div>
    );
};

export default EditProfileImage;