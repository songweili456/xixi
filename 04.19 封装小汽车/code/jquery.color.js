/**
 * Created by tydte on 2017/4/19.
 */
(function($){
    //第三种写法
    $.extend({
        getColor:function(color){
            //console.log(color);
            //console.log(this);
            if(color==undefined)
                return this("div").css("color");
            return  this("div").css("color",color)
        }
    });

    //第二种写法
    //$.fn.extend({
    //    getColor:function(color){
    //        if(color==undefined)
    //            return this.css("color");
    //        return this.css("color",color);
    //    }
    //});



    //第一种写法
    //$.fn.getColor=function(color) {
    //    //this指向的就是这个JQ对象
    //    if(color==undefined)
    //        return this.css("color");
    //    return this.css("color",color);
    //}
})(jQuery);


