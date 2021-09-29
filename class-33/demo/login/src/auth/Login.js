import {useState, useContext} from 'react';
import {LoginContext} from './context.js';
import {If, Then, Else} from 'react-if';

function Login(props) {

  const [login, setLogin] = useState({});
  const context = useContext(LoginContext);

  const handleChange = (e) => {
    setLogin( {...login, [e.target.name]: e.target.value} );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(login);
  }

  return (
    <If condition={context.isLoggedIn}>
      <Then>
        Welcome {context.user.fullname} ...
        <button onClick={context.logout}>Log Out</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} placeholder="Username" />
          <input name="password" type="password" onChange={handleChange} placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </Else>
    </If>
  )
}

export default Login;
