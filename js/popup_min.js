for(var buybut=document.querySelectorAll(".buy"),popupcatalog=document.querySelector(".add-to-cart"),closebform=document.querySelector(".add-to-cart-close"),overlay=document.querySelector(".modal-overlay"),i=buybut.length-1;i>=0;i--)buybut[i].addEventListener("click",function(a){a.preventDefault(),popupcatalog.classList.add("add-to-cart-show"),overlay.classList.add("modal-overlay-show")});overlay.addEventListener("click",function(a){overlay.classList.remove("modal-overlay-show"),popupcatalog.classList.remove("add-to-cart-show")}),closebform.addEventListener("click",function(a){a.preventDefault(),popupcatalog.classList.remove("add-to-cart-show"),overlay.classList.remove("modal-overlay-show")}),window.addEventListener("keydown",function(a){27==a.keyCode&&popupcatalog.classList.contains("add-to-cart-show")&&(popupcatalog.classList.remove("add-to-cart-show"),overlay.classList.remove("modal-overlay-show"))});var feedbackform=document.querySelector(".feedback-btn"),popup=document.querySelector(".modal-content"),closeform=document.querySelector(".modal-content-close"),form=popup.querySelector("form"),login=popup.querySelector("[name=login]"),mail=popup.querySelector("[name=mail]"),comment=popup.querySelector("[name=comment]"),storage=localStorage.getItem("login"),mapbutton=document.querySelector(".openmap"),map=document.querySelector(".modal-content-map"),closemap=document.querySelector(".map-close");feedbackform.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("modal-content-show"),overlay.classList.add("modal-overlay-show"),storage?(login.value=storage,mail.focus()):login.focus()}),overlay.addEventListener("click",function(a){overlay.classList.remove("modal-overlay-show"),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"),map.classList.remove("modal-content-map-show"),popupcatalog.classList.remove("add-to-cart-show")}),closeform.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-overlay-show")}),form.addEventListener("submit",function(a){login.value&&mail.value&&comment.value?localStorage.setItem("login",login.value):(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27==a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"),overlay.classList.remove("modal-overlay-show"))}),mapbutton.addEventListener("click",function(a){a.preventDefault(),map.classList.add("modal-content-map-show"),overlay.classList.add("modal-overlay-show")}),closemap.addEventListener("click",function(a){a.preventDefault(),map.classList.remove("modal-content-map-show"),overlay.classList.remove("modal-overlay-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&map.classList.contains("modal-content-map-show")&&(map.classList.remove("modal-content-map-show"),overlay.classList.remove("modal-overlay-show"))});