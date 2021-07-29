$(function() {
	mui.init();
	var vm = new Vue({
		el: "#main",
		data() {
			return {
				list: [],
			};
		},
		mounted() {
			this.init();
			this.check()
		},
		created() {

		},
		methods: {
			init() {
				
			},
			check() {
				init(function(){
					checkVersion('TreasureChest');
				});
			},
		},
	})
});
