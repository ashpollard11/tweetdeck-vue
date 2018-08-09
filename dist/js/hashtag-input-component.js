"use strict";

Vue.component("hashtag-input", {
	props: {
		hashtag: {
			default: "#puppies",
			type: String
		}
	},
	// data: function() {
	// 	return {
	// 		dataFetching: ""
	// 	}
	// },
	template: "<div class=\"input-container\">\n\t\t\t\t\t<input type=\"text\" name=\"hashtag\" @keyup.enter=\"submit\" :value=\"hashtag\">\n\t\t\t\t</div>"
});
//# sourceMappingURL=hashtag-input-component.js.map
