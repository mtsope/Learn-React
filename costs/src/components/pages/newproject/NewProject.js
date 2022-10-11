import {useNavigate } from 'react-router-dom'

import './NewProject.css'
import ProjectForm from '../../project/ProjectForm'


function NewProject(){

    const navegate = useNavigate ()

    function createPost(project) {
        //Initialize cost and services

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //Redirect

            navegate('/projects', { message: 'Projecto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }


    return(
        <div className="newproject_container">
            <h1>Criar novo Projecto</h1>
            <p>Crie seu projecto para depois adicionar os servicos</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projecto" />
        </div>
       
    )
}

export default NewProject