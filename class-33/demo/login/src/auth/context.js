import React, {useState, useEffect} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const SECRET = "supersecret";
const API = 'https://api-js401.herokuapp.com/signin'

function Login(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (input) => {
    // Call the API

    try {
      const response = await axios.post(API, {}, {
        auth: {
          username: input.username,
          password: input.password
        }
      });

      setIsLoggedIn(true);
      setUser(response.data.user);
      cookie.save('auth', response.data.token);

    } catch(e) {
      console.error(e.message);
    }

  }

  const logout = () => {
    // Might have to call the server's logout route?
    cookie.remove('auth');
    setIsLoggedIn(false);
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    try {
      const tokenUser = jwt.verify(token, SECRET);
      setUser(tokenUser);
      setIsLoggedIn(true);
    } catch(e) {
      console.error("Invalid Token");
    }
  }, []);

  const context = {
    isLoggedIn,
    user,
    login,
    logout
  }

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  )

}

export default Login;
