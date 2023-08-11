import { Notification } from "components/Notification/Notification"
import { StatisticsItem, StatisticsList } from "./Statistics.styled"
import PropTypes from 'prop-types';
import { useContext } from "react";
import { Context } from "Context/stateContext";


export const Statistics = () =>{     
    const {good, neurtal, bad} = useContext(Context)
    function countTotalFeedback(){
        return (good+neurtal+bad)
    }
    function countPositiveFeedbackPercentage(){
        return Math.round(good*100/(good+neurtal+bad))
    }
return(
    <>
    {(good|| neurtal || bad)?     
    <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neurtal: {neurtal}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {countTotalFeedback()}</StatisticsItem>
        <StatisticsItem>Positive feedback: {countPositiveFeedbackPercentage()}%</StatisticsItem>
    </StatisticsList>:
    <Notification message="There is no feedback"/>
    }
    </>
)
}

Statistics.propTypes = {
    good: PropTypes.number,
    neurtal: PropTypes.number,
    bad: PropTypes.number,
}
