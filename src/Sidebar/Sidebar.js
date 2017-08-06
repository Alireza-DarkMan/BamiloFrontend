import React, { Component } from 'react';
import axios from "axios";

import Categories from '../Categories/Categories';
import Attributes from '../Attributes/Attributes';

import './Sidebar.css';

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: null,
			filters: {},
			categories: [],
			attributes: []
		};

		this.categorySelect = this.categorySelect.bind(this);
		this.attributeSelect = this.attributeSelect.bind(this);
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
		
		if(category) {
			this.setState({category: category});
			let link = "http://localhost:8000/api/categories/"+category.id+"/attributes";

			axios.get(link)
			      .then((response) => {
			        this.setState({attributes: response.data});
			      })
			      .catch((err) => {
			        console.log(err);
			      })		
		} else {
			this.setState({attributes: [], category: null})
		}
	}

	attributeSelect(attribute, value, checked) {
		let { filters } = this.state; 
		if(checked) {
			if(filters[attribute]) {
				this.setState({filters: {...filters, [attribute]: [...filters[attribute], value]}});
			} else {
				this.setState({filters: {...filters, [attribute]: [value]}});
			}
		}else{
			if(filters[attribute].length === 1){
				let filtered = delete filters[attribute];
				this.setState({filters: filtered});
			} else {
				let filtered = filters[attribute].filter(filter => filter != value);
				this.setState({filters: {...filters, [attribute]: filtered}});
			}
		}

		this.props.onAttributeSelect(filters);
	}

	render() {
		const { categories, category, attributes } = this.state;

		return (
			<aside id="sidebar"> 
				<div className="categories-wrapper">
					<a onClick={() => this.categorySelect(null) }>
						{ category ? category.title: 'All' }
					</a>
					<Categories categories={ categories } onCategorySelect={ this.categorySelect }/>
				</div>
				<Attributes attributes={ attributes } onAttributeSelect={ this.attributeSelect } />
			</aside>
			);
	}
}

export default Sidebar;