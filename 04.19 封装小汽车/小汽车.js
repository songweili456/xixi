(function($){
      $.fn.extend({
            var imgLoadNum = 0;//加载图片的数量
          	var imgIndex = 0;//图片显示的张数
          	for(var i = 0; i < 72;i++){
          		var img = $("<img src='img/golf"+i+".jpg'/>");
          		img.hide();
          		img.appendTo($("div"));
          		img.on("load",function(){
          			imgLoadNum++;
          			if(imgLoadNum == 72){
          				imgLoad();
          			}
          		})
          	}
          	function imgLoad(){//加载完成后调用该方法
          		$("img").eq(imgIndex).show();//将默认的指定图片进行显示
          		$("div").mousedown(function(e){
                        var startX = e.clientX;
                        $(document).mousemove(function(e){
                            var endX = e.clientX;
                            if(parseInt((endX-startX)/20)!=0){
                            	$("img").eq(imgIndex).hide();
                            	imgIndex+=parseInt((endX-startX)/20);
                            	startX =  endX;
                            	if(imgIndex < 0){
                            		imgIndex = 71;
                            	}
                            	if(imgIndex > 71){
                            		imgIndex = 0;
                            	}
                            	$("img").eq(imgIndex).show();
                            }
                        });
                        $(document).mouseup(function(){
                        	$(this).off("mousemove")
                        });
                        return false;
          		})
          	}
        
      })

})(jquery)
