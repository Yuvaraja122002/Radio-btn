$(document).ready(function() {
			console.log('executed');
	// $(".lightbox").colorbox({iframe:true, width:"100%", height:"100%", fixed:true});
	/*$("img").colorbox({iframe:true, width:"90%", height:"90%", fixed:true, href:function(){return this.src;}});*/
	// $(".annoref").colorbox({inline:true, width:"70%", bottom: "100"});
	// $(".ls_gen_annoref").colorbox({inline:true, width:"70%", bottom: "100"});

/*=== Popups ===*/

/*== Glossary and annotation lightbox popup ==*/
	$(".ls_gen_annoref, .annoref, .keyword").click(function(){
		$("#"+$(this).attr("data-link")).css({"display": "block", "position": "relative", "top": "1em"});
	});
	$(".footref").click(function(){
		//$("html").animate({ scrollTop: $(document).height() }, 2000, "swing");
        $(".footer")[0].scrollIntoView();
	});
    $(".glossnav").click(function() {
        //$("html").animate({ scrollTop: $("#"+$(this).attr("data-link")).position().top }, 2000, "swing");
        $("#"+$(this).attr("data-link"))[0].scrollIntoView();
    });
	$(".btn701").click(function(){
		$("#"+$(this).attr("data-popup")).css({"display": "block", "position": "absolute", "top": "auto"});
	});
	$(".btn702").click(function(){
		$("#"+$(this).attr("data-popup")).css({"display": "block", "position": "relative", "marginTop": "-160px"});
	});

	$("button, #btn801, #btn802, #btn803").click(function(){
		$("#"+$(this).attr("data-popup")).css({"display": "block", "position": "relative", "top": "1em"});
	});

	$(".button_1").click(function(){
		$("#"+$(this).attr("data-popup")).css({"display": "block", "position": "relative", "top": "2em"});
	});


/*== Close button glossary and annotation popup*/
	$(".p_12").click(function() {
		$(this).parent().css("display", "none");
	});
	$(".p_close").click(function() {
		$(this).parent().css("display", "none");
	});

/*= Lightbox popup =*/
	$(".p_13 img").click(function(event){
		$("#"+$(this).attr("data-popup")).css("display", "block");
		var posterH = $(this).height();
		$(this).parent().siblings(".div_8").height(posterH);
		$("body").css("overflow", "hidden");
		$(".p_13").css("display", "none");
	});

/*== Close button lightbox ==*/
	$(".p_14").click(function() {
		$(this).parent().css("display", "none");
		$("body").css("overflow", "visible");		
		$(".p_13").css("display", "block");
	});


/*== Show/hide content for conclusion ==*/
	$(".conclusion_1").click(function(){
		$("#"+$(this).attr("data-link")).slideToggle(100);
		$(this).toggleClass("conclusion_2");
	});


/*== Show/hide content ==
	$(".fx-toggle").click(function(){
		$("#"+$(this).attr("data-link")).slideToggle(500);
	});*/


/*== Show/hide icon for video content ==*/

	$(".fx-toggle").hover(function(){
		if($(this).attr("src") == "../images/arrow_right.svg")
		{
			$(this).attr("src", "../images/arrow_down.svg");
		}
		else
		{
			$(this).attr("src", "../images/arrow_right.svg");
		}
	});


	$(".fx-toggle_18 img").hover(function(){
		if($(this).attr("src") == "../images/icon_finger.png")
		{
			$(this).attr("src", "../images/icon_finger_hover.png");
		}
		else
		{
			$(this).attr("src", "../images/icon_finger.png");
		}
	});


	$(".fx-toggle img").click(function(){
		$("#"+$(this).attr("data-link")).slideToggle(100);

		if($(this).attr("src") == "../images/arrow_right.svg") /*hide arrow*/
		{
			$(this).attr("src", "../images/arrow_down.svg"); /*show arrow*/
		}
		else
		{
			$(this).attr("src", "../images/arrow_right.svg"); /*hide arrow*/
		}
        /*
		$("body").css("overflow", "visible");
		$(".p_13").css("display", "block");
		$(".div_8").css("display", "none");
        */
	});

/*== Show/hide all sidebars ==*/
	$(".fx-toggle").click(function(){
		$("#"+$(this).attr("data-link")).slideToggle(100);
		$(this).toggleClass("fx-toggle_clicked");
		console.log('executed')
	});

/*== OLD TOGGLES
		/*== Show/hide content for sidebar_1 ==*
			$(".fx-toggle_4").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_5");
			});

		/*== Show/hide content for sidebar_2 ==*
			$(".fx-toggle_6").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_7");
			});

		/*== Show/hide content for sidebar_3 ==*
			$(".fx-toggle_8").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_9");
			});

		/*== Show/hide content for sidebar_4 ==*
			$(".fx-toggle_10").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_11");
			});


		/*== Show/hide content for Example Answers ==*
			$(".fx-toggle_12").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_13");
			});

		/*== Show/hide content for Reveal content ==*
			$(".fx-toggle_14").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_15");
			});

		/*== Show/hide content for Step content ==*
			$(".fx-toggle_16").click(function(){
				$("#"+$(this).attr("data-link")).slideToggle(100);
				$(this).toggleClass("fx-toggle_17");
			});
==*/

/*=== Annotated images ===*/
  $(".p_15").click(function() {
      $(this).siblings().removeClass("p_16");
      var btnId = $(this).attr("id");
      $(this).parent().parent().children("img").attr("src", "../images/" + btnId + ".png");
      $(this).addClass("p_16");

    if($(this).text() == "Reset") {
      $(this).siblings().removeClass("p_16");
      var imgId = $(this).parent().parent().children("img").attr("id");
      $(this).parent().parent().children("img").attr("src", "../images/" + imgId + ".png");
      $(this).removeClass("p_16");
    }
  });


/*== page navigation  KIM CAN WE DELETE THIS...==*/

	$(".p_3").click(function() {
		$("body").animate({marginLeft: '400px'}, '0.5s');
		$(".div_3").animate({width: '400px'}, '0.5s');
	});

	$(".p_4, .fx-toggleable > .xref").click(function() {
		$("body").animate({marginLeft: '0px'}, '0.5s');
		$(".div_3").animate({width: '0px'}, '0.5s');
	});

	$(".fx-toggle_1").click(function(){
		$("#"+$(this).attr("data-link")).slideToggle(100);
	});



/*== Image modal ==*/

	/*== Modal image ==*/
    $(".thumbnail").click(function() {
        $("#"+$(this).attr("data-modal")).css({"display": "block", "position": "relative", "top": "-38px"});
        $(this).css("display", "none");
    });

    $(".modal_close").click(function() {
        $(this).parent().css("display", "none");
        $(this).parent().parent().parent().children(".thumbnail").css("display", "block");
    });

/*== Click zoom ==*/
	$(".img_4").mouseenter(function(){
		$(this).siblings("figcaption").children(".caption").append("<p>(Click on the diagram to zoom in and out.)</p>");
	});

	$(".img_4").mouseleave(function(){
		$(this).siblings("figcaption").children(".caption").children("p").next().remove();
	});

	$(".img_4").click(function(){
		$(this).toggleClass("img_5");
	});


/*== Slideshow ==*/

	//Click back arrow
	$(".p_back").on("click", function() {
		showSlide($(this).parent().parent().parent().attr("id"), -1);
	});

	//Click forward arrow
	$(".p_forward").click(function() {
		showSlide($(this).parent().parent().parent().attr("id"), 0);
	});

	//click caption
	$(".p_caption .slnumber").click(function() {
		showSlide($(this).parent().parent().parent().parent().attr("id"), $(this).attr("data-index"));
	});

	function showSlide(fgid, n) {
		var noslides = $("#" + fgid + " figure").length;
		//get index of current slide
		var fignoid = parseInt($("#" + fgid + " figure:visible").attr("id").split("-").pop());
		
		if (n < 0) {
			fignoid--;
			if (fignoid < 1) {
				//back from first slide = go to last slide
				fignoid = noslides;
			}
		}
		else if (n == 0) {
			fignoid++;
			if (fignoid > noslides) {
				//forward from last slide = go to first slide
				fignoid = 1;
			}
		}
		else {
			fignoid = n;
		}

		$("#" + fgid + " figure").hide();
		$("#" + fgid + " .slnumber").removeClass("selected")
		$("#" + fgid + "-" + fignoid).show();
		$("#" + fgid + " .slnumber[data-index='" + fignoid + "']").addClass("selected");
	}

    //Change CSS buttons
    $(".changecss").click(function() {
        $("#csscolor").attr("href", "../css/pearson_plt_" + $(this).attr("data-link") + ".css");
    });

});