import React, {useState} from 'react';

export const ThemeContext = React.createContext();

function Theme(props) {
  const [mode, setMode] = useState('light');

  const context = {
    mode,
    toggleMode
  }

  function toggleMode() {
     setMode( mode === "dark" ? "light" : "dark" )
     // save this to local storage
  }

  // an effect that could read from local storage to pre-set the option

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default Theme;
