
Vue.component("hashtag-input", {
	props: ["hashtag"],
	data: function() {
		return {
			dataFetching: ""
		}
	},
	template: '<div><input type="text" placeholder="#problematic"></div>'
})