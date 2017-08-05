import React, { Component } from 'react';

class Attributes extends Component {
	render() {
		const { attributes } = this.props;

		return (
			<ul>
				{ attributes.map(attribute => {
					return (
						<li key={ attribute.id } onClick={ () => this.onClickHander( attribute.id ) }> 
							{ attribute.title } 
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
						</li>

						)
					})
				}
			</ul>
			);
	}
}

export default Attributes;