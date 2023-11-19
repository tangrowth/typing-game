import React, { useState } from 'react';
import Score from './components/Score';
import Timer from './components/Timer';
import Input from './components/Input';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className='main'>
      <header>
        <Score />
        <Timer
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      </header>
      <main>
        <Input
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      </main>
    </div>
  );
}

export default App;
