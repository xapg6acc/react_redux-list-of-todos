import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './app/store';
import { fetchTodos } from './features/todos';

store.dispatch(fetchTodos());

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
