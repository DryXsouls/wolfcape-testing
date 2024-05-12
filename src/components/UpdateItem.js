
function UpdateItem(props) {
    return(
        <div className='update-item'>
            <figure className='update-item-game-cover-wrap'>
                <img src={props.src} alt='game cover' className='update-item-game-cover'/>
            </figure>
            <div className='update-item-details'>
                <h3 className='update-title'>{props.title} v {props.number}</h3>
                <hr/>
                <p className='update-short-description'>{props.description}</p>
                <p className='update-information'>{props.details}</p>
                <p className='update-date'>{props.date}</p>
            </div>
        </div>
    );
}
export default UpdateItem;