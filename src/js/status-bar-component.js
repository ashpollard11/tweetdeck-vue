
Vue.component("status-bar", {
	props: ["count"],
	template: '<h2>Fetching new tweets in {{ count }}s</h2>'
})