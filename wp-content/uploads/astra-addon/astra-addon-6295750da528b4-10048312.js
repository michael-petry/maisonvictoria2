!function(o){o.fn.isInViewport=function(){var e=o(this).offset().top,a=e+o(this).outerHeight(),s=o(window).scrollTop(),n=s+o(window).height();return s<a&&e<n},AstraMenu={init:function(){this._bind(),document.querySelector("body").addEventListener("astraMenuHashLinkClicked",function(e){AstraMenu._close_fullscreen(e),AstraMenu._close_offcanvas(e)})},_bind:function(){(astraAddon.off_canvas_enable||"")&&(o(document).on("click","."+astraAddon.off_canvas_trigger_class,{class:"ast-off-canvas-overlay"},AstraMenu._enable_offcanvas_overlay),o(document).on("click touchstart",".astra-off-canvas-sidebar-wrapper, .astra-off-canvas-sidebar-wrapper .ast-shop-filter-close",{class:"ast-off-canvas-overlay"},AstraMenu._close_offcanvas)),o(document).on("click",".ast-flyout-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_offcanvas),o(document).on("click touchstart",".ast-flyout-above-menu-overlay .ast-above-header-navigation-wrap, .ast-flyout-above-menu-overlay .ast-above-header .ast-nav-close",AstraMenu._close_above_offcanvas),o(document).on("click",".ast-flyout-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_offcanvas),o(document).on("click touchstart",".ast-flyout-below-menu-overlay .ast-below-header-navigation-wrap, .ast-flyout-below-menu-overlay .ast-below-header .ast-nav-close",AstraMenu._close_below_offcanvas),o(document).on("click",".ast-fullscreen-below-menu-enable .ast-below-header .menu-toggle",AstraMenu._open_below_fullscreen),o(document).on("click",".ast-fullscreen-below-menu-overlay .ast-below-header .close",AstraMenu._close_below_fullscreen),o(document).on("click",".ast-fullscreen-above-menu-enable .ast-above-header .menu-toggle",AstraMenu._open_above_fullscreen),o(document).on("click",".ast-fullscreen-above-menu-overlay .ast-above-header .close",AstraMenu._close_above_fullscreen),o(document).on("click",".ast-flyout-menu-enable .main-header-bar .menu-toggle",{class:"ast-flyout-menu-overlay"},AstraMenu._enable_primary_menu_overlay),o(document).on("click",".ast-flyout-menu-overlay .main-header-bar-navigation, .ast-flyout-menu-overlay .main-header-bar .ast-nav-close",{class:"ast-flyout-menu-overlay"},AstraMenu._close_offcanvas),o(document).on("click",".ast-flyout-menu-overlay .main-header-bar-navigation",{class:"toggled"},AstraMenu._toggle_menu),o(document).on("click",".ast-fullscreen-menu-enable .main-header-bar .menu-toggle",AstraMenu._open_fullscreen),o(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",AstraMenu._close_fullscreen),o(document).on("click",".ast-fullscreen-menu-overlay .main-header-bar .close",{class:"toggled"},AstraMenu._toggle_menu),o(document).on("ready",AstraMenu._wp_admin_bar_visible),o(window).on("scroll",AstraMenu._wp_admin_bar_visible)},_open_above_fullscreen:function(e){e.preventDefault();var e=o("html").innerWidth(),a=(o("html").css("overflow","hidden"),o("html").innerWidth());o("html").css("margin-right",a-e),o("html").addClass("ast-fullscreen-above-menu-overlay"),o(".ast-above-header-navigation-wrap .close").length||(o(".ast-above-header-navigation-wrap").prepend('<span class="close">'+astraAddon.svgIconClose+"</span>"),o(".ast-above-header-navigation-wrap .close").css("right",a-e))},_open_below_fullscreen:function(e){e.preventDefault();var e=o("html").innerWidth(),a=(o("html").css("overflow","hidden"),o("html").innerWidth());o("html").css("margin-right",a-e),o("html").addClass("ast-fullscreen-below-menu-overlay"),o(".ast-below-header-navigation-wrap .close").length||(o(".ast-below-header-navigation-wrap").prepend('<span class="close">'+astraAddon.svgIconClose+"</span>"),o(".ast-below-header-navigation-wrap .close").css("right",a-e))},_open_fullscreen:function(e){e.preventDefault();var e=o("html").innerWidth(),a=(o("html").css("overflow","hidden"),o("html").innerWidth());o("html").css("margin-right",a-e),o("html").addClass("ast-fullscreen-menu-overlay"),o("html").addClass("ast-fullscreen-active"),o(".main-header-bar nav .close").length||(o(".main-header-bar nav").prepend('<span class="close">'+astraAddon.svgIconClose+"</span>"),o(".main-header-bar nav .close").css("right",a-e)),o(".ast-primary-menu-disabled .ast-header-custom-item .close").length||o(".ast-primary-menu-disabled .ast-header-custom-item .ast-merge-header-navigation-wrap").prepend('<span class="close">'+astraAddon.svgIconClose+"</span>")},_enable_offcanvas_overlay:function(e){e.preventDefault();var a=o("html").innerWidth(),s=(o("html").css("overflow","hidden"),o("html").innerWidth());o("html").css("margin-right",s-a),o("html").addClass(e.data.class),setTimeout(function(){o("#cart-accessibility").focus()},100)},_enable_primary_menu_overlay:function(e){e.preventDefault(),o(".main-header-bar-navigation .close").length||o(".main-navigation").before('<span class="ast-nav-close close">'+astraAddon.svgIconClose+"</span>"),o(".ast-merge-header-navigation-wrap .close").length||o(".ast-merge-header-navigation-wrap").append('<span class="ast-nav-close close">'+astraAddon.svgIconClose+"</span>"),o("div.ast-masthead-custom-menu-items .close").length||o("div.ast-masthead-custom-menu-items").append('<span class="ast-nav-close close">'+astraAddon.svgIconClose+"</span>"),astraAddon.sticky_active&&o("html").css("overflow","hidden"),o("html").addClass(e.data.class),o("html").addClass("ast-offcanvas-active")},_open_above_offcanvas:function(e){e.preventDefault(),o(".ast-above-header-section .close").length||o(".ast-above-header-navigation").prepend('<span class="ast-nav-close close">'+astraAddon.svgIconClose+"</span>"),astraAddon.sticky_active&&o("html").css("overflow","hidden"),o("html").addClass("ast-flyout-above-menu-overlay")},_close_above_offcanvas:function(e){e.target.parentNode.parentNode===this&&(o("html").removeClass("ast-flyout-above-menu-overlay"),o(".ast-above-header .menu-toggle").removeClass("toggled"),o(".ast-above-header").removeClass("toggle-on"),astraAddon.sticky_active&&o("html").css("overflow",""))},_open_below_offcanvas:function(e){e.preventDefault(),o(".ast-below-header-actual-nav .close").length||o(".ast-below-header-actual-nav").prepend('<span class="ast-nav-close close">'+astraAddon.svgIconClose+"</span>"),astraAddon.sticky_active&&o("html").css("overflow","hidden"),o("html").addClass("ast-flyout-below-menu-overlay")},_close_below_offcanvas:function(e){e.target.parentNode.parentNode===this&&(o("html").removeClass("ast-flyout-below-menu-overlay"),o(".ast-below-header .menu-toggle").removeClass("toggled"),o(".ast-below-header").removeClass("toggle-on"),astraAddon.sticky_active&&o("html").css("overflow",""))},_close_offcanvas:function(e){e.target.parentNode.parentNode!==this&&"astraMenuHashLinkClicked"!==e.type||(e.data=e.data||{},e.data.class=e.data.class||"ast-flyout-menu-overlay ast-offcanvas-active",o("html").css({overflow:"","margin-left":"","margin-right":""}),o("html").removeClass(e.data.class),setTimeout(function(){o("html").removeClass("ast-offcanvas-active")},300))},_close_above_fullscreen:function(e){o("html").css({overflow:"","margin-right":""}),o("html").removeClass("ast-fullscreen-above-menu-overlay"),o(".ast-above-header-navigation").removeClass("toggle-on").hide(),o(".ast-above-header .menu-toggle").hasClass("toggled")&&o(".ast-above-header .menu-toggle").removeClass("toggled")},_close_below_fullscreen:function(e){o("html").css({overflow:"","margin-right":""}),o("html").removeClass("ast-fullscreen-below-menu-overlay"),o(".ast-below-header .menu-toggle").hasClass("toggled")&&o(".ast-below-header .menu-toggle").removeClass("toggled")},_close_fullscreen:function(e){o("html").css({overflow:"","margin-right":""}),o("html").removeClass("ast-fullscreen-menu-overlay"),setTimeout(function(){o("html").removeClass("ast-fullscreen-active")},500),o(".main-header-bar-navigation").removeClass("toggle-on").hide()},_toggle_menu:function(e){o(".main-header-bar .menu-toggle").hasClass(e.data.class)&&o(".main-header-bar .menu-toggle").removeClass(e.data.class),o("html").hasClass("ast-fullscreen-active")&&setTimeout(function(){o("html").removeClass("ast-fullscreen-active")},500)},_toggle_above_menu:function(e){o(".ast-above-header .menu-toggle").hasClass(e.data.class)&&o(".ast-above-header .menu-toggle").removeClass(e.data.class)},_wp_admin_bar_visible:function(e){var a=o("#wpadminbar");a.length&&(a.isInViewport()?o("body").hasClass("ast-admin-bar-visible")||o("body").addClass("ast-admin-bar-visible"):o("body").hasClass("ast-admin-bar-visible")&&o("body").removeClass("ast-admin-bar-visible"))}},o(function(){AstraMenu.init()})}(jQuery);astraToggleSetupPro=function(e,a,t){var l,o;if(0<(o="off-canvas"===e||"full-width"===e?(l=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),a.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")):a.classList.contains("ast-header-break-point")?(l=document.querySelectorAll("#ast-mobile-header"),document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")):(l=document.querySelectorAll("#ast-desktop-header"),document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle"))).length)for(var n=0;n<o.length;n++)if(o[n].setAttribute("data-index",n),t[n]||(t[n]=o[n],o[n].addEventListener("click",astraNavMenuToggle,!1)),void 0!==l[n])for(var r,s=0;s<l.length;s++)if(0<(r=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?l[s].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):l[s].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var d=0;d<r.length;d++)r[d].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,a,t,l){e.preventDefault();var o=e.target.closest("#ast-desktop-header"),n=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),r=(o=null!=o&&""!==o?o.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)return null!==r&&""!==r&&void 0!==r&&(astraToggleClass(r,"toggle-on"),r.classList.contains("toggle-on")?r.style.display="block":r.style.display=""),astraToggleClass(o,"toggled"),void(o.classList.contains("toggled")?(a.classList.add("ast-main-header-nav-open"),"dropdown"===t&&(n.style.display="block")):(a.classList.remove("ast-main-header-nav-open"),n.style.display="none"));e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),r="0",o=!1;if(null!==l.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),r="0",o=!0),void 0===e[r])return!1;for(var s=e[r].querySelectorAll(".menu-item-has-children"),d=0;d<s.length;d++){s[d].classList.remove("ast-submenu-expanded");for(var i=s[d].querySelectorAll(".sub-menu"),g=0;g<i.length;g++)i[g].style.display="none"}-1!==(l.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[r],"toggle-on"),astraToggleClass(menu_toggle_all[r],"toggled"),o&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[r].classList.contains("toggle-on")?(e[r].style.display="block",a.classList.add("ast-main-header-nav-open")):(e[r].style.display="",a.classList.remove("ast-main-header-nav-open")))};!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.querySelectorAll(".ast-search-box .close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();