//conditionalRendering

import PropTypes from "prop-types";

// function UserGreeting(props) {
//   return props.isLogIn ? (
//     <h2>Welcome to {props.userName}</h2>
//   ) : (
//     <h2>Please Log in</h2>
//   );
// }

function UserGreeting(props) {
  const welcomeMsg = <h2>Welcome to {props.userName}</h2>;
  const loginPrompt = <h2>Please Log in</h2>;
  return props.isLogIn ? welcomeMsg : loginPrompt;
}

export default UserGreeting;

UserGreeting.protoTypes={
    userName: PropTypes.string,
    isLogIn: PropTypes.bool,
}

UserGreeting.defaultProps={
    userName:"user",
    isLogIn: false,
}

// import UserGreeting from "./UserGreeting.jsx";

// function App() {
//   return (
//       <UserGreeting isLogIn={true} userName="kavitha" />
//   );
// }
// export default App;
