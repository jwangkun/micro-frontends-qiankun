import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './public-path';

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[app-react]: bootstrap');
}

export async function mount(props) {
  console.log('[app-react]: ', props);
  render();
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
