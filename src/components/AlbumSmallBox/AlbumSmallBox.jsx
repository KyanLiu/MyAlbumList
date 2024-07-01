import './AlbumSmallBox.css';

const AlbumSmallBox = (props) => {
    //const [hasClicked, setHasClicked] = useState(false);

    //props.clicked? = function
    
    const truncateString = (title) => {
        if(title.length <= 12) return title;
        return title.substring(0,10) + '...';
    }
//() => setHasClicked(true)
    return (
        <>
            <div className='album' onClick={props.clicked}>
                <img src={props.details.images[0]?.url} className='albumBox' alt={props.details.name}></img>
                <h1 className='albumTitle' title={props.details.name}>{truncateString(props.details.name)}</h1>
            </div>

        </>
    )
}
export default AlbumSmallBox;