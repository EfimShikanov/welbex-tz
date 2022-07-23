import React from 'react';
import S from "./TableBody.module.sass";
import TableRow from "../tableRow/TableRow";
import ArrowIcon from "./ArrowIcon";
import {setSorting, setDataCount} from "../../slices/tableSlice";
import {dataSort} from "./dataSorting";
import {dataFiltering} from "./dataFiltering";

const TableBody = (props) => {

	const renderRows = () => {

		let dataToRender = props.data;

		if (props.filters.filterValue !== "") {
			dataToRender = dataFiltering(dataToRender, props.filters.column.currentFilter, props.filters.condition.currentFilter, props.filters.filterValue);
			props.dispatch(setDataCount(dataToRender.length));
		}

		props.sorting.items.map(item => {
			if (item.isSorted) {
				dataToRender = dataSort(dataToRender, item.name, item.sortedBy);
			}
		})

		if(dataToRender.length > 0) {
			return dataToRender.map((item, index) => {

				if (index + 1 > props.pagination.currentPage * props.pagination.pageSize || index + 1 <= props.pagination.currentPage * props.pagination.pageSize - props.pagination.pageSize) {
					return
				}

				return <TableRow
					key={index}
					date={item.date}
					name={item.name}
					amount={item.amount}
					distance={item.distance}
				/>
			})
		} else {
			return <div>Nothing was found.</div>
		}


	}

	const renderHeader = () => {
		return props.sorting.items.map((item, index) => {
			return (
				<div key={index} className={S.columnHeader}>
					<div
						className={S.columnHeaderName}
						onClick={() => sortingClickHandler(index)}
					>{item.name}</div>
					{item.isSorted
						?
						<div
							className={item.sortedBy === "asc" ? S.columnHeaderIcon + " " + S.toggleUp : S.columnHeaderIcon + " " + S.toggleDown}>
							<ArrowIcon/>
						</div>
						: null
					}
				</div>
			)
		})
	}

	const sortingClickHandler = (index) => {
		props.dispatch(setSorting(index))
	}

	return (
		<div className={S.tableBody}>
			{}
			<div className={S.columnHeaders}>
				{renderHeader()}
			</div>
			<div className={S.tableBodyRows}>
				{renderRows()}
			</div>
		</div>
	)
}

export default TableBody;