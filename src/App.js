import React from 'react';
import { Provider } from 'react-redux';
import AddTodoStore from './components/AddTodo';
import ListTodoStore from './components/ListTodo';
import store from './shared/store';

const App = () => {
    return (

        <Provider store={store}>
            <AddTodoStore/>
            <hr />
            <h1>List des Taches </h1>
            <ListTodoStore />
            
        </Provider>
    );
};

export default App;
