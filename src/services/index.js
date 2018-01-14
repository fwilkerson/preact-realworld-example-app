const API_URI = 'https://conduit.productionready.io/api';

const get = route => fetch(API_URI + route).then(response => response.json());

export default {
	get,
	// options: tag, author, favorited by user, limit, offset
	getArticlesBy: options => {
		options = options || {};
		const queryString = Object.keys(options)
			.reduce((acc, key) => acc.concat(`${key}=${options[key]}`), [])
			.join('&');
	
		return get(`/articles${queryString ? `?${queryString}` : ''}`);
	}
};