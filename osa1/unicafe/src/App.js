import React, { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>

  )
}

const Statstics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text={'Good'} value={props.good} />
      <StatisticLine text={'Neutral'} value={props.neutral} />
      <StatisticLine text={'Bad'} value={props.bad} />
      <StatisticLine text={'Total'} value={props.good + props.neutral + props.bad} />
      <StatisticLine text={'Average'} value={((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text={'Positive'} value={(props.good * 100) / (props.good + props.neutral + props.bad)} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = (props) => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => {
    setGood(good + 1)
  }
  const onNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const onBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <Header header={'Give Feedback'} />
      <Button handleClick={onGoodClick} text='Good' />
      <Button handleClick={onNeutralClick} text='Neutral' />
      <Button handleClick={onBadClick} text='Bad' />
      <Statstics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
