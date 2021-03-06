import React, { Component } from 'react';
import data from './data.json';
import Item from './Item';

// import './ItemList.css'

class ItemList extends Component {

  render() {
    const { items } = data;
    const itemsList = items.map(i => <Item 
                                        id={i.id} 
                                        key={i.id}
                                        name={i.name}
                                        price={i.price}
                                        image_url={i.image_url}
                                        location="list"
                                        triggerAdd={this.props.triggerAdd} />);
    return (
      <div className="ItemList">
        <div>
          { itemsList }
        </div>
      </div>
    );
  }
}

export default ItemList;