const localStorage = {
	setItem(UUID = '134dc0a4-d1e1-47e1-aefa-52a5d557031d') {
		window.localStorage.setItem('UUID', UUID);
	},
	getItem() {
		return window.localStorage.getItem('UUID')
	}
};

export default localStorage;