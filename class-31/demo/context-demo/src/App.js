import SiteContext from './context/Site';
import ThemeContext from './context/Theme';
import Content from './components/Content';
import './style.css';

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
