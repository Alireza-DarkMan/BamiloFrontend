import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {'products': []};

    this.categorySelect = this.categorySelect.bind(this);
  }

  componentWillMount() {
    axios.get("http://localhost:8000/api/products")
          .then((response) => {
            this.setState({'products': response.data});
          })
          .catch((err) => {
            console.log(err);
          });
  }

  categorySelect( category ) {
    let link = "http://localhost:8000/api/categories/"+ category +"/products";

    if(category == null) {
      link = "http://localhost:8000/api/products";
    }

    axios.get(link)
          .then((response) => {
            this.setState({'products': response.data});
          })
          .catch((err) => {
            console.log(err);
          });
  }

  render() {
    const { products } = this.state;
console.log(products);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Sidebar onCategorySelect={ this.categorySelect }/>
          <Products products={ products }/>
        </div>
      </div>
    );
  }
}

export default App;
