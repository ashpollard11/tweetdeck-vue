"use strict";

var TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";

var app = new Vue({
	el: '#app',
	data: {
		tweetData: [],
		hashtag: "puppies"
	},
	created: function created() {
		var _this = this;

		axios.get(TWITTER_SEARCH_URL + this.hashtag).then(function (réponse) {
			console.log('we got something: ', réponse.data.statuses);
			_this.tweetData = réponse.data.statuses;
		}).catch(function (erreur) {
			console.warn('oh non: ', erreur);
		});
	},
	methods: {}
});
//# sourceMappingURL=main.js.map
