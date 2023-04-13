import propType from 'prop-types';
import css from './FeedbackButtons.module.css'
export default function FeedbackButtons({options, onLeaveFeedback}){
    return options.map(option => {
        return <button className={css.btn} type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>
    })
}
FeedbackButtons.propType ={
    options: propType.arrayOf(
        propType.string.isRequired
    ),
    onLeaveFeedback: propType.func.isRequired
}