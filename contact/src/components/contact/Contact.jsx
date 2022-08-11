import './Contact.css'
import phone_icon from '../../assets/phone_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import img_contact from '../../assets/img_card.png'


function Contact(props){
    return(
        <div className="contacts">
        
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phone_icon}/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={mail_icon} />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

const person = {
    img: {img_contact},
    name: "Michela",
    phone: "(+258) 833230921",
    email: "michelatsope@sapo.com"
}

export default Contact

