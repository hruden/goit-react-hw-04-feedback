import { Context } from "Context/stateContext";
import { FeedbackBtn, FeedbackContainer } from "./FeedbackOptions.styled"
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'; 
import { useContext } from "react";

export const FeedbackOptions = ()=> {
    const {options, setNeurtal, setGood, setBad} = useContext(Context)
    const chooseFeedback=({name})=>{
        if(name === 'good'){
            return setGood(s=>s+1)
        }
        if(name === 'neurtal'){
            return setNeurtal(s=>s+1)  
        }
        if(name === 'bad'){
            return setBad(s=>s+1)  
        }
}
    const array = Object.keys(options)
    return(
        <FeedbackContainer>
        {array.map((name) =>  {
                return (
                    <FeedbackBtn key={nanoid()} type="button" onClick={()=>chooseFeedback({name})}>{name}</FeedbackBtn>
                )
            })}
    </FeedbackContainer>
    )
}

FeedbackOptions.propTypes = {
    chooseFeedback: PropTypes.func,
    options: PropTypes.objectOf(
        PropTypes.number
    )
}