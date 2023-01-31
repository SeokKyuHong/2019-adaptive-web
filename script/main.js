$(function(){
	
	setTimeout(function(){
          
          $("body, html").animate({scrollTop:0},300);
      },500);
	
	
	
	
	
  /*************메인사진*************/
    var N=0;
    setInterval(function(){
        if(N<5){N++;}else{N=0;}
        $(".controller>ul>li").removeClass("active");
        $(".controller>ul>li").eq(N).addClass("active");
        
        D=N*-1000;
        $(".GNB .right_header").css({left:D})
    },5000);

/*************************/
    

   
    
 /********************************/
    
    var L=0;
    $(".controller>ul>li").click(function(){
        $(".controller>ul>li").removeClass("active");
        $(this).addClass("active");
        
        L=$(this).index()*(-1);
        
        $(".GNB .right_header").css({'left':L+'000px'});
        
    });
    
    /******************히스토리************************/
    
    $(".h_box div p").click(function(){
           $(this).addClass("on");
        
        $("#section5 .h_box .p1").addClass("tt");
        $("#section5 .h_box .p2").addClass("tt");
        $("#section5 .h_box .p3").addClass("tt");
        $("#section5 .h_box .p4").addClass("tt");
        $("#section5 .h_box .p5").addClass("tt");
       });
    
    /************dim********************/
    
    $("#section4 .to p").click(function(){
        $(".dim1").addClass("ddd");
    });
    $("#section4 .be p").click(function(){
        $(".dim2").addClass("ddd");
    });
    $("#section4 .new p").click(function(){
        $(".dim3").addClass("ddd");
    });
    $(".dim button").click(function(){
        $(".dim").removeClass("ddd");
    });
    
	
	/********************Store************/
	
	var t;
	
	$(window).scroll(function(){
        t=$(window).scrollTop();
        
        if(t>=$("#section4").offset().top-500){
            $("#section4 .map .to").addClass("y");
			$("#section4 .map .be").addClass("y");
			$("#section4 .map .new").addClass("y");
        }
        else{
            $("#section4 .map .to").removeClass("y");
			$("#section4 .map .be").removeClass("y");
			$("#section4 .map .new").removeClass("y");
        }
    });
    
	
	/*****************fixed**********/
	
	$(window).scroll(function(){
        t=$(window).scrollTop();
        
        if(t>=$(".wrapper").offset().top+200){
            $("#header .left_header .scroll").addClass("sss");
            $("#header .left_header .fixed").addClass("ttt");
			$("#header .left_header .top").addClass("ttt");
            
        }
        else{
            
            $("#header .left_header .scroll").removeClass("sss");
            $("#header .left_header .fixed").removeClass("ttt");
			$("#header .left_header .top").removeClass("ttt");
            
        }
    });
	
	$("#header .left_header .top").click(function(){
		$("body, html").animate({scrollTop:0}, 400);
	});
	
	
	$("#header .left_header .menu .m_1").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .menu .m_2").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .menu .m_3").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .menu .m_4").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .menu .m_5").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	
	
	$("#header .left_header .fixed .f_1").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .fixed .f_2").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .fixed .f_3").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .fixed .f_4").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
	$("#header .left_header .fixed .f_5").click(function(){
		link=$(this).attr("href");
        $("body, html").animate({scrollTop:$(link).offset().top}, 400);
	});
    
    //************************************/
    
    $("#section2 ul .btn .left").mouseover(function(){
        $("#section2 ul .btn .left").attr("src","images/left_h.png");
    });
    $("#section2 ul .btn .left").mouseout(function(){
        $("#section2 ul .btn .left").attr("src","images/left.png");
    });
    $("#section2 ul .btn .right").mouseover(function(){
        $("#section2 ul .btn .right").attr("src","images/right_h.png");
    });
    $("#section2 ul .btn .right").mouseout(function(){
        $("#section2 ul .btn .right").attr("src","images/right.png");
    });
    
    
    $("#section3 ul .btn .left").mouseover(function(){
        $("#section3 ul .btn .left").attr("src","images/left_h.png");
    });
    $("#section3 ul .btn .left").mouseout(function(){
        $("#section3 ul .btn .left").attr("src","images/left.png");
    });
    $("#section3 ul .btn .right").mouseover(function(){
        $("#section3 ul .btn .right").attr("src","images/right_h.png");
    });
    $("#section3 ul .btn .right").mouseout(function(){
        $("#section3 ul .btn .right").attr("src","images/right.png");
    });
    
    
    /********************************************/
    
    $("#section2 ul .btn .left").click(function(e){
        e.preventDefault();
        
         $("#section2 ul li").removeClass("ccc");
         $("#section2 ul li").eq(2).addClass("ccc");
         $("#section2 ul").append($("#section2 ul li").first());
     });
     $("#section2 ul .btn .right").click(function(e){
         e.preventDefault();
         $("#section2 ul li").removeClass("ccc");
         $("#section2 ul li").eq(0).addClass("ccc");
         $("#section2 ul").prepend($("#section2 ul li").last());
     });
    
    $("#section3 ul .btn .left").click(function(e){
        e.preventDefault();
        
         $("#section3 ul li").removeClass("ccc");
         $("#section3 ul li").eq(2).addClass("ccc");
         $("#section3 ul").append($("#section3 ul li").first());
     });
     $("#section3 ul .btn .right").click(function(e){
         e.preventDefault();
         $("#section3 ul li").removeClass("ccc");
         $("#section3 ul li").eq(0).addClass("ccc");
         $("#section3 ul").prepend($("#section3 ul li").last());
         
     });
    
    /*****************************************/
     
    var video=document.getElementById("video");
    $("#section1 .v_box .control").click(function(e){
        e.preventDefault();
        $(this).fadeOut(300);
        video.play();
    });
    $("#video").click(function(){
        $("#section1 .v_box .control").fadeIn(300);
        video.pause();
    });
    
    
    /***************************************/
    
    $("#header .left_header .hong_m .hong img").click(function(){
        $("#header .left_header .hong_f").css({opacity:1});
    });
    
    $("#header .left_header .hong_f button").click(function(){
        $("#header .left_header .hong_f").css({opacity:0});
    });
	var h;
	$(window).resize(function(){
        h=$(window).height();
        $("section").css({height:h});
		;
		});
	$(window).trigger("resize");
	
	var f=0;
	$(".wrapper").mousewheel(function(e, delta){
            if($("html,body").is(":animated")){
                return false;
            }
            if(delta>0){
                if(f>0){
                    f=f-1;
                }
            }else{
                if(f<8){
                    f=f+1;
                }
            }
            
        
        $("html, body").stop().animate({scrollTop:$("section").eq(f).offset().top}, 800);
    });
});














