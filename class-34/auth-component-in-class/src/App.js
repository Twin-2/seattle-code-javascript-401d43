import './App.css';

import LoginContext from './auth/context';
import Auth from './auth/auth.js';
import Login from './auth/Login';
import Content from './Content';

function App() {
  return (
    <LoginContext>
      <Login />

      <Auth capability="create">
        <Content />
      </Auth>

      <Auth capability="delete">
        <h1>I can delete things</h1>
      </Auth>

    </LoginContext>
  );
}

export default App;
