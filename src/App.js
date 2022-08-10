import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Imports from my custom react components
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Blog from './Blog';
import PageComponent from './mdBlog';
import ProjectPageComponent from './mdProjects';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Alert key='info' variant='info'>
          Currently redesigning my website with React.
        </Alert> */}
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <AboutMe />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route exact path='/cv'>
              <PageComponent />
            </Route>
            <Route exact path='/projects'>
              <ProjectPageComponent />
            </Route>
          </Switch>
        </div>
      </div >
      <Navbar class="footer" expand="lg" variant="light" bg="light">
        <Container>
          <p>© Copyright 2022 Antonie Yu-Chi Huang</p>
        </Container>
      </Navbar>
    </Router>
  );
}

export default App;
