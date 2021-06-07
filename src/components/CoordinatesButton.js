// Code CoordinatesButton Component Here
import React from 'react'; 

export default class CoordinatesButton extends React.Component {

    xyCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]) //array of xy coords 
    }
    ////This component takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.

    render () {
        return (
            <button onClick = {this.xyCoordinates}>Coordinates</button>
        )
    }
}