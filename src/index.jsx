import React, { Component } from "react";
import ReactDOM,{render} from "react-dom";
import XButton from './button';
 
export default class Index extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return <XButton /> 
  }
}

// var element = document.getElementById("container");
var element = document.getElementById("container");
render(<XButton />, element);
 

