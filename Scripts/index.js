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
    $("#nav-imp").load("Pages/nav.html");
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}