// import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

//import Header,{Footer} from './Header';
// import {Header, Footer} from './Header';
// import Header from './Header';
// import Application from './Header';

function App() {
  //let name = "Web3Mantra"
  return (
    <div className="App">
      <Student 
        name="Ahmed Raza"
        age={29} 
      />

      <Student 
        name="Asgar Raza"
        age={31} 
      />

      <Student 
        name="Akbar Raza"
        age={32} 
      />

    </div>
  );
}

export default App;
