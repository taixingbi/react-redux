import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Product from "./components/Product";


const products = [

  {
    id: 1,
    name: "Bontrager Evoke Women’s Glove",
    description: "details",
    img: "/images/1.jpg",
    price: 30
  },

  {
    id: 2,
    name: "Bontrager Glove Race WSD Windshell",
    description: "details",
    img: "./images/2.jpg",
    price: 40
  },


  {
    id: 3,
    name: "Bontrager GLV Classique Full Finger",
    description: "details",
    img: "./images/3.jpg",
    price: 30
  },

];


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart: [
        // {
        //   id: 4,
        //   name: "Banana",
        //   description: "I need those carbs",
        //   img: "https://tachyons.io/img/avatar_1.jpg",
        //   price: 100,
        //   qty: 2
        // }
      ]
    };
  }

  handleAddFunc(product) {
    console.log(this.state);
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    if (existingProduct.length > 0) {

        const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
        const updatedqtyProduct = {
          ...existingProduct[0],
          qty: existingProduct[0].qty + product.qty
        };

        this.setState({
          cart: [...withoutExistingProduct, updatedqtyProduct]
        });

    } else {//product not there
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <ul>
        {
          this.state.cart.map(c => <li>{c.name} | qty {c.qty}</li>)
        }
        </ul>

        {
          products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
        }
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
