/* React */
import React from 'react';

/* Styling */
import "./AllButton.styles.scss"

/* Components */
import Button from '../Button/Button.component';

const AllButtons = () => {
    return (
        <div>
            <Button
                buttonType={'primary'}
                children={"This is a primary Button"}
                buttonSize={"halfSize"}
            />

            <Button
                buttonType={'secondary'}
                children={'This is a secondary button'} 
                buttonSize={"giveButtonId"}/>
    

            <Button
                buttonType={'discord'}
                buttonSize={"discordId"}
            />
            <br />
            
            <Button
                buttonType={'outline'}
                children={'This is a secondary button'} />

            <br />
            <Button buttonType={'github'} />
            <br />

            <Button
                buttonType={'black'}
                children={"This is a black Button"}
            />
        </div>
    );
};

export default AllButtons;