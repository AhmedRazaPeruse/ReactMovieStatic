import './App.css';
import { Header } from './components/Header';
import React, {useState} from 'react';

function App() {

  //Array DeStructuring
  const [num, setNum] = useState(1); 

  function inc() {
    setNum(num + 2);
  }

  function dec() {
    setNum(num - 1);
  }

  //Object DeStructuring Previous video
  //const obj = {name: 'Ahmed', age: 20}
  //obj.name;
  //result=ahmed

  //const {age, name} = obj;
  //name
  //result ahmed

  //Array DeStructuring
  //const arr = {1,2,3,4,5}
  //const [val1, val2, val3, val4] = arr;
  //val2
  //result=2


  return (
    <div className="App">  
      <Header />
      <div className='main'>      
        <h1 className='heading'>{num}</h1>  
        <div className='button'>
          <button className="btn" onClick={inc}>increment</button>
          <button className="btn" onClick={dec}>decrement</button>
        </div>
      </div> 
    </div>
  );

}

export default App;
