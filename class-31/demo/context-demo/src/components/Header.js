import {useContext} from 'react';

import {SiteContext} from '../context/Site.js';

function Header() {

  const siteContext = useContext(SiteContext);

  return (
    <header>
      <h1>{siteContext.title}</h1>
    </header>
  )

}

export default Header;
