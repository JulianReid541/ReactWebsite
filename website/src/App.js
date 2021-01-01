import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Pages
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import AdminWrapper from './components/AdminWrapper';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path="/admin"
          render={props => {
            return (
              <AdminWrapper>
                {this.props.auth.token ?
                  <Dashboard />
                  :
                  <Login />
                }
              </AdminWrapper>
            )
          }}
        />
        <Route exact={true} path="/"
          render={props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>

          )}
        />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/about"
          render={props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>

          )}
        />
        <Route path="/contact"
          render={props => (
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>

          )}
        />
      </Router>
    );
  } 
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
