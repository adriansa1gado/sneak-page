function fetchData(numberPage) {
	return fetch('./datadb.json')
		.then((data) => data.json())
		.then((data) => data.portafolio[`page-${numberPage}`])
		.catch(() => console.error('Error get data'));
}
