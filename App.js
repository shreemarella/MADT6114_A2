import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    console.log(formData);
  };
  return (
     <form onSubmit={handleSubmit}>
       <label for="fname">First name:</label> <br></br>
       <input type="text" placeholder="username" ref={nameEl} /> <br></br>
       <label for="lname">Last name:</label><br></br>
       <input type="password" placeholder="password" ref={passwordEl} /><br></br>
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <button type="submit" className="myButton">Login</button>
     </form>
   );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
