app.applyListenersTo=function(e){function t(e,t){for(var n=document.getElementsByClassName(e),a=0;a<n.length;a++)n[a].addEventListener("click",t,!1)}function n(e,t){var n=this.attributes["data-position"].value;app.slideShow.start(n)}var a=document.getElementById("close"),d=document.getElementById("next"),i=document.getElementById("prev");d.addEventListener("click",app.slideShow.nextImage),i.addEventListener("click",app.slideShow.prevImage),a.addEventListener("click",app.slideShow.close),t("zoom",n)};