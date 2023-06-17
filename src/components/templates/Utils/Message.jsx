import { useEffect, useRef, useState } from "react"
import './utils.sass'

export const Message = ({ title  , type}) => {

    const [textShow , setTextShow] = useState(false);
    const text = useRef(textShow)

    useEffect(() => {

        setTextShow(!text.current)

        setTimeout(() => {
            setTextShow(false)
        } , 2000)

        return () => {
            clearTimeout(0 , setTextShow(false))
        }
    } , [text])

    return (
        
        <>
            {type === 'error' && (
                <span className="message-error"> {title} </span>
            )}

            {type === 'success' && (
                <span className="message-success"> {title} </span>
            )}

        </>

    )


}