import React from "react";
import S from "./Table.module.sass";
import TableHead from "../tableHead/TableHead";
import TableBody from "../tableBody/TableBody";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../pagination/Pagination";

const Table = () => {

	const dispatch = useDispatch();
	const filters = useSelector(state => state.table.filters);
	const data = useSelector(state => state.table.data);
	const sorting = useSelector(state => state.table.sorting);
	const pagination = useSelector(state => state.table.pagination)

	return (
		<div className={S.table}>
			<div className={S.tableContent}>
				<TableHead dispatch={dispatch} filters={filters}/>
				<TableBody pagination={pagination} dispatch={dispatch} sorting={sorting} data={data} filters={filters}/>

			</div>
			<div className={S.tableFooter}>
				<Pagination
					dispatch={dispatch}
					dataCount={data.length}
					pagination={pagination}
				/>
			</div>
		</div>
	)
}

export default Table;