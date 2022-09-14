import styles from './Icon.module.scss';

const Icon = ( props ) => {
    const image = useRef(null);

    const imageToSVGConversion = () => { //This converts the image to SVG so that we have more control over the styling properties of the SVG
        if ( image.current ) {
            // Gets all the attributes from the current image
            let el = image.current,
                imgID = el.getAttribute('id'),
                imgClass = el.getAttribute('class'),
                imgURL = el.getAttribute('src'),
                parent = el.parentElement,
                xhr = new XMLHttpRequest()
    
            xhr.open('GET', imgURL)
    
            // Runs every time the ready state changes
            xhr.onreadystatechange = function (data) {
                let xml = data.target.response,
                    dom = new DOMParser(),
                    svg = dom.parseFromString(xml, 'image/svg+xml')
    
                if ( xhr.readyState === 4 ) {
                    // Appends the Image back as an SVG
                    parent.appendChild(svg.documentElement);
                    // Removes the image since the SVG was appended
                    el.parentElement.removeChild(el);
    
                    if (typeof imgID != 'undefined') {
                        // Gives the SVG the original ID of the image
                        parent.querySelectorAll("svg")[0].setAttribute('id', imgID);
                    }
    
                    if (typeof imgClass != 'undefined') {
                        // Gives the SVG the original Class of the image
                        parent.querySelectorAll('svg')[0].setAttribute('class', imgClass);
                    }
    
                    // Removes the XML
                    parent.querySelectorAll('svg')[0].removeAttribute('xmlns:a');
                }
            }
            xhr.send();
        }
    }

    useEffect(() => {
        imageToSVGConversion();

        return () => {}
    }, []); //This useEffect runs the imageToSVGConversion on render

    useEffect(() => {

    }, [props.icon])

    return (
        <span   
            className={`
                ${ props.className ? props.className : '' }
                ${ styles.container } 
            `}
            onClick={ props.onClick }
        >
            <img 
                ref={ image }
                src={ 
                    require( `../../Assets/Icons/${ props.icon }.svg` )
                }
            />
        </span>
    )
} 

export default Icon;