  /*Main Script Starts from here*/
window.onscroll = function()
        {
          myscroll();
        }
        
        var navbar = document.getElementById("black");
        var sticky = navbar.offsetTop;
        
        function myscroll()
        {
            if(window.pageYOffset > sticky)
               {
                   navbar.classList.add("sticky");
               }
            else{
                navbar.classList.remove("sticky");
//                navbar.classList.add("black");
            }
        }