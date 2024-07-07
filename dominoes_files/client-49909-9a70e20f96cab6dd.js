"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[49909,73035],{66996:(e,t,n)=>{n.d(t,{_:()=>d});var i=n(55517),o=n(34096),s=n(44750);const r=(0,s.V3)("UsessionCookieProviderBrowserToken");(0,s.V3)("UsessionClientHeadersProviderServerToken"),(0,s.V3)("UsessionServiceProviderServerToken");(0,s.V3)("EventAdapterToken");const a=(0,s.V3)("EventsAdapterAnalyticsToken"),d=((0,s.V3)("EventsAdapterMiddlewareTimingAllowListToken"),(0,s.V3)("AccessLoggerMetadataToken"),(0,s.V3)("DisableAccessLogToken"),(0,s.V3)("EventsAdapterContextLogConfigToken"),(0,s.V3)("EventsAdapterApplicationPerformanceConfig"),(0,s.V3)("HeatpipeEmitterConfigToken"),e=>{const t=window.location||{};return{...e,webEventsMeta:{dimensions:{viewport_height:window.innerHeight,viewport_width:window.innerWidth,screen_height:window.screen?window.screen.height:null,screen_width:window.screen?window.screen.width:null},page:{hostname:t.hostname,pathname:t.pathname,referrer:document.referrer,url:t.href},time_ms:Date.now()}}});o.U,a.optional,r.optional},70305:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(91931),o=n(94579);const s=(0,i.zo)("div",{width:o.Bj,height:o.eu,position:"relative"})},79154:(e,t,n)=>{n.d(t,{Z:()=>L});var i=n(36151),o=n(11137),s=n(43193),r=n(36262),a=n(93649),d=n(74564),l=n(33990);const p=Object.freeze({needsDisplay:"guestadd_v2_needs_display",success:"success",addPaymentError:"add_payment_error",fetchOnboardingFlowsError:"onboarding_flows_fetch_error",userClosed:"user_closed",signIn:"sign_in"});class u extends s.Component{state={dimensions:{height:0,width:0}};constructor(e){super(e),e.dimensions&&(this.state.dimensions=e.dimensions)}resolve=e=>{const{resultCode:t}=e;if(t===p.needsDisplay){const e=this.props.onNeedsDisplay;if(!e)return;const{height:t,width:n}=(0,r.UL)(o.window.innerHeight,o.window.innerWidth),i=e(t,n);return this.setState({dimensions:i})}switch(t){case p.signIn:return void this.props.onCancel(p.signIn,e.orderUuid);case p.userClosed:case a.lw.closed:return void this.props.onCancel(p.userClosed,e.orderUuid);case p.success:return void this.props.onSuccess(e.resultCode,e.orderUuid,e.paymentProfile);case p.fetchOnboardingFlowsError:case p.addPaymentError:case a.lw.openFailed:return void this.props.onError(e.resultCode,e.orderUuid,e.message);default:return}};shouldHideLoader=e=>e&&e.resultCode===p.needsDisplay;resolutionHandler=e=>{this.resolve(e)};render(){const e=(0,r.t0)(this.props,this.state.dimensions),t={orderUuid:this.props.orderUuid,guestUserUuid:this.props.guestUserUuid,activeFlowsUseCaseKey:this.props.activeFlowsUseCaseKey,viewOnlyFlowsUseCaseKey:this.props.viewOnlyFlowsUseCaseKey},n=(0,r.sI)(this.props.origin),i=(0,r.pT)(this.props,"guestadd_v2"),o=(0,r.DZ)(this.props,this.shouldHideLoader),s=this.props.title||"Uber - Add a payment method";return(0,l.tZ)(d.Z,{resolutionHandler:this.resolutionHandler,publishableKey:this.props.publishableKey,integrationName:this.props.integrationName,organizationUuid:this.props.organizationUuid,urlSearchParams:t,embedMode:this.props.embedMode,redirectUrl:this.props.redirectUrl,options:e,url:n,analytics:i,load:o,title:s})}}var c=n(66996),h=n(33535),m=n(65602),g=n(95818),y=n(19972),Z=n(65478),w=n(22065),f=n(37649),v=n(85293),b=n(37394),C=n(64095),x=n(54669),U=n(93553),_=n(91931),H=n(55186),S=n(47986),E=n(62149),T=n(34626),k=n(87696),P=n(92431);function L(e){const{onCancel:t}=e,n="guest-add-payment",o=(0,E.TH)(),s=(0,h.ZP)(),r=(0,b.Z)(),a=(0,C.Z)(),d=(0,w.Z)(),p=(0,y.Z)(),L=(0,Z.Z)(),F=(0,g.Z)(),M=(0,P.Z)(),D=(0,k.Ah)(M),B=(t,i,o)=>{s("eats:payments_hub_end",{paymentsHubEnd:{type:n,result:"success",code:t}}),e.onSuccess(o)},[A,z]=i.useState(!1),[,N]=(0,_.hQ)(),O=(0,x.Z)(),K={deviceId:(0,k.fd)(M),...O?{latitude:O.latitude,longitude:O.longitude}:{}},{unregisteredUserUuid:V}=(0,T.Z)();return D&&V?A?(0,l.tZ)(v.Z,{onRetry:()=>{z(!1)}}):(0,l.BX)(l.HY,{children:[(0,l.tZ)(f.Z,{eventName:"eats:payments_hub_start",eventPayload:{paymentsHubStart:{type:n}}}),(0,l.tZ)(H.Z,{type:"login",redirectTo:(0,S.Zs0)(o),children:e=>{let{onClick:n}=e;return(0,l.tZ)(u,{onSuccess:B,onError:()=>z(!0),onCancel:(e,i)=>{"sign_in"===e?n():t()},loadTimeout:m.Ej,Loader:()=>(0,l.tZ)(U.Z,{}),LoadError:e=>(0,l.tZ)(v.Z,{onRetry:e}),acceptableOrigins:F,context:K,origin:d,dimensions:{width:"100%",height:"100%"},publishableKey:p,integrationName:L,m3:r,theme:N.colors.colorPreference,universalEvents:a,webEventsMetaMapper:c._,useWpeTransport:!0,orderUuid:D,activeFlowsUseCaseKey:m.TO,viewOnlyFlowsUseCaseKey:m.Bf,guestUserUuid:V})}})]}):(t(),null)}},93553:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(88885),o=n(91931),s=n(79908),r=n(33990);const a=300,d=(0,o.zo)("div",(e=>{let{$theme:t,$isBackgroundTransparent:n}=e;return{height:"100%",width:"100%",display:"flex",flex:1,alignItems:"center",justifyContent:"center",textAlign:"center",background:n?"transparent":t.colors.backgroundPrimary}})),l=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{paddingTop:"16px",textAlign:"center",...t.typography.ParagraphMedium,color:t.colors.contentSecondary}})),p=(0,o.zo)("div",{position:"relative",width:"100%",height:"135px"}),u=(0,o.w1)(l,(e=>{let{index:t,total:n}=e;const i=2600,o=i*n;return{position:"absolute",width:"100%",opacity:0,animationIterationCount:"infinite",animationDelay:`${t*i}ms`,animationDuration:`${o}ms`,animationName:{"0%":{opacity:0},[`${Math.round(a/o*100)}%`]:{opacity:1},[`${Math.round(2300/o*100)}%`]:{opacity:1},[`${Math.round(i/o*100)}%`]:{opacity:0}}}})),c="45px",h=(0,o.zo)("div",(()=>({width:c,marginLeft:"auto",marginRight:"auto"})));const m=function(e){const t=(0,i.T)(),n=Boolean(e.isLoaderOnly),o=["",t("payment-hub.loader.step.1"),t("payment-hub.loader.step.2"),t("payment-hub.loader.step.3")];return(0,r.tZ)(d,{$isBackgroundTransparent:n,children:(0,r.BX)("div",{style:{width:"80%"},children:[(0,r.tZ)(h,{children:(0,r.tZ)(s.Z,{type:"Loading",width:c,height:c,ariaLabel:t("loading"),color:"loading"})}),n?(0,r.tZ)(r.HY,{}):(0,r.tZ)(p,{children:o.map(((e,t)=>(0,r.tZ)(u,{"data-test":"loader.text",index:t,total:o.length,children:e},t)))})]})})}},85293:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(40836),o=n(33990);const s=()=>(0,o.BX)("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.tZ)("path",{d:"M2.47893 70.412L38.5231 7.93537C39.1239 6.81972 40.7545 6.81972 41.441 7.93537L77.571 70.412C78.1718 71.5277 77.3994 72.9008 76.1121 72.9008H3.85205C2.56475 72.9008 1.79238 71.5277 2.47893 70.412Z",fill:"#F25138"}),(0,o.tZ)("path",{d:"M12.5195 66.2926L39.9818 18.7485L67.444 66.2926H12.5195Z",fill:"black"}),(0,o.tZ)("path",{d:"M39.9808 54.7924C40.6674 54.7924 41.2681 55.0498 41.783 55.5647C42.298 56.0797 42.5554 56.6804 42.5554 57.367C42.5554 58.0535 42.298 58.6542 41.783 59.1692C41.2681 59.6841 40.6674 59.9415 39.9808 59.9415C39.2943 59.9415 38.6077 59.6841 38.1786 59.1692C37.6637 58.6542 37.4062 58.0535 37.4062 57.367C37.4062 56.6804 37.6637 56.0797 38.1786 55.5647C38.6935 55.0498 39.2943 54.7924 39.9808 54.7924ZM38.007 52.5611L37.6637 34.1099H42.3838L41.9547 52.5611H38.007Z",fill:"white"})]}),r={backgroundColor:"#000000",color:"#FFFFFF",width:"100%",lineHeight:"28px",fontSize:"20px",minHeight:"56px",border:"none",cursor:"pointer"},a={backgroundColor:"#EEEEEE",color:"#000000",width:"100%",lineHeight:"28px",fontSize:"20px",height:"56px",border:"none",cursor:"pointer",marginTop:"16px"},d={display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box",fontFamily:"inherit"},l={display:"flex",flexDirection:"column",alignItems:"center",flexGrow:1,flexShrink:1,flexWrap:1,justifyContent:"center",fontFamily:"inherit",minWidth:0,paddingTop:0,paddingRight:"16px",paddingBottom:"16px",paddingLeft:"16px"},p={fontSize:"24px",fontFamily:"inherit",lineHeight:"40px",textAlign:"center",width:"100%",marginTop:"24px"},u={fontSize:"14px",fontFamily:"inherit",lineHeight:"24px",textAlign:"center",width:"100%",paddingTop:"16px",paddingRight:"25px",paddingBottom:0,paddingLeft:"25px",boxSizing:"border-box",marginTop:"24px"},c={flexGrow:0,flexShrink:0,paddingTop:0,paddingRight:"16px",paddingBottom:"16px",paddingLeft:"16px"},h=e=>{let{header:t}=e;return(0,o.BX)("div",{style:p,children:[" ",t," "]})},m=e=>{let{description:t}=e;return(0,o.BX)("div",{style:u,children:[" ",t," "]})},g=e=>(0,o.BX)("div",{style:l,children:[(0,o.tZ)(s,{}),e.header&&(0,o.tZ)(h,{...e}),e.description&&(0,o.tZ)(m,{...e})]}),y=e=>(0,o.tZ)("button",{onClick:e.onAction,style:{...r,...e.styleOverrides?.primaryButton},children:e.action}),Z=e=>(0,o.tZ)("button",{onClick:e.onCancel,style:{...a,...e.styleOverrides?.secondaryButton},children:e.cancel}),w=e=>(0,o.BX)("div",{style:c,children:[e.action&&(0,o.tZ)(y,{...e}),e.cancel&&(0,o.tZ)(Z,{...e})]}),f=e=>(0,o.BX)("div",{style:d,children:[(0,o.tZ)(g,{...e}),(0,o.tZ)(w,{...e})]}),v=e=>(0,o.tZ)(f,{...e});function b(e){const t=e.title||(0,o.tZ)(i.v,{id:"components.genericError.title"}),n=e.buttonText||(0,o.tZ)(i.v,{id:"shared.retry"});return(0,o.tZ)(v,{header:t,description:e.message,action:n,onAction:e.onRetry})}},85244:(e,t,n)=>{n.d(t,{Z:()=>P});var i=n(43193),o=n(5617),s=n(36151),r=n(11137),a=n(7130),d=n(36262),l=n(93649),p=n(74564),u=n(33990);class c extends i.Component{state={dimensions:{height:0,width:0}};constructor(e){super(e),e.dimensions&&(this.state.dimensions=e.dimensions)}resolve=e=>{if("add_needs_display"===e.resultCode){const e=this.props.onNeedsDisplay;if(!e)return;const{height:t,width:n}=(0,d.UL)(r.window.innerHeight,r.window.innerWidth),i=e(t,n);return this.setState({dimensions:i})}e.resultCode!==l.lw.closed&&e.resultCode!==l.lw.openFailed?"success"!==e.result?"add_cancelled"===e.resultCode&&this.props.onCancel?this.props.onCancel():"error"!==e.result||this.props.onFailure(e):this.props.onSuccess(e):this.props.onFailure({result:"error",flow:"add",message:""})};shouldHideLoader=e=>e&&"add_needs_display"===e.resultCode;resolutionHandler=e=>{this.resolve(e)};render(){const{giftCode:e,disablePaymentMethodsList:t,paymentMethod:n,hideCancel:i,authenticationFlowId:o}=this.props,s=(0,d.t0)(this.props,this.state.dimensions),r=(0,d.HF)(this.props.origin,t?void 0:n),l=(0,d.pT)(this.props,"add",{prefetch:(0,a.HJ)()}),c=(0,d.DZ)(this.props,this.shouldHideLoader),h=this.props.title||"Uber - Add a payment method",m=e?{giftCode:e}:{};return t&&n&&(m.paymentMethod=n),i&&(m.hideCancel="true"),o&&(m.authenticationFlowId=o),(0,u.tZ)(p.Z,{resolutionHandler:this.resolutionHandler,publishableKey:this.props.publishableKey,integrationName:this.props.integrationName,organizationUuid:this.props.organizationUuid,embedMode:this.props.embedMode,redirectUrl:this.props.redirectUrl,options:s,url:r,analytics:l,load:c,title:h,urlSearchParams:m})}}var h=n(66996),m=n(33535),g=n(65602),y=n(95818),Z=n(19972),w=n(65478),f=n(22065),v=n(37649),b=n(85293),C=n(37394),x=n(64095),U=n(54669),_=n(93553),H=n(15649),S=n(91931),E=n(47986),T=n(44756);function k(e){const t=(0,H.Z)(),n="add-payment",i=(0,m.ZP)(),o=(0,C.Z)(),r=(0,x.Z)(),a=(0,f.Z)(),d=(0,Z.Z)(),l=(0,w.Z)(),p=(0,y.Z)(),[k,P]=s.useState(!1),[,L]=(0,S.hQ)(),F=(0,U.Z)(),M=F?{latitude:F.latitude,longitude:F.longitude}:{},{paymentMethod:D=""}=(0,E.vRw)();return k?(0,u.tZ)(b.Z,{onRetry:()=>{P(!1)}}):(0,u.BX)(u.HY,{children:[(0,u.tZ)(v.Z,{eventName:"eats:payments_hub_start",eventPayload:{paymentsHubStart:{type:n}}}),(0,u.tZ)(c,{onSuccess:t=>{i("eats:payments_hub_end",{paymentsHubEnd:{type:n,result:"success",code:t.result}}),e.onSuccess(t)},onFailure:()=>{P(!0)},loadTimeout:g.Ej,Loader:()=>(0,u.tZ)(_.Z,{}),LoadError:e=>(0,u.tZ)(b.Z,{onRetry:e}),acceptableOrigins:p,context:M,origin:a,dimensions:{width:"100%",height:"100%"},publishableKey:d,integrationName:l,localeCode:t,m3:o,theme:L.colors.colorPreference,universalEvents:r,webEventsMetaMapper:h._,useWpeTransport:!0,paymentMethod:T.ho.has(D)?D:""})]})}function P(e){const t=(0,o.Z)(e.onSuccess),n=i.useCallback((e=>{let{uuid:n}=e;t(n)}),[t]);return(0,u.tZ)(k,{onSuccess:n})}},405:(e,t,n)=>{n.d(t,{Z:()=>T});var i=n(43193),o=n(92431),s=n(87696),r=n(36151),a=n(11137),d=n(36262),l=n(93649),p=n(74564),u=n(33990);const c=Object.freeze({needsDisplay:"guestadd_needs_display",success:"success",paymentDataError:"payment_data_error",userClosed:"user_closed"});Object.freeze({signIn:"sign_in"});class h extends i.Component{state={dimensions:{height:0,width:0}};constructor(e){super(e),e.dimensions&&(this.state.dimensions=e.dimensions)}resolve=e=>{const{resultCode:t}=e;if(t===c.needsDisplay){const e=this.props.onNeedsDisplay;if(!e)return;const{height:t,width:n}=(0,d.UL)(a.window.innerHeight,a.window.innerWidth),i=e(t,n);return this.setState({dimensions:i})}t!==c.userClosed&&t!==l.lw.closed||this.props.onCancel(c.userClosed,e.orderUuid,e.linkTarget),e.resultCode!==c.success?e.resultCode!==c.paymentDataError&&t!==l.lw.openFailed||this.props.onError(e.resultCode,e.orderUuid):this.props.onSuccess(e.resultCode,e.orderUuid,{tokenType:e.tokenType,tokenData:e.tokenData})};shouldHideLoader=e=>e&&e.resultCode===c.needsDisplay;resolutionHandler=e=>{this.resolve(e)};render(){const e=(0,d.t0)(this.props,this.state.dimensions),t={orderUuid:this.props.orderUuid},n=(0,d.i$)(this.props.origin),i=(0,d.pT)(this.props,"guestadd"),o=(0,d.DZ)(this.props,this.shouldHideLoader),s=this.props.title||"Uber - Add a payment method";return(0,u.tZ)(p.Z,{resolutionHandler:this.resolutionHandler,publishableKey:this.props.publishableKey,integrationName:this.props.integrationName,organizationUuid:this.props.organizationUuid,urlSearchParams:t,embedMode:this.props.embedMode,redirectUrl:this.props.redirectUrl,options:e,url:n,analytics:i,load:o,title:s})}}var m=n(66996),g=n(33535),y=n(65602),Z=n(95818),w=n(19972),f=n(65478),v=n(22065),b=n(37649),C=n(85293),x=n(37394),U=n(64095),_=n(54669),H=n(93553),S=n(91931);function E(e){const{orderUuid:t,onCancel:n}=e,i="guest-add-payment",o=(0,g.ZP)(),s=(0,x.Z)(),a=(0,U.Z)(),d=(0,v.Z)(),l=(0,w.Z)(),p=(0,f.Z)(),c=(0,Z.Z)(),[E,T]=r.useState(!1),[,k]=(0,S.hQ)(),P=(0,_.Z)(),L=P?{latitude:P.latitude,longitude:P.longitude}:{};return E?(0,u.tZ)(C.Z,{onRetry:()=>{T(!1)}}):(0,u.BX)(u.HY,{children:[(0,u.tZ)(b.Z,{eventName:"eats:payments_hub_start",eventPayload:{paymentsHubStart:{type:i}}}),(0,u.tZ)(h,{onSuccess:(t,n,s)=>{o("eats:payments_hub_end",{paymentsHubEnd:{type:i,result:"success",code:t}}),e.onSuccess(s.tokenData)},onError:()=>{T(!0)},onCancel:n,loadTimeout:y.Ej,Loader:()=>(0,u.tZ)(H.Z,{}),LoadError:e=>(0,u.tZ)(C.Z,{onRetry:e}),acceptableOrigins:c,context:L,origin:d,dimensions:{width:"100%",height:"100%"},publishableKey:l,integrationName:p,m3:s,theme:k.colors.colorPreference,universalEvents:a,webEventsMetaMapper:m._,useWpeTransport:!0,orderUuid:t})]})}function T(e){let{onCancel:t,onSuccess:n}=e;const r=(0,o.Z)(),a=(0,s.Ah)(r)||"",d=i.useCallback((e=>{n(e)}),[n]);return(0,u.tZ)(E,{onCancel:t,onSuccess:d,orderUuid:a})}},__fusion__352:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(53683),o=n(93553),s=n(70305),r=n(33990);function a(){return(0,r.tZ)(i.ZP,{isBackgroundTransparent:!0,hasCloseButton:!1,onClose:()=>{},children:(0,r.tZ)(s.Z,{children:(0,r.tZ)(o.Z,{isLoaderOnly:!0})})})}},73031:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(36151),o=n(74622),s=n(62459);function r(){const[e,t]=(0,i.useState)(""),n=(0,s.Z)("createGuestPaymentProfileV2");return{createGuestPaymentProfile:(0,o.useMutation)((e=>n.request("createGuestPaymentProfileV2",e)),{onSuccess:e=>{t(e.paymentProfileUUID)}}),paymentProfileUUID:e}}},5617:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(36151),o=n(71576),s=n(68262);function r(e){const{refreshPaymentProfiles:t,shouldUsePaymentsHub:n}=(0,s.Z)(),r=(0,o.Z)("getUserV1"),[a,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a&&(e(...a),d(null))}),[a,e]),(e,i,o,s)=>{(n?t():r()).then((t=>{d([e,i,o,s])})).catch((e=>{}))}}},89698:(e,t,n)=>{n.d(t,{P:()=>s});var i=n(60849),o=n(79620);function s(){return(0,i.ip)({...o.S.guest_checkout_payment_expansion,defaultValue:!1})}},95818:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(22065);function o(){(0,i.Z)();return[]}},64095:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(36151),o=n(51083),s=n(34096);function r(){const e=(0,i.useContext)(o.GM);return(0,o.G2)(s.U).from(e)}}}]);