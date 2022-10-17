import React from 'react';
import  SyntaxHighlighter  from 'react-syntax-highlighter/dist/cjs/prism';
import styles from "./CodePreview.module.scss";

const CodePreview = ({ children }) => {
    return (
        <div className={styles.code}>
            <SyntaxHighlighter language="javascript">
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodePreview;