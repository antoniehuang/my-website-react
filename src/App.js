import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

// Imports from my custom react components
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Alert key='info' variant='info'>
          Currently redesigning my website with React.
        </Alert>
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <AboutMe />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
          </Switch>
        </div>
      </div >
    </Router>
  );
}

export default App;
