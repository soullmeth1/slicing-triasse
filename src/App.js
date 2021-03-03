import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/search';
import Detail from './pages/detail';
import NotFound from './pages/404';
import Nav from './components/Nav';
import ContactInfo from './components/ContactInfo';
import { GlobalStyles } from './GlobalStyle';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <ContactInfo />
        <Nav />
        <Switch>
          <Route exact path={['/', '/search']} component={Search} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
