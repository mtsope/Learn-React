import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

import LinkButton from '../../Layout/linkbutton/LinkButton'
import Message from "../../Layout/message/Message"
import ProjectCard from './ProjectCard'

import './Projects.css'
import '../home/Home.css'



function Projects(){

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message 
    
    }

    //View the projects
    useEffect(() => {
    fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        setProjects(data)
    })
    .catch((err) => console.log(err))
}, [])


    return(
        <div className='project_container'>
            <div className='tittle_container'>
                <h1>Meus Projectos</h1>
                <LinkButton to="/newproject" text="Novo Projecto" />
            </div>
            {message && <Message msg={message} />}
            <div className='start'>
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            //category={project.category.name}
                            key={project.id}

                        />
                ))}
            </div>
        </div>
       
    )
}

export default Projects