import React, { useEffect } from 'react';
import styles from "./AdSenseContainer.module.scss";

export default class AdSenseContainer extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() {
        return (
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-6509798972020180"
                    data-ad-slot="9401344426"
                    data-adtest="on"
                    data-ad-format="auto"
                    data-full-width-responsive="true"/>
        );

    }
}