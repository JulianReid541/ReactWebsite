import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Pages
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/team" component={Team} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    );
  } 
}

export default App;
