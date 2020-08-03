const localStorage = {
	setItem(UUID) {
		window.localStorage.setItem('UUID', UUID);
	},
	getItem() {
		return window.localStorage.getItem('UUID');
	},
	clearItem() {
	  window.localStorage.removeItem('UUID');
	},
	hasUUID() {
	  return !!localStorage.getItem();
	},
};

export default localStorage;