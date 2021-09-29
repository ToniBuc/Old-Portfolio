$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(1000);

    $("nav-item.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);      
});
    
function redirectPage() {
    window.location = linkLocation;
}
});

$(function(){
    $("#nav-imp").load("nav.html");
});