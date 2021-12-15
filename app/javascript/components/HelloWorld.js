import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings(){
  console.log('getGreetings() Action!!')
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class HelloWorld extends React.Component {
  render () {
    console.log(greetings);
    const { greetings } = this.props;
    const greetingsList = greetings.map((greet) => {
      console.log(greet);
      return <li>{greet.greeting}</li>
    });

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getGreetings()}>getGreetings</button>
        <br />
        <ul>{ greetingsList }</ul>
      </React.Fragment>
    );
  }
}

/*
function getGreetings(){
  console.log('getGreetings() Action!!')
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => console.log(response.json()))
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class HelloWorld extends React.Component {
  render () {
    const { greetings } = this.props;
    console.log(greetings);
    const greetingsList = greetings.map((greet) => {
      console.log(greet);
      console.log(greet.greet);
      return <li>{greet.greet}</li>
    });
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getGreetings()}>getGreetings</button>
        <br />
        <ul>{ greetingsList }</ul>
      </React.Fragment>
    );
  }
}

*/
const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

HelloWorld.propTypes = {
  greeting: PropTypes.string
};


export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
