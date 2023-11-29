//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on")
    }
    else{
        nav.classList.remove("scroll-on")
    }
}


//navbar hide
let navbar=document.querySelectorAll('.nav-link');
let navCollapse =document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

//counter design//

document.addEventListener("DOMContentLoaded", () => {
   function counter(id , start , end, duration){
    let obj= document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1 ,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if( current == end){
            clearInterval(timer);
        }
    }, step );
   }
   counter("count1", 0  , 1287, 3000);
   counter("count2", 100, 3000, 2500);
   counter("count3", 0  , 1400,3000);
   counter("count4", 0  , 5010,3000);
});
  
 