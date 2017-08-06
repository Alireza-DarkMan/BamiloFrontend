import React, { Component } from 'react';

import Product from './Product';

import './Products.css';

class Products extends Component {
	render() {
		const { products } = this.props;

		return (
			<div>
				<div id="products-list">
					{
						products.map(product => {
							return <Product product={ product } key={ product.id } />
						})
					}
				</div>
			</div>
			);
	}
}

export default Products;