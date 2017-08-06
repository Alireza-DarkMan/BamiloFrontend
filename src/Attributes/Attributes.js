import React, { Component } from 'react';

class Attributes extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.onClickHandler = this.onClickHandler.bind(this);
	}
	
	onClickHandler(e) {
		this.props.onAttributeSelect(e.target.name, e.target.value, e.target.checked);
	}

	render() {
		const { attributes } = this.props;

		return (
			<div>
				{ attributes.map(attribute => {
					return (
						<div key={ attribute.id }> 
							<h4>{ attribute.title }</h4>
							<ul>
							{
								attribute.values.map(value => {
									return (
										<li key={ value }>
											<label>
												<input 
													type="checkbox" 
													name={ attribute.id }
													value={ value } 
													onChange={ this.onClickHandler }/> 
												{value}
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