import {useLocation} from 'react-router-dom'

import Message from "../Layout/message/Message"

function Projects(){
    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message 
    
    }

    return(
        <div>
             <h1>Meus Projectos</h1>
             {message && <Message msg={message} />}
        </div>
       
    )
}

export default Projects