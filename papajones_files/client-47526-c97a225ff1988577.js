"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[47526],{54612:(t,e,i)=>{i.d(e,{Z:()=>h});var r=i(79810),n=i(92300),o=i(42463),a=i(94576),l=i(310),s=i(33990);const c=t=>{let{size:e,background:i,overrides:r={}}=t;const[a,c]=(0,n.jb)(r.Needle,l.Al);return(0,s.tZ)(a,{$background:i,$height:o.ww[e],...c})},d=t=>{let{background:e,dragging:i,height:r,overrides:a={}}=t;const[c,d]=(0,n.jb)(a.DragShadowContainer,l.X_),[h,u]=(0,n.jb)(a.DragShadow,l.dE);return(0,s.tZ)(c,{$width:o.oE,$height:r,$dragging:i,...d,children:(0,s.tZ)(h,{$width:o.oE,$background:e,...u})})};const h=t=>{let{size:e=o.x5.medium,needle:i=o.dC.medium,label:h,startEnhancer:u,endEnhancer:g,kind:p=o.TO.default,dragging:v=!1,overrides:b={},labelEnhancerContent:m=null,labelEnhancerPosition:x=o.hT.bottom,badgeEnhancerSize:f=null,badgeEnhancerContent:Z=null,...y}=t;const[,w]=(0,r.hQ)(),{color:M,backgroundColor:k}=function(t,e){return t===o.TO.accent?{color:e.colors.contentInversePrimary,backgroundColor:e.colors.backgroundAccent}:t===o.TO.negative?{color:e.colors.contentInversePrimary,backgroundColor:e.colors.backgroundNegative}:{color:e.colors.contentInversePrimary,backgroundColor:e.colors.backgroundInversePrimary}}(p,w),S=i!==o.dC.none&&e!==o.x5.xxSmallCircle&&e!==o.x5.xxSmallSquare,[L,j]=(0,n.jb)(b.Root,l.Nm),[C,P]=(0,n.jb)(b.DragContainer,l.g_),E=i!==o.dC.none&&![o.x5.xxSmallCircle,o.x5.xxSmallSquare].includes(e);const z={};return u&&(z.startEnhancer=u),g&&(z.endEnhancer=g),(0,s.BX)(L,{"data-baseweb":"fixed-map-marker",...j,children:[(0,s.BX)(C,{$translateAmount:o.eq+o.AJ,$performTranslate:S&&!v,...P,children:[(0,s.tZ)(a.Z,{size:e,label:h,...z,color:M,background:k,type:o.P6.fixed,overrides:b,badgeEnhancerSize:f,badgeEnhancerContent:Z,labelEnhancerContent:m,labelEnhancerPosition:x,needle:i}),E&&(0,s.tZ)(c,{size:i,background:k,overrides:b})]}),S&&(0,s.tZ)(d,{background:k,dragging:v,height:o.eq+o.AJ,overrides:b})]})}},51492:(t,e,i)=>{i.d(e,{Z:()=>c});var r=i(79810),n=i(94576),o=i(92300),a=i(310),l=i(42463),s=i(33990);const c=t=>{let{label:e,secondaryLabel:i,size:c=l.x5.medium,anchor:d=l.E.bottomLeft,endEnhancer:h,startEnhancer:u,anchorType:g=l.YS.circle,overrides:p={}}=t;const[,v]=(0,r.hQ)(),{colors:{backgroundPrimary:b,backgroundInversePrimary:m,primaryA:x,primaryB:f}}=v,Z=function(t){return t===l.YS.circle?l.x5.xSmallCircle:t===l.YS.square?l.x5.xSmallSquare:t===l.YS.xxSmallSquare?l.x5.xxSmallSquare:l.x5.xxSmallCircle}(g),[y,w]=(0,o.jb)(p.Root,a.wo),[M,k]=(0,o.jb)(p.PinHeadContainer,a.tv),[S,L]=(0,o.jb)(p.AnchorContainer,a.gy);return(0,s.BX)(y,{"data-baseweb":"floating-map-marker",$size:l.xC[Z].height,...w,children:[(0,s.tZ)(M,{$anchor:d,$anchorSize:l.xC[Z].height,...k,children:(0,s.tZ)(n.Z,{size:c,color:x,background:b,type:l.P6.floating,label:e,secondaryLabel:i,startEnhancer:u,endEnhancer:h,overrides:p})}),d!==l.E.none&&(0,s.tZ)(S,{...L,children:(0,s.tZ)(n.Z,{size:Z,color:f,background:m,type:l.P6.fixed,overrides:p})})]})}},4660:(t,e,i)=>{i.d(e,{Z:()=>h});var r=i(55921),n=i(6291),o=i(10003),a=i(31224),l=i(59121),s=i(73027),c=i(11427),d=i(98802);class h{constructor(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:1,height:1};(0,r.Z)(this,"latitude",void 0),(0,r.Z)(this,"longitude",void 0),(0,r.Z)(this,"zoom",void 0),(0,r.Z)(this,"pitch",void 0),(0,r.Z)(this,"bearing",void 0),(0,r.Z)(this,"altitude",void 0),(0,r.Z)(this,"fovy",void 0),(0,r.Z)(this,"meterOffset",void 0),(0,r.Z)(this,"center",void 0),(0,r.Z)(this,"width",void 0),(0,r.Z)(this,"height",void 0),(0,r.Z)(this,"scale",void 0),(0,r.Z)(this,"distanceScales",void 0),(0,r.Z)(this,"viewMatrix",void 0),(0,r.Z)(this,"projectionMatrix",void 0),(0,r.Z)(this,"viewProjectionMatrix",void 0),(0,r.Z)(this,"pixelProjectionMatrix",void 0),(0,r.Z)(this,"pixelUnprojectionMatrix",void 0),(0,r.Z)(this,"equals",(t=>t instanceof h&&(t.width===this.width&&t.height===this.height&&s.fS(t.projectionMatrix,this.projectionMatrix)&&s.fS(t.viewMatrix,this.viewMatrix)))),(0,r.Z)(this,"project",(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{topLeft:r=!0}=i,n=t.projectPosition(e),a=(0,o.aW)(n,t.pixelProjectionMatrix),[l,s]=a,c=r?s:t.height-s;return 2===e.length?[l,c]:[l,c,a[2]]})),(0,r.Z)(this,"unproject",(function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{topLeft:r=!0,targetZ:n}=i,[a,l,s]=e,c=r?l:t.height-l,d=n&&n*t.distanceScales.unitsPerMeter[2],h=(0,o.CT)([a,c,s],t.pixelUnprojectionMatrix,d),[u,g,p]=t.unprojectPosition(h);return Number.isFinite(s)?[u,g,p]:Number.isFinite(n)?[u,g,n]:[u,g]})),(0,r.Z)(this,"projectPosition",(t=>{const[e,i]=(0,o.w5)(t);return[e,i,(t[2]||0)*this.distanceScales.unitsPerMeter[2]]})),(0,r.Z)(this,"unprojectPosition",(t=>{const[e,i]=(0,o.es)(t);return[e,i,(t[2]||0)*this.distanceScales.metersPerUnit[2]]}));let{width:i,height:n,altitude:a=null,fovy:l=null}=e;const{latitude:c=0,longitude:u=0,zoom:g=0,pitch:p=0,bearing:v=0,position:b=null,nearZMultiplier:m=.02,farZMultiplier:x=1.01}=e;i=i||1,n=n||1,null===l&&null===a?(a=o.fM,l=(0,o.Lu)(a)):null===l?l=(0,o.Lu)(a):null===a&&(a=(0,o.sj)(l));const f=(0,o.EO)(g);a=Math.max(.75,a);const Z=(0,o.ro)({longitude:u,latitude:c}),y=(0,o.w5)([u,c]);y.push(0),b&&d.IH(y,y,d.dC([],b,Z.unitsPerMeter)),this.projectionMatrix=(0,o.c7)({width:i,height:n,scale:f,center:y,pitch:p,fovy:l,nearZMultiplier:m,farZMultiplier:x}),this.viewMatrix=(0,o.lf)({height:n,scale:f,center:y,pitch:p,bearing:v,altitude:a}),this.width=i,this.height=n,this.scale=f,this.latitude=c,this.longitude=u,this.zoom=g,this.pitch=p,this.bearing=v,this.altitude=a,this.fovy=l,this.center=y,this.meterOffset=b||[0,0,0],this.distanceScales=Z,this._initMatrices(),Object.freeze(this)}_initMatrices(){const{width:t,height:e,projectionMatrix:i,viewMatrix:r}=this,o=(0,n.bS)();s.Jp(o,o,i),s.Jp(o,o,r),this.viewProjectionMatrix=o;const a=(0,n.bS)();s.bA(a,a,[t/2,-e/2,1]),s.Iu(a,a,[1,-1,0]),s.Jp(a,a,o);const l=s.U_((0,n.bS)(),a);if(!l)throw new Error("Pixel project matrix not invertible");this.pixelProjectionMatrix=a,this.pixelUnprojectionMatrix=l}projectFlat(t){return(0,o.w5)(t)}unprojectFlat(t){return(0,o.es)(t)}getMapCenterByLngLatPosition(t){let{lngLat:e,pos:i}=t;const r=(0,o.CT)(i,this.pixelUnprojectionMatrix),n=(0,o.w5)(e),a=c.IH([],n,c.tk([],r)),l=c.IH([],this.center,a);return(0,o.es)(l)}fitBounds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:i,height:r}=this,{longitude:n,latitude:o,zoom:l}=(0,a.Z)(Object.assign({width:i,height:r,bounds:t},e));return new h({width:i,height:r,longitude:n,latitude:o,zoom:l})}getBounds(t){const e=this.getBoundingRegion(t),i=Math.min(...e.map((t=>t[0]))),r=Math.max(...e.map((t=>t[0])));return[[i,Math.min(...e.map((t=>t[1])))],[r,Math.max(...e.map((t=>t[1])))]]}getBoundingRegion(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.Z)(this,t.z||0)}getLocationAtPoint(t){let{lngLat:e,pos:i}=t;return this.getMapCenterByLngLatPosition({lngLat:e,pos:i})}}},15766:(t,e,i)=>{function r(t,e,i){const r=i?e[0]>t[0]:e[0]<t[0];return[t[0]+(e[0]-t[0])/2+(r?1:-1)*(e[1]-t[1])/4,t[1]+(e[1]-t[1])/2+(r?1:-1)*(t[0]-e[0])/4]}function n(t,e,i,r){const n=r-1,o=[];for(let r=0;r<=1;r+=1/n){const n=[(1-r)*(1-r)*t[0]+2*(1-r)*r*i[0]+r*r*e[0],(1-r)*(1-r)*t[1]+2*(1-r)*r*i[1]+r*r*e[1]];o.push(n)}return o}i.d(e,{m:()=>r,w:()=>n})},64520:(t,e,i)=>{i.d(e,{L:()=>l});var r=i(91931),n=i(15766),o=i(33990);const a=4;function l(t){const{pixelA:e,pixelB:i,strokeWidth:l=a,isDashed:s}=t,[,c]=(0,r.hQ)(),d=(0,n.m)([e.x,e.y],[i.x,i.y],!0),h=d[0],u=d[1],g=Math.abs(e.x-i.x),p=Math.abs(e.y-i.y);return(0,o.BX)("svg",{width:g,height:p,style:{overflow:"visible",display:"block"},children:[(0,o.tZ)("filter",{id:"blur",children:(0,o.tZ)("feGaussianBlur",{stdDeviation:"4"})}),(0,o.tZ)("path",{stroke:c.colors.contentPrimary,d:`M ${e.x} ${e.y} Q ${h} ${u} ${i.x} ${i.y}`,fill:"transparent",strokeWidth:`${l}px`,strokeDasharray:s?"5":"0"}),(0,o.tZ)("line",{x1:e.x,y1:e.y,x2:i.x,y2:i.y,strokeWidth:"1",stroke:c.colors.black,filter:"url(#blur)",opacity:.75})]})}},__fusion__427:(t,e,i)=>{i.r(e),i.d(e,{default:()=>L});var r=i(36151),n=i(55318),o=i(32909),a=i(42463),l=i(51492),s=i(54612),c=i(4660),d=i(88885),h=i(91931),u=i(33535),g=i(67007),p=i(74057),v=i(64520),b=i(15766),m=i(42994);var x=i(70118),f=i(52157),Z=i(95461),y=i(33990);const w=(0,h.zo)("div",(t=>{let{$height:e,$visibility:i}=t;return{width:"100%",height:`${e}px`,visibility:i}})),M=192,k=15,S=30;const L=t=>{let{height:e=M,storeLocation:i,storeUuid:L,defaultZoom:j=k,padding:C=S,storeMarker:P,deliveryLocationMarker:E}=t;const z=(0,d.T)(),$=(0,u.ZP)(),{deliveryLocation:_}=(0,p.Z)(L),A=_?.latitude??0,O=_?.longitude??0,B=(0,Z.Z)();r.useEffect((()=>{$("eats:store_list_item_impression",{storeInfo:{storeUuid:L,context:x.Pw,type:x.RX}})}),[$,L]);const D=r.useCallback((t=>{$("eats:map_component_error",{mapErrorEvent:t})}),[$]),q=r.useMemo((()=>({lat:i?.latitude||0,lng:i?.longitude||0})),[i]),I=r.useMemo((()=>({lat:A,lng:O})),[A,O]),T=_?.addressComponents?.countryCode,{localizedDistance:F}=r.useMemo((()=>function(t){const{storeLatLng:e,deliveryLatLng:i,countryCode:r}=t,n=(0,m.Bj)({latitude:e.lat,longitude:e.lng},{latitude:i.lat,longitude:i.lng});let o=n;return"mi"==("US"===r?"mi":"km")&&(o=.6214*n),{localizedDistance:Math.round(10*o)/10,distanceInKM:n}}({storeLatLng:q,deliveryLatLng:I,countryCode:T})),[q,I,T]),U=z("shared.unitOfDistance",{distance:F}),[R,X]=r.useState({longitude:q.lng,latitude:q.lat,zoom:j}),Y=r.useRef(null);r.useEffect((()=>{0===A&&0===O&&$("eats:store_info_map_empty_delivery_location")}),[$,A,O]),r.useEffect((()=>{const{current:t}=Y;if(!t||!_||!i)return;const e=[_.longitude,_.latitude],r=[i.longitude,i.latitude],n=(0,b.m)(e,r,!1),o=(0,b.w)(e,r,n,10).map((t=>({longitude:t[0]??0,latitude:t[1]??0}))),a=t.getViewStateForFeatures([_,i,...o],(t=>{let{longitude:e,latitude:i}=t;return{longitude:e,latitude:i}}),{padding:C});X(a)}),[_,i,C]);const[,H]=(0,h.hQ)(),J=function(t){let{storeLatLng:e,deliveryLatLng:i}=t;return e.lng>i.lng?e.lat>i.lat?a.E.topLeft:a.E.bottomLeft:e.lat>i.lat?a.E.topRight:a.E.bottomRight}({storeLatLng:q,deliveryLatLng:I}),N=U,Q=new c.Z(R),W=Q.project([q.lng,q.lat]),G=Q.project([I.lng,I.lat]),K={x:(W?.[0]||0)-(G?.[0]||0),y:(W?.[1]||0)-(G?.[1]||0)},V=_?[[{coordinates:[I.lng,I.lat],content:(0,y.tZ)(v.L,{pixelA:{x:0,y:0},pixelB:K,isDashed:!1}),provider:n.a.uber},{coordinates:[q.lng,q.lat],content:P?.render({localizedDistance:U,storeAnchorPosition:J})||(0,y.tZ)(l.Z,{label:N,anchorType:a.YS.square,anchor:J,size:a.ib.medium,...B?{overrides:{OuterAnchor:{style:t=>{let{$theme:e}=t;return{background:e.colors.backgroundAlwaysDark}}}}}:null}),propsOverride:P?.propsOverride||{style:{transform:"translate(-50%, -50%)"}},provider:n.a.uber},{coordinates:[I.lng,I.lat],content:E?.render({localizedDistance:U,storeAnchorPosition:J})||(0,y.tZ)(s.Z,{size:a.x5.xSmallCircle,needle:a.dC.none,...B?{overrides:{OuterAnchor:{style:t=>{let{$theme:e}=t;return{background:e.colors.backgroundAlwaysDark}}}}}:null}),propsOverride:E?.propsOverride||{style:{transform:"translate(-50%, -50%)"}},provider:_.referenceType}]]:[[{coordinates:[q.lng,q.lat],content:P?.render({localizedDistance:U,storeAnchorPosition:J})||(0,y.tZ)(s.Z,{size:a.x5.xSmallSquare,needle:a.dC.none}),propsOverride:P?.propsOverride||{style:{transform:"translate(-50%, -50%)"}},provider:n.a.uber}]],tt=(0,g.q)();return(0,y.BX)(y.HY,{children:[(0,y.tZ)(f.Z,{preconnectList:"GoogleMapsSDK"}),(0,y.tZ)(w,{$visibility:"visible",$height:e,children:tt.data?(0,y.tZ)(o.Y,{ref:Y,viewState:R,overlays:V,styleFlavor:"eats",onError:D,sessionId:tt.data,theme:H.colors.colorPreference}):null})]})}}}]);