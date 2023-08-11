import { FeedbackBtn, FeedbackContainer } from "./FeedbackOptions.styled"
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'; 

export const FeedbackOptions = ({chooseFeedback, options})=> {
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