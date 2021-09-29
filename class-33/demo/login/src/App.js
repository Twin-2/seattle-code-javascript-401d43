import './App.css';

import LoginContext from './auth/context';
import Login from './auth/Login';
import Content from './Content';

function App() {
  return (
    <LoginContext>
      <Login />
      <Content />
    </LoginContext>
  );
}

export default App;
