import {useReducer, useState} from 'react';
import faker from 'faker';
import { getDefaultNormalizer } from '@testing-library/dom';

const initialState = {
  show: 'Sesame Street',
  characters: [],
  active: {}
}

/*
  An action is just an object that declares it's type and payload (data)
  {
    tupe: 'ADD',
    payload: { name:"footsite", color:"pink" }
  }
*/

function characterReducer( state=initialState, action ) {
  let {type, payload} = action;

  switch( type ) {
    case 'ADD_CHARACTER':
      return {...state, characters: [...state.characters, payload] };
    case 'DELETE_CHARACTER':
      return {...state, characters: state.characters.filter( char => char.name !== payload ) };
    case 'ACTIVATE_CHARACTER':
      return {...state, active: state.characters.filter( char => char.name === payload )[0] };
    default:
      return state;
  }
}

function Characters() {

  // Reducer STate
  const [state, dispatch] = useReducer(characterReducer, initialState);

  function addCharacter() {

    const character = {
      name: faker.name.firstName(),
      color: faker.commerce.color()
    }

    const action = {
      type: 'ADD_CHARACTER',
      payload: character
    };

    dispatch(action);

    // setCharacters([...characters, character]);
  }

  function activateCharacter(name) {
    let action = {
      type: 'ACTIVATE_CHARACTER',
      payload: name
    }
    dispatch(action);
  }

  function removeCharacter(name) {
    let action = {
      type:'DELETE_CHARACTER',
      payload: name
    }
    dispatch(action);
  }

  console.log({state});

  return (
    <>
       <h1>Characters From {state.show}</h1>
       <h2>Active Character: {state.active.name} is {state.active.color}</h2>
       <button onClick={addCharacter}>Add A Character</button>
       <ul>
         {state.characters.map( (char,idx) =>
          <li
            key={idx}
            onDoubleClick={ () => removeCharacter(char.name) }
            onClick={ () => activateCharacter(char.name) }
          >{char.name}</li>
          )}
       </ul>
    </>
  )

}

export default Characters;
