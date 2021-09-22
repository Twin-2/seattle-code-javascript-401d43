import {useState, useEffect} from 'react';

function People(props) {

  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const _changeName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, name]);
    props.onSubmit(name);
  }

  // two variables in the 2nd argument
  // Runs when: both variables change
  useEffect( () => {
    // check if both are not the same, manually ...
   console.log("Both are different");
  }, [name, people])

  // one variable in the 2nd argument
  useEffect( () => {
    console.log('New Name Is: ', name);
  }, [name])

  // null 2nd argument = runs on every potential re-render
  useEffect( () => {
    console.log('Compponent Rendered');
  });

  // empty 2nd arugment = only after the first render (componentDidMount)
  // Good for: Annoying pop-ups (chat), fetching data, checking login status?
  useEffect( () => {
    console.log("I run only on the first render");
  }, [])

  return (
   <div>
     <form onSubmit={handleSubmit}>
     <input placeholder="Name Here" name="name" onChange={_changeName} />
     </form>
     <hr />
     {people.map( person =>
      <p key={person}>{person}</p>
     )}
   </div>
  )

}

export default People;
