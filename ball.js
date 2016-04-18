document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el: "#app",
		data: function() {
			return {
				bollX:0, 
				bollY:0, 
				boardPosition:0,
				boardWidth:100,
				fieldWidth:600
			}
		},
		methods: {
			onMouse: function (e) {
				this.boardPosition=e.clientX-(this.boardWidth/2);
				if(this.boardPosition<0) {
					this.boardPosition=0;
				}
				if(this.boardPosition+this.boardWidth>this.fieldWidth) {
					this.boardPosition=this.fieldWidth-this.boardWidth;
				}
			}
		}
	});
});