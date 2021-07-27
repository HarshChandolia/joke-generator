import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JokeContextProvider from './contexts/JokeContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <JokeContextProvider>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </div>
        </JokeContextProvider>
      </div>
    </Router>
  );
}

export default App;
