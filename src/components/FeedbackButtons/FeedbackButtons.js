import propType from 'prop-types'
export default function FeedbackButtons({options, onLeaveFeedback}){
    const array = Object.keys(options);
    return array.map(arr => {
        return <button type="button" key={arr} name={arr} onClick={onLeaveFeedback}>{arr}</button>
    })
}