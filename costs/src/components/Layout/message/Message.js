import { useState, useEffect } from 'react'
import d from'./Message.css'

function Message({msg}) {
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)


        return() => clearTimeout(timer)
    }, [msg])

    return (
        <>
         {visible && (
            <div className={d.start}>{msg} </div>
         )}
        </>     
    )
}

export default Message