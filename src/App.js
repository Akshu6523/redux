import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from './actions/index';


const App = () => {
   const count = useSelector((state) => state.changeTheNumber);
   const dispatch = useDispatch();
  return (
    <>
    <div class="container">
      <h1>Increment Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className ="quantity">
        <button onClick={() => dispatch(decNumber())} class="incbtn" title="Decrement"><span> - </span></button>
        <input name="uantity" type="text"  value={count} />
        <button onClick={() => dispatch(incNumber())} title="Increment"><span> + </span></button>
      </div>
    </div>
    </>
  )
}

export default App















































// import logo from './logo.svg';
// import './App.css';

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

// export default App;
