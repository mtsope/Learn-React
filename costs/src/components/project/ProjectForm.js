import {useEffect, useState} from 'react'

import SubmitButton from '../form/button/SubmitButton'
import Input from '../form/input/Input'
import Select from '../form/select/Select'
import './ProjectForm.css'


function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

        useEffect(() => {
            fetch('http://localhost:5000/categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
        }, [])

        //For project
        const submit = (e) => {
            e.preventDefault()
            handleSubmit(project)
        }
        
        function handleChange(e) {
            setProject({ ...project, [e.target.name]: e.target.value})
        }

        function handleCategory(e) {
            setProject({ 
                ...project, 
                category:{
                    id: e.target.value,
                    name: e.target.options[e.target.SelectedIndex].text,
                },
            })
        }


    return (
        <form onSubmit={submit} className="form">
            <Input 
                type="text"
                text="Nome do Projecto"
                name="name"
                placeholder="Insira o nome do projecto"
                handleOnChange={handleChange}
                value={project.name ? project.name :''}
            />
             <Input 
                type="number"
                text="Orcamento do Projecto"
                name="budget"
                placeholder="Insira o orcamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm