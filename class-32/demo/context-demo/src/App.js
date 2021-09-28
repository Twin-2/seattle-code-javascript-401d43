import Content from './components/Content.js';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import './App.css';

import ThemeContext from './theme/context.js';
import SiteContext from './site/context.js';

function App() {
  return (
    <SiteContext>
      <ThemeContext>
        <Content />
      </ThemeContext>
    </SiteContext>
  );
}

export default App;
