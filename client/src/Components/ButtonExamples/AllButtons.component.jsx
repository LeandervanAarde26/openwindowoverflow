import React from 'react';
import Button from '../Button/Button.component';
import Discord from "../../Assets/Discord.png"
import Github from "../../Assets/Github.png"
import "./AllButton.styles.scss"

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
                children={
                    <>
                        <img src={Discord}
                            style={{ height: 50 }} />
                        <p>Join the Discord</p></>
                } 
                buttonSize={"discordId"}
                />
            <br />
            
            <Button
                buttonType={'outline'}
                children={'This is a secondary button'} />

            <br />
            <Button
                buttonType={'github'}
                children={
                    <>
                        <img src={Github}
                            style={{ height: 50 }} />
                        <p>View Github</p>
                    </>
                } />
            <br />

            <Button
                buttonType={'black'}
                children={"This is a black Button"}
            />
        </div>
    );
};

export default AllButtons;