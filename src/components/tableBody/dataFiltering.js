export const dataFiltering = (data, column, condition, filterValue) => {
	let filteredData = [];

	switch (condition) {
		case "=":
			data.map(item => {
				if (item[column].toString() === filterValue) {
					filteredData.push(item)
				}
			})
			return filteredData
		case ">":
			data.map(item => {
				if(!isNaN(item[column])) {
					if(item[column] > parseInt(filterValue)) {
						filteredData.push(item)
					}
				} else {
					return
				}
			})
			return filteredData
		case "<":
			data.map(item => {
				if(!isNaN(item[column])) {
					if(item[column] < parseInt(filterValue)) {
						filteredData.push(item)
					}
				} else {
					return
				}
			})
			return filteredData
		case "contains":
			data.map(item => {
				if(item[column].toString().toLowerCase().includes(filterValue.toLowerCase())) {
					filteredData.push(item)
				}
			})
			return filteredData
		default: return
	}
}