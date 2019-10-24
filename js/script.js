
$(document).ready(function(){
		$('i.icon').click(function(){
	       $('.nav-list').slideToggle()
		}); 

	   //when scroll body
	   $(window).scroll(function(){
	     var sc=$(this).scrollTop();//value of length
	    if (sc>100) 
		    {
		       $('header').addClass('sticky');
		    }
	    else 
	       {
	     	 $('header').removeClass('sticky');
	       }
	    if (sc>1150) 
		    {
		     	$('.time').countTo(); //count to plugin
		     	 $(window).off('scroll');
		    }
	    if (sc>500) //fade the scroll top btn
		    {
		     	$('.scrollTop').fadeIn();
		    }
	    else
		    {
		     	$('.scrollTop').fadeOut();
		};

	   //portfolio button change bg
	   $('.buttons button').click(function(){
	          $(this).addClass('active-btn').siblings().removeClass('active-btn')
	          var filter =$(this).attr('id');
	          if(filter==='all')
	          {
	          	$('.images > div').fadeIn();
	          }
	          else
	          {
	          	$('.images > div').fadeOut();
	            $('.images').contents().filter('.' + filter).fadeIn();
	          }
	      });

	   
	  //owl carousal
	  $('.owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    }
	});
	  //choose panel
	  $('.c-panel li').click(function(){
	  	$(this).addClass('active-btn').siblings().removeClass('active-btn');
	  	var p=$(this).data('role')
	  	$('.content > div').hide();
	  	$('.content').contents().filter('#'+p).fadeIn();

	  });

	  $('.slick').slick({
	  	nextArrow:false,
	  	prevArrow:false
	  });

	  //scroll to top
	  $('.scrollTop').click(function(){
	  	$('body,html').animate({
	  		scrollTop:0 
	  	},500);
	  	  
	  });

	  //smooth scroll
	  $('.list a').click(function(){
	  	$('body,html').animate({
	  		scrollTop:$($(this).attr('href')).offset().top-100
	  	  	});

	 });
});
	   });
