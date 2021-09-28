import React, {useEffect, useState} from 'react';

export const SiteContext = React.createContext();

function Site(props) {

  const [title, setTitle] = useState('My Amazing Site');
  const [twitter, setTwitter] = useState('mytwitterhandle');

  const context = {
    title,
    twitter,
    changeTitleTo,
    changeTwitterTo: setTwitter
  };

  function changeTitleTo(newTitle) {
    setTitle(newTitle);
    // Save newTitle to local storage?
  }

  useEffect( () => {
    // Read from local storage
    // setTitle and a setTwitter
  }, []);

  return (
    <SiteContext.Provider value={context}>
      {props.children}
    </SiteContext.Provider>
  )
}

export default Site;
