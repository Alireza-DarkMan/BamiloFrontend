import React, { Component } from 'react';

class Categories extends Component {
	onClickHander(category) {
		console.log(this.props.onCategorySelect);
		this.props.onCategorySelect(category)
	}

	render() {
		const { categories } = this.props;


		return (
			<ul>
				{ categories.map(category => {
					return (
						<li key={ category.id } onClick={ () => this.onClickHander( category.id ) }> 
							{ category.title } 
							{ category.childrens.length > 0 ? 
									<Categories 
										categories={ category.childrens } 
										onCategorySelect={ this.onClickHander } /> : '' }
						</li>

						)
					})
				}
			</ul>
			)
	}
}

export default Categories;