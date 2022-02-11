import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRoutes from './router/routes';

const App = () => (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

export default App;
