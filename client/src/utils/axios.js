import axios from 'axios';

export default axios.create({
	baseURL: 'https://my-stripes.herokuapp.com/api'
	
	// for testing in development:
	// baseURL: 'http://localhost:8000/api'
});