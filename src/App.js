import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Imports from my custom react components
import NavBar from './NavBar';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="light" expand='lg'>
        <Container>
          <Navbar.Brand href="#">Antonie</Navbar.Brand>
        </Container>
      </Navbar> */}

      <NavBar />
      <AboutMe />

    </div >
  );
}

export default App;
