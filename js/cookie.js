// JavaScript Document
$(function(){
var acceptCookie = $.cookie("accept");
 if( acceptCookie != "true" ){
  $.when(
   $("#wrapper").append('<div id="cookie-text"><div class="cookie-inner"><div class="txt">We use cookies on our websites. You are free to manage this via your browser setting at any time. To learn more about how we use the cookies, please see our <a href="/eng/terms.html">Term of Use</a></div><span id="cookie-accept"><span>I UNDERSTAND</span></span></div></div>')
  ).done(function(){
   $("#cookie-accept").on('click',function(){
    $("#cookie-text").remove();
    $.cookie("accept","true", { expires: 60 ,path:"/"});
   });
  });
 }else{
  //$.cookie("product","", { expires: 60 });
 }

});