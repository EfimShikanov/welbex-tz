import React from "react";
import S from "./TableHead.module.sass";
import {updateInputValue, setFilterValue} from "../../slices/tableSlice";
import Filter from "../filter/Filter";

const TableHead = (props) => {

	const inputChangeHandler = (e) => {
		props.dispatch(updateInputValue(e.target.value))
	}

	const appendFilter = (e) => {
		e.preventDefault();
		props.dispatch(setFilterValue());
	}

	return (
		<div className={S.tableHead}>
			<div className={S.tableFilters}>
				<Filter data={props.filters.column} dispatch={props.dispatch} filter={1} />
				<Filter data={props.filters.condition} dispatch={props.dispatch} filter={0} />
			</div>
			<form onSubmit={(e) => appendFilter(e)}>
				<input className={S.tableHeadInput} type="text" value={props.filters.inputValue} onChange={(e) => inputChangeHandler(e)} />
				<button type="submit" className={S.button} onClick={(e) => appendFilter(e)}>Apply</button>
			</form>
		</div>
	);
};

export default TableHead;