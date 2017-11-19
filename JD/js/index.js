var shoujijd = document.getElementById("shoujijd");
var J_mobile_pop = document.getElementById("J_mobile_pop");
shoujijd.onmouseover = function () {
    console.log("onmouseover");
    J_mobile_pop.style.display = "block";
};
shoujijd.onmouseout = function () {
    console.log("onmouseout");
    J_mobile_pop.style.display = "none";
};


var closeBanner = document.getElementById("closeBanner");
closeBanner.onclick = function () {
    var topBanner = document.getElementsByClassName("top-banner")[0];
    topBanner.className += " hide";
};


var siteNavSend = document.getElementById('site-nav-send');
var dorpdownLayer = document.getElementById('dorpdownLayer');
siteNavSend.onmouseover = function () {
    console.log("onmouseover");
    dorpdownLayer.style.display = "block";
};
siteNavSend.onmouseout = function () {
    console.log("onmouseout");
    dorpdownLayer.style.display = "none";
};
