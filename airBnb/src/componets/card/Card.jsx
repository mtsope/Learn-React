import '../card/card.css'
import photo_card from '../../assets/img_card.png'
import icon from '../../assets/Star 1.png'

function Card(){
    return(
        <section>
            <div>
            <img src={photo_card} alt="photo" />
            </div>           
            <img className="icon" src={icon} alt="icon" />
            <small>5.0</small>
        </section>
    )
}

export default Card