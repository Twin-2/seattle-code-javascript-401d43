import { useState } from 'react';

function Age(props) {
  
  const [age, setAge] = useState(props.age || 0);
  const [name, setName] = useState('initial name');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  return (
    <section>
      <h2 data-testid="name">My name is {name}.  My age is {age}.</h2>
      <input onChange={handleChange} />
      <input onChange={handleAge} />
    </section>
  )
}

export default Age;