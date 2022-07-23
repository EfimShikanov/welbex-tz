import {createSlice} from "@reduxjs/toolkit";

const tableSlice = createSlice({
	name: 'table',
	initialState: {
		filters: {
			column: {
				items: [
					'date', 'name', 'amount', 'distance'
				],
				currentFilter: 'name',
				isShown: false
			},
			condition: {
				items: [
					'contains', '=', '>', '<'
				],
				currentFilter: '=',
				isShown: false
			},
			filterValue: "",
			inputValue: ""
		},
		sorting: {
			items: [
				{name: 'date', isSorted: false,  sortedBy: "asc"},
				{name: 'name', isSorted: false, sortedBy: "asc"},
				{name: 'amount', isSorted: false, sortedBy: "asc"},
				{name: 'distance', isSorted: false, sortedBy: "asc"},
			]
		},
		pagination: {
			currentPage: 1,
			pageSize: 15,
			dataCount: 0
		},
		data: []
	},
	reducers: {
		setData(state, action) {
			state.data = action.payload
		},
		switchFilterIsShown(state, action) {
			if(action.payload) {
				state.filters.column.isShown = !state.filters.column.isShown
			} else {
				state.filters.condition.isShown = !state.filters.condition.isShown
			}
		},
		setFilter(state, action) {
			if(action.payload.filter) {
				state.filters.column.currentFilter = action.payload.value
			} else {
				state.filters.condition.currentFilter = action.payload.value
			}
		},
		updateInputValue(state, action) {
			state.filters.inputValue = action.payload;
		},
		setFilterValue(state) {
			state.filters.filterValue = state.filters.inputValue;
		},
		setSorting(state, action) {
			if(state.sorting.items[action.payload].isSorted) {
				if(state.sorting.items[action.payload].sortedBy === "asc") {
					state.sorting.items[action.payload].sortedBy = "desc"
				} else {
					state.sorting.items[action.payload].sortedBy = "asc"
				}
			} else {
				state.sorting.items.map(item => {
					if(item.isSorted) {
						item.isSorted = false
					}
				})
				state.sorting.items[action.payload].isSorted = true
				state.sorting.items[action.payload].sortedBy = "asc"
			}
		},
		setCurrentPage(state, action) {
			state.pagination.currentPage = action.payload
		},
		setPageSize(state, action) {
			state.pagination.pageSize = action.payload
		},
		setDataCount(state, action) {
			state.pagination.dataCount = action.payload
		}
	}
});

export const {
	switchFilterIsShown,
	setFilter,
	updateInputValue,
	setFilterValue,
	setData,
	setSorting,
	setCurrentPage,
	setPageSize,
	setDataCount
} = tableSlice.actions;

export default tableSlice.reducer;