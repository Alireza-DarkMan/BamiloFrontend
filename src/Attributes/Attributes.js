import React, { Component } from 'react';

class Attributes extends Component {
	render() {
		const { attributes } = this.props;

		return (
			<div>
				{ attributes.map(attribute => {
					return (
						<div key={ attribute.id } onClick={ () => this.onClickHander( attribute.id ) }> 
							<h4>{ attribute.title }</h4>
							<ul>
							{
								attribute.values.map(value => {
									return (
										<li key={ value }>
											<label>
												<input type="checkbox" value={ value } /> {value}
											</label>
										</li>
										);
								})
							}
							</ul>
						</div>

						)
					})
				}
			</div>
			);
	}
}

export default Attributes;