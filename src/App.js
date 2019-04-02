import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import ItemList from './ItemList';
import Cart from './Cart';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.addItemToCart=this.addItemToCart.bind(this);
    this.deleteItemFromCart=this.deleteItemFromCart.bind(this);
  }

  addItemToCart(itemObj) {
    this.props.addToCart(itemObj);
  }
  deleteItemFromCart(id) {
    this.props.removeFromCart(id);
  }

  render() {
    return (
      <div className="App">
        <ItemList 
          triggerAdd={this.addItemToCart} />
        <Cart
          triggerDelete={this.deleteItemFromCart}
          items={this.props.itemsInCart}/>
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
  return { itemsInCart: reduxState.itemsInCart };
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
