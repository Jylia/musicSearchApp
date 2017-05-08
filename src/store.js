import { createStore, applyMiddleware, compose } from 'redux';
import musicSearchReducer from './reducers/musicSearchReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const middleware = applyMiddleware( thunk );

  if (process.env.NODE_ENV === 'test') {
    const storeTest = createStore(musicSearchReducer);
    return storeTest;
  } else {
    const store = createStore(
      musicSearchReducer,
      compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    return store;
  }
};