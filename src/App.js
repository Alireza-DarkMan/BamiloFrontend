import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {products: [], link: ''};

    this.categorySelect = this.categorySelect.bind(this);
    this.attributeSelect = this.attributeSelect.bind(this);
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
    let link = ''; 
    if(category == null) {
      link = "http://localhost:8000/api/products";
    } else if(typeof(category) == "object") {
      link = "http://localhost:8000/api/categories/"+ category.id +"/products";
    } else {
      link = "http://localhost:8000/api/categories/"+ category +"/products";
    }

    this.setState({link: link});

    axios.get(link)
          .then((response) => {
            this.setState({'products': response.data});
          })
          .catch((err) => {
            console.log(err);
          });
  }

  attributeSelect(filters) {
    const { link } = this.state;
    let query = '';

    query = Object.keys(filters).map(attribute =>{
       return attribute+'='+filters[attribute].join();
    }).join('&');
    
    axios.get(link +'?'+ query)
          .then((response) => {
            this.setState({'products': response.data});
          })
          .catch((err) => {
            console.log(err);
          });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Sidebar onCategorySelect={ this.categorySelect } onAttributeSelect={ this.attributeSelect }/>
          <Products products={ products }/>
        </div>
      </div>
    );
  }
}

export default App;
