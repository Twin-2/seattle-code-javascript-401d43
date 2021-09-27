import {useContext} from 'react';

import Header from './Header';
import Footer from './Footer';
import Article from './Article';

import {ThemeContext} from '../context/Theme';

function Content() {

  const themeContext = useContext(ThemeContext);

  return (
    <main className={themeContext.mode}>
      <Header />
      <Article />
      <Footer />
    </main>
  )

}

export default Content;
