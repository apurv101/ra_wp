(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[93259],{16771:(e,t,r)=>{"use strict";r.d(t,{M:()=>h,Z:()=>S});var s=r(36151),n=r(91631),i=r(62149),o=r(33535),l=r(47986),u=r(12040),d=r(85191),a=r(99990);const c=e=>{let{filterValue:t,sortAndFilters:r,filterIndex:s,option:n}=e;if(-1===s)return[...r,n];if(0===n.options.length)return[...r.filter((e=>e.uuid!==t.uuid))];const i=[...r];return i[s]=n,i},p=e=>e.reduce(((e,t)=>{const{options:r}=t;return r&&(e[t.uuid]=r),e}),{}),f=e=>e&&e.uuid?{[e.uuid]:(e.options||[]).filter((e=>{let{selected:t}=e;return t})).map((e=>{let{uuid:t}=e;return{uuid:t||""}}))}:{},h=e=>{let{sortAndFilters:t,selectedFilter:r}=e;const n=(0,i.TH)(),o=(0,s.useMemo)((()=>(0,l.U8Z)(n.search,["sortAndFilters"])),[n.search]),d=(0,s.useMemo)((()=>(0,u.nL)(o.sortAndFilters)),[o.sortAndFilters]),a=(0,s.useMemo)((()=>((e,t)=>{const r=[];return e.forEach(((e,s)=>{t.find((t=>t.uuid===e.values?.[0]?.uuid))&&r.push(s)})),r})(t||[],d)),[t,d]),c=(0,s.useMemo)((()=>({...p(d),...f(r)})),[d,r]),h=(0,s.useMemo)((()=>((e,t)=>e.map((e=>{const r=e.values?.[0];if(!r)return e;const s=r.uuid||"",n=(r.options||[]).map((e=>{const r=t[s]?.find((t=>t.uuid===e.uuid));return{...e,selected:Boolean(r)||!t[s]&&Boolean(e.selected)}}));return{...e,values:[{...r,options:n}]}})))(t||[],c)),[t,c]);return{selectedSortAndFilters:d,selectedFilterIndex:a,sortAndFiltersState:h}},S=e=>{let{sortAndFilters:t,filterUpdateNavigationType:r="PUSH"}=e;const[u,p]=(0,s.useState)(null),f=(0,i.TH)(),S=(0,n.k6)(),F=(0,o.ZP)(),_=(0,o.I0)(),{storeUuid:y}=(0,a.QT)(),{selectedSortAndFilters:g,selectedFilterIndex:m,sortAndFiltersState:A}=h({sortAndFilters:t,selectedFilter:u}),[Z,b]=(0,d.Z)({root:null,rootMargin:"",threshold:0});(0,s.useEffect)((()=>{if(b&&b.isIntersecting){const e="eats:store_search_sort_and_filters_impression";_(e,{storeSearch:{storeUuid:y}},`${e}-${y}`)}}),[_,b,y]);const v=e=>{if(!e)return;const{uuid:t,options:s}=e,n={uuid:t||"",options:(s||[]).map((e=>({uuid:e.uuid||""})))},i=g.findIndex((t=>t.uuid===e.uuid));-1===i&&0===n.options.length||("REPLACE"!==r?S.push((0,l.zSE)(f,c({filterValue:e,sortAndFilters:g,filterIndex:i,option:n}))):S.replace((0,l.zSE)(f,c({filterValue:e,sortAndFilters:g,filterIndex:i,option:n}))))},I=()=>{p(null)};return{selectedFilter:u,selectedSortAndFilters:g,selectedFilterIndex:m,sortAndFiltersState:A,sortAndFiltersRef:Z,handleClose:I,handleOptionSelect:e=>{u&&p({...u,options:(u.options||[]).map((t=>{const r=e.find((e=>e.uuid===t.uuid));return{...t,selected:Boolean(r)}}))})},handleReset:()=>{u&&(F("eats:store_search_sort_and_filters_reset",{storeSearch:{storeUuid:y,sortAndFilters:{uuid:u.uuid,type:u.type}}}),v({...u,options:[]}),I())},handleDone:()=>{if(u){const e=(u.options||[]).filter((e=>e.selected));F("eats:store_search_sort_and_filters_done",{storeSearch:{storeUuid:y,sortAndFilters:{uuid:u.uuid,type:u.type,isSingleOption:!1,selected:e.length>0}}}),v({...u,options:e}),I()}},handleOpen:e=>{u?.uuid===e.uuid?p(null):(F("eats:store_search_sort_and_filters_open",{storeSearch:{storeUuid:y,sortAndFilters:{uuid:e.uuid,type:e.type}}}),p(e))},handleOptionSingleSelect:e=>{const t=-1===g.findIndex((t=>t.uuid===e?.uuid));F("eats:store_search_sort_and_filters_done",{storeSearch:{storeUuid:y,sortAndFilters:{uuid:e.uuid,type:e.type,isSingleOption:!0,selected:t}}}),v({...e,options:t?e.options:[]})}}}},48193:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(26460),n=r(72238),i=r(21322),o=r(89400),l=r(33990);const u=e=>{let{options:t,onSelect:r}=e;const u=t.find((e=>e.selected));return(0,l.tZ)("ul",{children:t.map((e=>(0,l.tZ)(n.Z,{artwork:()=>(0,l.tZ)(s.Z,{checked:e.uuid===u?.uuid,onChange:()=>r([e])}),onClick:()=>r([e]),children:(0,l.tZ)(i.Z,{children:(0,l.tZ)(o.Z,{badge:e.badge,baseFont:"LabelMedium"})})},e.uuid)))})};var d=r(38488);const a=e=>{let{options:t,onSelect:r,minPermitted:s,maxPermitted:o}=e;const u=t.filter((e=>e.selected)),a=u.length,c=e=>{const t=u.some((t=>t.uuid===e.uuid)),n=u.filter((t=>t.uuid!==e.uuid));return!t&&a<o?r([...n,e]):t&&a>s?r([...n]):void 0};return(0,l.tZ)("ul",{children:t.map((e=>(0,l.tZ)(n.Z,{onClick:()=>c(e),artwork:()=>(0,l.tZ)(d.Z,{checked:Boolean(e.selected),onChange:()=>c(e)}),children:(0,l.tZ)(i.Z,{children:e.value})},e.uuid)))})},c=e=>{let{type:t,options:r,maxPermitted:s,minPermitted:n,onSelect:i}=e;switch(t){case"sort":return(0,l.tZ)(u,{options:r,onSelect:i});case"aisleFilter":case"brandFilter":return(0,l.tZ)(a,{options:r,maxPermitted:s,minPermitted:n,onSelect:i});default:return null}}},41218:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(36151),n=r(92300),i=r(32857),o=r("__fusion__955"),l=r("__fusion__1405"),u=r("__fusion__1643"),d=r("__fusion__678"),a=r(54840),c=r(89400),p=r(33990);const f=e=>{let{selectedSortAndFilters:t,options:r,uuid:s,badge:n,isSelected:i}=e;const o=t.find((e=>e.uuid===s))?.options?.[0]?.uuid,l=r.find((e=>e.uuid===o));return(0,p.tZ)(c.Z,{badge:l?l.badge:n,baseFont:"LabelSmall",baseColor:i?"contentInversePrimary":"contentPrimary"})},h={[a.GZ]:u.default,[a.Vz]:l.default},S={[a.GZ]:o.default,[a.Vz]:l.default},F={[a._l]:f},_={[a._l]:"store-search-sort-by-pill",aisleFilter:"store-search-aisle-pill",brandFilter:"store-search-brand-pill",[a.GZ]:"store-search-deals-pill"},y=(0,s.forwardRef)(((e,t)=>{let{filterValue:r,selectedSortAndFilters:o,onOpen:l,onOptionSingleSelect:u,...a}=e;const{uuid:f,type:y,options:g}=r,m=(0,s.useMemo)((()=>(o.find((e=>e.uuid===f))?.options||[]).length),[f,o]);if(!g||!g?.length)return null;const A=g.length>1,Z=A?r.badge:g[0]?.badge||r.badge,b=(y||"")in h?()=>{const e=((e,t)=>t&&e in S?S[e]:e in h?h[e]:null)(y,a.isSelected);return(0,p.tZ)(e,{})}:null,v=A?()=>(0,p.tZ)(d.default,{}):void 0,I=y?F[y]:null;return(0,p.tZ)(i.Z,{ref:t,startEnhancer:b,endEnhancer:v,...a,onClick:()=>{A?l(r):u(r)},"data-testid":_[y||""],overrides:(0,n.aO)(a.overrides,{BaseButton:{style:e=>{let{$theme:t}=e;return{whiteSpace:"nowrap"}}}}),children:I?(0,p.tZ)(I,{selectedSortAndFilters:o,options:g,uuid:f,badge:Z,isSelected:a.isSelected}):(0,p.BX)(p.HY,{children:[(0,p.tZ)(c.Z,{badge:Z,baseFont:"LabelSmall",baseColor:a.isSelected?"contentInversePrimary":"contentPrimary"}),A&&m?(0,p.BX)(p.HY,{children:[" ",`(${m})`]}):null]})})}));y.displayName="StoreSearchSharedFilterPill";const g=y},96520:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(36151),n=r(55758),i=r(7221),o=r(74622),l=r(2237),u=r(62459);var d=r(90075),a=r(16771);function c(e){let{storeUuid:t,sectionUuid:r,storeSearchQuery:c,isGrocery:p,targetLocation:f}=e;const h=(0,s.useRef)(null),[S,F]=(0,s.useState)(null),_=(0,n.d)(),y=(0,d.Z)(),{isSortAndFilterApplied:g,sortAndFiltersApplied:m}=(e=>{let{sortAndFilters:t}=e;const{selectedSortAndFilters:r,sortAndFiltersState:n}=(0,a.M)({sortAndFilters:t,selectedFilter:null}),i=(0,s.useMemo)((()=>n.map((e=>{const t=e.values?.[0];if(!t)return;const r=t.options?.filter((e=>e.selected));return r&&0!==r.length?{...t,options:r}:void 0})).filter(Boolean)),[n]);return{isSortAndFilterApplied:r.length>0,sortAndFiltersApplied:i}})({sortAndFilters:S}),A=function(e,t){const r=(0,u.Z)("getInStoreItemsByUserQueryV1"),s={queryKey:(0,l.H)("getInStoreItemsByUserQueryV1",e),queryFn:e=>{let{queryKey:t}=e;return r.request("getInStoreItemsByUserQueryV1",t[1])}};return t&&t.queryObserverOptions&&Object.assign(s,t.queryObserverOptions),(0,o.useQuery)(s)}({diningMode:_,sectionUUIDs:r&&!p?[r]:null,storeUUIDs:[t],userQuery:c,isGrocery:p,targetLocation:f},{queryObserverOptions:{enabled:Boolean(c)&&!y}}),Z=(0,i.u)({diningMode:_,sectionUUIDs:r&&!p?[r]:null,storeUUIDs:[t],userQuery:c,isGrocery:p,targetLocation:f,entrypointContext:"IN_STORE_SEARCH",...g?{sortAndFilters:m}:null},{queryObserverOptions:{enabled:Boolean(c)&&y}}),{error:b,isLoading:v,isSuccess:I,isError:U}=y?Z:A,O=Boolean(S),B=Boolean(I||U),M=(0,s.useMemo)((()=>({data:y?Z.data?.catalogSectionsMap:A.data,isLoading:y?v||!O:v,error:b,isFetched:y?B&&O:B})),[b,O,A.data,Z.data,B,v,y]),P=y&&Z.data?.sortAndFilters||null;return(0,s.useEffect)((()=>{!y||!I||O&&c===h.current||(h.current=c,F(P||[]))}),[y,I,O,P,c]),{catalogSections:M,sortAndFilters:S}}},90075:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(60849),n=r(41063);const i=()=>{const e={...n.v.in_store_search_sort_and_filters,defaultValue:!1};return(0,s.ip)(e)}},7221:(e,t,r)=>{"use strict";r.d(t,{u:()=>o});var s=r(74622),n=r(2237),i=r(62459);function o(e,t){const r=(0,i.Z)("getInStoreSearchV1"),o=(0,n.H)("getInStoreSearchV1",e);return(0,s.useQuery)({queryKey:o,queryFn:e=>{let{queryKey:t}=e;return r.request("getInStoreSearchV1",t[1])},...t?.queryObserverOptions})}},44764:(e,t,r)=>{e.exports=r.p+"f601b8be1064c30a.svg"}}]);