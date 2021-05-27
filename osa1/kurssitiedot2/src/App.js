import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part1 = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}
const Part2 = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}
const Part3 = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <Part1 name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part2 name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part3 name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises in total is {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}


export default App