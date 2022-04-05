import axios from 'axios';

const axiosAPI = axios.create({
	baseURL: 'http://localhost:5000/'
});

const apiRequest = (method, url, request) => {
	const headers = {
		authorization: '',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': true,
	};

	return axiosAPI({
		method,
		url,
		data: request,
		headers
	})
		.then((response) => {
			return Promise.resolve(response.data);
		})
		.catch((error) => {
			return Promise.reject(error);
		});
};

const get = (url, request) => apiRequest('get', url, request);

const deleteRequest = (url, request) => apiRequest('delete', url, request);

const post = (url, request) => apiRequest('post', url, request);

const put = (url, request) => apiRequest('put', url, request);

const patch = (url, request) => apiRequest('patch', url, request);

const API = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
};
export default API;
