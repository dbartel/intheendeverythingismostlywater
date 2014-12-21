//skrollr
var s = skrollr.init();

var content = document.getElementById("content-block");

//event listeners
document.getElementById('about-menu').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.about;
    content.style.opacity = "1";
});

document.getElementById('get-menu').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.get;
    content.style.opacity = "1";
});

document.getElementById('submit-menu').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.submit;
    content.style.opacity = "1";
});

document.getElementById('about-footer').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.about;
    content.style.opacity = "1";
});

document.getElementById('get-footer').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.get;
    content.style.opacity = "1";
});

document.getElementById('submit-footer').addEventListener("click", function(evt) {
    content.style.opacity = "0";
    content.innerHTML = partials.submit;
    content.style.opacity = "1";
});