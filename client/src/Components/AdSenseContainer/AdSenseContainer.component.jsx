/* React */
import React, { useEffect } from 'react';

/* Styling */
import styles from "./AdSenseContainer.module.scss";

const AdSenseContainer = () => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log('DID IT!!');
    }, [])

    return (
        <div className={styles.AdContainer}>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-6509798972020180"
                data-ad-slot="9401344426"
                data-adtest="on"
                data-ad-format="auto"
                data-full-width-responsive="true"/>
        </div>
    );
};

export default AdSenseContainer