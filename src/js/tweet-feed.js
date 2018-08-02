
Vue.component("tweet-feed", {
	props: ["tweets"],
	template: '<div class="tweet-feed" v-for:"tweet in tweets">{{tweet.text}}</div>'
})