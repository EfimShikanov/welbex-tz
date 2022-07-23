export const dataSort = (data, column, order) => {
	const sorter = (sortBy) => (a, b) => {
		if(column === "date") {
			const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
			let dateA = new Date(a[sortBy].replace(pattern, '$3-$2-$1'));
			let dateB = new Date(b[sortBy].replace(pattern, '$3-$2-$1'));
			if(order === "asc") {
				return dateA > dateB ? 1 : -1
			} else {
				return dateB > dateA ? 1 : -1
			}
		} else if(order === "asc") {
			return a[sortBy] > b[sortBy] ? 1 : -1
		} else {
			return b[sortBy] > a[sortBy] ? 1 : -1
		}
	}
	return data.sort(sorter(column));
}