// JavaScript Document
"use strict";function imgChage(){var t=window.innerWidth;t<breakpoint_tab?$(".resImg_tab").each(function(){var t=$(this).attr("src").replace("-pc","-smt");$(this).attr("src",t)}):$(".resImg_tab").each(function(){var t=$(this).attr("src").replace("-smt","-pc");$(this).attr("src",t)}),t<breakpoint_smt?$(".resImg_smt").each(function(){var t=$(this).attr("src").replace("-pc","-smt");$(this).attr("src",t)}):$(".resImg_smt").each(function(){var t=$(this).attr("src").replace("-smt","-pc");$(this).attr("src",t)})}function smtNavToggle(){$(smtMenuToggle).on("click",function(){navBoolean?smtNavClose():smtNavOpen()})}function smtNavOpen(){navBoolean=!0;var t=$(window).scrollTop();wrapper.css("top","-"+t+"px"),wrapper.addClass(openClass)}function smtNavClose(){navBoolean=!1;var t=$(wrapper).css("top");$.when($.when(t=t=t.slice(1)).done(wrapper.removeClass(openClass),wrapper.removeAttr("style"))).done($("body,html").animate({scrollTop:t},0))}function windowResizeFunc(){var t=window.innerWidth;navCurrent(),t<breakpoint_tab&&"pc"==device?(navBoolean=!1,$("#nav").addClass("smt"),mmenuSmt(),device="smt"):breakpoint_tab<=t&&"smt"==device&&(wrapper.removeClass(openClass),wrapper.removeAttr("style"),$("#nav").removeClass("smt"),mmenuPc(),device="pc"),breakpoint_tab<=t&&mmenuPc()}function smoothScroll(){$('a[href^="#"]').on("click",function(){$("#js-slAnkerSelect").slideUp();var t=window.innerWidth,n=$(this).attr("href"),a=$("#"==n||""==n?"html":n).offset().top;return a-=t<breakpoint_tab?smtHeader:pcHeader,$("body,html").animate({scrollTop:a},200,"linear"),!1})}function pageTopBtnFunc(){pageTopBtn.on("click",function(){return $("body,html").animate({scrollTop:0},500),!1})}function hnavSearchBtn(){$(".hnavSearchBtn").on("click",function(){$(".hnavSearch").addClass("on"),$(".mf_finder_searchBox_query_input").focus(),$(".mf_finder_searchBox_query_input").on("blur",function(){setTimeout(function(){$(".hnavSearch").removeClass("on")},500)})})}function mmenuPc(){$(".glnavLink").off("click"),$(".js-mmenuBtn").off("click"),$(".js-mmenuCont").each(function(){$(this).removeAttr("style")}),$(".mmenu").each(function(){$(this).removeAttr("style")}),$(".fTileList").each(function(){$(this).removeAttr("style")}),$(".glnavLink").each(function(){$(this).removeClass("on")}),$(".js-mmenuBtn").each(function(){$(this).removeClass("on")}),$("span.fTileLink").each(function(){$(this).removeClass("on"),$(this).off("click")}),$(".glnavItem").hover(function(){$(this).find(".mmenu").stop(!1,!1).slideDown(),$(this).find(".glnavLink").addClass("on");var t=$(this).width(),n=$(this).position().left;$("#glnavLine").css("width",t),$("#glnavLine").css("left",n),$("#glnavLine").addClass("dis")},function(){$(this).find(".mmenu").stop(!1,!1).slideUp(),$(this).find(".glnavLink").removeClass("on"),$("#glnavLine").removeClass("dis"),$("#glnavLine").hasClass("current")&&($("#glnavLine").css("left",$("#glnavLine").attr("data-left")+"px"),$("#glnavLine").css("width",$("#glnavLine").attr("data-width")+"px"))}),$(".js-mmenuBtn").on("click",function(){var t=$(this).attr("data-href");location.href=t}),$(".glnavLink").on("click",function(){var t=$(this).attr("data-href");location.href=t}),$("span.fTileLink").on("click",function(){var t=$(this).attr("data-href");location.href=t})}function mmenuSmt(){$(".glnavItem").off("mouseenter mouseleave"),$(".glnavLink").off("click"),$(".js-mmenuBtn").off("click"),$(".mmenu").each(function(){$(this).removeAttr("style")}),$("span.fTileLink").off("click"),$(".glnavLink").on("click",function(){$(this).toggleClass("on"),$(this).siblings(".mmenu").slideToggle()}),$(".js-mmenuBtn").on("click",function(){$(this).toggleClass("on"),$(this).closest(".mmenuTit").siblings(".js-mmenuCont").slideToggle()}),$("span.fTileLink").on("click",function(){var t=$(this).attr("data-foottoggle");$(this).toggleClass("on"),$('.fTileList[data-foottoggle="'+t+'"]').slideToggle()})}function tabClick(){$(".js-tab").on("click",function(){$(".js-tab").each(function(){$(this).removeClass("tab-current")}),$(".js-tabCont").each(function(){$(this).hide()});var t=$(this).attr("data-tab");$('.js-tab[data-tab="'+t+'"]').addClass("tab-current"),$('.js-tabCont[data-tab="'+t+'"]').show()})}function tabLoad(){var t=void 0;""==urlArray.tab||null==urlArray.tab?(t=$(".js-tab").eq(0).attr("data-tab"),$('.js-tab[data-tab="'+t+'"]').addClass("tab-current"),$('.js-tabCont[data-tab="'+t+'"]').show()):(t=urlArray.tab,$('.js-tab[data-tab="'+t+'"]').addClass("tab-current"),$('.js-tabCont[data-tab="'+t+'"]').show(),0==$(".tab-current").length&&(t=$(".js-tab").eq(0).attr("data-tab"),$('.js-tab[data-tab="'+t+'"]').addClass("tab-current"),$('.js-tabCont[data-tab="'+t+'"]').show()))}function createUrlParam(){for(var t=location.search.substring(1).split("&"),n=0;n<t.length;n++){var a=t[n].split("=");urlArray[a[0]]=a[1]}}function navCurrent(){var t=wrapper.attr("data-nav");if(""!=t&&null!=t){$('.glnavItem[data-nav="'+t+'"]').addClass("current");var n=$('.glnavItem[data-nav="'+t+'"]').width(),a=$('.glnavItem[data-nav="'+t+'"]').position().left;$("#glnavLine").css("width",n),$("#glnavLine").css("left",a),$("#glnavLine").addClass("current"),$("#glnavLine").attr("data-left",a),$("#glnavLine").attr("data-width",n)}}function pickBoxSlick(){$(".pickBoxSlider").length&&$(".pickBoxSlider").slick({prevArrow:'<img src="/eng/assets/img/top/arrow_prev_gray.png" class="slide-arrow prev-arrow">',nextArrow:'<img src="/eng/assets/img/top/arrow_next_gray.png" class="slide-arrow next-arrow">',slidesToShow:3,responsive:[{breakpoint:750,settings:{slidesToShow:1}}]})}function accordion(){$(".js-acdn").on("click",function(){var t=$(this).attr("data-acdn");$(this).toggleClass("open"),$('.js-acdnCont[data-acdn="'+t+'"]').slideToggle()})}function irPagerTop(){if($(".js-irPagerTop").length){233<$(window).scrollTop()?$(".js-irPagerTop").addClass("fixed"):$(".js-irPagerTop").removeClass("fixed")}}function slAnker(){$("#js-slAnker").on("click",function(){$("#wrapper").off("click"),$.when($("#js-slAnkerSelect").slideDown()).done(function(){$("#wrapper").on("click",function(){$("#js-slAnkerSelect").slideUp()})})})}var navBoolean=!1,device="",urlArray=new Object,ua=navigator.userAgent,smtMenuToggle=$("#smtMenuBtn"),wrapper=$("#wrapper"),openClass="navOpen",breakpoint_tab=750,breakpoint_smt=600,pageTopBtn=$("#pagetopBtn"),pcHeader=106,smtHeader=62;ua.indexOf("iPhone")<0&&ua.indexOf("Android")<0&&$(".telhref").contents().unwrap(),$(function(){var t=location.hash;if($(t).length){var n=pcHeader;window.innerWidth<breakpoint_tab&&(n=smtHeader);var a=$(t).offset().top-n;0<=ua.indexOf("msie")||0<=ua.indexOf("trident")?setTimeout(function(){$("html, body").scrollTop(a)},0):$("html, body").scrollTop(a)}window.innerWidth<breakpoint_tab?(device="smt",$("#nav").addClass("smt"),mmenuSmt()):(device="pc",mmenuPc()),createUrlParam(),smtNavToggle(),smoothScroll(),pageTopBtnFunc(),imgChage(),hnavSearchBtn(),tabClick(),tabLoad(),navCurrent(),pickBoxSlick(),accordion(),slAnker(),$(".js-matchHeight").length&&$(".js-matchHeight").matchHeight(),$(window).on("resize",function(){windowResizeFunc(),imgChage()}),$(window).on("scroll",function(){irPagerTop()})}),function(){var t;window.submit_callback=function(){t?document.body.classList.add("mf_serp_show_result"):(t=!0,document.getElementById("mf_serp_modal_head").addEventListener("click",function(){document.body.classList.remove("mf_serp_show_result")},!1),document.getElementById("mf_serp_iframe").addEventListener("load",function(){document.body.classList.add("mf_serp_show_result")},!1))}}();