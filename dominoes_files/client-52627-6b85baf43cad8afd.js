(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[52627],{90985:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var i=a(92300),r=a(95958),o=a(48700),n=a(42209),s=a(33990);const u=t=>{let{children:e,content:a,color:u,shape:d=o.X3.rectangle,placement:c=o.r4.topRight,hierarchy:l,horizontalOffset:m,verticalOffset:p,hidden:I,overrides:y={}}=t;const[h,g]=(0,i.jb)(y.Badge,r.j8),[f,b]=(0,i.jb)(y.Root,r.Fp),[A,T]=(0,i.jb)(y.Positioner,r.x5),C=(0,n.u)(e);o.r4.topLeft,o.r4.topRight,o.r4.bottomRight,o.r4.bottomLeft;return C?(0,s.BX)(f,{...b,children:[C,(0,s.tZ)(A,{$horizontalOffset:m,$verticalOffset:p,$placement:c,$role:o.HB.badge,...T,children:(0,s.tZ)(h,{$hierarchy:l,$shape:d,$color:u,$hidden:I,...g,children:a})})]}):(0,s.tZ)(h,{$hierarchy:l,$shape:d,$color:u,$hidden:I,...g,children:a})}},71454:t=>{t.exports=function(t,e,a){var i=!1,r=!1;return function(){r=a&&!i;var o=this,n=arguments;if(i||(i=!0,setTimeout((function(){if(i=!1,!a)return t.apply(o,n)}),e)),r)return r=!1,t.apply(this,arguments)}}},74334:(t,e,a)=>{"use strict";a.d(e,{Ou:()=>o,fi:()=>i,vZ:()=>r});Object.freeze({UNKNOWN:"UNKNOWN",LEADING:"LEADING",TRAILING:"TRAILING"});const i=Object.freeze({UNKNOWN:"UNKNOWN",PRIMARY:"PRIMARY",SECONDARY:"SECONDARY",TERTIARY:"TERTIARY"}),r=Object.freeze({UNKNOWN:"UNKNOWN",HIERARCHY_DEFAULT:"HIERARCHY_DEFAULT",ACCENT:"ACCENT",NEGATIVE:"NEGATIVE",POSITIVE:"POSITIVE",WARNING:"WARNING"}),o=Object.freeze({UNKNOWN:"UNKNOWN",PILL:"PILL",RECTANGLE:"RECTANGLE"})},10400:(t,e,a)=>{"use strict";a.d(e,{F8:()=>i,Yj:()=>o,oN:()=>r});const i=Object.freeze({UNKNOWN:"UNKNOWN",AVAILABLE:"AVAILABLE",LIKELY_UNAVAILABLE:"LIKELY_UNAVAILABLE",UNAVAILABLE:"UNAVAILABLE",PLACEHOLDER_1:"PLACEHOLDER_1",PLACEHOLDER_2:"PLACEHOLDER_2"}),r=(Object.freeze({GRID:"GRID",LIST:"LIST"}),Object.freeze({TOP_LEADING:"TOP_LEADING",TOP_TRAILING:"TOP_TRAILING",BOTTOM_LEADING:"BOTTOM_LEADING",BOTTOM_TRAILING:"BOTTOM_TRAILING"})),o=Object.freeze({UNKNOWN:"UNKNOWN",TOP_LEADING:"TOP_LEADING",TOP_TRAILING:"TOP_TRAILING",BOTTOM_LEADING:"BOTTOM_LEADING",BOTTOM_TRAILING:"BOTTOM_TRAILING"});Object.freeze({UNKNOWN:"UNKNOWN",IN_STORE_SEARCH:"IN_STORE_SEARCH",QUICK_ADD_ITEM_FEED_CAROUSEL:"QUICK_ADD_ITEM_FEED_CAROUSEL"}),Object.freeze({FIT:"FIT",CENTER_CROP:"CENTER_CROP"})},11849:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var i=a(12517),r=a(31913),o=a(48700),n=a(74334),s=a(8639);const u={[n.Ou.PILL]:o.X3.pill,[n.Ou.RECTANGLE]:o.X3.rectangle};const d={[n.fi.PRIMARY]:o.T5.primary,[n.fi.SECONDARY]:o.T5.secondary};const c={[n.vZ.POSITIVE]:o.r$.positive,[n.vZ.ACCENT]:o.r$.accent,[n.vZ.NEGATIVE]:o.r$.negative,[n.vZ.WARNING]:o.r$.warning};var l=a(89217),m=a(36278),p=a(91931),I=a(91483),y=a(33990);function h(t){let{viewModel:e}=t;const{content:a,hierarchy:n,color:h,shape:g,accessibilityText:f}=e,[b,A]=(0,p.hQ)(),T=function(t){return t&&u[t]||o.X3.rectangle}(g),C=function(t){return t&&d[t]||o.T5.primary}(n);let U=null;"standard"===h?.type&&(U=h.standard);const D=function(t){return t&&c[t]||o.r$.accent}(U),k={Badge:{style:{...function(t,e){let a={};if("custom"===t?.type){const i=t&&"custom"in t?t.custom:null,r=(0,s.Lq)(i?.contentColor),o=(0,s.Lq)(i?.backgroundColor);a={color:e?.colors[`${r}`],backgroundColor:e?.colors[`${o}`]}}return a}(h,A),maxWidth:"100%"}}};let S=null;switch(a.type){case"richText":{const t=(0,I._M)(a.richText),e=(0,s.Lq)(t);S=(0,y.tZ)("span",{className:b({maxWidth:"100%",textOverflow:"ellipsis",overflow:"hidden",...e?{color:A.colors[e]}:null}),children:(0,y.tZ)(r.ZP,{text:a.richText,whiteSpace:"nowrap"})});break}case"standard":{const t=a.standard.iconContent?.icon?{richIllustration:{illustration:{type:"icon",icon:{icon:a.standard.iconContent.icon,dimensions:{width:{type:"pointValue",pointValue:12},height:{type:"pointValue",pointValue:12}}}},accessibilityText:a.standard.iconContent?.accessibilityText||""}}:{richIllustration:null};S=(0,y.BX)(y.HY,{children:["LEADING"===a.standard.iconContent?.iconLayout?(0,y.BX)(y.HY,{children:[(0,y.tZ)(l.SZ,{...t}),(0,y.tZ)(m.Q3,{})]}):null,a.standard.title,"TRAILING"===a.standard.iconContent?.iconLayout?(0,y.BX)(y.HY,{children:[(0,y.tZ)(m.Q3,{}),(0,y.tZ)(l.SZ,{...t})]}):null]});break}default:return null}return(0,y.tZ)(i.Ct,{color:D,shape:T,hierarchy:C,content:S,overrides:k,...f?{"aria-label":f}:{}})}},12517:(t,e,a)=>{"use strict";a.d(e,{Ct:()=>o});var i=a(90985),r=a(33990);function o(t){return(0,r.tZ)(i.Z,{...t})}},3062:(t,e,a)=>{"use strict";a.d(e,{j:()=>o});var i=a(36151),r=a(74954);const o=t=>{const e=(0,r.iQ)(),[a]=(0,i.useState)((()=>"storeId"===t.getCartFrom?e.getQueueFromCache({type:"storeId",storeId:t.storeId}):e.getQueueFromCache({type:"cartId",cartId:t.draftOrderId}))),o=(0,i.useCallback)((t=>a.subscribe(t)),[a]),n=(0,i.useSyncExternalStore)(o,(()=>a.getSnapshot()),(()=>a.getSnapshot()));return(0,i.useMemo)((()=>{if("FETCHING"===e.state)return{status:"LOADING"};const t=n.rawCartData?.preCheckoutBundling?.otherOrdersInBundle?.map((t=>{const a=e.getQueueFromCache({type:"storeId",storeId:t.storeId});return{role:t.role,rawCartData:a.getSnapshot().rawCartData}})).filter((t=>t.rawCartData))??[],i=t.length>0?{type:"BUNDLED",otherOrders:t}:{type:"DEFAULT"};switch(n.status){case"OUTDATED":case"UPDATING":return{status:"OUTDATED",appearance:i,rawCartData:n.rawCartData};case"INACTIVE":return{status:"LOADING"};case"DELETING_CART":return{status:"DELETING",rawCartData:n.rawCartData,actions:{editQuantityInCart:async t=>a.pushInteraction({type:"CREATE_CART",payload:t})}};case"MISSING_CART":return{status:"MISSING",actions:{editQuantityInCart:async t=>a.pushInteraction({type:"CREATE_CART",payload:t})}};case"CREATING_CART":return{status:"CREATING",rawCartData:n.rawCartData,actions:{editQuantityInCart:async t=>a.pushInteraction({type:"EDIT_ITEM_QUANTITY",payload:t})}};case"IN_SYNC":case"OUT_OF_SYNC":case"SYNCING":return{status:"SYNCING"===n.status?"SYNCING":"AVAILABLE",rawCartData:n.rawCartData,actions:{editQuantityInCart:async t=>a.pushInteraction({type:"EDIT_ITEM_QUANTITY",payload:t}),deleteCart:async()=>a.pushInteraction({type:"DELETE_CART",payload:{}})},appearance:i}}}),[a,e,n])}},62938:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(69694),r=a(84272),o=a(47885);const n=()=>{const{isStorePrecheckoutBundlingEnabled:t}=(0,o.Z)(),{primaryBundledStoreUuid:e}=(0,r.Z)(),{draftOrder:a,cart:n}=(0,i.Z)(e);return{shouldShowBundleItemAddedFirstDialog:t&&e&&!(a&&n?.data?.items?.length)}}},29495:(t,e,a)=>{"use strict";a.d(e,{Z:()=>Tt});var i=a(36151),r=a(43193),o=a(91931),n=a(6703),s=a(58984),u=a(15070),d=(a(37566),a(47986)),c=a(88671),l=a(64388),m=a(91631),p=a(33535),I=a(67476),y=(a(87444),a(66958)),h=a(79517),g=a(57597),f=(a(95768),a(69630)),b=a(62149),A=a(33990);(0,o.zo)("div",(t=>{let{$theme:e}=t;return{borderRadius:e.borders.pillButtonBorderRadius,border:`1px solid ${e.colors.buttonPrimaryText}`,boxShadow:e.shadows.floatingButton}}));var T=a(88885),C=a(78422),U=a(68093),D=a(34567),k=a(52909);const S=(0,o.zo)("div",(t=>{let{$theme:e,$closeAnimation:a,$isDark:i}=t;return{cursor:"auto",display:"flex",alignItems:"center",background:i?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary,border:`2px solid ${i?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary}`,boxShadow:"0px 2px 12px rgba(0, 0, 0, 0.12)",borderRadius:e.borders.pillButtonBorderRadius,position:"relative",top:"2px",animationDuration:"200ms",animationFillMode:"forwards",...a?{animationName:{from:{maxWidth:"200px"},to:{maxWidth:"40px"}}}:{animationName:{from:{maxWidth:"40px"},to:{maxWidth:"200px"}}},overflow:"hidden"}})),v=(0,o.zo)("div",(t=>{let{$theme:e,$size:a,$isDark:i}=t;return{..."small"===a?e.typography.LabelSmall:e.typography.LabelLarge,width:"max-content",paddingLeft:"small"===a?"2px":"16px",paddingRight:"small"===a?"2px":"16px",whiteSpace:"nowrap",textAlign:"center",color:i?e.colors.contentInversePrimary:e.colors.contentPrimary}})),N=(0,o.zo)("button",(t=>{let{$theme:e,$size:a,disabled:i,$isDark:r}=t;return{borderRadius:e.borders.pillButtonBorderRadius,color:r?e.colors.contentInversePrimary:e.colors.contentPrimary,background:r?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary,alignItems:"center",boxSizing:"border-box",cursor:"pointer",display:"flex",justifyContent:"center",width:"small"===a?"34px":"36px",height:"small"===a?"34px":"36px",minHeight:""+("small"===a?"34px":"36px"),padding:0,margin:0,"@media (hover: hover)":{":hover":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}},":active":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary},...i&&{color:e.colors.contentStateDisabled,cursor:"not-allowed",":disabled":{fill:e.colors.disabled,background:"transparent"},"@media (hover: hover)":{":hover":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}},":active":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}}}})),O=t=>{const e=(0,g.Z)({item:t.item,storeUuid:t.storeUuid,cartQuantity:t.quantity}),{themeId:a}=(0,k.aG)(),i=(0,y.jx)(t.item),r=(0,y.L5)(t.item),o=r.increment??1,n=null!=r.minimumQuantity?r.minimumQuantity:1;return(0,A.BX)(S,{$closeAnimation:t.closeAnimation,$isDark:"dark"===a,children:[(0,A.tZ)(N,{"data-test":"quick-add-minus",disabled:Boolean(t.isDisabled),onClick:()=>{t.updateQuantity(h.Tf.from(o).multiply(-1).toBaseDecimal())},$size:t.size,$isDark:"dark"===a,children:t.quantity<=n?(0,A.tZ)(C.Z,{name:"TrashCanFilled",size:"small"===t.size?16:20}):(0,A.tZ)(C.Z,{name:"MinusSmallFilled",size:"small"===t.size?16:20})}),i?(0,A.BX)(v,{$size:t.size,"data-test":"quick-add-quantity",$isDark:"dark"===a,children:[t.quantity," ",(0,y.YP)(t.item)]}):(0,A.tZ)(v,{$size:t.size,"data-test":"quick-add-quantity",$isDark:"dark"===a,children:t.quantity}),(0,A.tZ)(N,{$size:t.size,"data-test":"quick-add-plus",disabled:Boolean(t.isDisabled)||e()!==g.y.BELOW_LIMIT,onClick:()=>{t.updateQuantity(h.Tf.from(o).toBaseDecimal())},$isDark:"dark"===a,children:(0,A.tZ)(C.Z,{name:"PlusSmallFilled",size:"small"===t.size?16:20})})]})};var L=a(16797),E=a(13427);const R=t=>{let{storeUUID:e,sectionUUID:a,subsectionUUID:r,item:o,quantity:u,decimalQuantity:c,updateQuantity:l,cartItemCount:I,closeAnimation:T,closeStepper:C,isDifferentStoreFromCart:U,isPerformingCartUpdate:D,addToCart:k,increment:S,decrement:v,quickAddCount:N,updateDecimalQuantity:R,debouncedQuickAddCount:x,quickAddSource:B,isLowAvailabilityItem:_,sourceType:Q,analytics:Z,searchTerm:P,size:q}=t;const z=(0,m.k6)(),$=(0,m.UO)(),w=(0,b.TH)(),G=(0,s.I0)(),M=(0,f.Z)(),F=(0,p.ZP)(),W=(0,d.li$)(w,{...(0,d.x9r)($),sectionUuid:a,itemUuid:o.uuid||""}),V=(0,E.Z)(),H=o?.catalogItemAnalyticsData?.catalogSectionItemPosition??-1,Y=(0,i.useRef)((t=>{G((0,n.px)({storeUUID:e,item:o,quantity:t,sectionUUID:a,subsectionUUID:r})),z.push(W)})),K=(0,i.useRef)({addToCart:k,increment:S,decrement:v,updateDecimalQuantity:R,isPerformingCartUpdate:D,debouncedQuantity:x.integer});K.current={addToCart:k,increment:S,decrement:v,updateDecimalQuantity:R,isPerformingCartUpdate:D,debouncedQuantity:x.integer};const j=(0,g.Z)({item:o,storeUuid:e,cartQuantity:u}),X=(0,i.useCallback)(((t,e)=>{"number"==typeof t?t>e?K.current.increment(t-e):t<e&&K.current.decrement(e-t):K.current.updateDecimalQuantity(t)}),[K]),J=(0,i.useRef)({quantity:u,decimalQuantity:c,cartItemCount:I});J.current={quantity:u,decimalQuantity:c,cartItemCount:I},(0,i.useEffect)((()=>{const t=Y;return()=>{V&&!T&&J.current.quantity>0&&0===J.current.cartItemCount&&0===K.current.debouncedQuantity||J.current.quantity!==J.current.cartItemCount&&K.current.debouncedQuantity!==J.current.quantity&&(M&&U?(K.current.addToCart({isStartingNewOrder:!1,eventSource:"quick_add",surfaceType:Q,actionMeta:{isQuickAdd:!0,quickAddSource:B},itemPosition:H}),G((0,n.OA)())):U?U&&t.current(J.current.quantity):X(J.current.decimalQuantity,J.current.cartItemCount))}}),[X,U,M,Y,G,B,V,T,Q,H]),(0,i.useEffect)((()=>{if(I!==x.integer&&(!K.current.isPerformingCartUpdate||0!==I))return 0!==I?X(x.decimal,I):void(T||(K.current.addToCart({isStartingNewOrder:!1,eventSource:"quick_add",surfaceType:Q,actionMeta:{isQuickAdd:!0,quickAddSource:B},itemPosition:H}),G((0,n.OA)())))}),[U,I,X,o,M,T,x,G,B,Q,H]);const tt=(0,y.L5)(o),et=(0,i.useCallback)((t=>{const i=h.Tf.from(t).toFloat();let n="number"==typeof t?N.integer+t:h.Tf.from(N.decimal).add(t).toBaseDecimal();if("number"!=typeof n&&tt.minPermitted&&h.Tf.from(n).isLt(tt.minPermitted)&&(n=h.Tf.from(0).toBaseDecimal()),i>0&&j({increment:i,showSnackbarWarning:!0})===g.y.ABOVE_LIMIT)return;l(o.uuid||"",n);const s=i>0?"increment":"decrement";if(F("eats:quick_add_button_tap",{quickAddOperation:{storeUuid:e,itemUuid:o.uuid||"",previousQuantity:u,updatedQuantity:u+i,operationType:s,searchTerm:P||"",lowAvailabilityItemUuid:_&&o?.uuid||"",catalogSectionUuid:a,sectionUuid:a,subsectionUuid:r,...Q?{sourceType:Q}:{},...Z?.catalogSection?{catalogSectionAnalyticsData:Z.catalogSection}:{}},analyticsLabel:"analyticsLabel"in o&&o.analyticsLabel?o.analyticsLabel:void 0}),i>0&&"itemAd"in o){const t=o;F("ads:storefront_store_click",{adsAnalyticsEvent:{adEventType:L.J.CLICK,adImpressionUUID:t.itemAd?.impressionId||"",adData:t.itemAd?.adData||"",bidderUUID:e}})}("number"==typeof n?n<=0:n?.base<=0)&&C()}),[N.integer,N.decimal,tt.minPermitted,j,l,o,F,e,u,P,_,a,r,Q,Z?.catalogSection,C]);return(0,A.tZ)(O,{item:o,storeUuid:e,quantity:u,closeAnimation:T,updateQuantity:et,size:q})};var x=a(53213),B=a(10400),_=a(70247),Q=a(53176),Z=a(33967),P=a(32830),q=a(49723);var z=a(62938),$=a(11189),w=a(54669);const G=(0,o.zo)("div",(t=>{let{$theme:e,$isOpen:a}=t;return{border:a?"none":`1px solid ${e.colors.quickAddButtonBorderColor}`,boxShadow:"0px 2px 12px rgba(0, 0, 0, 0.12)",borderRadius:e.borders.pillButtonBorderRadius}})),M=(0,o.zo)("div",(t=>{let{$theme:e,$size:a}=t;return{..."small"===a?e.typography.LabelSmall:e.typography.LabelLarge,color:e.colors.quickAddButtonColor}})),F=(0,o.w1)(D.Z,(t=>{let{$theme:e,$size:a}=t;return{height:"small"===a?"32px":"36px",minWidth:"small"===a?"32px":"36px",minHeight:0,padding:"2px 4px",background:e.colors.quickAddButtonBackground,color:e.colors.quickAddButtonColor,":hover":{background:e.colors.quickAddButtonBackgroundHover},":active":{background:e.colors.quickAddButtonBackgroundActive}}})),W=t=>{let{item:e,subsectionUUID:a,storeUUID:o,sectionUUID:g,cartItemCount:D,cartItemDecimalCount:k,syncItemQuantity:S,quickAddCount:v,disabled:N,quickAddSource:O,isInteractionEnabled:L=!0,itemAvailabilityState:W,sourceType:V,storeSlug:H="",analytics:Y,onClickEvent:K,searchTerm:j,size:X,resultIndex:J}=t;const tt=(0,s.I0)(),et=v.integer,[at,it]=(0,i.useState)(!1),rt=(0,T.T)(),[ot,nt]=r.useState(!1),st=r.useRef(null),{store:ut}=(0,l.ZP)(o,{cacheOnly:!0}),dt=(0,b.TH)(),ct=(0,b.UO)(),lt=(0,c.k)(),mt=(0,m.k6)(),pt=(0,p.ZP)(),{canEditGroupOrderCart:It}=(0,I.Z)(o),yt=(0,y.ne)(e),{itemQueue:ht}=(0,u.v)((t=>t.quickAdd)),{draftOrder:gt}=(0,_.Dz)(),ft=gt?.storeUuid,bt=(0,f.Z)(),{storeSlug:At}=(0,d.WxO)(ct),{shouldShowBundleItemAddedFirstDialog:Tt}=(0,z.Z)(),Ct=(0,E.Z)(),Ut=(0,w.Z)(),Dt=(0,d.yz4)({location:dt,args:{sectionUuid:g,subsectionUuid:a,itemUuid:e.uuid||"",storeUuid:o||"",storeSlug:H||At||""}}),kt=(0,i.useCallback)((()=>{it(!0),setTimeout((()=>{nt(!1),it(!1)}),200)}),[]);(0,x.Z)(st,(()=>{ot&&kt()}),!0);const St=(0,i.useCallback)(((t,e,a)=>{const i=e?.meta?.type||e?.meta?.body?.code;if(e&&pt("eats:store_quick_add_error",{storeUuid:o,error:e}),"DRAFT_ORDER_VALIDATION_ERROR"===i||"CREATE_DRAFT_ORDER_VALIDATION_ERROR"===i||"ORDER_ALERT_ERROR"===i)return lt(!1,e,!1,ut)}),[lt,pt,ut,o]),{increment:vt,decrement:Nt,updateDecimalQuantity:Ot,addToCart:Lt,isDifferentStoreFromCart:Et,serverCart:Rt}=(t=>{let{storeUuid:e,item:a,quantity:r,sectionUuid:o,subsectionUuid:u,onAddedToCart:d,decimalQuantity:c,quickAddSource:m,analytics:p,resultIndex:I,sourceType:y}=t;const{store:h}=(0,l.ZP)(e,{cacheOnly:!0}),g=(0,Z.Z)(!0),{serverCart:f}=(0,_.iQ)(),b=(0,s.I0)(),A=f.data?.groupedItems,{outOfItemAction:T}=(0,q.Z)(),C=(0,i.useMemo)((()=>(((A||[]).find((t=>t.isCurrentUser))||{}).items||[]).filter((t=>t.uuid===a.uuid))),[A,a.uuid]),U=(0,i.useMemo)((()=>(0,P.Z)(C.map((t=>{let{quantity:e}=t;return e})))),[C]),D=a.isLegacy?a.description:a.itemDescription,k={error:null,hasLoaded:!0,isLoading:!1,data:{price:Number(a.price),title:String(a.title),uuid:a.uuid||"",hasCustomizations:!1,customizationsList:[],imageUrl:String(a.imageUrl),imageWatermarkContent:null,images:null,nutritionalInfo:null,suspendReason:null,suspendUntil:0,itemPromotion:null,itemPromotionV2:{promoText:null,availablePromotion:null,appliedPromotion:null,promotionData:null},rules:null,sectionUuid:o,subsectionUuid:u,itemDescription:D??"",purchaseInfo:a.purchaseInfo}},S="itemAd"in a?a.itemAd:null,{addToCart:v}=(0,Q.Z)({store:h,menuItem:k,selectedCustomizations:{},quantity:r,specialInstructions:"",outOfItemAction:T,onAddedToCart:d,decimalQuantity:c,itemAd:S,analytics:{catalogSection:p?.catalogSection},resultIndex:I,sourceType:y}),N=Boolean(f?.hasLoaded&&h.hasLoaded&&f.data?.items?.length&&f?.data?.storeUuid!==h?.data?.uuid),O=(t,e)=>{e?g(e,t,{isQuickAdd:!0},y):v({isStartingNewOrder:N,eventSource:"quick_add",actionMeta:{isQuickAdd:!0,quickAddSource:m}}),b((0,n.OA)())},L=(0,i.useMemo)((()=>C.sort(((t,e)=>new Date(e.createdTimestamp??0)-new Date(t.createdTimestamp??0)))),[C]);return{addToCart:v,increment:t=>{const e=L[0];O(t+(e?.quantity||0),e?.shoppingCartItemUuid)},decrement:t=>{let e=t;for(let t=0;t<L.length;t++){const a=L[t];if(a){if(0===e)return;if(a.quantity>=e){O(a.quantity-e,a.shoppingCartItemUuid);break}e-=a.quantity,O(0,a.shoppingCartItemUuid)}}},updateDecimalQuantity:t=>{const e=L[0];t.base<=0?O(0,e?.shoppingCartItemUuid):O(t,e?.shoppingCartItemUuid)},cartItemMatch:C,cartItemQuantity:U,serverCart:f,isDifferentStoreFromCart:N}})({storeUuid:o,item:e,quantity:et,sectionUuid:g,subsectionUuid:a,onAddedToCart:St,decimalQuantity:v.decimal,quickAddSource:O,analytics:Y,resultIndex:J,sourceType:V});(0,i.useEffect)((()=>{const t=h.Tf.maybeFrom(k)?.toFloat();(Ct?yt?S&&t!==et:S&&D!==et:S&&D!==et&&(!yt||k))&&tt((0,n.$R)(o,e.uuid||"",k||D))}),[e,yt,k,S,D,e.uuid,tt,et,o,Ct]);const xt=(0,d.li$)(dt,{sectionUuid:g,subsectionUuid:a,itemUuid:e.uuid||"",storeUuid:o||"",storeSlug:H||At||""}),Bt=(0,U.Z)(v,1e3),_t=W===B.F8?.LIKELY_UNAVAILABLE;if(!It)return null;return(0,A.tZ)(G,{onClick:t=>{if((!Ut||e.hasCustomizations)&&0===et)return;if(!L)return;if(t.preventDefault(),t.stopPropagation(),N)return;const i=(0,y.L5)(e),r=i.defaultDecimal||h.Tf.from(1).updateExponent(i.increment?.exponent||0).toBaseDecimal();return Tt?mt.push((0,$.p9)(dt)):Et&&!bt?(tt((0,n.px)({storeUUID:o,item:e,quantity:r,sectionUUID:g,subsectionUUID:a})),mt.push(xt)):ft!==o&&Boolean(ht.length)&&ht[0]!==e.uuid?mt.push(Dt):ft===o||ht.length||!Rt.isLoading||ot?(nt(!0),void(0===et&&(tt((0,n.$R)(o,e.uuid||"",r)),tt((0,n.O7)(e.uuid))))):mt.push(Dt)},ref:st,$isOpen:ot,children:ot?(0,A.tZ)(R,{storeUUID:o,sectionUUID:g,subsectionUUID:a,item:e,quantity:et,updateQuantity:(t,e)=>{tt((0,n.$R)(o,t,e))},cartItemCount:D,closeAnimation:at,closeStepper:kt,isDifferentStoreFromCart:Et,isPerformingCartUpdate:Rt.isLoading,addToCart:Lt,increment:vt,decrement:Nt,quickAddCount:v,decimalQuantity:v.decimal,updateDecimalQuantity:Ot,debouncedQuickAddCount:Bt,quickAddSource:O,isLowAvailabilityItem:_t,sourceType:V,analytics:Y,searchTerm:j,size:X}):(0,A.tZ)(F,{"data-testid":"quick-add-button",disabled:N,"aria-label":rt("quick_add"),radius:"pillButtonBorderRadius",onClick:()=>{K&&K()},$size:X,children:et>0?yt?(0,A.BX)(M,{$size:X,children:[et," ",(0,y.YP)(e)]}):(0,A.tZ)(M,{$size:X,children:et}):(0,A.tZ)(C.Z,{name:"PlusSmallFilled",size:"small"===X?16:20})})})},V=r.memo(W);var H=a(39463),Y=a(3062);const K=(0,o.zo)("div",(t=>{let{$theme:e,$closeAnimation:a,$isDark:i}=t;return{cursor:"auto",display:"flex",alignItems:"center",background:i?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary,border:`2px solid ${i?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary}`,boxShadow:"0px 2px 12px rgba(0, 0, 0, 0.12)",borderRadius:e.borders.pillButtonBorderRadius,position:"relative",top:"2px",animationDuration:"200ms",animationFillMode:"forwards",...a?{animationName:{from:{maxWidth:"200px"},to:{maxWidth:"40px"}}}:{animationName:{from:{maxWidth:"40px"},to:{maxWidth:"200px"}}},overflow:"hidden"}})),j=(0,o.zo)("div",(t=>{let{$theme:e,$size:a,$isDark:i}=t;return{..."small"===a?e.typography.LabelSmall:e.typography.LabelLarge,width:"max-content",paddingLeft:"small"===a?"2px":"16px",paddingRight:"small"===a?"2px":"16px",whiteSpace:"nowrap",textAlign:"center",color:i?e.colors.contentInversePrimary:e.colors.contentPrimary}})),X=(0,o.zo)("button",(t=>{let{$theme:e,$size:a,disabled:i,$isDark:r}=t;return{borderRadius:e.borders.pillButtonBorderRadius,color:r?e.colors.contentInversePrimary:e.colors.contentPrimary,background:r?e.colors.backgroundInversePrimary:e.colors.backgroundPrimary,alignItems:"center",boxSizing:"border-box",cursor:"pointer",display:"flex",justifyContent:"center",width:"small"===a?"34px":"36px",height:"small"===a?"34px":"36px",minHeight:""+("small"===a?"34px":"36px"),padding:0,margin:0,"@media (hover: hover)":{":hover":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}},":active":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary},...i&&{color:e.colors.contentStateDisabled,cursor:"not-allowed",":disabled":{fill:e.colors.disabled,background:"transparent"},"@media (hover: hover)":{":hover":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}},":active":{background:r?e.colors.backgroundInverseSecondary:e.colors.backgroundSecondary}}}})),J=t=>{const{onQuantityUpdated:e}=t,a=t.quantity.minQuantity,r=t.quantity.step,o=t.quantity.maxQuantity,n="dark"===t.themeId,s=t.quantity.currentQuantity,u=h.Tf.from(s).toE5(),d=(0,i.useCallback)((t=>{t.stopPropagation(),t.preventDefault();const a=u.add(r).toFloat(),i=h.Tf.from(a).toBaseDecimal();e(i)}),[u,r,e]),c=(0,i.useCallback)((t=>{t.stopPropagation(),t.preventDefault();const i=u.subtract(r);if(i.isLt(a))e({base:0,exponent:0});else{const t=i.toFloat(),a=h.Tf.from(t).toBaseDecimal();e(a)}}),[u,r,a,e]);return(0,A.BX)(K,{$closeAnimation:t.closeAnimation,$isDark:n,children:[(0,A.tZ)(X,{"data-test":"quick-add-minus",disabled:Boolean(t.isDisabled)||u.isLt(a),onClick:c,$size:t.size,$isDark:n,children:u.isLte(a)?(0,A.tZ)(C.Z,{name:"TrashCanFilled",size:"small"===t.size?16:20}):(0,A.tZ)(C.Z,{name:"MinusSmallFilled",size:"small"===t.size?16:20})}),(0,A.BX)(j,{$size:t.size,"data-test":"quick-add-quantity",$isDark:n,children:[u.toFloat()," ",t.quantity.suffix??""]}),(0,A.tZ)(X,{$size:t.size,"data-test":"quick-add-plus",disabled:Boolean(t.isDisabled)||u.isGte(o),onClick:d,$isDark:n,children:(0,A.tZ)(C.Z,{name:"PlusSmallFilled",size:"small"===t.size?16:20})})]})},tt=(0,i.memo)(J);var et=a(38777),at=a(74057),it=a(60743),rt=a(92005),ot=a(87954),nt=a(17615),st=a(24934),ut=a(85427),dt=a(55089),ct=a(50818),lt=a(97375),mt=a(92431),pt=a(87696),It=a(40964);const yt=(0,o.zo)("div",(t=>{let{$theme:e,$isOpen:a}=t;return{border:a?"none":`1px solid ${e.colors.quickAddButtonBorderColor}`,boxShadow:"0px 2px 12px rgba(0, 0, 0, 0.12)",borderRadius:e.borders.pillButtonBorderRadius}})),ht=(0,o.zo)("div",(t=>{let{$theme:e,$size:a}=t;return{..."small"===a?e.typography.LabelSmall:e.typography.LabelLarge,color:e.colors.quickAddButtonColor}})),gt=(0,o.w1)(D.Z,(t=>{let{$theme:e,$size:a}=t;return{height:"small"===a?"32px":"36px",minWidth:"small"===a?"32px":"36px",minHeight:0,padding:"2px 4px",background:e.colors.quickAddButtonBackground,color:e.colors.quickAddButtonColor,":hover":{background:e.colors.quickAddButtonBackgroundHover},":active":{background:e.colors.quickAddButtonBackgroundActive}}}));function ft(t){let{storeId:e,isDisabled:a,size:o,storeItem:n,sectionUUID:s,subsectionUUID:u,onQuickAddClicked:c,sourceType:I,resultIndex:g,searchTerm:f,analytics:U,itemQuantityInCart:D,onProductQuantityUpdated:S}=t;const v=(0,p.ZP)(),[N,O]=(0,i.useState)(!1),E=(0,T.T)(),[R,_]=r.useState(!1),Q=r.useRef(null),{themeId:Z}=(0,k.aG)(),P=(0,b.TH)(),z=(0,b.UO)(),{storeSlug:$}=(0,d.WxO)(z),w=(0,m.k6)(),G=(0,i.useCallback)((()=>{O(!0),setTimeout((()=>{_(!1),O(!1)}),200)}),[]);(0,x.Z)(Q,(()=>{R&&G()}),!0);const M=n.uuid??"",F=n.purchaseInfo?.purchaseOptions?.[0],W=(0,i.useMemo)((()=>{switch(D?.type){case"WEIGHT":case"UNIT":return D;case"UNKNOWN":default:{const t="MEASUREMENT_TYPE_WEIGHT"===F?.soldByUnit?.measurementType?"WEIGHT":"UNIT",e="UNIT"===t?h.Tf.from(y.wI.minimumQuantity).toBaseDecimal():h.Tf.from(F?.quantityConstraintsV2?.minPermitted??y.wI.minimumQuantity).toBaseDecimal(),a=h.Tf.from(F?.quantityConstraintsV2?.maxPermitted??y.wI.maximumQuantity).toBaseDecimal(),i=F?.itemQuantityAbbreviation??"",r=h.Tf.from(F?.quantityConstraintsV2?.increment??y.wI.incrementQuantity).toBaseDecimal(),o=D?.totalQuantityWithCustomizations;return{type:t,suffix:i,step:r,currentQuantity:D?.currentQuantity??h.Tf.from(0).toBaseDecimal(),totalQuantityWithCustomizations:o,maxQuantity:a,minQuantity:e}}}}),[D,F]),{...V}=(0,et.W)(),{deliveryTime:H,hasActiveDraftOrderMetadata:Y}=(0,at.Z)(e),{isInMulticart:K}=(0,it.Z)(),j=(0,rt.Z)(),{handledHighCapacityOrderIntent:X}=(0,ot.Z)(),{store:J}=(0,l.ZP)(e,{cacheOnly:!0}),dt=(0,i.useMemo)((()=>(0,ct.TG)(J.data||void 0)),[J.data]),ft=X?.hhcOrderSize||(0,nt.vD)(J.data?.groupOrderSizes||void 0)?.hhcOrderSize,{deliveryInstructions:bt}=(0,st.pK)(),At=bt.data?.selectedInstruction?.interactionType||bt.data?.preferredInteractionType||ut.$$.interactionType,{outOfItemAction:Tt}=(0,q.Z)(),Ct=K&&!Y,Ut=n.hasCustomizations,Dt=(0,d.yz4)({location:P,args:{sectionUuid:s,subsectionUuid:u,itemUuid:M,storeUuid:e||"",storeSlug:J.data?.slug||$||""}}),kt=(0,mt.Z)(),St=(0,pt.PJ)(kt),{storeCatalogSections:vt,entryPoint:Nt,originalCatalogSectionUuid:Ot,primaryDraftOrderUUID:Lt}=(0,d.RAN)(P,["storeCatalogSections","entryPoint","originalCatalogSectionUuid","primaryDraftOrderUUID"]),Et=()=>{if(J.data?.fulfillmentIssueOptions&&Tt)return{type:Tt,itemSubstitutes:[]};if(J.data?.fulfillmentIssueOptions){const t=J.data.fulfillmentIssueOptions?.resolutionActions,e=t?.find((t=>t.isDefault));if(e&&null!==e.action)return e?.action}},Rt=(0,i.useCallback)((t=>{const a=h.Tf.from(W.currentQuantity),i=h.Tf.from(t).subtract(a).isGt(0)?"increment":"decrement",r="itemAvailabilityState"in n&&n.itemAvailabilityState===B.F8.LIKELY_UNAVAILABLE;v("eats:quick_add_button_tap",{quickAddOperation:{storeUuid:e,itemUuid:M,previousQuantity:a.toFloat(),updatedQuantity:h.Tf.from(t).toFloat(),operationType:i,searchTerm:f||"",lowAvailabilityItemUuid:r?M:"",catalogSectionUuid:s,sectionUuid:s,subsectionUuid:u,...I?{sourceType:I}:{},...U?.catalogSection?{catalogSectionAnalyticsData:U.catalogSection}:{}},analyticsLabel:"analyticsLabel"in n&&n.analyticsLabel?n.analyticsLabel:void 0}),"increment"===i&&"itemAd"in n&&v("ads:storefront_store_click",{adsAnalyticsEvent:{adEventType:L.J.CLICK,adImpressionUUID:n.itemAd?.impressionId||"",adData:n.itemAd?.adData||"",bidderUUID:e}})}),[U,v,W.currentQuantity,f,s,I,e,n,M,u]),xt=(0,i.useCallback)((async t=>{0===t.base&&G();const e={price:Number(n.price),customizationsList:[],images:null,nutritionalInfo:null,itemPromotionV2:{promoText:null,availablePromotion:null,appliedPromotion:null,promotionData:null},itemDescription:n.itemDescription??""},a=vt?"l2":"l1",i="catalogItemAnalyticsData"in n&&n.catalogItemAnalyticsData?.catalogSectionItemPosition?n.catalogItemAnalyticsData?.catalogSectionItemPosition:-1,r={storeAnalytics:dt,isDelegatedBooking:V.isDelegatedBooking,deliveryTime:"object"==typeof H&&"scheduled"in H?lt.s.scheduled:lt.s.asap,menuItem:e,diningMode:St,catalogItemLevel:a,surfaceType:I,itemPosition:i,resultIndex:g,storeAvailabilityState:J.data?.storeInfoMetadata?.storeAvailablityStatus?.state??"UNKNOWN",entryPoint:Nt,storeVerticalType:J.data?(0,It.E)(J.data):void 0,storeCatalogSectionAnalytics:U?.catalogSection,originalCatalogSectionUuid:Ot};Rt(t),S({newQuantity:{...W,currentQuantity:t},analyticsRelevantData:r,delegatedBooking:V,deliveryTime:H,isInMulticart:K,storeCurrencyCode:J.data?.currencyCode??"USD",selectedVoucher:j,hhcOrderSize:ft,interactionType:At,fulfillmentIssueAction:Et(),shouldUpdateDraftOrderMetadata:Ct})}),[Rt]),Bt=(0,i.useCallback)((t=>{c&&c(),t.stopPropagation(),t.preventDefault(),Ut||Boolean(Lt)?w.push(Dt):(_(!0),D||xt(W.minQuantity))}),[D,xt,W,_,w,Dt,Ut,c,Lt]),_t=h.Tf.from(Ut?W.totalQuantityWithCustomizations??W.currentQuantity:W.currentQuantity);return(0,A.tZ)(yt,{onClick:Bt,ref:Q,$isOpen:R,children:R?(0,A.tZ)(tt,{onQuantityUpdated:xt,size:o,quantity:W,closeAnimation:N,themeId:Z,isDisabled:a}):(0,A.tZ)(gt,{"data-testid":"quick-add-button",disabled:a,"aria-label":E("quick_add"),radius:"pillButtonBorderRadius",$size:o,children:_t.isGt(0)?(0,A.tZ)(ht,{$size:o,children:`${_t.toFloat()}${W.suffix}`}):(0,A.tZ)(C.Z,{name:"PlusSmallFilled",size:"small"===o?16:20})})})}const bt=r.memo(ft,((t,e)=>t.itemQuantityInCart===e.itemQuantityInCart)),At=t=>{const e=(0,Y.j)({getCartFrom:"storeId",storeId:t.storeId}),a=r.useRef(e);a.current=e;const o=(0,u.v)((t=>{let{checkout:e}=t;return e})),n=(0,p.ZP)(),s="LOADING"!==e.status&&"MISSING"!==e.status&&"OUTDATED"!==e.status?e.rawCartData?.cartQuantities?.[t.storeItem.uuid??""]:void 0,d=(0,i.useCallback)((async e=>{let{newQuantity:i,analyticsRelevantData:r,delegatedBooking:s,deliveryTime:u,isInMulticart:d,storeCurrencyCode:c,selectedVoucher:l,hhcOrderSize:m,interactionType:p,fulfillmentIssueAction:I,shouldUpdateDraftOrderMetadata:y}=e;try{switch(a.current.status){case"MISSING":case"DELETING":await a.current.actions.editQuantityInCart({cartItem:{uuid:t.storeItem.uuid||"",shoppingCartItemUuid:(0,dt.Z)(),storeUuid:t.storeId,sectionUuid:t.sectionUUID,subsectionUuid:t.subsectionUUID,price:Number(t.storeItem.price),title:String(t.storeItem.title),quantity:h.Tf.from(i.currentQuantity).toFloat(),customizations:{},imageURL:String(t.storeItem.imageUrl),specialInstructions:"",fulfillmentIssueAction:I,pricedByUnit:t.storeItem.purchaseInfo?.pricingInfo?.pricedByUnit,soldByUnit:t.storeItem.purchaseInfo?.purchaseOptions?.[0]?.soldByUnit},startingQuantity:i,analyticsRelevantData:r,checkoutReducer:o,delegatedBooking:s,deliveryTime:u,hasDelegatedBookingDraftOrder:!1,isMulticart:d,selectedVoucher:l,sourceFeature:"add-to-cart",storeCurrencyCode:c,actionMeta:{isQuickAdd:!0},hhcOrderSize:m,eventSource:"quick_add",interactionType:p});break;case"CREATING":case"AVAILABLE":case"SYNCING":await a.current.actions.editQuantityInCart({item:{type:"store",storeItemId:t.storeItem.uuid??"",storeId:t.storeId,shouldUpdateDraftOrderMetadata:y,cartItem:{uuid:t.storeItem.uuid||"",shoppingCartItemUuid:(0,dt.Z)(),storeUuid:t.storeId,sectionUuid:t.sectionUUID,subsectionUuid:t.subsectionUUID,price:Number(t.storeItem.price),title:String(t.storeItem.title),quantity:h.Tf.from(i.currentQuantity).toFloat(),customizations:{},imageURL:String(t.storeItem.imageUrl),specialInstructions:"",fulfillmentIssueAction:I,pricedByUnit:t.storeItem.purchaseInfo?.pricingInfo?.pricedByUnit,soldByUnit:t.storeItem.purchaseInfo?.purchaseOptions?.[0]?.soldByUnit},newQuantity:i},actionMeta:{isQuickAdd:!0,quickAddSource:t.quickAddSource},analyticsRelevantData:r,eventSource:"quick_add"})}}catch(e){n("eats:store_quick_add_error",{storeUuid:t.storeId,error:e})}}),[]);return"LOADING"===e.status||"OUTDATED"===e.status?null:(0,A.tZ)(bt,{...t,itemQuantityInCart:s,onProductQuantityUpdated:d})},Tt=t=>{const e=(0,H.l)(),{isGroupOrder:a,isEditOrder:i}=(0,_.Dz)();return!e||a||i?(0,A.tZ)(V,{...t}):(0,A.tZ)(At,{storeId:t.storeUUID,size:t.size??"large",storeItem:t.item,sectionUUID:t.sectionUUID,subsectionUUID:t.subsectionUUID,onQuickAddClicked:t.onClickEvent,sourceType:t.sourceType,searchTerm:t.searchTerm,quickAddSource:t.quickAddSource,resultIndex:t.resultIndex,analytics:t.analytics})}},37566:(t,e,a)=>{"use strict";a.d(e,{$:()=>l});var i=a(36151),r=a(70247),o=a(53176),n=a(64388),s=a(33967),u=a(32830),d=a(6703),c=a(58984);const l=t=>{let{storeUuid:e,item:a,quantity:l,sectionUuid:m,subsectionUuid:p,onAddedToCart:I,decimalQuantity:y,quickAddSource:h}=t;const g=(0,c.I0)(),{store:f}=(0,n.ZP)(e),b=(0,s.Z)(!0),{serverCart:A}=(0,r.iQ)(),T=A.data?.groupedItems,C=(0,i.useMemo)((()=>(((T||[]).find((t=>t.isCurrentUser))||{}).items||[]).filter((t=>t.uuid===a.uuid))),[T,a.uuid]),U=(0,i.useMemo)((()=>(0,u.Z)(C.map((t=>{let{quantity:e}=t;return e})))),[C]),D=(0,i.useMemo)((()=>C.sort(((t,e)=>new Date(e.createdTimestamp??0)-new Date(t.createdTimestamp??0)))),[C]),k=a.isLegacy?a.description:a.itemDescription,S={error:null,hasLoaded:!0,isLoading:!1,data:{price:Number(a.price),title:String(a.title),uuid:a.uuid||"",hasCustomizations:!1,customizationsList:[],imageUrl:String(a.imageUrl),imageWatermarkContent:null,images:null,nutritionalInfo:null,suspendReason:null,suspendUntil:0,itemPromotion:null,itemPromotionV2:{promoText:null,availablePromotion:null,appliedPromotion:null,promotionData:null},rules:null,sectionUuid:m,subsectionUuid:p,itemDescription:k??"",purchaseInfo:a.purchaseInfo}},v="itemAd"in a?a.itemAd:null,{addToCart:N}=(0,o.Z)({store:f,menuItem:S,selectedCustomizations:{},quantity:l,specialInstructions:"",onAddedToCart:I,decimalQuantity:y,itemAd:v}),O=Boolean(A.hasLoaded&&f.hasLoaded&&A?.data?.items?.length&&A?.data?.storeUuid!==f?.data?.uuid),L=(0,i.useCallback)(((t,e)=>{const a=(t,e)=>{e?b(e,t,{isQuickAdd:!0}):N({isStartingNewOrder:O,eventSource:"quick_add",actionMeta:{isQuickAdd:!0,quickAddSource:h}})};if("number"==typeof t){if(t>U){a(t,D[0]?.shoppingCartItemUuid)}else if(t<U){let e=U-t;for(const t of D){if(t.quantity>=e){a(t.quantity-e,t.shoppingCartItemUuid);break}a(0,t.shoppingCartItemUuid),e-=t.quantity}}}else{const e=D[0];t.base<=0?a(0,e?.shoppingCartItemUuid):a(t,e?.shoppingCartItemUuid)}g((0,d.OA)())}),[N,U,g,O,h,D,b]);return{addToCart:N,onUpdateQuantity:L,isNewSingleCart:O,cartItemMatch:C,cartItemQuantity:U,serverCart:A}}},78979:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(60849),r=a(41063);function o(){return(0,i.ip)({...r.v.store_quick_add,defaultValue:!0})}},32762:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var i=a(60849),r=a(41063),o=a(99990),n=a(54669),s=a(34626);const u=()=>{const t=(0,i.ip)({...r.v.store_ofd_redesign,defaultValue:!1}),e=(0,i.ip)({...r.v.store_ofd_redesign_phase_2,defaultValue:!1}),a=(0,i.ip)({...r.v.store_ofd_redesign_phase_3,defaultValue:!1}),u=(0,i.ip)({...r.v.store_rating_redesign,defaultValue:!1}),d=(0,i.ip)({...r.v.store_ofd_redesign_search_results,defaultValue:!1}),{isGrStore:c,store:l}=(0,o.QT)(),{user:m}=(0,s.Z)(),p=m.data?.isLoggedIn,I=(0,n.Z)(),y=Boolean(!c&&e&&!I&&!p),h=Boolean(!c&&a&&!p),g=Boolean(!c&&a&&p),f=y||h,b=y||h||g,A=b,T=b,C=y||h,U=y||h,D=u&&b,k=y||h,S=g,v=Boolean(l?.data)&&d&&(y||h||g),N=y||h||g,O=g,L=y||h||g,E=g,R=g,x=!c&&"NEW_VERTICALS"===l?.data?.headerBrandingInfo?.headerType&&A,B=Boolean((l?.data?.featuredReviews?.length||0)>=2&&l?.data?.rating);return{isStoreOfdRedesignXpEnabled:t,isStoreOfdRedesignPhase2XpEnabled:e,isStoreOfdRedesignPhase3XpEnabled:a,isStoreRatingRedesignEnabled:u,isStoreOfdRedesignSearchResultsEnabled:d,desktopFeatures:{hasStickyHorizontalMenuNav:k,hasStickyVerticalMenuNav:S,hasStoreInfoSection:f,hasNewHeader:A,hasNewPageWrapper:b,hasDisclaimerAtBottom:T,hasNewBreadcrumbs:C,hasNewFaqSection:U,hasNewReviewsLayout:D,hasNewInStoreSearch:v,overwriteHorizontalGridColumns:N,moveTopExploreMoreStoresToCatalog:O,horizontalGridColumns:y||h?5:4,hasNewLoader:L,isLegacyHeaderWithBrandingInfo:x,storeInfoConfig:{infoCardOrientation:B?"portrait":"landscape",showBrandingInfoAndControls:Boolean(!B&&I&&!x),showDescription:Boolean(l?.data?.seoMeta?.content&&!l?.data?.optoutRestaurantExperiments?.optoutMenuExperiments?.optoutAllExperiments),showReviews:B},hasDeliveryRowControls:E,hasStoreBannersInCatalogColumn:R}}}},13427:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(60849),r=a(41063);const o=()=>(0,i.ip)({...r.v.store_quick_add_enhancement,defaultValue:!1})},68093:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(36151);function r(t,e){const[a,r]=(0,i.useState)(t);return(0,i.useEffect)((()=>{const a=setTimeout((()=>{r(t)}),e);return()=>{clearTimeout(a)}}),[e,t]),a}},45631:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});const i=function(t,e){const a=null==t?0:t.length;if(!a||e<1)return[];let i=0,r=0;const o=new Array(Math.ceil(a/e));for(;i<a;)o[r++]=t.slice(i,i+=e);return o}},47091:(t,e,a)=>{"use strict";a.d(e,{k:()=>i});const i="@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)"}}]);