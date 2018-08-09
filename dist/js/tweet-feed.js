"use strict";

Vue.component("tweet-feed", {
	props: ["tweets"],
	template: "<div class=\"tweet-feed\" v-for:\"tweet in tweets\">\n\t\t\t{{tweet.text}}\n\t\t</div>"
});
//# sourceMappingURL=tweet-feed.js.map
