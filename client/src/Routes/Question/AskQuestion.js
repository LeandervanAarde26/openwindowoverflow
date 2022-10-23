/* React */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import AWS from "aws-sdk"

/* Styling */
import styles from './AskQuestion.module.scss';

/* Default image */

import defaultImage from "../../Assets/def ASk.png"

/* Components */
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import Tags from '../../Components/Tags/Tags.component';
import Button from '../../Components/Button/Button.component';
import CodePreview from '../../Components/CodePreview/CodePreview.component';
import Input from "../../Components/Input/Input.component"
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { useNavigate } from 'react-router';


const region = "af-south-1";
const bucketName = 'openoverflow'
AWS.config.update({
    accessKeyId: "AKIAWDMDUWDEHUXLLQOB",
    secretAccessKey: "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"
});
const bucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region
})

const AskQuestion = () => {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null);
    const [databaseImage, setDataBaseImage] = useState(null)
    const user = sessionStorage.getItem('currentUser');

    useEffect(() => {

        console.log(databaseImage)
        axios.get('http://localhost:5001/api/getalltags')
            .then(res => {
                setTags(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const [shouldRerender, setShouldRerender] = useState(false);
    /* This will be the rerender useEffect */
    useEffect(() => {
        setShouldRerender(false);
    }, [shouldRerender]);

    const [title, setTitle] = useState("This will be your title");
    const [question, setQuestion] = useState("This will be your question");
    const changeQuestion = (e) => {
        let question = e.target.value;
        setQuestion(question);
    }

    const [code, setCode] = useState(`const function = () => {
    let value = 20;
    // This is a code sample
}`);
    const changeCode = (e) => {
        let code = e.target.value;
        setCode(code);
        console.log(code)
    }

    const [isSearching, setIsSearching] = useState(false);
    const [searchedTags, setSearchedTags] = useState([]);
    const searchTags = (e) => {
        let searchValue = e.target.value;

        if (searchValue.length > 0) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }

        setSearchedTags(tags.map(x => x).filter(x => x.name.toLowerCase().includes(searchValue.toLowerCase())));
    }

    const [tagsSelected, setTagsSelected] = useState([]);
    const selectedTags = (e) => {
        console.log(e);
        let tags = tagsSelected;

        if (!tags.includes(e)) {
            tags.push(e);
            setTagsSelected(tags);
            setShouldRerender(true);
        }
    }

    const removeSelectedTags = (e) => {
        let tags = tagsSelected;
        tags.splice(e, 1);
        setTagsSelected(tags);
        setShouldRerender(true);
    }

    const getImages = async (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        let img = e.target.files[0]
        setDataBaseImage(img)
        // console.log(img.name)
    }

    const postQuestion = async (e) => {

        if (databaseImage == null) {
            let data = {
                title: title,
                author: user,
                question: question,
                code: code,
                tags: tagsSelected,
            }
            axios.post('http://localhost:5001/api/askquestion', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })

        } else {
            const newImage = `https://openoverflow.s3.af-south-1.amazonaws.com/${databaseImage.name.replace(/\s/g, '')}`
            const temp = databaseImage.name.replace(/\s/g, '')

            const params = {
                ACL: "public-read",
                Body: databaseImage,
                Bucket: bucketName,
                Key: temp
            }
            bucket.putObject(params).send(err => console.log(err))

            let data = {
                title: title,
                author: user,
                question: question,
                code: code,
                tags: tagsSelected,
                Images: newImage
            }

            console.log(data)

            axios.post('http://localhost:5001/api/askquestion', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    return (
        <div className={styles.container}>
            <SideNavigation />

            <div className={styles.content}>
                <div className={styles.top}>
                    <h3>Title to your question</h3>
                    <input
                        placeholder="Question Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* <Input
                    label={'tester'}
                    placeholder={'Question Title'}/> */}

                    <h5>Explain your question:</h5>
                    <textarea className={styles.questionText}
                        placeholder='Enter your question here'
                        onChange={(e) => changeQuestion(e)}
                    />

                    <h5>Provide code example:</h5>
                    <textarea
                        placeholder='Enter your code here'
                        onChange={(e) => changeCode(e)}
                    />

                    <h5>Select tags that associate with your question:</h5>
                    <div className={styles.tags}>
                        <p> *start searching the language and select the tag from list</p>
                        {
                            tagsSelected.map((x, i) =>
                                <Tags
                                    key={i}
                                    title={x}
                                    onClick={(e) => removeSelectedTags(i)}
                                />
                            )
                        }
                    </div>

                    <div className={styles.searchTag}>
                        <input
                            onChange={(e) => searchTags(e)}
                            placeholder="Add tag"
                        />

                        {
                            isSearching
                                ?
                                <div className={styles.searchedTags}>
                                    {
                                        searchedTags.length > 0
                                            ? searchedTags.map(x =>
                                                <h6
                                                    key={x._id}
                                                    onClick={(e) => selectedTags(x.name)}
                                                >
                                                    {x.name}
                                                </h6>
                                            )
                                            : <h6>No results has been found</h6>
                                    }
                                </div>
                                :
                                null
                        }
                    </div>
                    {/* <div id={styles.uploadbtnwrapper}>
                        <button id={styles.btn}>Upload a file</button>
                        <input type="file" name="myfile" />
                    </div> */}

                    <br/>
                    <h5>*OPTIONAL* Upload screenshot to aid question</h5>
                    <div id={styles.uploadbtnwrapper}>
                        <Button
                            buttonType={'primary'}
                            children={'Upload file'}
                        />
                        <input type="file" name="myfile" onChange={getImages} />
                    </div>
                </div>
                <br/>
                <div className={styles.preview}>
                    <h2>Preview...</h2>
                    <p>This is what your question will look like:</p>
                    <br/>
                    <h3>{title}</h3>

                    <div className={styles.tags}>
                        {
                            tagsSelected.map((x, i) =>
                                <Tags
                                    key={i}
                                    title={x}
                                />
                            )
                        }
                    </div>

                    <div className={styles.question}>
                        <p>{question}</p>
                    </div>
                    {/* 
                    <div className={styles.code}>
                        <SyntaxHighlighter language="javascript">
                            {code}
                        </SyntaxHighlighter>
                    </div> */}

                    <CodePreview children={code} />

                    <div className={styles.imageContainer}>
                        <img src={image} />
                    </div>

                </div>
                <div className={styles.bottom}>
                    <Button
                        buttonType="primary"
                        children="Post Question"
                        onClick={postQuestion}
                    />
                </div>
            </div>

            <RightContainer />
        </div>
    );
};

export default AskQuestion;