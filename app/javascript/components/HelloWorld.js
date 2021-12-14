import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

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

function getThings(){
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/things.json`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  };
};

class HelloWorld extends React.Component {
  render () {
    const { greetings } = this.props;
    const greetingsList = greetings.map((greet) => {
      return <li>{greet.greet} {greet.guid}</li>
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>getGreetings</button>
        <br />
        <ul>{ greetingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

HelloWorld.propTypes = {
  greeting: PropTypes.string
};


export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
