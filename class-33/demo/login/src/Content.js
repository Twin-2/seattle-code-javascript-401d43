import {useContext} from 'react';

import { LoginContext } from './auth/context';

function Content() {
  const context = useContext(LoginContext);

  return (
    <h2>Hi, {context.user.fullname}</h2>
  )
}

export default Content;
