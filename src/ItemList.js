import React, { Component } from 'react';
import data from './data.json';
import Item from './Item';

// import './ItemList.css'

class ItemList extends Component {
//   constructor(props) {
//     super(props)
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler() {
//     this.props.triggerRemove(this.props.ItemList.id);
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // return this.props.ItemList.id !== nextProps.ItemList.id;
//     return false;
//   }

  render() {
    const { items } = data;
    const itemsList = items.map(i => <Item id={i.id} name={i.name} />);
    return (
      <div className="ItemList">
        <div>
          { itemsList }
          {/* <button  onClick={this.clickHandler}> X </button> */}
        </div>
      </div>
    );
  }
}

export default ItemList;