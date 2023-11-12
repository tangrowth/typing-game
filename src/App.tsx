import React from 'react';
import Score from './components/Score';
import Timer from './components/Timer';
import Input from './components/Input';

function App() {
  return (
    <div className='main'>
      <header>
        <Score />
        <Timer />
      </header>
      <main>
        <Input />
      </main>
    </div>
  );
}

export default App;
