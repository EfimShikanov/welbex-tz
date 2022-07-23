import React from 'react';
import {setCurrentPage, setPageSize} from "../../slices/tableSlice";
import S from "./Pagination.module.sass";
import PaginationIcons from "./PaginationIcons";

const Pagination = (props) => {
	const dataCount = props.pagination.dataCount === 0 ? props.dataCount : props.pagination.dataCount

	const pageCount = Math.ceil(dataCount / props.pagination.pageSize);

	const setPageHandler = (page) => {
		props.dispatch(setCurrentPage(page))
	}

	const nextPageHandler = () => {
		props.dispatch(setCurrentPage(props.pagination.currentPage + 1))
	}

	const prevPageHandler = () => {
		props.dispatch(setCurrentPage(props.pagination.currentPage - 1))
	}

	const firstPageHandler = () => {
		props.dispatch(setCurrentPage(1))
	}

	const lastPageHandler = () => {
		props.dispatch(setCurrentPage(pageCount))
	}

	const renderPaginationItems = () => {
		let paginationRange = [];
		for (let i = 1; i <= pageCount; i++) {
			paginationRange.push(i)
		}
		return paginationRange.map(item => {
			return <div
				onClick={() => setPageHandler(item)}
				className={props.currentPage === item ? S.paginationItem + " " + S.active : S.paginationItem}
				key={item}
			>{item}</div>
		})
	}

	return (
		<div className={S.pagination}>
			<div  className={S.paginationIcon + " " + S.left} onClick={firstPageHandler}>
				<PaginationIcons doubleArrow />
			</div>
			<div className={S.paginationIcon + " " + S.left} onClick={prevPageHandler}>
				<PaginationIcons />
			</div>
			{renderPaginationItems()}
			<div className={S.paginationIcon + " " + S.right} onClick={nextPageHandler}>
				<PaginationIcons />
			</div>
			<div className={S.paginationIcon + " " + S.right} onClick={lastPageHandler}>
				<PaginationIcons doubleArrow />
			</div>
		</div>
	);
};

export default Pagination;