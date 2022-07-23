import React from 'react';
import S from "./TableFooter.module.sass";
import Pagination from "../pagination/Pagination";

const TableFooter = (props) => {
	return (
		<Pagination
			dispatch={props.dispatch}
			dataCount={props.dataCount}
			pageSize={props.pagination.pageSize}
			currentPage={props.pagination.currentPage}
		/>
	);
};

export default TableFooter;