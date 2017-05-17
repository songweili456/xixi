(function($){
/*	//第一种
	$.fn.Move = function(color) {
		if(color == undefined){
			return $(this).css("color");
		}
		return $(this).css("color",color);
	}*/

	//第二种
	$.fn.extend({
		Move:function(color) {
		if(color == undefined){
			return this.css("color");
		}
		return this.css("color",color);
	  }
	})
 
/*   //第三种
   $.extend({
   	    Move:function(color) {
		if(color == undefined){
			return this("div").css("color");
		}
		return this("div").css("color",color);
	  }
   })*/
})(jQuery)
