import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { useAppSelector } from './app/hooks';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';

export const App = () => {
  const loading = useAppSelector(state => state.loading);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">{loading ? <Loader /> : <TodoList />}</div>
          </div>
        </div>
      </div>

      <TodoModal />
    </>
  );
};
