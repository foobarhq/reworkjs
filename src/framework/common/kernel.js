import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, createMemoryHistory } from 'react-router';
import { createSelector } from 'reselect';
import '../common/load-polyfills';
import RouteProvider from '../app/providers/RouteProvider';
import mainComponent from '../common/main-component';
import createRoutes from './create-routes';
import createStore from './create-store';

// useRouterHistory creates a composable higher-order function
const navigationHistory = process.env.SIDE === 'client' ? browserHistory : createMemoryHistory();
const store = createStore(navigationHistory);

const history = syncHistoryWithStore(navigationHistory, store, {
  selectLocationState: createSelector(
    RouteProvider.locationBeforeTransitions,
    locationBeforeTransitions => ({ locationBeforeTransitions }),
  ),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: mainComponent,
  childRoutes: createRoutes(store),
};

export { rootRoute, history, store };
