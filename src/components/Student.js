import Teacher from "./Teacher"
import propTypes from 'prop-types'

const Student = ({name, age}) => {
  return (
    <div className="App">
        <Teacher teacherName={name} />
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  teacherName: propTypes.string
}

Student.defaultProps = {
  name: "",
  age: 0,
  teacherName: ""
}


export default Student