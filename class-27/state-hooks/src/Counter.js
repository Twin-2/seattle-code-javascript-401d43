import { useState } from 'react';

function Counter() {

  // built in hooks that will remove the need for state boilerplate
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  // method to interact with our state
  const updateCounters = () => {
    let newCount = clicks + 1;
    setClicks(newCount);
    setFactorOfFive(newCount > 0 && newCount % 5 === 0)
  }

  // no more need to wrap this in a render - that's only with classes
  return (
    <section>
      <h2>Click count: {clicks}</h2>
      <h2>Factor of five?  {factorOfFive.toString()}</h2>
      <button onClick={updateCounters}>Update Count</button>
    </section>
  )
}

export default Counter;