import React from 'react';

import './App.css';
import {Button, Button2nd} from './Button/Button';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button label='add'></Button>
    <br></br>
    <Button2nd label='submit'></Button2nd>
    </div>
  );
}

export default App;
