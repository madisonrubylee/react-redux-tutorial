import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import App from './App';
import rootReducer from './modules'

//스토어 생성 
const store = createStore(rootReducer , composeWithDevTools())

// react-redux에서 제공하는 Provider 컴포넌트로 감싼다.
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

