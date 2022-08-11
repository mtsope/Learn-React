import '../card/Card.css'
import photo_card from '../../assets/img_card.png'
import icon from '../../assets/Star 1.png'

function Card(props){
    return(
        <section className="container">
            <div>
            <img className="photo_card"  src={props.img} alt="photo" />
            </div>   
            <div>
                <img className="icon" src={icon} alt="icon" />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) . </span>
                <span>{props.country}</span>
            </div>        
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person </p>

        </section>
    )
}

export default Card