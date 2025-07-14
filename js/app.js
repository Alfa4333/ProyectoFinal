//menu responsive
var btnMenuOpen=document.getElementById("btn-menu-open");
var btnMenuClose=document.getElementById("btn-menu-close");
var munubar=document.getElementById("menu-bar");

btnMenuOpen.addEventListener("click",function(){
    munubar.classList.add("active");
});


btnMenuClose.addEventListener("click",function() {
    munubar.classList.remove("active");
})

var enlaces=document.getElementById("enlaces");
enlaces.addEventListener("click",function() {
    menubar.style.trasitionDelay="0.5s";
    munubar.classList.remove("active");
})