/* React */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';

/* Styling */
import styles from './AskQuestion.module.scss';

/* Components */
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import Tags from '../../Components/Tags/Tags.component';
import Button from '../../Components/Button/Button.component';
import CodePreview from '../../Components/CodePreview/CodePreview.component';
import Input from "../../Components/Input/Input.component"
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const AskQuestion = () => {
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState(null)
    const [fileList, setFileList] = useState();
    useEffect(() => {
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
    const changeTitle = () => {

    }

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

    const postQuestion = () => {
        let data = {
            title: title,
            author: '6343f87e901857c1e810cd7b',
            question: question,
            code: code,
            tags: tagsSelected
        }

        console.log(data)

        axios.post('http://localhost:5001/api/test', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getImages = async (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    console.log(image)

    return (
        <div className={styles.container}>
            <SideNavigation />

            <div className={styles.content}>
                <div className={styles.top}>
                    <input
                        placeholder="Question Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* <Input
                    label={'tester'}
                    placeholder={'Question Title'}/> */}

                    <textarea
                        placeholder='Enter your question here'
                        onChange={(e) => changeQuestion(e)}
                    />

                    <textarea
                        placeholder='Enter your code here'
                        onChange={(e) => changeCode(e)}
                    />

                    <div className={styles.tags}>
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

                    <div id={styles.uploadbtnwrapper}>
                        <Button
                            buttonType={'primary'}
                            children={'Upload file'}
                        />
                        <input type="file" name="myfile" onChange={getImages} />
                    </div>
                </div>
                <div className={styles.preview}>
                    <h2>Preview...</h2>
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