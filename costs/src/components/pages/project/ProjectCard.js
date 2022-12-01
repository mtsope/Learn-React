import { Link } from 'react-router-dom'
import {BsPensil, BsPenFill, BsFillTrashFill} from 'react-icons/bs'

import './ProjectCard.css'

function ProjectCard({id,name, budget, category, handleRemove}) {
    return (
        <div className='project_card'>
            <h4>{name}</h4>
            <p>
                <span>Orcamento:</span> MZN{budget}
            </p>
            <p className='category_text'>
                <span ></span> {category}
            </p>
            <div className='project_card_actions'>
                <Link to="/"> <BsPenFill /> Editar</Link>
               <button><BsFillTrashFill /> Remover</button> 
            </div>
        </div>
    )
}

export default ProjectCard