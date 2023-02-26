import logo from './logo.svg';
import './App.css';
import spec_logo from './logo.png';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import PeopleContainer from './Components/PeopleContainer';

function App() {
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
    <NavBar/>
  
    {/* People Container Component*/}
    <PeopleContainer/>
    </div>
  );
  }

export default App;
