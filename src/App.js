import logo from './dog_paw.svg';
import './App.css';
import SearchBar from './searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TheLitterPicker.com</h1>
        <SearchBar className="SearchBar"/>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
