const TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";


var app = new Vue({
	el: '#app' ,
	data: {
		tweetData: [],
		hashtag: "puppies"
	},
	created: function() {
		axios
			.get(TWITTER_SEARCH_URL + this.hashtag)
			.then((réponse) => {
				console.log('we got something: ', réponse.data.statuses)
				this.tweetData = réponse.data.statuses
			})
			.catch((erreur) => {
				console.warn('oh non: ', erreur)
			})

	},
	methods: {

	}
})