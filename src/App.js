import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import ItemList from './ItemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
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
