import React from 'react';
import S from "./TableRow.module.sass";

const TableRow = (props) => {
	return (
		<div className={S.tableRow}>
			<div className={S.tableRowItem}>
				{props.date}
			</div>
			<div className={S.tableRowItem}>
				{props.name}
			</div>
			<div className={S.tableRowItem}>
				{props.amount}
			</div>
			<div className={S.tableRowItem}>
				{props.distance}
			</div>
		</div>
	);
};

export default TableRow;