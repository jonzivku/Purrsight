import React, { Component } from 'react';
import PictureCard from './PictureCard.js';

export default class PictureCards extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <>
        <PictureCard picture={this.props.pictureArray[0]} />
        <PictureCard picture={this.props.pictureArray[1]} />
        <PictureCard picture={this.props.pictureArray[2]} />
        <PictureCard picture={this.props.pictureArray[3]} />
      </>
    );
  }
}

