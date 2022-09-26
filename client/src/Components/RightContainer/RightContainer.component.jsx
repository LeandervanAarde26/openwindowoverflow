import React from 'react';
import styles from "./RightContainer.module.scss"
import Button from '../Button/Button.component';
import Discord from "../../Assets/Discord.png";
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
const RightContainer = () => {
    return (
        <div className={styles.container}>
            {/* Insert followed Tags Component Here */}

            {/* End followed Tags Component Here */}

            <Button
                buttonType={'discord'}
                children={
                    <>
                        <img src={Discord}
                            style={{ height: 50 }} />
                        <p>Join the Discord</p></>
                }
                buttonSize={"discordButton"}
            />

            {/* <AdSenseContainer /> */}

        </div>
    );
};

export default RightContainer;