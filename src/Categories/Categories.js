import React, { Component } from 'react';

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
				<li onClick={ () => this.onClickHandler(categories[0].parent_id) }>All</li>
				{ categories.map(category => {
					return (
						<li key={ category.id }> 
							<span  onClick={ () => this.onClickHandler( category.id ) }>
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