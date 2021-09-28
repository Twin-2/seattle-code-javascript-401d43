import {useContext} from 'react';
import {SiteContext} from '../site/context.js';

function Footer() {
  const context = useContext(SiteContext);

  return (
    <footer>
      <p>&copy; 2021 {context.title}</p>
      <p>Visit us on Titter @{context.twitter}</p>
    </footer>
  )
}

export default Footer;
