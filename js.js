$(document).ready(function(){
    var a;
         if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            $(DesktopInUse).hide();
            $(MobileInUse).show();
         } 
         else if (navigator.userAgent.match(/webOS/i)){
         }
         else {
            $(DesktopInUse).show();
            $(MobileInUse).hide();
         }
        });