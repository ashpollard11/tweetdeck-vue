
Vue.component("tweet", {
	props: ["tweet-object"],
	template: 
		`<p>
			{{ tweetObject.text }}
		</p>`
})