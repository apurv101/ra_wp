"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[54510],{80542:(e,t,i)=>{i.d(t,{WR:()=>o,kf:()=>r});Object.freeze({COURIER_RATING:"COURIER_RATING",COURIER_TIP:"COURIER_TIP",STORE_RATING:"STORE_RATING",ITEMS_RATING:"ITEMS_RATING",UNKNOWN:"UNKNOWN",COURIER_RATING_TIP:"COURIER_RATING_TIP",COURIER_TIP_V2:"COURIER_TIP_V2",COURIER_TIP_V2_EMBEDDED_TIP:"COURIER_TIP_V2_EMBEDDED_TIP",STORE_CUSTOM_TAGS:"STORE_CUSTOM_TAGS",STORE_PREDEFINED_TAGS:"STORE_PREDEFINED_TAGS",STORE_SUPERFAN_EDUCATION:"STORE_SUPERFAN_EDUCATION",STORE_SUPERFAN_COLLECTION:"STORE_SUPERFAN_COLLECTION"}),Object.freeze({UNKNOWN:"UNKNOWN",EVENT:"EVENT",CONVERSATION:"CONVERSATION"}),Object.freeze({OUT_OF_ITEM:"OUT_OF_ITEM",OUT_OF_OPTION:"OUT_OF_OPTION",CANNOT_FULFILL_ITEM_INSTRUCTION:"CANNOT_FULFILL_ITEM_INSTRUCTION",CANNOT_FULFILL_RESTAURANT_INSTRUCTION:"CANNOT_FULFILL_RESTAURANT_INSTRUCTION",UNKNOWN:"UNKNOWN",PARTIAL_ITEM_AVAILABILITY:"PARTIAL_ITEM_AVAILABILITY"}),Object.freeze({UNKNOWN:"UNKNOWN",BOTTOMSHEET:"BOTTOMSHEET",TOAST:"TOAST",SLOW_TOAST:"SLOW_TOAST",GENERIC_NOTIFICATION:"GENERIC_NOTIFICATION",FULL_SCREEN:"FULL_SCREEN"}),Object.freeze({UNKNOWN:"UNKNOWN",APT_OR_SUITE:"APT_OR_SUITE",BUILDING:"BUILDING",PLACEHOLDER_2:"PLACEHOLDER_2",PLACEHOLDER_3:"PLACEHOLDER_3",PLACEHOLDER_4:"PLACEHOLDER_4"}),Object.freeze({UNKNOWN:"UNKNOWN",UGC:"UGC",UBER:"UBER",GOOGLE:"GOOGLE"}),Object.freeze({UNKNOWN:"UNKNOWN",ACCESS_POINT:"ACCESS_POINT",DEVICE_POINT:"DEVICE_POINT"}),Object.freeze({UNKNOWN:"UNKNOWN",LEAVE_AT_DOOR:"LEAVE_AT_DOOR"}),Object.freeze({UNKNOWN:"UNKNOWN",PRIMARY_RESTAURANT:"PRIMARY_RESTAURANT",ADD_ON_RESTAURANT:"ADD_ON_RESTAURANT",RESERVED_3:"RESERVED_3"}),Object.freeze({UNKNOWN:"UNKNOWN",STAR:"STAR",THUMBS_UP:"THUMBS_UP",CUSTOM:"CUSTOM",CANCELLATION:"CANCELLATION",ACCEPTANCE:"ACCEPTANCE"}),Object.freeze({UNKNOWN:"UNKNOWN",SATISFACTION_RATE:"SATISFACTION_RATE",BACKGROUND_CHECK:"BACKGROUND_CHECK"}),Object.freeze({UNKNOWN:"UNKNOWN",ANIMATION:"ANIMATION",STATIC_IMAGE:"STATIC_IMAGE",RESERVED_3:"RESERVED_3",RESERVED_4:"RESERVED_4",RESERVED_5:"RESERVED_5",RESERVED_6:"RESERVED_6"}),Object.freeze({UNKNOWN:"UNKNOWN",ORDER_DELIVERED:"ORDER_DELIVERED"}),Object.freeze({DEFAULT:"DEFAULT",VENUE:"VENUE"}),Object.freeze({POPULAR:"POPULAR",PFY:"PFY",TRENDING:"TRENDING",EATER_ENDORSED:"EATER_ENDORSED",SIMILAR_DISH:"SIMILAR_DISH",RECOMMENDED:"RECOMMENDED"}),Object.freeze({SHOPPING_BAG:"SHOPPING_BAG",BADGE:"BADGE"}),Object.freeze({UNKNOWN:"UNKNOWN",EATS_CONFIG_TYPE:"EATS_CONFIG_TYPE",GROCERY_CONFIG_TYPE:"GROCERY_CONFIG_TYPE"}),Object.freeze({UNKNOWN:"UNKNOWN",GREEN:"GREEN",LUCKY_CHARMS:"LUCKY_CHARMS",GXGY_INVITER:"GXGY_INVITER",GXGY_INVITEE:"GXGY_INVITEE",EXGY:"EXGY",RESTAURANT_REWARD_REFERRALS:"RESTAURANT_REWARD_REFERRALS",UNUSED_TYPE7:"UNUSED_TYPE7",UNUSED_TYPE8:"UNUSED_TYPE8",UNUSED_TYPE9:"UNUSED_TYPE9",UNUSED_TYPE10:"UNUSED_TYPE10",UNUSED_TYPE11:"UNUSED_TYPE11",UNUSED_TYPE12:"UNUSED_TYPE12",UNUSED_TYPE13:"UNUSED_TYPE13",UNUSED_TYPE14:"UNUSED_TYPE14",UNUSED_TYPE15:"UNUSED_TYPE15",UNUSED_TYPE16:"UNUSED_TYPE16"}),Object.freeze({UNKNOWN:"UNKNOWN",AUTO_APPLY:"AUTO_APPLY",MANUAL_APPLY:"MANUAL_APPLY",GXGY:"GXGY",GXGY_INVITEE:"GXGY_INVITEE",EXGY:"EXGY"});const r=Object.freeze({ITEM:"ITEM",CANONICALPRODUCT:"CANONICALPRODUCT",CROSS_SELL:"CROSS_SELL"}),o=(Object.freeze({DEFAULT:"DEFAULT",CLICK_THROUGH:"CLICK_THROUGH",CHECKBOX:"CHECKBOX"}),Object.freeze({UNKNOWN:"UNKNOWN",SUPERFANS:"SUPERFANS",EATER_GENERATED_TAGS:"EATER_GENERATED_TAGS"}),Object.freeze({FALSE_MISLEADING_INFORMATION:"FALSE_MISLEADING_INFORMATION",STORE_AFFILIATE:"STORE_AFFILIATE",STORE_COMPETITOR:"STORE_COMPETITOR",THREAT_HATE_SPEECH:"THREAT_HATE_SPEECH",INAPPROPRIATE_OFFENSIVE:"INAPPROPRIATE_OFFENSIVE",OTHER:"OTHER"}));Object.freeze({UNKNOWN:"UNKNOWN",SKIPPED:"SKIPPED",SUBMITTED:"SUBMITTED"})},93259:(e,t,i)=>{i.d(t,{Z:()=>T});var r=i(72843),o=i(62149),a=i(47986),n=i(69425);const E=18,d=Array(9).fill("1").join(""),u=e=>{const t=(e.match(/.{1,2}/g)??[]).map((e=>Number(e).toString(16)));t.splice(8,0,"-"),t.splice(13,0,"-"),t.splice(18,0,"-"),t.splice(23,0,"-");const i=t.join("");return(e=>(0,n.Z)(e))(i)?i:null},s=e=>{const t={storeUuid:void 0,lat:void 0,lng:void 0};if(!(e=>"string"==typeof e&&82===e.length&&/^\d+$/.test(e))(e))return t;const i=e.slice(0,E),r=e.slice(E,82),o=u(r),[a,n]=(e=>{const[t,i]=e.match(new RegExp(".{1,9}","g"))??[void 0,void 0];if(t===d||i===d)return[null,null];const[r,o]=[t,i].map((e=>{if(e)return("1"===e[0]?1:-1)*(Number(e.slice(1))/1e5)}));return(e=>e>=-90&&e<=90)(r)&&(e=>e>=-180&&e<=180)(o)?[r,o]:[void 0,void 0]})(i);return"string"==typeof o&&void 0!==a&&void 0!==n?{storeUuid:o,lat:a,lng:n}:t};var N=i(42301),c=i(87444),l=i(91496);const T=()=>{const e=(0,c.Z)("canonical_pdp_google_ads"),t=(0,o.TH)(),i=(0,l.Z)();if(!e)return{isGoogleAd:!1,lat:void 0,lng:void 0,storeUuid:void 0};const n=r.parse(t.search),E=(0,N.u)(n[a.FSm.googleAdRegionId]),d=i.get(E),{lat:u,lng:T,storeUuid:O}=s(E);return!d&&E&&void 0!==O&&void 0!==u&&void 0!==T?{isGoogleAd:!0,lat:u,lng:T,storeUuid:O}:{isGoogleAd:!1,lat:void 0,lng:void 0,storeUuid:void 0}}},13319:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(60849),o=i(57440);const a=()=>{const e={...o.X.canonical_pdp_seo_improvements,defaultValue:!1};return(0,r.ip)(e)}},54510:(e,t,i)=>{i.d(t,{Z:()=>j});var r=i(36151),o=i(91631),a=i(88885),n=i(47986),E=i(64388),d=i(81436),u=i(31755),s=i(7254),N=i(53176),c=i(70496),l=i(67476),T=i(88671),O=i(68094),I=i(60362),U=i(15649),_=i(34274),A=i(28222),R=i(49723),S=i(58984),C=i(6703),P=i(62155);const m=[i(67526).fn.STORES_WITH_PRODUCT],p=e=>{let{canonicalProduct:t,storeItem:i,isDeliveryLocationSet:r}=e;if(!(t.hasLoaded&&i.hasLoaded&&t.data&&i.data))return t;const o=(e=>{let{canonicalProduct:t,storeItem:i}=e;return[...(i.productDetailsItems||[]).filter((e=>!m.includes(e.type))),...(t?.productDetailsItems||[]).filter((e=>m.includes(e.type)))]})({canonicalProduct:t.data,storeItem:i.data}),a={...i.data,title:t.data?.title,itemDescription:t.data.itemDescription,imageUrl:t.data.imageUrl,images:t.data.images,nutritionalInfo:t.data.nutritionalInfo,brandName:t.data.brandName,productIdentifiers:t.data.productIdentifiers,productDetailsItems:o,seoMeta:t.data.seoMeta,featuredStores:t.data.featuredStores};return{...t,data:a}},D=e=>{let{canonicalProduct:t,storeUuid:i,isDeliveryLocationSet:r,isGoogleAd:o}=e;if(!t.hasLoaded||!t.data)return t;const a=(0,P.vu)(t?.data?.productDetailsItems),n=(r||o?null:((e,t)=>(e?.storesWithProduct||[]).reduce(((e,i)=>{let{minPrice:r,storeWithProduct:o}=e;const a=t[i?.itemUuid||""]?.price||null;return"number"!=typeof r||"number"!=typeof a||a<r?{minPrice:a,storeWithProduct:i}:{minPrice:r,storeWithProduct:o}}),{minPrice:null,storeWithProduct:null}).storeWithProduct?.storeUuid||null)(a,t.data?.storeItemsMap||{}))||i||a?.defaultSelectedStoreUuid;if(!n)return t;const E=a?.storesWithProduct?.find((e=>{let{storeUuid:t}=e;return t===n})),d=E?.itemUuid||"",u={...t,data:t.data?.storeItemsMap?.[d]||null};return p({canonicalProduct:t,storeItem:u,isDeliveryLocationSet:r})};var L=i(54669),G=i(83960),g=i(93259),f=i(87444),y=i(62149),M=i(22208),F=i(80542),b=i(84272),K=i(60849),v=i(57440),Y=i(74386),W=i(74622),V=i(2237),B=i(62459);var h=i(47857),H=i(98976),z=i(13319);const Z=e=>{let{itemUuid:t,storeUuid:i,isCanonicalItemFlow:r,canonicalItemDefaultStoreUuid:o,diningMode:a,primaryBundledStoreUuid:n,isQueryEnabled:E,itemRequestType:u,sectionUuid:s,subsectionUuid:N,hasGoogleAdLatLng:c,googleAdLat:l,googleAdLng:T}=e;const O=(0,z.Z)()&&r,I=(0,H.hn)((0,h.A)({itemRequestType:u,storeUuid:r?o:i,sectionUuid:r?"":s,subsectionUuid:r?"":N,menuItemUuid:t,diningMode:a,cbType:"EATER_ENDORSED",...n?{primaryBundledStoreUuid:n}:{},...c&&l&&T?{googleAdLocation:{lat:l,lng:T}}:{}},{preparedId:"mobile-menu-item",queryObserverOptions:{enabled:E&&!O}})),U=(0,H.hn)(function(e,t){const i=(0,B.Z)("getCanonicalProductItemV1"),r=(0,W.useQueryClient)(),o=(0,V.H)("getCanonicalProductItemV1",e),a=(0,W.useQuery)({queryKey:o,queryFn:e=>{let{queryKey:t}=e;return i.request("getCanonicalProductItemV1",t[1])},...t?.queryObserverOptions}),n=Boolean(t.queryObserverOptions?.enabled??!0);return(0,d.Z)((()=>!a.isFetched&&n?r.prefetchQuery({queryKey:o,queryFn:e=>{let{queryKey:t}=e;return i.request("getCanonicalProductItemV1",t[1])}}):null),[a,i,o,r,n],t.preparedId,(0,W.hashQueryKey)(o)),a}({storeUuid:r?o:i,menuItemUuid:t,diningMode:a,cbType:"EATER_ENDORSED",...n?{primaryBundledStoreUuid:n}:{},...c&&l&&T?{googleAdLocation:{lat:l,lng:T}}:{}},{preparedId:"canonical-product-item",queryObserverOptions:{enabled:E&&O}}));return O?U:I},j=function(){let{shouldNavigateBackToStoreOnItemAdd:e=!0,canonicalItemStoreUuid:t,productUuid:i,itemParams:P,editItemParams:m,preparedId:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const W=Boolean(t||i),V=(0,o.UO)(),B=(0,y.TH)(),h=(0,L.Z)(),{previousContext:H}=B.state||{},[z,j]=(0,r.useState)(!1),[q,Q]=(0,r.useState)(""),[X,k]=(0,r.useState)(null),{primaryBundledStoreUuid:x}=(0,b.Z)();let w,J,$,ee,te;if(P)w=P.storeUuid,J=P.itemUuid,$=P.sectionUuid,ee=P.subsectionUuid,te=P.primaryBundledStoreUuid;else{const e=(0,n.x9r)(V);w=e.storeUuid,J=e.itemUuid,$=e.sectionUuid,ee=e.subsectionUuid,te=x}const ie=t??w,re=i||J,oe=(0,K.ip)({...v.X.product_details_page_ssr,defaultValue:!1}),ae=!h&&oe&&p,ne=Boolean(re&&(W||ie&&$&&ee)),{shouldGetStore:Ee,getStore:de,store:ue}=(0,E.ZP)(ie,{...ae?{preparedId:p}:{}}),{partialMenuItem:se}=(0,u.Z)(ue,ie,$,ee,re),Ne=(0,T.k)(),ce=(0,S.I0)(),le=(t,i,r)=>{Ne(Boolean(t),i,r,ue,e,W),ce((0,C.AA)(re))},{isGoogleAd:Te,storeUuid:Oe,lat:Ie,lng:Ue}=(0,g.Z)(),_e=(0,f.Z)("canonical_pdp_google_ads"),Ae=_e&&Te&&null!==Ie&&null!==Ue,Re=_e&&Oe||"",Se=W?F.kf.CANONICALPRODUCT:H===M.x9.PDP_CROSS_SELL?F.kf.CROSS_SELL:F.kf.ITEM,{diningMode:Ce}=(0,G.Z)(ie),Pe=Z({itemUuid:re,storeUuid:ie,isCanonicalItemFlow:W,canonicalItemDefaultStoreUuid:Re,diningMode:Ce,primaryBundledStoreUuid:te,isQueryEnabled:ne,itemRequestType:Se,sectionUuid:$,subsectionUuid:ee,hasGoogleAdLatLng:Ae,googleAdLat:Ie,googleAdLng:Ue}),me=Boolean(h&&"geolocation_api"!==h?.originType),pe=(0,r.useMemo)((()=>W?D({canonicalProduct:Pe,storeUuid:ie,isDeliveryLocationSet:me,isGoogleAd:Te}):Pe),[Pe,ie,me,W,Te]),{outOfItemAction:De,updateOutOfItemAction:Le,backupProduct:Ge,updateBackupProduct:ge,specialInstructions:fe}=(0,R.Z)(),ye=(0,Y.Z)(),{quantity:Me,updateQuantity:Fe,decimalQuantity:be,specialInstructions:Ke,updateSpecialInstructions:ve,updateCustomizations:Ye,selectedCustomizations:We,itemsUpsell:Ve,updateUpsellItemQuantity:Be,hasErrors:he,isOnSale:He,totalPrice:ze,discountedPrice:Ze,firstIncompleteGroup:je,spendingLimitError:qe,canEditGroupOrderCart:Qe}=(0,s.ZP)({store:ue,menuItem:pe,selectedSavedCustomizationIndex:X,setSelectedSavedCustomizationIndex:k,...ye&&m?.isEditQuantityFlow&&pe.data?.hasCustomizations?null:m});(0,r.useEffect)((()=>{De&&"string"==typeof fe&&fe!==Ke&&ve(fe)}),[De,Ke,fe,ve]);const Xe=(0,r.useCallback)((e=>{ve(e)}),[ve]),{addToCart:ke,didAddItem:xe}=(0,N.Z)({store:ue,menuItem:pe,selectedCustomizations:We,quantity:Me,specialInstructions:Ke,outOfItemAction:De,onAddedToCart:le,decimalQuantity:be,backupProduct:Ge,productUuid:W?i:null}),we=(0,c.Z)(),{isDraftOrderParticipantForStore:Je}=(0,l.Z)(ue.data?.uuid||"");(0,d.Z)((()=>Ee?de():null),[Ee,de],"menu-item-store");const $e=(0,a.T)(),et=(0,U.Z)(),tt=(0,O.Z)(),it=tt,rt=it.scheduled?$e("shared.notAvailable.dateAndTimeRange",{date:(0,I.p6)(et,it.date),startTime:(0,I.CJ)(et,it.startTime),endTime:(0,I.CJ)(et,it.endTime)}):ue.data?.closedMessage,ot=(0,A.Z)(),at=(0,_.Z)({storeUuid:ue.data?.uuid}),nt=Boolean(ue.data?.uuid&&!He&&!ot&&!at);return{isDraftOrderParticipantForStore:Je,store:ue,menuItem:pe,didAddItem:xe,partialMenuItem:se,quantity:Me,decimalQuantity:be,updateQuantity:Fe,specialInstructions:Ke,updateSpecialInstructions:Xe,updateCustomizations:Ye,selectedCustomizations:We,itemsUpsell:Ve,hasErrors:he,isOnSale:He,totalPrice:ze,discountedPrice:Ze,addToCart:ke,firstIncompleteGroup:je,spendingLimitError:qe,canEditGroupOrderCart:Qe,isDeliveryLocationSet:me,setDeliveryLocation:e=>{e&&!z&&(we(e),j(!0))},incompleteSubmissionState:q||"",setIncompleteSubmissionState:e=>{Q(e)},outOfItemAction:De,updateUpsellItemQuantity:Be,updateOutOfItemAction:Le,showClosedRestaurantUX:nt,storeUnavailableMessage:rt||"",backupProduct:Ge,updateBackupProduct:ge,selectedSavedCustomizationIndex:X,setSelectedSavedCustomizationIndex:k}}},66134:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(36151),o=i(70247),a=i(64388);const n=e=>{const{serverCart:t}=(0,o.iQ)(),{store:i}=(0,a.ZP)(e??t.data?.storeUuid);return(0,r.useMemo)((()=>i.data?.catalogSectionsMap?(e=>{const t=Object.values(e.data?.catalogSectionsMap||{}).reduce(((e,t)=>[...e,...t]),[]).map((e=>e.payload?e.payload[e.payload.type]?.catalogItems:[])).filter(Boolean).reduce(((e,t)=>[...e,...t]),[]);return Object.fromEntries(t.map((e=>[e.uuid,e])))})(i):(e=>Object.values(e.data?.sectionEntitiesMap||{}).reduce(((e,t)=>({...e,...t})),{}))(i)),[i])}},31755:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(36151),o=i(66134),a=i(40964);const n=(e,t,i,n,E)=>{const d=(0,o.Z)(t);return{partialMenuItem:(0,r.useMemo)((()=>{if(E&&d){const t=d[E];return t?{title:t.title||"",description:t.itemDescription||"",imageUrl:t.imageUrl||"",endorsement:null,isGrocery:!!e.data&&(0,a.A)(e.data)}:null}if(E&&e&&i){const t=e.data?.sectionEntitiesMap[i];if(!t)return null;const r=t[E];return r?{title:r.title||"",description:r.itemDescription||"",imageUrl:r.imageUrl||"",endorsement:r.endorsement,classifications:r.classifications,isGrocery:!!e.data&&(0,a.A)(e.data)}:null}return null}),[d,E,i,e])}}},47857:(e,t,i)=>{i.d(t,{A:()=>E});var r=i(74622),o=i(2237),a=i(62459),n=i(81436);function E(e,t){const i=(0,a.Z)("getMenuItemV1"),E=(0,r.useQueryClient)(),d=(0,o.H)("getMenuItemV1",e),u=(0,r.useQuery)({queryKey:d,queryFn:e=>{let{queryKey:t}=e;return i.request("getMenuItemV1",t[1])},...t?.queryObserverOptions}),s=Boolean(t.queryObserverOptions?.enabled??!0);return(0,n.Z)((()=>!u.isFetched&&s?E.prefetchQuery({queryKey:d,queryFn:e=>{let{queryKey:t}=e;return i.request("getMenuItemV1",t[1])}}):null),[u,i,d,E,s],t.preparedId,(0,r.hashQueryKey)(d)),u}}}]);