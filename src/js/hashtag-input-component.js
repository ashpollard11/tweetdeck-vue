
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
	template: 
				`<div class="input-container">
					<input type="text" name="hashtag" @keyup.enter="submit" :value="hashtag">
				</div>`
})