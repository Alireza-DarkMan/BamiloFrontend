import React, { Component } from 'react';
import axios from "axios";

import Categories from '../Categories/Categories';
import Attributes from '../Attributes/Attributes';

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'filters': [],
			'categories': [],
			'attributes': []
		};

		this.categorySelect = this.categorySelect.bind(this);
	}

	componentWillMount() {
		axios.get("http://localhost:8000/api/categories")
		      .then((response) => {
		        this.setState({'categories': response.data});
		      })
		      .catch((err) => {
		        console.log(err);
		      });
	}

	categorySelect( category ) {
		this.props.onCategorySelect(category);
		
		axios.get("http://localhost:8000/api/categories/"+category+"/attributes")
		      .then((response) => {
		        this.setState({'attributes': response.data});
		      })
		      .catch((err) => {
		        console.log(err);
		      })		
	}

	render() {
		const { categories, attributes } = this.state;

		return (
			<aside id="sidebar"> 
				<Categories categories={ categories } onCategorySelect={ this.categorySelect }/>
				<Attributes attributes={ attributes } />
			</aside>
			);
	}
}

export default Sidebar;