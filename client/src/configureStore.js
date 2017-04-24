import { createStore } from 'redux';

import timeWriterApp from './reducers';

const configureStore = () =>  {
  const store = createStore(
    timeWriterApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ shouldHotReload: false })
  );
  return store;
}

export default configureStore;
