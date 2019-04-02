import React, { Component } from 'react';
import Item from './Item';

// import './Cart.css'

class Cart extends Component {

  render() {
    const items = this.props.items;
    const itemsList = items.map(i => <Item 
                                        id={i.id} 
                                        key={i.id}
                                        name={i.name}
                                        price={i.price}
                                        image_url={i.image_url}
                                        location="cart"
                                        triggerDelete={this.props.triggerDelete} />);
    return (
      <div className="Cart">
        <div>
          { itemsList }
        </div>
      </div>
    );
  }
}

export default Cart;