import React, {Component} from 'react'
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Statistic from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from 'components/Section/Section'

export class App extends Component {
  constructor(){
    super();
        this.state = {
          good: 0,
          neutral: 0,
          bad: 0
        }
      }
      onClickFunc = e => {
        const {name} = e.target;
        this.setState(state => ({ [name]: state[name] + 1 }));
      }
      countTotalFeedback(){
        return this.state.good + this.state.neutral + this.state.bad 
      }
      countPositiveFeedbackPercentage(){
        return Math.round(this.state.good / this.countTotalFeedback() * 100)
      }
      render(){
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}
          >
            <Section title="Please leave feedback">
            <FeedbackButtons options={Object.keys(this.state)} onLeaveFeedback={this.onClickFunc}/>
            <Section title="Statistics">
            {total !== 0 ?(
              <Statistic 
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}/>
              ) :(
                <Notification message="There is no feedback" />
                )}
                </Section>
              </Section>

          </div>
        );

      }
};
