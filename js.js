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
            alert("fick di 3");
         });

         $("#button2").click(function(){
            alert("yes")
            var yeah = int($("#time").value);
            var na = int($("#distance").value);
            var fickdi = yeah/na;
            $("#result").value = fickdi;
         });
        });