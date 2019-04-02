import React, { Component } from 'react';

// import './Item.css'

class Item extends Component {
//   constructor(props) {
//     super(props)
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler() {
//     this.props.triggerRemove(this.props.Item.id);
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // return this.props.Item.id !== nextProps.Item.id;
//     return false;
//   }

  render() {
    return (
      <div className="Item">
        <div>
          { this.props.name }
          {/* <button  onClick={this.clickHandler}> X </button> */}
        </div>
      </div>
    );
  }
}

export default Item;