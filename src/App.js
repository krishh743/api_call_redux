import './App.css';
import MoviesTable from './components/MoviesTable';
import WelcomePage from './pages/welcome-page/WelcomePage';


function App() {
  return (
    <div className="App">
      <MoviesTable />
      <WelcomePage/>
    </div>
  );
}

export default App;
