    //模态框插件
    //参数说明：
    //title 标题；
    //color  标题颜色；
    //content 内容；
    //btn  按钮内容；
    //back 回调函数(可选)
    function alertself(title,titlecolor,content,btn,back){
        var Height=document.documentElement.clientHeight;
        var Width=document.documentElement.clientWidth;

        $("<div class='cl'  id = 'alertim1' style='display:block;position:fixed;top:0px;left:0px;z-index:999999'>"+
             "<div class='cl' style='background-color:#000;opacity:0.6;position:absolute;top:0px;left:0px;z-index:99999999'>"+
             "</div>"+
             "<div class='am-radius' style='position:absolute;margin:auto;left:0px;top:0px;right:0px;bottom:0px;height:30%;"+
                "line-height:40px;width:90%;background-color:#fff;z-index:99999999'>"+
                    "<div class='am-text-center am-text-lg' style='height:20%;border-bottom:1px solid #ededed;color:"+titlecolor+"'>"+ title +"</div>"+
                    "<div class= 'am-text-center am-padding' style='height:60%'>"+content+"</div>"+
                    "<div id='ok' class= 'am-text-center am-text-secondary' style='height:20%;line-height:40px;"+
                    "border-top:1px solid #ededed'>"+btn+
                    "</div>"+
             "</div>"+
        "</div>").appendTo($('body'));
         $(".cl").css({width:Width,height:Height}); 
         $("#ok").click(function(){
            if(back){
                  back();
            }
            $("#alertim1").remove();
         })
    }