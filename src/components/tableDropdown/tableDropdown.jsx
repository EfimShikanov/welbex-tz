import React from 'react';
import S from "./TableDropdown.module.sass";
import {setFilter, switchFilterIsShown} from "../../slices/tableSlice";

const TableDropdown = (props) => {

	const selectDropdownItem = (item) => {
		props.dispatch(setFilter({filter: props.filter, value: item}));
		props.dispatch(switchFilterIsShown(props.filter));
	}

	const renderDropdownItems = () => {
		return props.data.items.map((item, index) => {
			return (
				<div
					className={S.dropdownItem}
					key={index}
					onClick={() => selectDropdownItem(item)}
				>{item}</div>
			)
		})
	}

	return (
		<div className={props.data.isShown ? S.dropdown : S.hidden}>
			{renderDropdownItems()}
		</div>
	);
};

export default TableDropdown;