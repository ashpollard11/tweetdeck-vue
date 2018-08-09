"use strict";

Vue.component("tweet-feed", {
	props: ["tweet-data"],
	template: "<div class=\"tweet-feed\">\n\t\t\t<tweet v-for=\"oneTweetObject in tweetData\" :tweet-object=\"oneTweetObject\"></tweet>\n\t\t</div>"
});
//# sourceMappingURL=tweet-feed-component.js.map
