import logo from './logo.svg';
import './App.css';
import spec_logo from './logo.png';
import Header from './Components/Header';
import NavBar from './Components/NavBar';

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

    <Header/>
    <NavBar/>
  

    <div class="flex-container">
      <div class="person">
        <div class="number">1</div>
        <div class="name">Presbo</div>
        <div class="email">presbo@columbia.edu</div>
        <button id="delete" onclick>DELETE</button>
      </div>
      <div class="person">
        <div class="number">2</div>
        <div class="name">John Jay Mouse</div>
        <div class="email">mouse@columbia.edu</div>
        <button id="delete" onclick>DELETE</button>
      </div>
      <div class="person">
        <div class="number">3</div>
        <div class="name">Water Bottle Man</div>
        <div class="email">flipper@columbia.edu</div>
        <button id="delete" onclick>DELETE</button>
      </div>
    </div>
    </div>
  );
  }

export default App;
