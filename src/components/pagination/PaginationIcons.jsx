import React from 'react';

const PaginationIcons = (props) => {
	if(props.doubleArrow) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
				<rect fill="none" height="24" width="24"/>
				<rect fill="none" height="24" width="24"/>
				<path
					d="M17.29,5.71L17.29,5.71c-0.39-0.39-1.02-0.39-1.41,0L12,9.58L8.11,5.7c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.68,6.73,17.68,6.1,17.29,5.71z"/>
				<path
					d="M17.29,12.3L17.29,12.3c-0.39-0.39-1.02-0.39-1.41,0L12,16.17l-3.88-3.88c-0.39-0.39-1.02-0.39-1.41,0l0,0 c-0.39,0.39-0.39,1.02,0,1.41l4.59,4.59c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.68,13.32,17.68,12.69,17.29,12.3z"/>
			</svg>
		)
	} else {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
				<path d="M24 24H0V0h24v24z" fill="none"/>
				<path
					d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
			</svg>
		)
	}
};

export default PaginationIcons;