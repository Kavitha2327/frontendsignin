//propTypes

import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No'"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps={
  name: "Guest",
  age: 0,
  isStudent: false,
}

export default Student;


// import Student from "./Student.jsx"

// function App() {
//   return (
//       <>
//         <Student name="KAvitha" age={26} isStudent={true} />
//         <Student name={7657656} age="20" isStudent={true} />
//       </>
//   );
// }
// export default App;