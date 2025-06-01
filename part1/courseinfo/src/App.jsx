const Header = (props)=> {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return(
    <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Total = (props) => {
  console.log(props)

  let total = 0;
  total += props.parts[0].exercises;
  total += props.parts[1].exercises;
  total += props.parts[2].exercises;

  return <p>Number of exercises {total}</p>
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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )
}

export default App