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
            while (true){
            alert("jtz deafst die Website nerma nutzen");
            }
         });
        });