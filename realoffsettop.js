(function($, win){
    "use strict"

    $.fn.realOffsetTop = function(classfixedname){
        var lasttop = this.data("lasttop"),
            top = 0;

        classfixedname = classfixedname ? classfixedname : "";

        if(lasttop == undefined)
            this.data("lasttop", this.offset().top);

        if($("body").hasClass(classfixedname))
            top = lasttop;
        else
            top = this.offset().top;

        return top - $(win).scrollTop();
    };

})(jQuerym window);