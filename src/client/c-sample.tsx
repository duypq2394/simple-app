import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './stores/course-store';
import { createClientApp } from './routes/course-route';

const win: any = window;
const preloadedState = win.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
const app = createClientApp(store);

ReactDOM.hydrate(app, document.getElementById('app'));
