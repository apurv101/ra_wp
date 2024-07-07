"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[53457],{69565:(e,t,a)=>{a.d(t,{n:()=>o});Object.freeze({UNKNOWN:"UNKNOWN",MENU:"MENU",COLLECTION:"COLLECTION"});const o=Object.freeze({UNKNOWN:"UNKNOWN",NV_L1_CAROUSEL:"NV_L1_CAROUSEL",NV_L2_CATALOG:"NV_L2_CATALOG",NV_L2_CAROUSEL:"NV_L2_CAROUSEL",SLIM_STORE_FRONT:"SLIM_STORE_FRONT"})},96707:(e,t,a)=>{a.d(t,{O:()=>o});const o=Object.freeze({UNKNOWN:"UNKNOWN",MENU:"MENU",COLLECTION:"COLLECTION",CURATED_COLLECTION:"CURATED_COLLECTION",TAXONOMY_COLLECTION:"TAXONOMY_COLLECTION",AUTO_GENERATED_CAROUSEL:"AUTO_GENERATED_CAROUSEL",ELEVATED_SUBSECTION:"ELEVATED_SUBSECTION",ORDER_AGAIN:"ORDER_AGAIN",DEALS:"DEALS",BUNDLE_ITEMS:"BUNDLE_ITEMS",BUNDLE_STORE:"BUNDLE_STORE",EMBEDDED_MENU:"EMBEDDED_MENU",EMBEDDED_STOREFRONT:"EMBEDDED_STOREFRONT",PDP_LEGAL_CAROUSEL:"PDP_LEGAL_CAROUSEL"})},41561:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(91931),n=a(22503),r=a(81231),l=a(47986),i=a(91631),s=a(62149),c=a(33990);const d=(0,o.zo)("div",{margin:0,width:"100%",maxWidth:"486px"}),u=e=>{let{catalogSection:t}=e;const{isCustomItemsEnabled:a}=(0,n.Z)(),o=(0,s.TH)(),u=(0,s.UO)(),g=t.payload,p=(0,i.k6)(),h=(0,l.w0g)(o,(0,l.WxO)(u));if(!a||!g)return null;if("specialRequestPayload"===g.type){const e=g.specialRequestPayload;return e.bannerViewModel?(0,c.tZ)(d,{children:(0,c.tZ)(r.Z,{viewModel:e.bannerViewModel,onClick:()=>p.push(h)})}):null}return null}},22503:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(60849),n=a(58077),r=a(55089),l=a(64388);const i=e=>{const t=(0,o.ip)({...n.g.enable_custom_items_consumer_web,defaultValue:!1}),{store:a}=(0,l.ZP)(e),i=a.data?.storeInfoMetadata?.specialRequestForm??null;return{isCustomItemsEnabled:t,isCustomItemsOverflowActionEnabled:Boolean(t&&a.data&&i),specialRequestForm:i,getTextAreaMaxLength:e=>"multiline"==e?.itemDescriptionInputViewModel?.lineConfig?.type?e.itemDescriptionInputViewModel.lineConfig.multiline.characterLimit:null,getTextAreaPlaceholder:e=>"text"===e?.itemDescriptionInputViewModel?.placeholder?.richTextElements?.[0]?.type?e.itemDescriptionInputViewModel?.placeholder?.richTextElements?.[0]?.text?.text?.text:"",getMinimumQuantityValue:e=>"number"==typeof e.quantityPickerInfo?.minimumValue?.base?e.quantityPickerInfo.minimumValue.base||1:e.quantityPickerInfo?.minimumValue?.base?.low||1,getMaximumQuantityValue:e=>"number"==typeof e.quantityPickerInfo?.maximumValue?.base?e.quantityPickerInfo.maximumValue.base||1:e.quantityPickerInfo?.maximumValue?.base?.low||1,getStepQuantityValue:e=>"number"==typeof e.quantityPickerInfo?.stepValue?.base?e.quantityPickerInfo.stepValue.base||1:e.quantityPickerInfo?.stepValue?.base?.low||1,getSelectPlaceholder:e=>"text"===e?.aisleSelectorInputViewModel?.placeholder?.richTextElements?.[0]?.type?e.aisleSelectorInputViewModel?.placeholder?.richTextElements?.[0]?.text?.text?.text:"",generateCustomItem:(e,t,a)=>({price:0,title:e,imageUrl:t,sectionUuid:a,uuid:(0,r.Z)(),hasCustomizations:!1,customizationsList:[],imageWatermarkContent:null,images:null,nutritionalInfo:null,suspendReason:null,suspendUntil:0,itemPromotion:null,itemPromotionV2:{promoText:null,availablePromotion:null,appliedPromotion:null,promotionData:null},rules:null,itemDescription:"",fulfillmentIssueAction:{type:"STORE_REPLACE_ITEM"},itemId:{type:"ITEM_ID_TYPE_WRITE_IN"}})}}},97392:(e,t,a)=>{a.d(t,{Z:()=>K});var o=a(75514),n=a(36151),r=a(43193),l=a(91931),i=a(91631),s=a(47986),c=a(56065),d=a(70401),u=a(3289),g=a(62149),p=a(34911),h=a(29217),m=a(96911),b=a(66931),C=a(36278),S=a(18254),f=a(6854),y=a(21266),U=a(75618),Z=a(41117),v=a(8639),I=a(63036),P=a(32892),E=a(31913),A=a(62091),x=a(87763),L=a(33990);const T=(0,l.zo)("div",(e=>{let{$theme:t,$backgroundColor:a,$borderRadius:o,$borderColor:n}=e;return{backgroundColor:a||t.colors.backgroundSecondary,display:"flex",justifyContent:"space-between",alignItems:"center",gap:`${I.lf.SPACING_UNIT_4X}px`,width:"100%",border:void 0!==n?`solid ${t.colors[n]}`:"none",borderWidth:void 0!==n?"1px 1px 0 1px":"none",borderRadius:`${o}px ${o}px 0 0`,minHeight:`${I.lf.SPACING_UNIT_9X}px`}})),R=(0,l.zo)("div",{paddingTop:`${I.lf.SPACING_UNIT_1X}px`,paddingBottom:`${I.lf.SPACING_UNIT_1X}px`,paddingLeft:`${I.lf.SPACING_UNIT_3X}px`,flexGrow:1,flexShrink:1}),_=(0,l.zo)("div",{display:"flex",alignItems:"center",boxSizing:"border-box",gap:`${I.lf.SPACING_UNIT_4X}px`,paddingTop:`${I.lf.SPACING_UNIT_1X}px`,paddingBottom:`${I.lf.SPACING_UNIT_1X}px`,flexShrink:1}),$=(0,l.zo)(A.Z,(e=>{let{$width:t=null,$height:a=null}=e;return{width:`${t?(0,I.lU)(t):"100%"}px`,height:`${a?(0,I.lU)(a):"auto"}px`}})),O=e=>{let{bannerHeaderPayload:t,storeCatalogEventMeta:a,ctaMetadataLabel:o,handlePageChange:n,isNextPageDisabled:r,isPreviousPageDisabled:l,itemsPerPage:i=0,totalItems:s=0,viewAllLocation:c,borderRadius:d,borderColor:u}=e;const g=s>i;return(0,L.BX)(T,{$backgroundColor:t.backgroundColorHex||void 0,$borderRadius:d||void 0,$borderColor:u||void 0,children:[(0,L.tZ)(R,{children:(0,L.tZ)(x.Z,{clamp:2,children:(0,L.tZ)(E.ZP,{text:t.title})})}),(0,L.BX)(_,{children:[t.subtitle?(0,L.tZ)(x.Z,{clamp:1,children:c&&o?(0,L.tZ)(f.Z,{viewAllLocation:c,storeCatalogEventMeta:a,ctaMetadataLabel:o,richText:t.subtitle}):(0,L.tZ)(E.ZP,{text:t.subtitle})}):null,g?(0,L.tZ)(p.Z,{backwardEnabled:!l,forwardEnabled:!r,onPageChange:n,transparent:!0}):null]}),(0,L.tZ)($,{src:t?.imagePayload?.url||"",$width:t?.imagePayload?.width,$height:t?.imagePayload?.height})]})};var D=a(45654);const w=(0,l.zo)("li",(e=>{let{$theme:t,$marginTop:a=0,$borderRadius:o=null,$borderColor:n=null,$isLayerOne:r=!1,$isCatalogSectionsVirtualListXpEnabled:l=!1}=e;return{...l?r?{paddingTop:t.sizing.scale1000}:{":not(:first-of-type)":{paddingTop:t.sizing.scale1000}}:{marginTop:t.sizing.scale1000,":first-of-type":{marginTop:`${a}px`},border:null!==n?`1px solid ${t.colors[n]}`:"none",borderRadius:`${o}px`,overflow:o?"hidden":"default"}}})),N=(0,l.zo)("div",(e=>{let{$theme:t,$borderRadius:a=null,$borderColor:o=null}=e;return{border:null!==o?`1px solid ${t.colors[o]}`:"none",borderRadius:`${a}px`,overflow:a?"hidden":"unset"}})),M=(0,l.zo)(b.im,(e=>{let{$theme:t,$insetContainer:a=!1}=e;return{overflowY:"hidden",marginLeft:`calc(${t.sizing.scale600} * -1)`,marginRight:`calc(${t.sizing.scale600} * -1)`,padding:a?`${I.lf.SPACING_UNIT_3X}px`:"0"}})),k=(0,l.w1)(b.T3,(e=>{let{$theme:t}=e;return{paddingLeft:t.sizing.scale600,paddingRight:t.sizing.scale600,display:"block",boxSizing:"border-box"}})),z=(0,l.w1)(h.ZP,{height:"100%"}),B=(0,l.zo)("div",(e=>{let{$theme:t,$backgroundColor:a,$borderRadius:o,$isCatalogSectionsVirtualListXpEnabled:n=!1}=e;return{padding:n?`0px 0px ${t.sizing.scale600}`:`${t.sizing.scale300} 0 ${t.sizing.scale600} 0`,display:"flex",justifyContent:"space-between",alignItems:"flex-end",$borderRadius:`${o}px ${o}px 0 0`,backgroundColor:void 0!==a?a:"transparent"}})),F=(0,l.zo)("div",{display:"flex",alignItems:"center",boxSizing:"border-box"}),H=(e,t)=>{const{onEndReached:a,isLayerOne:o=!1}=e,n=r.useRef(!1),l=(0,D.Z)(),{isDealsHubM2Enabled:i}=(0,P.Z)(),{emitStoreCatalogScrollEvent:s}=(0,y.Z)(e.storeCatalogEventMeta),c=r.useCallback((()=>{n.current||(s(),n.current=!0)}),[s]),d=e.totalItems>e.itemsPerPage,u=e.catalogSection.payload,g=u?.type===U.p.standardItemsPayload?u.standardItemsPayload.catalogSectionStyleMetadata:null,h=u?.type===U.p.standardItemsPayload?u.standardItemsPayload.catalogSectionHeaderPayload:null,b=h&&"bannerHeaderPayload"in h?h.bannerHeaderPayload:null,E=r.useMemo((()=>i?(0,I.lU)(g?.cornerRadius):void 0),[g?.cornerRadius,i]),A=r.useMemo((()=>i?(0,v.Lq)(g?.borderColor):void 0),[g?.borderColor,i]),x=r.useMemo((()=>i&&h?.type===Z.D.bannerHeaderPayload&&b?.backgroundColorHex),[b,i,h?.type]),T=r.useMemo((()=>i&&(Boolean(g?.cornerRadius)||Boolean(g?.borderColor))),[g?.borderColor,g?.cornerRadius,i]),{containerRef:R,getPageChunks:_,getPageProps:$,isPreviousPageDisabled:H,isNextPageDisabled:X,handlePageChange:G,supportsScrollSnapping:V}=(0,m.Z)({scrollOffset:T?-24:24});r.useEffect((()=>{!0===X&&null!=a&&a()}),[a,X]);const q=_(e.children||[],e.itemsPerPage),Y=(0,L.BX)(L.HY,{children:[i&&h?.type===Z.D.bannerHeaderPayload?(0,L.tZ)(O,{bannerHeaderPayload:h?.bannerHeaderPayload,ctaMetadataLabel:e.ctaMetadataLabel,itemsPerPage:e.itemsPerPage,storeCatalogEventMeta:e.storeCatalogEventMeta,totalItems:e.totalItems,viewAllLocation:e.viewAllLocation,isPreviousPageDisabled:H,isNextPageDisabled:X,handlePageChange:G}):(0,L.BX)(B,{$backgroundColor:x||void 0,$borderRadius:E,$isCatalogSectionsVirtualListXpEnabled:l,children:[(0,L.tZ)(S.Z,{catalogSection:e.catalogSection,baseFont:"DisplayBold4XSmall"}),(0,L.tZ)(C.sA,{}),(0,L.BX)(F,{children:[e.viewAllLocation?(0,L.tZ)(f.Z,{viewAllLocation:e.viewAllLocation,storeCatalogEventMeta:e.storeCatalogEventMeta,ctaMetadataLabel:e.ctaMetadataLabel}):null,e.viewAllLocation&&d?(0,L.tZ)(C.ZP,{$width:"40px"}):null,d?(0,L.tZ)(p.Z,{backwardEnabled:!H,forwardEnabled:!X,onPageChange:G}):null]})]}),(0,L.tZ)(M,{ref:R,$supportsScrollSnapping:e.supportsScrollSnapping??V,onScroll:c,$insetContainer:T,children:q.map(((t,a,o)=>(0,L.tZ)(k,{$pageMargin:24,...$(a,o.length),children:(0,L.tZ)(z,{$as:"ul",$numColumns:e.itemsPerPage,children:t})},a)))})]});return(0,L.tZ)(w,{ref:t,$marginTop:24,$borderColor:A,$borderRadius:E,$isLayerOne:o,$isCatalogSectionsVirtualListXpEnabled:l,children:l&&i?(0,L.tZ)(N,{$borderColor:A,$borderRadius:E,children:Y}):Y})},X=r.forwardRef(H);var G=a(34337),V=a(87444),q=a(96707),Y=a(16034),W=a(32762);(0,l.zo)("li",(e=>{let{$marginTop:t=0}=e;return{marginTop:"40px",":first-of-type":{marginTop:`${t}px`}}}));const Q=e=>{let{catalogSectionRef:t,subsectionUuid:a,children:o}=e;const{updateCatalogSectionHeight:r}=(0,Y.Yq)();return(0,n.useEffect)((()=>{if(!t.current||!a)return;const e=new ResizeObserver((()=>{const e=t.current?.offsetHeight||0;r({type:"HORIZONTAL_GRID",uuid:a,height:e})}));return e.observe(t.current),()=>e.disconnect()}),[t,a,r]),(0,L.tZ)(L.HY,{children:o})},K=e=>{const{registerSubsectionRef:t}=(0,c._J)(),{desktopFeatures:a}=(0,W.Z)(),[l,p]=(0,n.useState)(a.overwriteHorizontalGridColumns?a.horizontalGridColumns:u.nB),h=(0,i.UO)(),m=(0,g.TH)(),b=(0,D.Z)(),C=(0,n.useRef)(null),S=e.catalogSection.payload,f=e.catalogSection.type,y=e.catalogSection.catalogSectionUUID||"",Z=S?.type===U.p.standardItemsPayload?S.standardItemsPayload:null,v=Z?.ctaMetadata,I=Z?.catalogSectionAnalyticsData?.storeSectionType,P=(0,V.Z)("infer_catalog_section_type_from_location"),E=r.Children.count(e.children),{storeCatalogSections:A,originalCatalogSectionUuid:x,storeCatalogSectionTypes:T}=(0,s.RAN)(m,["storeCatalogSections","storeCatalogSectionTypes","originalCatalogSectionUuid"]),R=r.useCallback((e=>{e&&y&&(t(y,e),C.current=e)}),[y,t]),_=(0,n.useCallback)((()=>{if(a.overwriteHorizontalGridColumns)return p(a.horizontalGridColumns);const e=(o.Z?.innerWidth||0)<u.US?u.RO:u.nB;p(e)}),[a.overwriteHorizontalGridColumns,a.horizontalGridColumns]),$=(0,d.Z)(_,1e3);(0,n.useEffect)((()=>{if(o.Z)return _(),o.Z.addEventListener("resize",$),()=>{o.Z&&o.Z.removeEventListener("resize",$)}}),[$,_]);const O=r.useMemo((()=>({storeUuid:e.storeUuid,sectionUuid:e.sectionUuid||"",catalogSectionType:f||"HORIZONTAL_GRID",...Z?.catalogSectionAnalyticsData?{catalogSectionAnalyticsData:Z?.catalogSectionAnalyticsData}:{}})),[f,e.sectionUuid,e.storeUuid,Z?.catalogSectionAnalyticsData]),w=r.useMemo((()=>{const t=(0,s.v4Q)(v?.ctaUri||""),a=P?t.search.sectionType??T:t.search.sectionType;return e.isGrocery&&E>l||I===q.O.DEALS?(0,s.RKz)(m,{...(0,s.WxO)(h),...e.sectionUuid?{sectionUuid:e.sectionUuid}:null,subsectionUuid:t.search?.sectionUUID||y,persistentQueryParams:["primaryBundledStoreUuid","primaryDraftOrderUUID"]},{catalogSectionUuids:[y],...a?{catalogSectionTypes:[a]}:{},...t.search?.sectionUUID?{catalogSectionUuids:[t.search.sectionUUID]}:{},...t.search?.subsectionUUID?{catalogSubsectionUuids:[t.search.subsectionUUID]}:{},...t.search?.sectionUUID&&0===A.length?{originalCatalogSectionUuid:t.search.sectionUUID}:x?{originalCatalogSectionUuid:x}:{}}):null}),[v?.ctaUri,P,T,e.isGrocery,e.sectionUuid,E,l,m,h,y,A.length,x,I]),N=r.useMemo((()=>{const t=e.children??[],a=l-t.length%l;return e.isLoadingMore?[...t,...new Array(a).fill(null).map(((e,t)=>(0,L.tZ)(G.Z,{height:"100%",animation:!0},t)))]:t}),[e.children,e.isLoadingMore,l]),M=(0,L.tZ)(X,{ref:R,totalItems:E,itemsPerPage:l,catalogSection:e.catalogSection,viewAllLocation:w,storeCatalogEventMeta:O,ctaMetadataLabel:v?.ctaLabel,onEndReached:e.onEndReached,supportsScrollSnapping:e.supportsScrollSnapping,isLayerOne:!A,children:N});return(0,L.tZ)(L.HY,{children:b&&!A&&e.isGrocery?(0,L.tZ)(Q,{catalogSectionRef:C,subsectionUuid:y,children:M}):M})}},92903:(e,t,a)=>{a.d(t,{Z:()=>le});var o=a(43193),n=a(91631),r=a(62149),l=a(47986),i=a(61304),s=a(36151),c=a(91931),d=a(6854),u=a(52246),g=a(78422),p=a(67780),h=a(33535),m=a(45288),b=a(16046),C=a(29194),S=a(33990);const f=(0,c.w1)(p._,{fontSize:"16px"}),y=e=>{let{seeAllLocation:t,storeCatalogEventMeta:a,storeHeader:o}=e;const n=(0,C.gm)(),r=(0,h.ZP)(),{setLastClickedPartialStore:l}=(0,s.useContext)(b.C),{storeUuid:i,sectionUuid:c,catalogSectionType:d,catalogSectionAnalyticsData:p}=a;return(0,S.tZ)(f,{$as:u.rU,to:t,onClick:e=>{e.stopPropagation(),o&&l((0,m.Br)(o)),r("eats:store_catalog_section_see_all_button_tap",{storeCatalog:{storeUuid:i,sectionUuid:c,catalogSectionType:d,catalogSectionAnalyticsData:p}})},children:"ltr"===n?(0,S.tZ)(g.Z,{name:"ArrowRightFilled"}):(0,S.tZ)(g.Z,{name:"ArrowLeftFilled"})})};var U=a(36278),Z=a(36060),v=a(87763),I=a(21266),P=a(18254),E=a(56533),A=a(32762);const x=(0,c.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}),L=e=>{let{catalogSection:t}=e;const{isStoreOfdRedesignXpEnabled:a}=(0,A.Z)(),o=a?"HeadingXSmall":"DisplayBold4XSmall";return(0,S.tZ)(x,{children:(0,S.BX)("div",{children:[(0,S.tZ)(P.Z,{catalogSection:t,baseFont:o}),(0,S.tZ)(E.Z,{catalogSection:t,baseFont:"ParagraphSmall"})]})})};var T=a(95195),R=a(75618),_=a(63036),$=a(8639),O=a(32892),D=a(41117),w=a(31913),N=a(62091);const M=(0,c.zo)("div",(e=>{let{$theme:t,$backgroundColor:a}=e;return{backgroundColor:a||t.colors.backgroundSecondary,display:"flex",justifyContent:"space-between",alignItems:"center",gap:`${_.lf.SPACING_UNIT_4X}px`,width:"100%"}})),k=(0,c.zo)("div",{paddingTop:`${_.lf.SPACING_UNIT_1X}px`,paddingBottom:`${_.lf.SPACING_UNIT_1X}px`,paddingLeft:`${_.lf.SPACING_UNIT_2X}px`,flexGrow:1}),z=(0,c.zo)(N.Z,(e=>{let{$width:t=null,$height:a=null}=e;return{width:`${t?(0,_.lU)(t):"100%"}px`,height:`${a?(0,_.lU)(a):"auto"}px`}})),B=(0,c.zo)("span",{display:"inline-block",position:"absolute",width:"1px",height:"1px",visibility:"hidden"}),F=e=>{let{bannerHeaderPayload:t,storeCatalogEventMeta:a,ctaMetadataLabel:o,viewAllLocation:n}=e;return(0,S.BX)(M,{$backgroundColor:t.backgroundColorHex||void 0,onClick:()=>{},children:[(0,S.BX)(k,{children:[(0,S.tZ)(v.Z,{clamp:2,children:(0,S.tZ)(w.ZP,{text:t.title})}),t.subtitle?(0,S.tZ)(v.Z,{clamp:1,children:n&&o?(0,S.BX)(S.HY,{children:[(0,S.tZ)(w.ZP,{text:t.subtitle}),(0,S.tZ)(B,{children:(0,S.tZ)(d.Z,{viewAllLocation:n,storeCatalogEventMeta:a,ctaMetadataLabel:o,richText:t.subtitle})})]}):(0,S.tZ)(w.ZP,{text:t.subtitle})}):null]}),(0,S.tZ)(z,{src:t?.imagePayload?.url||"",$width:t?.imagePayload?.width,$height:t?.imagePayload?.height})]})};var H=a(60849),X=a(41063);var G=a(45654);const V=(0,c.zo)("div",(e=>{let{$theme:t,$insetContainer:a=!1,$borderRadius:o=null,$borderColor:n=null}=e;return{...a?{"-ms-overflow-style":"none",scrollbarWidth:"none","::-webkit-scrollbar":{width:"0"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"transparent"},overflow:"hidden",border:n?`2px solid ${t.colors[n]}`:"none",borderRadius:`${o}px`,margin:`${_.lf.SPACING_UNIT_2X}px 0`}:{}}})),q=(0,c.zo)("div",{alignSelf:"center"}),Y=(e,t)=>{if(!e)return"calc(31vw - 16px)";const a=t&&1==e?32:16;return`calc(${(100/e).toFixed(2)}vw - ${a}px)`},W=(0,c.zo)("div",(e=>{let{$theme:t,$hasBorder:a,$isStoreOfdRedesignXpEnabled:o,$isCatalogSectionsVirtualListXpEnabled:n}=e;return{...o?{marginTop:t.sizing.scale600}:{paddingTop:t.sizing.scale600},...a||n?{marginTop:0}:null,display:"flex",justifyContent:"space-between",alignItems:"center"}})),Q=e=>{const t=o.useRef(!1),{emitStoreCatalogScrollEvent:a}=(0,I.Z)(e.storeCatalogEventMeta),{isDealsHubM2Enabled:r}=(0,O.Z)(),l=(0,H.ip)({...X.v.store_carousel_see_all_as_arrow_button_enabled,defaultValue:!1}),i=e.catalogSection.payload,u=i?.type===R.p.standardItemsPayload?i.standardItemsPayload:null,p=u?.storeHeader,h=u?.catalogItems,C=u?.catalogSectionStyleMetadata,f=u?.catalogSectionHeaderPayload,P=(0,n.k6)(),[,E]=(0,c.hQ)(),{setLastClickedPartialStore:x}=(0,s.useContext)(b.C),w=e.catalogConfig?.analyticsConfig?.onCarouselScroll,{isStoreOfdRedesignXpEnabled:N}=(0,A.Z)(),M=(0,G.Z)(),k=o.useRef(!1),{onEndReached:z}=e,B=o.useCallback((o=>{t.current||(a(),t.current=!0,w&&w({storeUuid:e.storeCatalogEventMeta.storeUuid,source:e.catalogConfig?.surface,items:h||[]}));const n=o.currentTarget.scrollLeft+500>=o.currentTarget.scrollWidth;n!==k.current&&(k.current=n,n&&z?.())}),[a,w,e.storeCatalogEventMeta.storeUuid,e.catalogConfig?.surface,h,z]),Q=o.useMemo((()=>r?(0,_.lU)(C?.cornerRadius):null),[C?.cornerRadius,r]),K=o.useMemo((()=>r?(0,$.Lq)(C?.borderColor):null),[C?.borderColor,r]),j=o.useMemo((()=>r&&(Boolean(C?.cornerRadius)||Boolean(C?.borderColor))),[C?.borderColor,C?.cornerRadius,r]),J=o.useMemo((()=>j?{...e.containerOverrides,padding:`${_.lf.SPACING_UNIT_1_5X}px ${_.lf.SPACING_UNIT_2X}px 0 ${_.lf.SPACING_UNIT_2X}px`,marginBottom:`${_.lf.SPACING_UNIT_1X}px`}:e.containerOverrides),[j,e.containerOverrides]);return(0,S.BX)(V,{$insetContainer:j,$borderRadius:Q,$borderColor:K,children:[(0,S.tZ)(W,{$isStoreOfdRedesignXpEnabled:N,$isCatalogSectionsVirtualListXpEnabled:M,onClick:t=>{e.viewAllLocation&&e.ctaMetadataLabel&&(p&&x((0,m.Br)(p)),t.preventDefault(),P.push(e.viewAllLocation))},$hasBorder:Boolean(K),children:r&&f?.type===D.D.bannerHeaderPayload?(0,S.tZ)(F,{bannerHeaderPayload:f?.bannerHeaderPayload,ctaMetadataLabel:e.ctaMetadataLabel,storeCatalogEventMeta:e.storeCatalogEventMeta,viewAllLocation:e.viewAllLocation}):p?(0,S.BX)(S.HY,{children:[(0,S.tZ)(T.Z,{primaryStoreUuid:e.primaryBundledStoreUuid,storeHeader:p,viewAllLocation:e.viewAllLocation}),(0,S.tZ)(U.sA,{}),(0,S.tZ)(q,{children:(0,S.tZ)(g.Z,{name:"ChevronRightSmallFilled",color:E.colors.contentTertiary})})]}):(0,S.BX)(S.HY,{children:[(0,S.tZ)(v.Z,{clamp:2,typographyKey:N?"HeadingXSmall":"DisplayBold4XSmall",children:(0,S.tZ)(L,{catalogSection:e.catalogSection})}),(0,S.tZ)(U.sA,{}),e.viewAllLocation?l?(0,S.tZ)(y,{seeAllLocation:e.viewAllLocation,storeCatalogEventMeta:e.storeCatalogEventMeta,storeHeader:p}):(0,S.tZ)(d.Z,{viewAllLocation:e.viewAllLocation,storeCatalogEventMeta:e.storeCatalogEventMeta,ctaMetadataLabel:e.ctaMetadataLabel,storeHeader:p}):null]})}),(0,S.tZ)(Z.Z,{cellWidth:Y(e.itemsToShow,e.catalogConfig?.isSharedDesign),onScroll:B,containerOverrides:J,children:e.children})]})};var K=a(60743),j=a(52692),J=a(34337),ee=a(87444),te=a(16034);const ae=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{paddingTop:t.sizing.scale600}})),oe=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{width:"100%",aspectRatio:"1/1",marginBottom:t.sizing.scale300}})),ne=o.memo((function(){return(0,S.BX)("div",{children:[(0,S.tZ)(oe,{children:(0,S.tZ)(J.Z,{height:"100%",animation:!0})}),(0,S.tZ)(J.Z,{height:"20px",animation:!0})]})})),re=e=>{let{catalogSectionRef:t,subsectionUuid:a,children:n}=e;const{updateCatalogSectionHeight:r}=(0,te.Yq)();return o.useEffect((()=>{if(!t.current||!a)return;const e=new ResizeObserver((()=>{const e=t.current?.offsetHeight||0;r({type:"HORIZONTAL_GRID",uuid:a,height:e})}));return e.observe(t.current),()=>e.disconnect()}),[t,a,r]),(0,S.tZ)(S.HY,{children:n})},le=e=>{const t=(0,r.TH)(),a=(0,n.UO)(),s=o.useRef(null),{currentStoreDraftOrderUUID:c}=(0,K.Z)(),{storeCatalogSections:d,originalCatalogSectionUuid:u,storeCatalogSectionTypes:g}=(0,l.RAN)(t,["storeCatalogSections","originalCatalogSectionUuid","storeCatalogSectionTypes"]),p=c||void 0,h=e.catalogSection.payload,m=e.catalogSection.catalogSectionUUID||"",b=e.catalogSection.type,C=h?.type===R.p.standardItemsPayload?h.standardItemsPayload:null,f=Boolean(C?.storeHeader),{isStoreOfdRedesignXpEnabled:y}=(0,A.Z)(),U=(0,G.Z)(),Z=o.Children.count(e.children)>4,v=C?.ctaMetadata,I=(0,ee.Z)("infer_catalog_section_type_from_location"),P=o.useMemo((()=>{const o=(0,l.v4Q)(v?.ctaUri||"");if(!Z||!e.showHeaderCTA)return null;if(f){const a=o.search?.storeUUID,n=o.search?.slug;if(!a||!n)return null;return(0,l.gfM)(t,{storeUuid:a,storeSlug:n,newQueryParams:{primaryBundledStoreUuid:e.storeUuid,primaryDraftOrderUUID:p,source:"primary-store"}})}const n=I?o.search.sectionType??g:o.search.sectionType;return e.isGrocery?(0,l.RKz)(t,{...(0,l.WxO)(a),...e.sectionUuid?{sectionUuid:e.sectionUuid}:null,subsectionUuid:o.search?.sectionUUID||m,persistentQueryParams:["primaryBundledStoreUuid","primaryDraftOrderUUID"]},{catalogSectionUuids:[m],...n?{catalogSectionTypes:[n]}:{},...o.search?.sectionUUID?{catalogSectionUuids:[o.search.sectionUUID]}:{},...o.search?.subsectionUUID?{catalogSubsectionUuids:[o.search.subsectionUUID]}:{},...o.search?.sectionUUID&&0===d.length?{originalCatalogSectionUuid:o.search.sectionUUID}:u?{originalCatalogSectionUuid:u}:{}},!1):null}),[v?.ctaUri,f,Z,I,t,u,a,p,e.isGrocery,e.sectionUuid,e.showHeaderCTA,e.storeUuid,d.length,g,m]),E=o.useMemo((()=>({storeUuid:e.storeUuid,sectionUuid:e.sectionUuid||"",catalogSectionType:b||"HORIZONTAL_GRID",...C?.catalogSectionAnalyticsData?{catalogSectionAnalyticsData:C?.catalogSectionAnalyticsData}:{}})),[b,e.sectionUuid,e.storeUuid,C?.catalogSectionAnalyticsData]),x=e.isSharedDesign?e.itemsToShow:e.isGrocery?null:e.itemsToShow,L=e.isSharedDesign?{padding:"16px 0px 0px 0px"}:y&&!e.isGrocery?{padding:"12px 0"}:U&&e.isGrocery?{padding:"12px 0px 0px"}:{},T=o.useMemo((()=>{const t=e.children??[];return e.isLoadingMore?[...t,...new Array(3).fill(null).map(((e,t)=>(0,S.tZ)(ne,{},t)))]:t}),[e.children,e.isLoadingMore]),_=(0,S.BX)(S.HY,{children:[(0,S.tZ)(Q,{itemsToShow:x,catalogSection:e.catalogSection,catalogConfig:e.catalogConfig,storeCatalogEventMeta:E,viewAllLocation:P,ctaMetadataLabel:v?.ctaLabel,primaryBundledStoreUuid:e.primaryBundledStoreUuid,containerOverrides:L,onEndReached:e.onEndReached,children:T}),y&&e.shouldUseNewDivider&&!e.isGrocery?(0,S.tZ)(j.Z,{$color:"borderOpaque",$margin:"0 -16px",$height:"1px"}):null]});return(0,S.tZ)(S.HY,{children:U&&!d&&e.isGrocery&&e.catalogConfig?.surface===i.b.STOREFRONT?(0,S.tZ)(ae,{ref:s,children:(0,S.tZ)(re,{catalogSectionRef:s,subsectionUuid:m,children:_})}):_})}},36060:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(36151),n=a(79857),r=a(89476),l=a(91931),i=a(33990);const s=(0,l.w1)(r.l$,(e=>{let{$overrideStyles:t={}}=e;return{"-ms-overflow-style":"none",scrollbarWidth:"none","::-webkit-scrollbar":{width:"0"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"transparent"},...t}})),c=(0,o.forwardRef)((function(e,t){let{cellWidth:a,containerOverrides:o,onScroll:l,children:c=[]}=e;const d=(0,n.Z)();return(0,i.BX)(s,{ref:t,$hasScrollIndicators:!d,$overrideStyles:o,onScroll:l,children:[(0,i.tZ)(r.Dy,{}),c.map(((e,t)=>(0,i.tZ)(r.bL,{$cellWidth:a,children:e},t))),(0,i.tZ)(r.Dy,{})]})}))},56533:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(89400),n=a(32762),r=a(91931),l=a(75618),i=a(33990);const s=(0,r.zo)("div",(e=>{let{$theme:t,$isStoreOfdRedesignXpEnabled:a}=e;return{...a?{marginBottom:t.sizing.scale200}:null}})),c=e=>{let{catalogSection:t,baseFont:a,tag:r="div"}=e;const{isStoreOfdRedesignXpEnabled:c}=(0,n.Z)(),d=t.payload;if(!d)return null;if(d.type===l.p.horizontalGridPayload){const e=d.horizontalGridPayload;return(0,i.tZ)(o.Z,{badge:e.subtitle,baseFont:a,baseColor:"contentTertiary",tag:r})}if(d.type===l.p.verticalGridPayload){const e=d.verticalGridPayload;return(0,i.tZ)(o.Z,{badge:e.subtitle,baseFont:a,baseColor:"contentTertiary",tag:r})}if(d.type===l.p.exploreMenuPayload){const e=d.exploreMenuPayload;return(0,i.tZ)(o.Z,{badge:e.subtitle,baseFont:a,baseColor:"contentTertiary",tag:r})}if(d.type===l.p.standardItemsPayload){const e=d.standardItemsPayload;return e.subtitle?(0,i.tZ)(s,{$isStoreOfdRedesignXpEnabled:c,children:(0,i.tZ)(o.Z,{badge:e.subtitle,baseFont:a,baseColor:"contentTertiary",tag:r})}):null}return null}},72326:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(91931),n=a(31913),r=a(89217),l=a(63655),i=a(65184),s=a(33990);const c=(0,o.zo)("div",{padding:"64px 0",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center"}),d=(0,o.zo)("div",(e=>{let{$size:t}=e;return{maxWidth:t,marginBottom:"16px"}})),u=e=>{let{payload:t,illustrationSize:a="DEFAULT",...o}=e;const u=t?.emptystateviewmodel,g=u?.headline,p=u?.paragraph,h="customBadgeData"===u?.badge?.type?u.badge.customBadgeData:null;return(0,s.BX)("div",{children:[(0,s.tZ)(i.$Q,{children:(0,s.tZ)(l.m,{})}),(0,s.BX)(c,{children:[h?.badgeIllustration?(0,s.tZ)(d,{$size:"DEFAULT"===a?"114px":"250px",children:(0,s.tZ)(r.SZ,{richIllustration:h?.badgeIllustration})}):null,g?(0,s.tZ)(n.ZP,{text:g,__font:{style:"HEADING_X_SMALL",weight:"MEDIUM"}}):null,p?(0,s.tZ)(n.ZP,{text:p,padding:"12px",__font:{style:"PARAGRAPH_DEFAULT",weight:"MEDIUM"}}):null]})]})}},65088:(e,t,a)=>{a.d(t,{n:()=>h});var o=a(43193),n=a(97392),r=a(84998),l=a(48760),i=a(47986),s=a(75618),c=a(92903),d=a(61304),u=a(69565),g=a(33990);function p(e){if(e.payload?.type===s.p.standardItemsPayload){return(0,i.v4Q)(e.payload.standardItemsPayload.ctaMetadata?.ctaUri||"").search.sectionType}}const h=e=>{const t=(0,r.bg)({storeUuid:e.storeUuid,catalogSectionUuid:e.storeCatalogSections?e.storeCatalogSections:e.catalogSectionUuid,catalogSubsectionUuid:e.storeCatalogSections?e.catalogSectionUuid:null,catalogSectionType:p(e.catalogSection),shouldReturnBundlableStores:!1}),a=(0,l.kC)({enabled:!1,storeFilters:{...t,shouldReturnSegmentedControlData:!1},offset:e.catalogItems.length,...e.isGrocery?{source:e.activeSectionUuid?u.n.NV_L1_CAROUSEL:u.n.NV_L2_CAROUSEL}:null}),i=a.data?.pages?.at(-1)?.pagingInfo?.hasMore??!0,h=o.useMemo((()=>{const t=a.data?.pages.map((e=>null!=e.catalog?.[0]?.payload&&s.p.standardItemsPayload in e.catalog?.[0].payload?e.catalog?.[0].payload.standardItemsPayload.catalogItems:null)).filter((e=>null!=e)).flat()??[],o={};for(const a of[...e.catalogItems,...t])null!=a?.uuid&&(o[a.uuid]=a);return Object.values(o).map(e.renderCatalogItemsHorizontalGrid)}),[e.catalogItems,e.renderCatalogItemsHorizontalGrid,a.data?.pages]),{fetchNextPage:m}=a,b=o.useCallback((()=>{i&&m()}),[i,m]),C=o.useMemo((()=>e.isMobile?c.Z:n.Z),[e.isMobile]);return(0,g.tZ)(C,{storeUuid:e.storeUuid,sectionUuid:e.activeSectionUuid,catalogSection:e.catalogSection,catalogConfig:{surface:d.b.STOREFRONT},isGrocery:e.isGrocery,onEndReached:b,supportsScrollSnapping:!1,isLoadingMore:a.isFetching,showHeaderCTA:!0,children:h})}},63655:(e,t,a)=>{a.d(t,{m:()=>$});var o=a(43193),n=a(36151),r=a(91931),l=a(67284),i=a(79406),s=a(78422),c=a(68561),d=a(61089),u=a(89400),g=a(21166),p=a(32857),h=a(68065),m=a(65184),b=a(15070),C=a(38217),S=a(34567),f=a(40836),y=a(62091),U=a(33990);const Z={RadioGroupRoot:{style:{alignItems:"stretch"}}},v=(0,r.zo)(S.Z,(e=>{let{$theme:t}=e;return{marginBottom:t.sizing.scale600}})),I=(0,r.zo)(c.Z,{alignItems:"stretch"}),P=(0,r.zo)("span",(e=>{let{$theme:t}=e;return{...t.typography.LabelSmall,color:t.colors.primaryA,cursor:"pointer"}})),E=(0,r.zo)("div",(e=>{let{$theme:t,isMobile:a}=e;return{[a?"marginBottom":"marginTop"]:t.sizing.scale600,gap:t.sizing.scale600,display:"flex",flexDirection:"row",alignItems:"center",overflowY:"scroll","::-webkit-scrollbar":{display:"none"}}})),A={Body:{style:e=>{let{$theme:t}=e;return{backgroundColor:t.colors.backgroundPrimary,color:t.colors.primaryA,boxShadow:t.shadows.filterCard,borderRadius:t.sizing.scale500}}},Inner:{style:e=>{let{$theme:t}=e;return{backgroundColor:t.colors.backgroundPrimary,width:"250px",maxHeight:"340px",overflowY:"auto"}}}},x=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingLeft:t.sizing.scale600,paddingRight:t.sizing.scale600,gap:t.sizing.scale600,height:t.sizing.scale1200}})),L=(0,r.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"row",alignItems:"center",gap:t.sizing.scale400}})),T=(0,r.zo)(y.Z,(e=>{let{$theme:t}=e;return{width:t.sizing.scale550,height:t.sizing.scale550}})),R=o.memo((function(e){const t=(0,b.v)((e=>{let{device:t}=e;return t.isMobile})),[a,o]=(0,n.useState)(!1),r=(0,n.useCallback)((()=>{o(!1),e.shouldResetOptions&&e.resetChanges()}),[e]),s=(0,n.useCallback)((()=>{e.applyChanges(),o(!1)}),[e]);return t?(0,U.BX)(U.HY,{children:[a?(0,U.BX)(C.R1,{onClose:r,children:[(0,U.tZ)(C._g,{children:e.header}),(0,U.BX)(C.bd,{children:[e.content({close:r}),(0,U.tZ)(v,{onClick:s,children:(0,U.tZ)(f.v,{id:"apply"})})]})]}):null,(0,U.tZ)("div",{onClick:()=>o(!0),children:e.children})]}):(0,U.tZ)(l.Z,{focusLock:!0,placement:i.r4.bottomLeft,overrides:A,content:e.content,children:e.children})})),_=o.memo((function(e){const t=(0,b.v)((e=>{let{device:t}=e;return t.isMobile})),[a,r]=(0,n.useState)(e.sortAndFilter),[l,i]=(0,n.useState)(!1);o.useEffect((()=>{r(e.sortAndFilter)}),[e.sortAndFilter]);const c=e.sortAndFilter?.values?.[0]?.minPermitted,m=e.sortAndFilter?.values?.[0]?.maxPermitted,C=a?.values?.[0]?.options,S=1===c&&c===m,f=0===c&&1===m,y=o.useMemo((()=>e.sortAndFilter?.values?.[0]?.options?.filter((e=>e.selected)).map((e=>e?.uuid??""))??[]),[e.sortAndFilter]),v=e.sortAndFilter?.values?.[0]?.options?.find((e=>e.selected)),E="recommend",A=(0,n.useCallback)((()=>{i(!1),e.onChange(a??e.sortAndFilter)}),[a,e]),_=(0,n.useCallback)((()=>{r(e.sortAndFilter)}),[e.sortAndFilter]),$=(0,n.useCallback)(((o,n)=>{const l=S?{...a,values:[{...a?.values?.[0]||[],options:a?.values?.[0]?.options?.map((e=>({...e,selected:e.uuid===o})))}]}:{...a,values:[{...a?.values?.[0]||[],options:a?.values?.[0]?.options?.map((e=>e.uuid===o?{...e,selected:!e.selected}:{...e}))}]};!t||n?e.onChange(l):(r(l),i(!0))}),[t,S,a,e]);if(null==c||null==m||null==C||null==a?.values?.[0]||null==a.tab)return null;if(f){const t=C?.[0]?.badge?.iconUrl||"",a=y.length>0;return(0,U.tZ)(p.Z,{startEnhancer:(0,U.tZ)(T,{src:t,style:{filter:a?"invert(100%)":"none"}}),kind:a?h.TO.primary:h.TO.secondary,size:h.NO.compact,shape:h.X3.pill,onClick:()=>{f&&$(C[0]?.uuid??"",!0)},children:e.sortAndFilter.tab})}return(0,U.tZ)(R,{applyChanges:A,content:e=>{let{close:o}=e;return 1===m?(0,U.tZ)(I,{name:a.tab??"",onChange:e=>{$(e.target.value),t||o()},overrides:Z,children:C.map((e=>null==e.uuid?null:(0,U.tZ)("label",{children:(0,U.BX)(x,{children:[(0,U.tZ)(P,{children:(0,U.tZ)(u.Z,{badge:e.badge})}),(0,U.tZ)(d.Y8,{name:a.tab??"",value:e.uuid,checked:e.selected??!1},e.uuid)]})})))}):(0,U.tZ)(I,{name:a.tab??"",onChange:e=>{$(e.target.value),t||o()},overrides:Z,children:C.map((e=>null==e.uuid?null:(0,U.tZ)("label",{children:(0,U.BX)(x,{children:[(0,U.tZ)(P,{children:(0,U.tZ)(u.Z,{badge:e.badge})}),(0,U.tZ)(g.XZ,{name:a.tab??"",value:e.uuid,checked:e.selected??!1},e.uuid)]})})))})},header:a.tab??"",resetChanges:_,shouldResetOptions:l,children:(0,U.tZ)(p.Z,{kind:(S?v?.value!==E:y.length>0)?h.TO.primary:h.TO.secondary,size:h.NO.compact,shape:h.X3.pill,endEnhancer:()=>(0,U.tZ)(s.Z,{name:"ChevronDownFilled"}),children:(0,U.tZ)(L,{children:S&&v?.value!==E?(0,U.tZ)(u.Z,{badge:v?.badge,baseFont:"LabelSmall",baseColor:"contentOnColor"}):`${e.sortAndFilter.tab} ${!S&&y.length>0?`(${y.length})`:""}`})})})})),$=o.memo((function(){const e=(0,m.Dc)(),t=(0,b.v)((e=>{let{device:t}=e;return t.isMobile})),a=(0,n.useCallback)((t=>{const a=e.sortAndFilters.map((e=>e.tab===t.tab?t:e));e.onChange(a)}),[e]);return(0,U.tZ)(E,{isMobile:t,children:e.sortAndFilters.map((e=>(0,U.tZ)(_,{onChange:a,sortAndFilter:e},e.tab)))})}))},45654:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(60849),n=a(41063);const r=()=>(0,o.ip)({...n.v.store_catalog_sections_virtual_list,defaultValue:!1})},84998:(e,t,a)=>{a.d(t,{ZP:()=>g,bg:()=>u});var o=a(43193),n=a(74622),r=a(55758),l=a(64388),i=a(48760);const s="20f1b4ba-468f-11ed-b878-0242ac120002",c=["getCatalogPresentationV2"],d=["SPECIAL_REQUEST"],u=e=>{let{storeUuid:t,catalogSectionUuid:a,catalogSubsectionUuid:o,catalogSectionType:n,shouldReturnBundlableStores:r}=e;return{storeUuid:t,sectionUuids:a?[a]:null,subsectionUuids:o&&!o.startsWith(s)?[o]:null,...n?{sectionTypes:[n]}:{},...r?{shouldReturnBundlableStores:r}:null}};function g(e){let{storeUuid:t,catalogSectionUuid:a,catalogSubsectionUuid:g,catalogSectionType:p,catalogSectionsMap:h,shouldReturnBundlableStores:m,sortAndFilters:b,source:C}=e;const S=(0,n.useQueryClient)(),f=(0,r.d)(),y=o.useRef(f),{store:U}=(0,l.ZP)(t),Z=Boolean(U.data),[v,I]=o.useState(null),P=u({storeUuid:t,catalogSectionUuid:a,catalogSubsectionUuid:g,catalogSectionType:p,shouldReturnBundlableStores:m}),E=(0,i.kC)({enabled:Boolean(a)&&Z,storeFilters:P,sortAndFilters:b,source:C}),{data:A,isLoading:x,error:L,isFetchingNextPage:T,fetchNextPage:R,hasNextPage:_,isSuccess:$,isError:O,refetch:D}=E,w=a&&!v&&!x,N=a&&v&&x;o.useEffect((()=>{Z&&y.current!==f&&(S.invalidateQueries(c),y.current=f)}),[Z,f,S]),o.useEffect((()=>{N&&I(null)}),[N]),o.useEffect((()=>{w&&I({isSuccess:Boolean($),isError:Boolean(O)})}),[w,$,O]);const M=o.useCallback((()=>{D({refetchPage:(e,t)=>0===t})}),[D]),k=o.useCallback((e=>((e,t,a)=>a?e:e.filter((e=>t&&e?.catalogSectionUUID===t||!t&&e?.catalogSectionUUID?.startsWith(s)||d.includes(e.type??""))))(e,g,!0)),[g]),z=o.useMemo((()=>A?.pages?.flatMap((e=>(e.catalog||[]).flatMap((e=>({...e,catalogSectionUUID:e.catalogSectionUUID||g||s})))))||[]),[A?.pages,g]);return{catalogSections:o.useMemo((()=>({data:a&&z?.length>0?{[a]:z}:{},isLoading:x||!v,error:v?.isError?L:null,hasLoaded:Boolean(v?.isSuccess)||Boolean(v?.isError)})),[a,z,L,v,x]),segmentedControlItems:(e=>e?.segmentedControlData?.segmentedControlItems||[])(A?.pages?.[0]),currentPageOffset:A?.pages?.length??0,sortAndFilters:A?.pages?.at(-1)?.catalogPresentationData?.sortAndFilters,isFetchingMore:Boolean(T),canFetchMore:Boolean(_)&&Boolean(z?.length),lastPageHasError:Boolean(v?.isSuccess)&&Boolean(O),refetch:M,fetchMore:R,applyFilterByCatalogSubsection:k}}},48760:(e,t,a)=>{a.d(t,{ZP:()=>h,kC:()=>g,vq:()=>p});var o=a(36151),n=a(98976),r=a(74622),l=a(2237),i=a(62459);function s(e,t){const a=(0,i.Z)("getCatalogPresentationV2"),o=(0,l.H)("getCatalogPresentationV2",e);return(0,r.useQuery)({queryKey:o,queryFn:e=>{let{queryKey:t}=e;return a.request("getCatalogPresentationV2",t[1])},...t?.queryObserverOptions})}var c=a(57578);const d=(e,t,a,o)=>()=>({storeFilters:{...e,shouldReturnSegmentedControlData:!0},pagingInfo:{enabled:!0,offset:a??null},sortAndFilters:t,source:o}),u=(e,t,a)=>o=>(e=>{let{lastCatalogPresentationResponse:t,storeFilters:a,sortAndFilters:o,source:n}=e;return!t?.pagingInfo?.offset||0===t?.catalog?.length||t?.catalog?.[0]&&!(0,c.FA)(t?.catalog?.[0])?.catalogItems?.length?null:{storeFilters:a,pagingInfo:{enabled:!0,offset:t?.pagingInfo?.offset},source:n}})({lastCatalogPresentationResponse:o,storeFilters:e,sortAndFilters:t,source:a});function g(e){let{storeFilters:t,enabled:a,offset:o,sortAndFilters:n,source:s}=e;return function(e){const t=(0,i.Z)("getCatalogPresentationV2"),a=(0,l.H)("getCatalogPresentationV2",e.getInitialRequestArguments());return(0,r.useInfiniteQuery)({queryKey:a,queryFn:e=>{let{pageParam:a,queryKey:o}=e;return t.request("getCatalogPresentationV2",a||o[1])},enabled:e.enabled,getNextPageParam:e.getNextPageParam})}({enabled:a,getNextPageParam:u(t,n,s),getInitialRequestArguments:d(t,n,o,s)})}const p=()=>{const e=(0,r.useQueryClient)();return(0,o.useCallback)((t=>{e.invalidateQueries(["getCatalogPresentationV2",...t?[t]:[]])}),[e])};function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;const o=s({storeFilters:e,source:a},{queryObserverOptions:{...t?{refetchOnMount:"always"}:null}}),r=(0,n.hn)(o);return r}},65184:(e,t,a)=>{a.d(t,{$Q:()=>c,Dc:()=>s,Mv:()=>i});var o=a(43193),n=a(36151),r=a(33990);const l=o.createContext(null),i=o.memo((function(e){const{sortAndFilters:t,onChange:a}=e;return null===t?(0,r.tZ)(r.HY,{children:e.children}):(0,r.tZ)(l.Provider,{value:{sortAndFilters:t,onChange:a},children:e.children})})),s=()=>{const e=(0,n.useContext)(l);if(null!=e)return e;throw new Error("useSortAndFilters must be used within a SortAndFiltersProvider")},c=o.memo((function(e){return o.useContext(l)?(0,r.tZ)(r.HY,{children:e.children}):null}))},14644:(e,t,a)=>{a.d(t,{FA:()=>d,ZP:()=>c});var o=a(43193),n=a(15070),r=a(4864),l=a(6703),i=a(33990);const s=o.createContext({quickAddDisabled:!1,syncItemQuantity:!1,quickAddCount:(0,l.bN)(),cartItemCount:0,cartItemDecimalCount:null});function c(e){let{storeUuid:t,itemUuid:a,syncToCart:c,isInitialLoad:d,children:u}=e;const g=o.useRef((0,l.bN)()),p=o.useRef(null),{cartCountSummary:h,cartCountDecimalsSummary:m}=(0,r.F7)(t),{syncItems:b,quantities:C}=(0,n.v)((e=>e.quickAdd)),S=Boolean(c||b[a]),f=h[a]??0,y=C[a]??(0,l.bN)(),U=m[a]??null;return g.current=g.current.integer!==y.integer||g.current.decimal.base!==y.decimal.base?y:g.current,p.current=p.current?.base!==U?.base?U:p.current,o.useEffect((()=>()=>{g.current=(0,l.bN)(),p.current=null}),[]),(0,i.tZ)(s.Provider,{value:{quickAddDisabled:d,syncItemQuantity:S,quickAddCount:g.current,cartItemCount:f,cartItemDecimalCount:p.current},children:u})}function d(){const e=o.useContext(s);if(null!==e)return e;throw Error("You should use useStoreSharedCartItemProvider only in a descendant of StoreSharedCartItemProvider")}},16034:(e,t,a)=>{a.d(t,{Yq:()=>s,ZP:()=>i});var o=a(43193),n=a(68093),r=a(33990);const l=o.createContext(null);function i(e){let{catalogSectionsConfig:t,children:a}=e;const[i,s]=o.useState({HORIZONTAL_GRID:{}}),c=(0,n.Z)(i,150),d=o.useCallback((e=>{const a=e?.type,o=e?.catalogSectionUUID||"";switch(a){case"AISLE_SHORTCUTS":return(0,t.AISLE_SHORTCUTS.calculateHeight)(e);case"HORIZONTAL_GRID":return c.HORIZONTAL_GRID[o]||t.HORIZONTAL_GRID.calculateHeight(e);case"BUNDLE_STORE":return t.BUNDLE_STORE.height;default:return"dynamic"}}),[c,t]),u=o.useCallback((e=>{let{type:t,uuid:a,height:o}=e;o>(i[t]?.[a]||0)&&s({...i,[t]:{...i[t],[a]:o}})}),[i]);return(0,r.tZ)(l.Provider,{value:{getCatalogSectionHeight:d,updateCatalogSectionHeight:u},children:a})}function s(){const e=o.useContext(l);if(null!==e)return e;throw Error("You should use useStoreSharedCatalogSectionVirtualList only in a descendant of StoreSharedCatalogSectionVirtualListProvider")}}}]);