import React from 'react';
import S from "./Filter.module.sass";
import TableDropdown from "../tableDropdown/tableDropdown";
import {switchFilterIsShown} from "../../slices/tableSlice";

const Filter = (props) => {

	const filterClickHandler = () => {
		props.dispatch(switchFilterIsShown(props.filter));
	}

	return (
		<div className={S.filter}>
			<div
				onClick={filterClickHandler}
				className={props.data.isShown ? S.filterValue + " " + S.active : S.filterValue}
			>
				<div>
					{props.data.currentFilter}
				</div>
				<svg
					className={props.data.isShown ? S.dropdownIcon + " " + S.toggleUp : S.dropdownIcon + " " + S.toggleDown}
					xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
					fill="#FFFFFF">
					<path d="M24 24H0V0h24v24z" fill="none"/>
					<path
						d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
				</svg>
			</div>
			<TableDropdown
				data={props.data}
				dispatch={props.dispatch}
				filter={props.filter}
			/>
		</div>
	);
};

export default Filter;