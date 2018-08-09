
Vue.component("tweet-feed", {
	props: ["tweet-data"],
	template: 
		`<div class="tweet-feed">
			<tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>
		</div>`
})