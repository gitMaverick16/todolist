import React from 'react';
import {AppUI} from './AppUI'
import { TodoProvider } from '../TodoContext';
import './App.css';


function App() {
  return (
    <TodoProvider>
      <div className='body'>
        <AppUI/>
      </div>
    </TodoProvider>
  );
}

export default App;
