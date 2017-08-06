import React, { Component } from 'react';

import './Categories.css';

class Categories extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(category) {
		this.props.onCategorySelect(category)
	}

	render() {
		const { categories } = this.props;

		return (
			<ul>
				{ categories.map(category => {
					return (
						<li key={ category.id }> 
							<span  onClick={ () => this.onClickHandler( category ) }>
								{ category.title } 
							</span>

							{ category.children.length > 0 ? 
									<Categories 
										categories={ category.children } 
										onCategorySelect={ this.onClickHandler } /> : '' }
						</li>

						)
					})
				}
			</ul>
			)
	}
}

export default Categories;