
function showMemu(){
    const container = document.querySelector("#container");
    const navMenu = document.querySelector(".nav__menu");
    const navToggle = document.querySelector(".mobile-nav-toggle");

   navToggle.addEventListener("click", () =>{

       const visibility = navMenu.getAttribute('data-visible')

       if(visibility === "false"){
           navToggle.setAttribute('aria-expended', true)
           navMenu.setAttribute('data-visible', true)
           container.setAttribute('aria-expended', true)
       }else{
            navToggle.setAttribute('aria-expended', false)
            navMenu.setAttribute('data-visible', false)
            container.setAttribute('aria-expended', false)
       }
   })
}

showMemu()