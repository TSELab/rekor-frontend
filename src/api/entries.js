import Api from '../services/Api';

export const getNewestEntry = async () => {
	try {
		const response = await Api.get('/entries');
		return response.results;
	} catch (error) {
		console.error(error);
	}
};
