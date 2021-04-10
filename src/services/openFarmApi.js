const queryCrop = (query) => {
	return fetch(`https://openfarm.cc/api/v1/crops/?filter=${query}`)
		.then((resp) => {
      // Check for errors here
			return resp.json();
		})
};

export { queryCrop };

