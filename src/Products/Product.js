import React, { Component } from 'react';

class Product extends Component {
	render() {
		const { product } = this.props;

		return (
			<div className="product-wrapper">
				<img src={ "http://localhost:8000/storage/images/" + product.img_url } />
				<h3>{ product.title }</h3>
				<h5>{ product.model }</h5>
			</div>
			);
	}
}

export default Product;