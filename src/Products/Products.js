import React, { Component } from 'react';

import Product from './Product';

import './Products.css';

class Products extends Component {
	constructor(props) {
		super(props);
		
		this.state = {page: 1}

		this.getProducts = this.getProducts.bind(this);
		this.setPage = this.setPage.bind(this);
	}

	getProducts() {
		const { page } = this.state;
		const { products } = this.props;

		return products.slice((page - 1) * 9, page * 9);
	}

	setPage(page) {
		this.setState({page: page});
	}

	render() {
		const { page } = this.state;
		const { products } = this.props;

		let elements = [];
		for(let i = 0; i <= products.length / 9; i++) {
			elements.push(<li key={ i } onClick={() => this.setPage(i + 1)} 
							className={ i + 1 === page ? 'active' : ''}>
								{ i + 1 }
							</li>);
		}

		return (
			<div>
				<div id="products-list">
					{
						this.getProducts().map(product => {
							return <Product product={ product } key={ product.id } />
						})
					}
				</div>
				<div>
					<ul className="pagination">
						{ elements.map(each => each) }
					</ul>
				</div>
			</div>
			);
	}
}

export default Products;