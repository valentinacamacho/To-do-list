import React from 'react';
import './App.scss';
import Container from './components/Container';
import Header from './components/Header'
// import FormTodo from './components/FormTodo';
// import Checkbox from './components/Checkbox';
// import Tasklist from './components/TaskList';



function App() {
  return (
    <div className="App">

   <Header
    texto1='To-Do-List'
    />

    <Container/>
    {/* <FormTodo/>
    <Checkbox/>
    <Tasklist/> */}
    </div>

    
  );
}

export default App;
