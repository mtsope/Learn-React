import './Home.css'

import savings from '../../../img/savings.svg'

import LinkButton from '../../Layout/linkbutton/LinkButton'

function Home(){
    return(
        <section className='home_container'>
            <h1> Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projectos usando o react!</p>
            <LinkButton to="/newproject" text="Criar novo Projecto" />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home