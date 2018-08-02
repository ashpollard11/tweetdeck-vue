"use strict";

Vue.component("hashtag-input", {
	props: ["hashtag"],
	data: function data() {
		return {
			dataFetching: ""
		};
	},
	template: '<div><input type="text" placeholder="#problematic"></div>'
});
//# sourceMappingURL=hashtag-input-component.js.map
