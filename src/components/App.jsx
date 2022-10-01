import React, { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnOptionHandler = btnData => {
    this.setState(prevState => ({
      [btnData]: prevState[btnData] + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;

    const countTotalFeedback = Object.values(this.state).reduce(
      (acc, num) => (acc += num),
      0
    );
    const countPositiveFeedbackPercentage = `${Math.round(
      (good / countTotalFeedback) * 100
    )}%`;

    return (
      <>
        <Section title={'Select an option'}>
          <Options
            onClick={this.btnOptionHandler}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Stats'}>
          {countTotalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <p>None Here ^_^</p>
          )}
        </Section>
      </>
    );
  }
}
//
