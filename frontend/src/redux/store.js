import reducers from './reducers/all-reducers';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducers, middleware);