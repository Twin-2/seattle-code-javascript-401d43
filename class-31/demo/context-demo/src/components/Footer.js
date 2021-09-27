import {useContext} from 'react';

import { SiteContext } from '../context/Site';

function Footer() {

  const siteContext = useContext(SiteContext);

  return (
    <footer>
      &copy; 2021 {siteContext.title}
      <p>Visit us on twitter @{siteContext.twitter}</p>
    </footer>
  )

}

export default Footer;
