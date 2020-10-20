import React from 'react';
import './App.css';

const compromise = ['lavar', 'passar', 'varrer', 'cozinhar']

const Task = ({ value, teste}) => {
  console.log(value)
  return (
    <li>{value}</li>
  );
}

function App() {
  return compromise.map(item => <Task value={item}></Task>)
  // return <Task value={'oi'} teste='ola' />
}

export default App;
