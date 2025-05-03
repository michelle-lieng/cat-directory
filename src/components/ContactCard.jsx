import './ContactCard.css'

function ContactCard(props) {
    return (
        <div className="ContactCard">
            <div id="CatPictureContainer">
                <img src={props.img} alt="Photo of Cat"/>
            </div>
            <h1>{props.name}</h1>
            <div className="ContactInfo">
                <img id="PhoneIcon" src="src\assets\phone-call.png" alt="Phone Icon"/>
                <p>{props.phone}</p>
            </div>
            <div className="ContactInfo">
                <img id="EmailIcon" src="src\assets\mail.png" alt="Email Icon"/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default ContactCard;