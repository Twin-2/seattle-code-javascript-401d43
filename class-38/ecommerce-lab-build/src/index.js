import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.js';

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Entry />, document.getElementById('root'));