import React from "react";
import styles from "./IndividualQuestionContainer.module.scss"

const IndividualQuestionContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            {/* <Icon
                        icon={ic_answers}
                    /> */}
            </div>
            <h4>Leander van Aarde</h4>
            <h5>29 June 2021 @ 21:00</h5>
            <p>Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this</p>
        </div>
    );
};

export default IndividualQuestionContainer;