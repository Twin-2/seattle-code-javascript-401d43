import {useContext} from 'react';

import {SiteContext} from '../site/context.js';

function Header() {

  const context = useContext(SiteContext);

  return (
    <header>
      <h1>{context.title}</h1>
    </header>
  )

}

export default Header;
