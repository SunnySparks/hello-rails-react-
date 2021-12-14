import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWorld from './HelloWorld'
import configureStore from "../configureStore";
import { Provider } from "react-redux";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
          <Routes>
            <Route path="/" element= { ("Home!") }/>
            <Route path="/hello" element={ <HelloWorld greeting="Friend" /> } />
          </Routes>
        </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App
