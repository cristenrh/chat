  $(function() {
                   //on user scroll, show chat 
                     $(window).scroll(function(){
                         //if cookie doesn't exist, animate chat window 
                          if ($.cookie('ni-chat') == null ){
                         $('#ni-chat').animate({'right':'0px'},500);
                             }
                     });
           
               if ($.cookie('ni-chat') != null ){
                    //if cookie DOES exist, only turn button and only animate chat button
                     $(".ni-chat-btn").removeClass("horz").addClass("vert");
                     //$('.ni-chat-btn.vert').stop(true).animate({'right':'-70px'},500);
                      setTimeout(function() {
                          $('.ni-chat-btn.vert').animate({'right':'-70px'},500);
                    }, 500);
               }

               $('#ni-chat .close, .ni-chat-btn.horz').bind('click',function(){
                     //upon close or opening chat, set cookie -- this is just a demo cookie. PLEASE USE UNIQUE COOKIE
                         $.cookie('ni-chat', 'NICHAT', { expires: 7, path: '.ni.com' });
                    //slide window back to right and turn button
                    $('#ni-chat').stop(true).animate({'right':'-430px'},500);
                    setTimeout(function() {
                          $(".ni-chat-btn").removeClass("horz").addClass("vert");
                          $('.ni-chat-btn.vert').animate({'right':'-70px'},1000);
                    }, 500);
               
                    
               });
          });
  

        
