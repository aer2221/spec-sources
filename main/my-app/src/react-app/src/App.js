import logo from './logo.svg';
import './App.css';
import spec_logo from './logo.png';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import PeopleContainer from './Components/PeopleContainer';
import React, {useState} from 'react';

const initialList = [
  { name: "Presbo", email: "presbo@columbia.edu" },
  { name: "John Jay Mouse", email: "mouse@columbia.edu" },
  { name: "Water Bottle Man", email: "flipper@columbia.edu" },
];

//use state's  benefit is it will re-render the entire website whenever peopleList changes
function App() {
  //peopleList is the variable, setPeopleList will be the method 
  //useState will be fed initial state of your variables
  const [peopleList,setPeopleList] = useState(initialList);

  function handleDelete(peopleIndex){
    const updatedList = peopleList.slice(0,peopleIndex).concat(peopleList.slice(peopleIndex+1));
    setPeopleList(updatedList);
  }

  function handleAdd(sourceName,sourceEmail){
    //keeping original list and adding new item to it
    const updatedList=[...peopleList,{name:sourceName,email:sourceEmail}]
    //peopleList.concat([{name:sourceName,email:sourceEmail}])
    setPeopleList(updatedList);
  }
  //everything inside this return is pure html, a copy-paste from original index.html
  return (
    <div className="App">
    <div>
      <img
        src={spec_logo}
        alt="Columbia Spectator logo"
        width="263"
        height="55"
      />
    </div>
    {/* Header Component */}
    <Header/>

    {/* NavBar Component */}
    <NavBar handleAdd={handleAdd}></NavBar>
  
    {/* People Container Component
    //giving peopleList access to handleDelete*/}
    <PeopleContainer peopleList={peopleList} handleDelete={handleDelete} />
    </div>
  );
  }

export default App;


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
