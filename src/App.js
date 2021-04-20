import './App.css';
import Home from './Home';
import Search from './Search';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
