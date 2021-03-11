import logo from './logo.svg';
import './App.css';
import HeaderSword from './components/HeaderSword.js'
import Login from './components/Login.js'
import Listuser from './components/Listuser.js'
import ViewUser from './components/Viewuser.js'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <HeaderSword></HeaderSword>
          <Switch>
            <Route path="/list-user" exact component={() => <Listuser/>} />
            <Route path="/view-user/:userId" exact component={({match}) => <ViewUser match={match}/>}/>
            <Route path="/" exact component={() => <Login/>} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
