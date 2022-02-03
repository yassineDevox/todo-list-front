import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import store from './redux/store';

const App = () => {
    return (

        <Provider store={store}>
            <div className='text-center'>
                <AddTodo />
                <hr />
                <h1>List des Taches </h1>
                <ListTodo />
            </div>

        </Provider>
    );
};

export default App;
