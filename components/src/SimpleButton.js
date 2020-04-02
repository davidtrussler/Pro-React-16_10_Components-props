import React from 'react'; 
import PropTypes from 'prop-types'; 

export function SimpleButton(props) {
	return (
		<button 
			className={props.className}
			onClick={props.callback}
		>{props.text}</button>
	)
}

SimpleButton.defaultProps = {
	disabled: false
}

SimpleButton.propTypes = {
	text: PropTypes.string, 
	theme: PropTypes.string, 
	callback: PropTypes.func, 
	disabled: PropTypes.bool
}
