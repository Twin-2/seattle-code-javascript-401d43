import React from 'react';

// import this using {}, i.e. import {SiteContext} from 'this file';
export const SiteContext = React.createContext();

function Site(props) {

  const state = {
    title: "My Awesome Website",
    twitter: "dailydoseofcode",
  };

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )

}

// import this without {}, i.e. import Site from 'this file';
export default Site;
