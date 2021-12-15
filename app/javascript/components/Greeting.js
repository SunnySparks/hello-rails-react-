import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
 console.log('Action!!')
 return dispatch => {
   dispatch({ type: GET_GREETINGS_REQUEST });
   return fetch(`v1/greetings.json`)
   .then(response => response.json())
   .then(json => dispatch(getGreetingsSuccess(json)))
   .catch(error => console.log(error));
 };
};

export function getGreetingsSuccess(json){
  // console.log(json)
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class Greeting extends React.Component {
  render () {
    const greetList = [];
    const { greetings } = this.props;
    const greetingsList = greetings.map((greet) => {
      greetList.push(greet.greeting);
      // console.log(greet.greeting);
      // 
      // console.log('random greet', randomGreet);
      return (
        <div>
          <div>here</div>
          <div>{greetList}</div>
        </div>
      );
    })
    console.log(greetList);
    const randomGreet = greetList[Math.floor(Math.random()*greetList.length)];
    console.log('random greet', randomGreet);

    console.log(greetings);
    const random = greetings.forEach((greet) => {
      // console.log(greet);
      const list = [];
      list.push(greet.greeting);
      // console.log(greet.greeting);
      // console.log(list);
      const rGreet = list[Math.floor(Math.random()*list.length)];
      // console.log('rgreet', rGreet);
      return (
        <div>
          <div>here</div>
          <div>{ rGreet }</div>
        </div>
      );
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Greetings</button>
        <br />
        <div>{ randomGreet }</div>
        {/*
        <ul>{ greetingsList }</ul>
        */}
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
