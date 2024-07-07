"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[3081],{__fusion__22:(e,t,i)=>{i.r(t),i.d(t,{ProductDetailsDesktopQuickViewContent:()=>de,default:()=>ce});var n=i(75514),o=i(43193),r=i(40606),s=i(93801),a=i(62149),l=i(31139),d=i(98976),u=i(42287),c=i(91931),m=i(33855),p=i(99955),f=i(88885),h=i(47986),g=i(86695),U=i(68065),I=i("__fusion__915"),Z=i(20196),_=i(83059),v=i(55811),x=i(84416),O=i(33535),w=i(31755),C=i(75787),k=i(1795),y=i(87345),z=i(34936),b=i(40836),S=i(97415),D=i(67206),P=i(52298),B=i(33990);const E=(0,c.zo)("div",{marginTop:"40px"}),T=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{...(0,D.Z)({$theme:t}),backgroundSize:"100vw 100%",position:"absolute",top:0,bottom:0,left:0,right:0}})),A=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{width:"492px",flexDirection:"column",display:"flex",alignItems:"flex-start",height:"fit-content",justifyContent:"flex-start",flexShrink:0,overflow:"hidden"}})),M=(0,c.zo)("div",{width:"492px",paddingTop:"4px",flex:"1 1 100%"}),$=(0,c.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"row",gap:"24px"}})),q=(0,c.zo)("div",{position:"relative",display:"flex",flexDirection:"column"}),F=(0,c.zo)("div",(e=>{let{$theme:t,$zIndex:i}=e;return{width:"18px",height:"36px",background:`radial-gradient(circle at 100%, transparent 18px, ${t.colors.backgroundPrimary} 18px)`,...i?{zIndex:i}:null}})),N=(0,c.zo)("div",(e=>{let{$theme:t,$zIndex:i}=e;return{width:"18px",height:"36px",background:`radial-gradient(circle at 0%, transparent 18px, ${t.colors.backgroundPrimary} 18px)`,...i?{zIndex:i}:null}})),L=(0,c.zo)("div",{flex:"none",display:"flex",alignItems:"center",width:"fit-content",position:"relative"}),Q=e=>{let{partialMenuItem:t,itemUuid:i,store:n}=e;if(!t)return(0,B.tZ)(k.Z,{});const o=t.imageUrl?[{imageUrl:t.imageUrl}]:[],r=o.length>0?(0,B.tZ)(z.Z,{images:o,itemUuid:i,storeUuid:n.data?.uuid}):null;return(0,B.BX)(E,{children:[(0,B.tZ)(y.Z,{children:t.title}),(0,B.BX)($,{children:[(0,B.tZ)(A,{children:r||(0,B.tZ)(C.Z,{title:t.title,images:[{imageUrl:t.imageUrl}],description:t.description,endorsement:null,nutritionalInfo:null,rules:null,tagSection:null,hideImage:!0})}),(0,B.BX)(M,{children:[r?(0,B.tZ)(C.Z,{title:t.title,images:[{imageUrl:t.imageUrl}],description:t.description,endorsement:null,nutritionalInfo:null,rules:null,tagSection:null,hideImage:!0}):null,(0,B.BX)(q,{children:[(0,B.BX)(L,{children:[(0,B.tZ)(T,{}),(0,B.tZ)(F,{$zIndex:1}),(0,B.tZ)(S.CB,{$width:"24px"}),(0,B.tZ)(N,{$zIndex:1})]}),(0,B.tZ)(P.ZP,{$height:24}),(0,B.tZ)(g.zx,{disabled:!0,isFullWidth:!0,size:U.NO.large,children:(0,B.tZ)(b.v,{id:"shared.add_to_cart"})})]})]})]})]})};var R=i(37771),X=i(75161),G=i(56899),H=i(91086),V=i(33259),Y=i(95747),W=i(87835),j=i(23017),K=i(67476),J=i(8420),ee=i(58984),te=i(17198),ie=i(95394),ne=i(67212),oe=i(52949),re=i(2842);const se=(0,oe.V)({chunkId:"draft-order-desktop-start-new-order-root",load:()=>Object.defineProperties(i.e(94813).then(i.bind(i,"__fusion__370")),{__CHUNK_IDS:{value:[94813]},__MODULE_ID:{value:"__fusion__370"},__I18N_KEYS:{value:["go.cancel_this_order","go.cancel_this_order_description","go.create_new_order","go.keep_order","go.leave_group_order_new_individual_order_description","shared.cancelOrder","shared.createNewOrder","shared.createNewOrderExplanation","shared.goBack","shared.newOrder"]}}),LoadingComponent:k.Z,ErrorComponent:re.D}),ae=(0,c.zo)("div",{padding:"24px"}),le=(0,c.zo)("div",{padding:"0 24px 24px 24px",marginTop:"-40px"}),de=e=>{let{isEditItemFlow:t=!1,updateItem:i,removeItem:c,specialInstructions:C,updateSpecialInstructions:k}=e;const{sentinelHidden:y,sentinelRef:z}=(0,R.U)(),{store:b,menuItem:S,selectedCustomizations:D,isOnSale:P,updateCustomizations:E,quantity:T,hasErrors:A}=(0,l.e3)(),M=(0,p.Z)(Boolean(t)),$=Boolean(M?.startNewOrder),q=(0,ee.I0)(),{enqueue:F,dequeue:N}=(0,Z.Ds)(),L=(0,f.T)(),te=(0,a.TH)(),oe="postmates"===(0,v.Z)()?x.n2:void 0,{creatorLockedOrderDescriptionCopy:re}=(0,j.Z)(),{canEditGroupOrderCart:de}=(0,K.Z)(M?.storeUuid||""),ue=o.useCallback(((e,t)=>{F({message:e,actionMessage:t,actionOnClick:()=>N()},_.t.short)}),[F,N]),ce=(0,O.ZP)(),{partialMenuItem:me}=(0,w.Z)(b,M?.storeUuid,M?.sectionUuid,M?.subsectionUuid,M?.itemUuid),pe=(0,Y.Z)();(0,W.Z)({store:b,menuItem:S,hasErrors:A,source:t?"quick_view_edit_item":"quick_view",isOnSale:P});const{modalOpen:fe,onModalClose:he,openDeliveryLocationModal:ge}=(0,ie.y)(!0,!1),Ue=()=>{q((0,J.im)()),pe((0,h.C45)(te))};if(o.useEffect((()=>{re&&!de&&ue(re,L("shared.dismiss"))}),[re,de,ue,L]),!M)return null;if(M?.customizationRefUuids?.length)return(0,B.tZ)(m.Z,{store:b,menuItem:S,initialCustomizations:D,isOnSale:P,saveCustomizations:E,quantity:T});const Ie=()=>{c&&c(),Ue()};return(0,B.tZ)(B.HY,{children:$?(0,B.tZ)(se,{}):fe?(0,B.tZ)(ne.Z,{onClose:he}):(0,B.tZ)(X.u_,{onClose:Ue,size:G.NO.auto,children:(0,B.tZ)(r.Z,{source:(0,d.FP)(b,S),loaded:e=>{let[o,r]=e;const s=(0,h.yz4)({location:te,args:{sectionUuid:M.sectionUuid,subsectionUuid:M.subsectionUuid,itemUuid:M.itemUuid,storeUuid:M.storeUuid,storeSlug:o.slug}});return ce("eats:quick_view_dialog_impression",{storeCatalog:{sectionUuid:M.sectionUuid,subsectionUuid:M.subsectionUuid,itemUuid:M.itemUuid,storeUuid:M.storeUuid}}),(0,B.BX)(B.HY,{children:[(0,B.tZ)(H.xB,{isExpanded:y,title:S.data?.title,leftButton:(0,B.tZ)(V.hQ,{onClick:Ue}),rightButton:(0,B.tZ)(g.zx,{shape:U.X3.circle,kind:g.TO.tertiary,onClick:()=>{if(ce("eats:quick_view_dialog_share_click",{storeCatalog:{storeUuid:M.storeUuid,sectionUuid:M.sectionUuid,subsectionUuid:M.subsectionUuid,itemUuid:M.itemUuid}}),!n.Z?.navigator||!s.pathname)return;const e=(0,h.iie)(s.pathname,oe);n.Z.navigator.clipboard.writeText(e).then((()=>{ue(L("shared.link_copied"),L("shared.dismiss"))}))},children:(0,B.tZ)(I.default,{size:20,title:L("components.pdp.share_item_title")})}),floatingMode:H.rY.floatingOnceScrolled}),(0,B.tZ)(le,{children:(0,B.tZ)(u.V,{store:o,item:r,showStoreSelectorWidget:!1,displayContextType:"quick_view",gutterGapWidth:24,showSeeDetailsCTA:M.showSeeDetailsCTA,quickViewModalSentinelRef:z,addToCartSourceType:"quick_view",isEditItemFlow:t,updateItem:i,removeItem:Ie,specialInstructions:C,updateSpecialInstructions:k,openDeliveryLocationModal:ge})})]})},error:e=>(0,B.tZ)(s.nQ,{code:e?.code}),loading:()=>(0,B.tZ)(ae,{children:(0,B.tZ)(Q,{store:b,partialMenuItem:me,itemUuid:M.itemUuid})})})})})},ue=e=>{let{itemParams:t}=e;const{editItemParams:i,shoppingCartItemUuid:n}=(0,te.Z)({storeUuid:t.storeUuid,itemUuid:t.itemUuid});return(0,B.tZ)(l.ZP,{navigateBackOnItemAdd:!0,itemParams:t,editItemParams:i,shoppingCartItemUuid:n,children:(0,B.tZ)(de,{isEditItemFlow:!1})})},ce=()=>{const e=(0,p.Z)();return e?(0,B.tZ)(ue,{itemParams:e}):null}},17198:(e,t,i)=>{i.d(t,{Z:()=>f});var n=i(36151),o=i(91631),r=i(79517),s=i(70247),a=i(60743),l=i(74386),d=i(61127),u=i(49723),c=i(64388),m=i(47986),p=i(5639);const f=e=>{let{storeUuid:t,itemUuid:i}=e;const f=(0,n.useRef)(!1),[h,g]=(0,n.useState)(!0),U=(0,l.Z)(),{currentStoreDraftOrderUUID:I}=(0,a.Z)(),{draftOrder:Z,bundleGroupUUID:_,bundledOrders:v,isBundledOrder:x,isGroupOrder:O}=(0,s.Dz)(I??void 0),{unsavedOutOfItemAction:w,updateDefaultOutOfItemAction:C,updateOutOfItemAction:k,updateBackupProduct:y,updateUnsavedOutOfItemAction:z,resetReplacementPreferencesAndNotes:b}=(0,u.Z)(),{store:S}=(0,c.ZP)(t,{cacheOnly:!0}),D=(0,o.k6)(),{isMobile:P}=(0,p.hU)(),B=(0,n.useMemo)((()=>{const e=Z?.shoppingCart?.groupedItems?.find((e=>e.isCurrentUser))?.items||[];return O?e:Z?.shoppingCart?.items||[]}),[Z,O]),E=(0,n.useMemo)((()=>{const e=v?.find((e=>e.bundleGroupInfo?.bundleGroupUUID===_));return e?.shoppingCart?.items||[]}),[v,_]),T=(0,n.useMemo)((()=>!U||x?null:B.find((e=>e.uuid===i))||E.find((e=>e.uuid===i))),[B,E,i,x,U]),A=(0,n.useMemo)((()=>{const e=S?.data?.fulfillmentIssueOptions?.resolutionActions;return e?.find((e=>e.isDefault))}),[S?.data?.fulfillmentIssueOptions?.resolutionActions]),M=Boolean(T?.specialInstructions),$=!(0,d.Z)(T?.customizations),q=Boolean(T&&!(M||$));(0,n.useEffect)((()=>{q&&w&&"POP"===D.action&&((e=>"quickView"===new URLSearchParams(e.search).get(m.FSm.modalName))(D.location)||P)&&(f.current=!0,k(w))}),[D.action,D.location,P,q,w,k]),(0,n.useEffect)((()=>{if(q&&T?.fulfillmentIssueAction&&"ACTION_SHEET"===S?.data?.fulfillmentIssueOptions?.fulfillmentIssueDisplayType&&!f.current){f.current=!0,C(A?.action?.type),k(T?.fulfillmentIssueAction?.type);const e=T?.fulfillmentIssueAction?.itemSubstitutes?.[0];e&&y(e)}}),[T?.fulfillmentIssueAction,A?.action?.type,q,S?.data?.fulfillmentIssueOptions?.fulfillmentIssueDisplayType,S?.data?.fulfillmentIssueOptions?.resolutionActions,y,C,k]),(0,n.useEffect)((()=>{if(q)return D.listen((e=>{f.current=!1;const t=(e=>"outOfItem"===new URLSearchParams(e.search).get(m.FSm.modalName))(e),i=!t&&h;g(!t),i&&(z(null),b())}))}),[D,b,h,q,z]);return{editItemParams:q?{initialQuantity:T?.quantity,initialDecimalQuantity:r.Tf.maybeFrom(T?.itemQuantity?.inSellableUnit?.value),isEditQuantityFlow:!0}:void 0,shoppingCartItemUuid:q?T?.shoppingCartItemUuid:void 0}}}}]);