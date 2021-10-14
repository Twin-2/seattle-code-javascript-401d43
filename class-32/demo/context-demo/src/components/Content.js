import {useContext, useState} from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import {SiteContext} from '../site/context.js';
import {ThemeContext} from '../theme/context.js';

function Content() {
  const [formValues, setFormValues] = useState({});
  const siteContext = useContext(SiteContext);
  const themeContext = useContext(ThemeContext);

  const handleChange = (e) => {
    setFormValues( {...formValues, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    siteContext.changeTitleTo( formValues.title );
    siteContext.changeTwitterTo( formValues.twitter );
  }

  return(
    <main>
      <Header />
      <section className={themeContext.mode}>
        <article>
          <form onSubmit={handleSubmit}>
            <div>
            <input
              onChange={handleChange}
              name="title"
              placeholder="New Site Title..." />
            </div>

            <div>
              <input
                onChange={handleChange}
                name="twitter"
                placeholder="twitter handle" />
            </div>

            <button type="submit">Save!</button>

          </form>
          <strong>Current Mode: {themeContext.mode}</strong>
          <button onClick={themeContext.toggleMode}>Change Mode</button>
        </article>
      </section>
      <Footer/>
    </main>
  )

}

export default Content;
