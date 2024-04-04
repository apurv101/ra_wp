(function(g){var l=window.AmazonUIPageJS||window.P,p=l._namespace||l.attributeErrors,q=p?p("DetailPageWirelessPlansAssets",""):l;q.guardFatal?q.guardFatal(g)(q,window):q.execute(function(){g(q,window)})})(function(g,l,p){function q(c){if(Array.isArray(c)){for(var a=0,e=Array(c.length);a<c.length;a++)e[a]=c[a];return e}return Array.from(c)}g.when("A","wireless-plans-ajax-support","wireless-plans-constants","ready").execute("wireless-plans-desktop-ajax",function(c,a,e){function b(b){a.loadAjaxContent("wirelessPlansDesktopAjax,wirelessPlans",
"desktop","ready",b)}c.on(e.actions.atfRefresh,function(){return b("atfRefresh")});b("initialPageLoad")});"use strict";g.when("A","wireless-plans-constants","wireless-plans-csm-helper").register("wireless-plans-ajax-support",function(c,a,e){function b(b){m(d.ajaxSpinner).hide();m(d.ajaxErrorMessage).removeClass(f.hidden);g.log(b,"WARN",k)}var d=a.selectors,f=a.classes,k=a.featureName,h=a.actions,m=c.$;return{loadAjaxContent:function(a,f,k,g){var r=m(d.asinInput).val(),t=m(d.expanderContent);0!==t.length&&
c.ajax("/gp/product/features/wisper/wisper-ask-btf.html",{method:"get",params:{asin:r,showFeatures:a,deviceType:f},accepts:"text/html; charset\x3dutf-8",success:function(a){a&&/\w/.test(a)?(t.html(a),c.trigger(h.ajaxSuccess),"desktop"===f&&"initialPageLoad"===g&&e.incrementCount(k+"ccTTI",l.performance.now())):b("Received malformed response from wireless plans Ajax endpoint.")},failure:function(){b("Failed to fetch data via wireless plans Ajax endpoint")}})}}});"use strict";g.when("A","cc-manager",
"wireless-plans-constants","wireless-plans-desktop-registration").register("wireless-plans-mod-support",function(c,a,e){var b=e.selectors,d=e.classes,f=e.buyingOptionNewRowName,k=e.buyingOptionUsedRowName,h=c.$,m="."+d.incompatibleMessage;c.on(e.actions.buyBoxSelection,function(a){if(0!==h(b.desktopContainer).length){a=a.selectedRow.rowName;var c=a===f;h(b.pinnedHeader).add(b.hideWhenIncompatible).toggleClass(d.hidden,!c);h(m).remove();if(!c){c=h(b.desktopContainer).find(b.incompatibleWidget).clone();
c.removeClass().addClass(d.incompatibleMessage);h(b.desktopContainer).append(c);var c=h("#"+a),e=h(b.desktopDefaultOptionBox).hasClass(d.desktopSelectedPlanBox);c.find(m).remove();e||(e=h(b.desktopContainer).find(b.incompatibleBuybox).clone(),a=a===k&&c.find(b.usedAddToCart)||c.find(b.installmentAddToCart),e.removeClass().addClass(d.incompatibleMessage),a.append(e))}}})});"use strict";g.when("A").register("wireless-plans-constants",function(){return{selectors:{container:".wireless-plans-container",
desktopContainer:".wireless-plans-container-desktop",expandInitiallyInput:".wireless-plans-expand-initially-input",expandAfterSelection:".wireless-plans-expand-after-selection-input",planItemBox:".wireless-plan-item",desktopPlanItemBox:".a-button",buttonText:".a-button-text",buttonInput:".a-button-input",subtitleCheckMark:".wireless-plans-selected-checkmark",subtitleText:".wireless-plans-subtitle-text",collapsedSubtitle:".default-collapsed-subtitle",expandedSubtitle:".default-expanded-subtitle",expanderImage:".wireless-plans-expander-image",
expanderIcon:".wireless-plans-expander-icon",expanderContent:".wireless-plans-expander-content",expanderHeader:".wireless-plans-expander-header",defaultOptionBox:".wireless-plans-default-option-box",desktopDefaultOptionBox:".default-option-button",selectedHiddenPlanBox:".initial-hidden-item.plan-list-item",pinnedHeader:"#tp-pinned-header",hideWhenIncompatible:".wireless-plans-hide-when-incompatible",incompatibleWidget:".wireless-plans-incompatible-widget",incompatibleBuybox:".wireless-plans-incompatible-buybox",
buybox:"#buybox",activeRow:".a-accordion-active",rowHeader:".header-text",addToCart:"#addToCart",listItem:"li",planOptionList:".wireless-plans-options-list",planAsin:".wireless-plans-asin",defaultBoxSelectAction:"#wireless-plans-default-box-select-action",desktopPlanSelectButton:".wireless-plan-button-select-container",ajaxSpinner:".wireless-plans-ajax-spinner",ajaxErrorMessage:".wireless-plans-ajax-error",asinInput:"#twister-plus-asin",installmentAddToCart:".installmentRowAddToCart",usedAddToCart:"#addToCart_feature_div"},
compareTableSelectors:{firstDisplayedPlan:".displayed-plan-first",secondDisplayedPlan:".displayed-plan-second",lastDisplayedPlan:".displayed-plan-last",backButton:".rotate-select-button-back",nextButton:".rotate-select-button-next"},classes:{selectedPlanBox:"wireless-plan-item-selected",desktopSelectedPlanBox:"a-button-selected",wirelessPlansExpand:"wireless-plans-expander-content-expand",incompatibleMessage:"wireless-plans-incompatible-message",hidden:"aok-hidden",rotate:"rotate",fontClass:"font-weight",
hiddenPlanBox:"plan-list-item-hidden",displayPlanBox:"plan-list-item",desktopAllPlansSelected:"selected",desktopSelectButtonByAsinPrefix:"plan-button-select-"},compareTableClasses:{firstList:"plan-list-first",secondList:"plan-list-second",lastSecondList:"plan-list-last-second",lastList:"plan-list-last",firstDisplayedPlan:"displayed-plan-first",secondDisplayedPlan:"displayed-plan-second",lastDisplayedPlan:"displayed-plan-last",displayedPlanBeforeLast:"displayed-plan-before-last",displayedColumn:"wireless-plan-column-display",
hiddenColumn:"wireless-plan-column-hidden",disabledButton:"disabled-button"},viewNames:{learnMore:"wirelessLearnMoreSecondaryView",compareChart:"wirelessPlansCompareChart"},featureName:"wirelessPlans",featureAttribution:"Website/CETech/WirelessPlans",actions:{expand:"wireless-plans-card:expanded",collapse:"wireless-plans-card:collapse",selectPlan:"wireless-plans-select",desktopSelectPlan:"wireless-plans-desktop-select",desktopRemovePlan:"wireless-plans-desktop-remove-plan",desktopShowLearnMoreDSS:"wireless-plans-show-learn-more-dss",
compareChartSelectPlan:"wireless-plans-compare-select-plan",learnMoreSelectPlan:"wireless-plans-learn-more-select-plan",learnMoreDismiss:"wireless-plans-learn-more-view-dismiss",atfRefresh:"PageRefresh:ATF",toggleExpander:"toggle-wireless-plans-expander",buyBoxSelection:"a:accordion:buybox-accordion:select",ajaxSuccess:"wireless-plans-ajax-success"},compareTableActions:{rotateBack:"rotate-plan-list-back",rotateNext:"rotate-plan-list-next"},buyingOptionPlaceholder:"${optionName}",buyingOptionNewRowName:"newAccordionRow",
buyingOptionUsedRowName:"usedAccordionRow",unsupportedBuyingOptionTypes:["UNKNOWN"]}});"use strict";var y=function(){return function(c,a){if(Array.isArray(c))return c;if(Symbol.iterator in Object(c)){var e=[],b=!0,d=!1,f=p;try{for(var k=c[Symbol.iterator](),h;!(b=(h=k.next()).done)&&(e.push(h.value),!a||e.length!==a);b=!0);}catch(m){d=!0,f=m}finally{try{if(!b&&k["return"])k["return"]()}finally{if(d)throw f;}}return e}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}();
g.when("A","wireless-plans-constants","wireless-plans-csm-helper").execute(function(c,a,e){a=a.actions;[[a.expand,"ccExpanded"],[a.desktopSelectPlan,"ccSelection"],[a.desktopRemovePlan,"ccRemoval"]].forEach(function(a){a=y(a,2);var d=a[1];return c.on(a[0],function(){return e.incrementCount(d)})});c.declarative(a.desktopShowLearnMoreDSS,"click",function(){return e.incrementCount("ccLearnMore")})});"use strict";g.when("A","wireless-plans-constants").register("wireless-plans-csm-helper",function(c,a){function e(a,
e){if(d&&a)return e("twisterPlus."+a+"."+b+(c.capabilities.mobile?"":".desktop"))}var b=a.featureName,d=l.ue,f=l.uet,k=l.ues,h=l.uex,m=b+"Ajax",n=l.csa;return{incrementCount:function(a){var c=1<arguments.length&&arguments[1]!==p?arguments[1]:1;e(a,function(a){var b=(d.count(a)||0)+c;d.count(a,b);n&&n("Events",{producerId:"dp-rpcx"})("log",{schemaId:"dpRpcx.CSALoggingSchema.5",eventName:a,valueToLog:b},{ent:"all"})})},getCount:function(a){return e(a,function(a){return d.count(a)})},logBeforeAjax:function(a){d&&
f&&k&&(a=b+a,f("tc",m),k("id",m,a),k("t0",m,new Date),k("ctb",m,"1"))},logAfterAjaxResponse:function(){f&&h&&(f("be",m),h("ld",m))}}});"use strict";g.when("A","cc-manager","wireless-plans-constants").register("wireless-plans-desktop-registration",function(c,a,e){var b=e.actions;a.registerFeature({featureName:e.featureName,featureAttribution:e.featureAttribution},{init:function(a){},validateInputParams:function(a){return!0},cardCollapse:function(){c.trigger(b.collapse)},switchBuyingOption:function(a,
b,c){}});c.on(b.expand,function(){})});"use strict";g.when("A","wireless-plans-constants","side-sheet","cc-manager","wireless-plans-desktop-registration").execute("wireless-plans-desktop-select-actions",function(c,a,e,b){function d(a,d){var e={itemType:"asin",asin:a.asin,quantity:1,price:Number(a.price),offerListingId:a.offer,selectionType:"add",orderSummaryDisplayString:a.orderSummaryString,shortDisplayTitle:a.shortDisplayTitle,enableIA:!1},g=k.desktopSelectedPlanBox,l=k.fontClass;b.ccSelectionsClear(h);
d.closest(f.desktopContainer).find("."+g).removeClass(g);d.closest(f.desktopPlanItemBox).addClass(g);d.siblings(f.buttonText).addClass(l);a.asin&&b.ccSelectionUpdate(h,e);d=n(f.subtitleCheckMark);e=n(f.subtitleText);g=!!a.asin;l="true"===n(f.expandAfterSelection).val();d.toggleClass(k.hidden,!g);e.toggleClass("a-color-tertiary",!g).toggleClass("a-color-success",g).text(a.expanderSubtitle);g?c.trigger(m.desktopSelectPlan):(n(f.expanderHeader).click(),c.trigger(m.desktopRemovePlan));l&&n(f.expanderHeader).click();
n(f.desktopPlanSelectButton).each(function(){n(this).hasClass(""+k.desktopSelectButtonByAsinPrefix+a.asin)?n(this).addClass(k.desktopAllPlansSelected):n(this).removeClass(k.desktopAllPlansSelected)})}var f=a.selectors,k=a.classes,h=a.featureName,m=a.actions,n=c.$;c.declarative("wireless-plans-desktop-compare-select-plan","click",function(a){var b=n("input[name\x3dwirelessPlanAsin][value\x3d"+a.data.asin+"]");var e=k.hiddenPlanBox,h=k.displayPlanBox,m=b.closest(f.listItem);m.hasClass(e)&&(n(f.selectedHiddenPlanBox).removeClass(h).addClass(e),
m.removeClass(e).addClass(h));d(a.data,b.parent().siblings(f.buttonInput));c.trigger("a:declarative:close-side-sheet:click")});c.declarative(m.desktopShowLearnMoreDSS,"click",function(a){a.$event.preventDefault();a.$event.stopImmediatePropagation();c.trigger("a:declarative:side-sheet:click",a)});c.declarative("wireless-plans-desktop-select-action","click",function(a){d(a.data,a.$target)})});"use strict";g.when("A","wireless-plans-constants","wireless-plans-desktop-registration").execute("wireless-compare-table-rotate-actions",
function(c,a){function e(a,b){g.when("a-button").execute(function(c){c=c(a);b?c.disable():c.enable()})}var b=a.compareTableSelectors,d=a.compareTableClasses;a=a.compareTableActions;var f=c.$,k=function(){return{$currentFirstDisplayedPlan:f(b.firstDisplayedPlan),$currentSecondDisplayedPlan:f(b.secondDisplayedPlan),$currentLastDisplayedPlan:f(b.lastDisplayedPlan),$backButton:f(b.backButton),$nextButton:f(b.nextButton)}};c.declarative(a.rotateBack,"click",function(){var a=k(),b=a.$currentFirstDisplayedPlan,
c=a.$currentSecondDisplayedPlan,g=a.$currentLastDisplayedPlan,l=a.$backButton,a=a.$nextButton;b.hasClass(d.firstList)||(b.hasClass(d.secondList)&&(e(l,!0),l.addClass(d.disabledButton)),a.hasClass(d.disabledButton)&&(e(a,!1),a.removeClass(d.disabledButton)),g.removeClass(d.lastDisplayedPlan).addClass(d.hiddenColumn),c.removeClass(d.secondDisplayedPlan).removeClass(d.displayedPlanBeforeLast).addClass(d.lastDisplayedPlan),b.removeClass(d.firstDisplayedPlan).addClass(d.secondDisplayedPlan),b=parseInt(b.attr("data-plan-index")),
f(".plan-column-"+(b-1)).removeClass(d.hiddenColumn).addClass(d.firstDisplayedPlan))});c.declarative(a.rotateNext,"click",function(){var a=k(),b=a.$currentFirstDisplayedPlan,c=a.$currentSecondDisplayedPlan,g=a.$currentLastDisplayedPlan,l=a.$backButton,a=a.$nextButton;g.hasClass(d.lastList)||(g.hasClass(d.lastSecondList)&&(e(a,!0),a.addClass(d.disabledButton)),l.hasClass(d.disabledButton)&&(e(l,!1),l.removeClass(d.disabledButton)),b.removeClass(d.firstDisplayedPlan).addClass(d.hiddenColumn),c.removeClass(d.secondDisplayedPlan).addClass(d.firstDisplayedPlan),
g.removeClass(d.lastDisplayedPlan).addClass(d.secondDisplayedPlan).addClass(d.displayedPlanBeforeLast),b=parseInt(b.attr("data-plan-index")),f(".plan-column-"+(b+3)).removeClass(d.hiddenColumn).addClass(d.lastDisplayedPlan))})});"use strict";g.when("A","wireless-plans-constants").register("wireless-plans-desktop-expander-actions",function(c,a){var e=a.selectors,b=a.classes,d=c.$,f=b.wirelessPlansExpand;return{toggleWirelessPlans:function(a){d(e.expanderIcon).toggleClass(b.rotate,a);return d(e.expanderContent).toggleClass(f,
a).hasClass(f)}}});"use strict";g.when("A","wireless-plans-desktop-expander-actions","wireless-plans-constants","wireless-plans-desktop-registration").execute(function(c,a,e){function b(){var b=a.toggleWirelessPlans();if(g(f.desktopDefaultOptionBox).hasClass(k.desktopSelectedPlanBox)){var d=b?g(f.expandedSubtitle):g(f.collapsedSubtitle);g(f.subtitleText).text(d.text())}b&&c.trigger(h.expand)}function d(){"true"===g(f.expandInitiallyInput).val()&&b()}var f=e.selectors,k=e.classes,h=e.actions,g=c.$;
c.declarative(h.toggleExpander,"click",b);c.on(h.collapse,function(){a.toggleWirelessPlans(!1)});c.on(h.atfRefresh,function(){d()});d()});"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";
g.when("A","a-modal","vaips-vendors-sim-only-constants","vaips-sim-only-gating-utils").execute(function(c,a,e,b){function d(){n&&(n.unlock().hide(),a.remove(h.name))}function f(){m.has("amazonCheckoutSessionId")&&!n&&(n=a.create(document.head,h),n.update(h).lock().show(),c.delay(d,15E3))}var g=b.featureName;if(b.isBoostAsin&&g===e.devicePlusSimFeatureName){var h={inlineContent:'\n        \x3cdiv style\x3d"display: flex;flex-direction: column;align-items: center;"\x3e\n            \x3cimg alt\x3d"" src\x3d"https://m.media-amazon.com/images/G/01/VendorFront/boostInfinite.png" style\x3d"width: 120px"\x3e\n            \x3cspan class\x3d"a-spinner a-spinner-medium"\x3e\x3c/span\x3e\n        \x3c/div\x3e\n    ',
closeButton:!1,dataStrategy:"inline",name:"VaipsAmznPayRedirectModal",padding:"20px",hideHeader:!0},m=new URLSearchParams(l.location.search),n=void 0;l.addEventListener("focus",function(){f()});c.on("vaips-hide-redirect-modal",function(){d()});f()}});"use strict";g.when("A").register("vaips-vendors-sim-only-constants",function(c){return{selectors:{asinAddToCart:"#addToCart \x3e #ASIN",asinAddToCartMobile:"#buyNow \x3e input[name\x3d'asin']",buyNowButton:"#buy-now-button",originalATCButton:"#buybox.addToCart",
addToCartFeatureDiv:"#addToCart_feature_div",buyNowFeatureDiv:"#buyNow_feature_div",deliveryPriceBadgingFeature:"#deliveryPriceBadging_feature_div",vaipsCtaSpinner:"#vaips-cta-spinner",vaipsLockedDeviceAndPlanAsin:"vaips-locked-device-plan-asin",vaipAtcButton:"#vaips-sim-only-add-to-cart-button"},boostSimAsins:["B0C8BTM7V6"],boostDevicePlusSimAsins:[],simOnlyFeatureName:"vaipsSimOnlyAddToCart",devicePlusSimFeatureName:"vaipsDevicePlusSimAddToCart",amazonCheckoutSessionId:"amazonCheckoutSessionId",
boostIphoneBottomSheetName:"vaips-device-and-plan-bottom-sheet",vaipsUrls:{assets:"/postpaid/assets",vaipsFrontendServicePathPrefix:"/wisper",boostPlanDisclosurePath:"/slot/boostDpxPlanDisclosures?asin\x3d",placeholder:/{featureName}/g,boostFrontendServicePathPrefix:"/slot/{featureName}?asin\x3d"},classes:{hidden:"aok-hidden"},latencyMetrics:{vaipsAuiAssetsManifestRequest:"vaips.request.auiAssetsManifest",vaipsAuiAssetsJsRequest:"vaips.request.auiAssetJs",vaipsAuiAssetsCSSRequest:"vaips.request.auiAssetCSS"},
logLevel:{warn:"WARN",info:"INFO",error:"ERROR"},events:{twisterRefresh:"a:pageUpdate"}}});"use strict";if(l.location.pathname.includes("/B0C8BTM7V6")){var w=document.getElementById("buyNow_feature_div"),u=document.getElementById("addToCart_feature_div");if(u&&w){w.classList.add("aok-hidden");u.classList.add("aok-hidden");var w=u.parentElement,x=document.createElement("span");x.classList.add("a-spinner");x.classList.add("a-spinner-medium");x.setAttribute("id","vaips-cta-spinner");w.insertBefore(x,
u)}}"use strict";g.when("A","vaips-vendors-sim-only-constants").register("vaips-locked-getAsin",function(c,a){var e=a.boostSimAsins,b=a.selectors,d=a.boostDevicePlusSimAsins,f=c.$;return function(){var a=[].concat(q(e),q(d)).join("|"),a=new RegExp("/("+a+")"),c=document.getElementById(b.vaipsLockedDeviceAndPlanAsin);return c?c.value:0<f(b.asinAddToCart).length?f(b.asinAddToCart).val().toUpperCase():0<f(b.asinAddToCartMobile).length?f(b.asinAddToCartMobile).val().toUpperCase():a.test(l.location.href)?
a.exec(l.location.href)[1]:"NOTBOOSTASIN"}});"use strict";g.when("vaips-sim-only-parameter-utils","vaips-sim-only-gating-utils","vaips-vendors-sim-only-constants").register("vaips-retrieve-asin-sim-assets",function(c,a,e){function b(){f||(f=!0,g.load.js(k),g.load.css(h))}var d=c.concatUrlPathWithVaipsOverrides;c=c.getUrlWithWorkspaceParamOverride;a=a.runFeature;e=e.vaipsUrls;var f=!1,k=p,h=p;e=e.vaipsFrontendServicePathPrefix.concat(e.assets);d=d(e);return a?{assetRequest:fetch(c(d),{method:"POST",
headers:{"Content-Type":"application/json"}}).then(function(a){return a.json()}).then(function(a){k=a.javascript[0];h=a.css[0];b()}).finally(),runAssets:b}:{}});"use strict";g.when("A","vaips-sim-only-parameter-utils","vaips-sim-only-gating-utils","vaips-vendors-sim-only-constants").execute(function(c,a,e,b){var d=a.concatUrlPathWithVaipsOverrides;a=a.getUrlWithWorkspaceParamOverride;var f=e.featureName,k=e.getAsin,h=b.vaipsUrls,m=b.selectors,l=b.simOnlyFeatureName,q=b.logLevel;if(e.isBoostAsin&&
f===l){var p=c.$,v=k();c=h.vaipsFrontendServicePathPrefix.concat(h.boostPlanDisclosurePath.concat(v));var r=a(d(c));(function(){var a=p(m.deliveryPriceBadgingFeature);fetch(r,{method:"POST",headers:{"Content-Type":"text/html"}}).then(function(a){if(!a.ok)throw Error("HTTP error retrieving plan disclosure for ASIN "+v+" response is: "+a.status);return a.text()}).then(function(b){a.after(b)}).catch(function(a){g.log("Failed to retrieve dpx disclosure for ASIN "+v+": "+a,q.error,l)})})()}});"use strict";
g.when("A","vaips-vendors-sim-only-constants","vaips-sim-only-parameter-utils","vaips-sim-only-gating-utils").execute(function(c,a,e,b){function d(a,b){1===a.next().find(h.vaipAtcButton).length&&a.next().remove();a.after(b)}function f(a){var b=k.vaipsFrontendServicePathPrefix.concat(w),b=q(b.concat(a));u!==a&&(u=a,fetch(b,{method:"POST",headers:{"Content-Type":"text/html"}}).then(function(a){if(!a.ok)throw Error("HTTP error: "+a.status);return a.text()}).then(function(a){var b=!1;t=a;a=r(h.addToCartFeatureDiv);
var c=r(h.buyNowFeatureDiv),e=r(h.vaipsCtaSpinner);0<a.length&&(a.addClass(m.hidden),d(a,t),b=!0);0<c.length&&(c.addClass(m.hidden),b||(d(a,t),b=!0));0<e.length&&e.addClass(m.hidden);b||g.log("Could not find ATC button to Replace",l.error,p)}).catch(function(a){t="";g.log(a,l.fatal,p)}))}var k=a.vaipsUrls,h=a.selectors,m=a.classes,l=a.logLevel;a=a.events;var q=e.concatUrlPathWithVaipsOverrides,p=b.featureName,v=b.getAsin;if(b.isBoostAsin){var r=c.$,t=void 0,w=k.boostFrontendServicePathPrefix.replace(k.placeholder,
p),u="";f(v());c.on(a.twisterRefresh,function(){var a=v();f(a)})}});"use strict";g.when("A","vaips-vendors-sim-only-constants","vaips-locked-getAsin").register("vaips-sim-only-gating-utils",function(c,a,e){c=a.boostSimAsins;var b=a.selectors,d=a.boostDevicePlusSimAsins,f=a.simOnlyFeatureName,g=a.devicePlusSimFeatureName;a=void 0;var h={};a=e();if(b=document.getElementById(b.vaipsLockedDeviceAndPlanAsin))return{runFeature:!0,isBoostAsin:!0,asin:b.value,featureName:g,getAsin:e};b=c.includes(a)||d.includes(a);
c.forEach(function(a){h[a]=f});d.forEach(function(a){h[a]=g});c=h[a]||"";return b?{runFeature:!0,isBoostAsin:b,featureName:c,getAsin:e}:{runFeature:!1,isBoostAsin:b,featureName:c,getAsin:e}});"use strict";g.when().register("vaips-sim-only-parameter-utils",function(){function c(b){return-1!==b.search(a)?b.replace(e,"$1").replace(a,"$1ds_workspace\x3d"):b}var a=/([?&])vaips_workspace=/g,e=/([?&])ds_workspace=[^&]*&?/g;return{concatUrlPathWithVaipsOverrides:function(a){a=c(a);var d=l.location.search.substring(1).replace(/pagehostOverride=[^&]*&?/,
"").replace("vaipsOverride\x3d","pagehostOverride\x3d");return a.includes("?")?a.concat("\x26",d):a.concat("?",d)},getUrlWithWorkspaceParamOverride:c}});"use strict"});