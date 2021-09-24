import {useState, useEffect} from 'react';

import People from './People.js';

function App() {

  const [person, setPerson] = useState("");
  const [heading, setHeading] = useState("");


  // This could be looking at the request object ...
  useEffect( () => {
    setHeading( person.toUpperCase());
  }, [person])

  return (
    <div className="App">
        <h2>{heading}</h2>
        <People onSubmit={setPerson} />
    </div>
  );
}

export default App;
