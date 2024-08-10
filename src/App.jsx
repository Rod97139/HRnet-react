import { Provider } from 'react-redux';
import './App.css'
import Router from './Router'
import store from './store'

const App = () => {

    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    );
}

export default App
