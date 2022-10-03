import React from 'react';
import Button from '../../Components/Button/Button.component';

import styles from './Components.module.scss'
import Icon from '../../Components/Icon/Icon';
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import Tags from '../../Components/Tags/Tags.component';
import ContactCard from '../../Components/Contact/ContactCard';





const Components = () => {
    const testerTags = ['html', 'css', 'scss', 'React']
    const visuals = testerTags.map((tag, index) => <Tags key={index} title={tag} />)
    const reply = "Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this"
    const right = "Article Posted by User"
    const user = "Leander van Aarde"
    const date = "29 June 2021 @ 21:00"

    return (
       <ContactCard/>
    );
};

export default Components;