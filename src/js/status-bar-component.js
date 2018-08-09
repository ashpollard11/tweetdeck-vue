
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
	template: 
		`<h2>
			Showing {{ tweetData.length }} tweets containing #{{ hashtag }}
		</h2>`
})