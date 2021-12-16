import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

const getGreetings = () => {
 return dispatch => {
   dispatch({ type: GET_GREETINGS_REQUEST });
   return fetch(`v1/greetings.json`)
   .then(response => response.json())
   .then(json => dispatch(getGreetingsSuccess(json)))
   .catch(error => console.log(error));
 };
};

export function getGreetingsSuccess(json){
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class Greeting extends React.Component {
  render () {
    const greetList = [];
    const { greetings } = this.props;
    greetings.map((greet) => {
      greetList.push(greet.greeting);
    })
    const randomGreet = greetList[Math.floor(Math.random()*greetList.length)];
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Click here to greet</button>
        <br />
        <div>{ randomGreet }</div>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
