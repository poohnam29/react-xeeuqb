import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import PropTypes from 'prop-types';

class App extends React.Component {
 
  render() {
    return <h2>{this.props.name},{this.props.cities},{this.props.age}</h2>;
  }
   
}
App.customProps= function (props, age, App) {
  const regex = /^[2-6][0-9]?$/;
  
  if (!regex.test(props[age])) {
    return new Error(`invalid prop`);
  }
}
 App.defaultProps = {
        name: "Steve",
        cities:["Bangalore","Chennai"],
        age:18}
App.propTypes = {
    cities: PropTypes.array,
    age: PropTypes.number,
    name: PropTypes.string.isRequired
 }
class Main extends React.Component {
  constructor(props) {}
    
    
  render() {
    return (
      <div>
      
      <App name="John" age="80" cities={["Pune"," Chennai"]} />
      </div>
    );
  }
}



render(<Main />, document.getElementById('root'));
