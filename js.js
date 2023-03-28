$(document).ready(function(){
         if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            $(DesktopInUse).hide();
         }
         else {
            //$("div:not(.yes)").hide();
         }

         $("#button1").click(function(){
            var object = document.getElementById("button1");
            object.style.backgroundColor = "black";
            
            $(".dingsl-space").hide();
         });

         $(".header").click(function(){
            $(".dingsl-space").fadeIn();
            
         });

         $("#button3").click(function(){
            alert("fick di 3");
         });
        });