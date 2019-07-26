let myTouch={
    tap:function(el,callback){
        var startTime = 0,
            isMove = false;
         el.addEventListener("touchstart",function(){
             startTime = new Date()*1;
         })
         el.addEventListener("touchmove",function(){
             isMove=true;
         })   
         el.addEventListener("touchend",function(){
             if(new Date()*1-startTime <150 && !isMove){
                 callback && callback()
             }
         })
    },
    swipe:function(el,direction,callback){
        var startPoint=null,
            endPoint=null,
            distance = 30;
            el.addEventListener("touchstart",function(e){
                startPoint={
                    x:e.touches[0].clientX,
                    y:e.touches[0].clientY
                }
            })
            el.addEventListener("touchmove",function(e){
                endPoint={
                    x:e.touches[0].clientX,
                    y:e.touches[0].clientY
                }
            })
            el.addEventListener("touchend",function(e){
                
                if(endPoint && dir(startPoint,endPoint) === direction){
                    console.log(1)
                    callback && callback()
                    
                }
                startPoint=null,
                endPoint=null
            })

            function dir(start,end){
                
                var diffX = end.x-start.x,
                    diffY = end.y-start.y,
                    absX = Math.abs(diffX),
                    absY = Math.abs(diffY),
                    str = "";
                    console.log(diffX,diffY,absX,absY)
                if(absX>distance || absY>distance){
                   if(absX>absY){
                       str = diffX>0 ? "left" : "right"
                   }else if(absY>absX){
                       str = diffY>0 ? "bottom" : "top"
                   } 
                }
                // console.log(str)
                return str;
            }
    }
}