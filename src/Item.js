import React, { Component } from 'react';
import './Item.css'


class Item extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    if (this.props.location==="list") {
      const item = {
        id: this.props.id, 
        name: this.props.name,
        price: this.props.price,
        image_url: this.props.image_url
      }
      this.props.triggerAdd(item);

    } else if (this.props.location==="cart"){

      this.props.triggerDelete(this.props.id);
    }
  }

  render() {
    return (
      <div className="Item">
        <div>
          { this.props.name }
        </div>
        <div>
          { this.props.price }
        </div>
        <img src={ this.props.image_url } alt={ this.props.name }/>
        <div>

        <button onClick={this.handleClick}>           {this.props.location==="list" ? "Add Item" : "Remove Item"}</button>
            
        </div>
      </div>
    );
  }
}

export default Item;