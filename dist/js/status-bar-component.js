"use strict";

Vue.component("status-bar", {
	props: {
		tweetData: {
			length: length,
			type: Array
		},
		hashtag: {
			default: "puppies",
			type: String
		}
	},
	template: "<h2>\n\t\t\tShowing {{ tweetData.length }} tweets containing #{{ hashtag }}\n\t\t</h2>"
});
//# sourceMappingURL=status-bar-component.js.map
