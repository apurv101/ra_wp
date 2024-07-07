(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[4694],{17759:(e,s,t)=>{"use strict";t.d(s,{DR:()=>i,JK:()=>a,OU:()=>n,il:()=>r});Object.freeze({Personal:"Personal",Business:"Business",ManagedBusiness:"ManagedBusiness",ManagedFamily:"ManagedFamily",Commuter:"Commuter"}),Object.freeze({UNKNOWN:"UNKNOWN",PERSONAL:"PERSONAL",BUSINESS:"BUSINESS",MANAGED_BUSINESS:"MANAGED_BUSINESS",MANAGED_FAMILY:"MANAGED_FAMILY",COMMUTER:"COMMUTER",TRANSIT:"TRANSIT"}),Object.freeze({Centralized:"Centralized",Decentralized:"Decentralized"}),Object.freeze({Weekly:"Weekly",Monthly:"Monthly"}),Object.freeze({UNKNOWN:"UNKNOWN",DELEGATOR:"DELEGATOR",DELEGATEE:"DELEGATEE"}),Object.freeze({house:"house",basketball:"basketball",flower:"flower",lightBulb:"lightBulb",lightningBolt:"lightningBolt",musicNote:"musicNote",rocketship:"rocketship",star:"star",briefcase:"briefcase"}),Object.freeze({EXPENSIFY:"EXPENSIFY",CONCUR:"CONCUR",CERTIFY:"CERTIFY",CHROME_RIVER:"CHROME_RIVER",SERKO_ZENO:"SERKO_ZENO",RYDOO:"RYDOO",HAPPAY:"HAPPAY",ZOHO_EXPENSE:"ZOHO_EXPENSE",EXPENSYA:"EXPENSYA",FRAEDOM:"FRAEDOM",UNUSED_2:"UNUSED_2",UNUSED_3:"UNUSED_3",UNUSED_4:"UNUSED_4",UNUSED_5:"UNUSED_5",UNUSED_6:"UNUSED_6",UNUSED_7:"UNUSED_7",UNUSED_8:"UNUSED_8",UNUSED_9:"UNUSED_9",UNRECOGNIZED:"UNRECOGNIZED"});const n="pending",a="active",i="unsupported",r="deactivated";Object.freeze({NOT_REQUIRED:"NOT_REQUIRED",REQUIRED:"REQUIRED"}),Object.freeze({NOT_APPLICABLE:"NOT_APPLICABLE",ACCEPTED:"ACCEPTED",NOT_ACCEPTED:"NOT_ACCEPTED"}),Object.freeze({TRAVEL:"TRAVEL",CENTRAL:"CENTRAL",EATS:"EATS",VOUCHERS:"VOUCHERS",PLACEHOLDER_5:"PLACEHOLDER_5",PLACEHOLDER_6:"PLACEHOLDER_6",PLACEHOLDER_7:"PLACEHOLDER_7",PLACEHOLDER_8:"PLACEHOLDER_8",PLACEHOLDER_9:"PLACEHOLDER_9"}),Object.freeze({EXPENSE_PROVIDER:"EXPENSE_PROVIDER",IN_APP_TERMS_ACCEPTED:"IN_APP_TERMS_ACCEPTED"}),Object.freeze({EXPENSE_PROVIDER:"EXPENSE_PROVIDER",IN_APP_TERMS_ACCEPTED:"IN_APP_TERMS_ACCEPTED",UNMANAGED:"UNMANAGED"}),Object.freeze({RIDER:"RIDER",EATS:"EATS",UNUSED_1:"UNUSED_1",UNUSED_2:"UNUSED_2",UNUSED_3:"UNUSED_3",UNUSED_4:"UNUSED_4",UNUSED_5:"UNUSED_5",UNUSED_6:"UNUSED_6",UNUSED_7:"UNUSED_7",UNUSED_8:"UNUSED_8",UNUSED_9:"UNUSED_9",UNUSED_10:"UNUSED_10",UNUSED_11:"UNUSED_11",UNUSED_12:"UNUSED_12",UNUSED_13:"UNUSED_13",UNUSED_14:"UNUSED_14",UNUSED_15:"UNUSED_15",UNUSED_16:"UNUSED_16",UNUSED_17:"UNUSED_17",UNUSED_18:"UNUSED_18",UNUSED_19:"UNUSED_19",UNUSED_20:"UNUSED_20"}),Object.freeze({DELEGATEE_NOT_FOUND:"DELEGATEE_NOT_FOUND"}),Object.freeze({PAYMENT_PROFILE_NOT_FOUND:"PAYMENT_PROFILE_NOT_FOUND"}),Object.freeze({UNSUPPORTED_PAYMENT_PROFILE:"UNSUPPORTED_PAYMENT_PROFILE"})},86979:(e,s,t)=>{"use strict";t.d(s,{rW:()=>v,eY:()=>O,og:()=>x,Eb:()=>N,dR:()=>b,FY:()=>A,oz:()=>g,Nj:()=>U,jm:()=>B,b_:()=>_,Qo:()=>S,b6:()=>h,XC:()=>C,DC:()=>D});var n=t(40836),a=t(88631),i=t(99195),r=t(49201),o=t(47986),l=t(83401),u=t(91931),d=t(88885),c=t(33990);const p=(0,u.zo)("span",(e=>{let{$color:s,$theme:t}=e;return{color:{CONTENT_POSITIVE:t.colors.contentPositive,DISABLED:t.colors.contentStateDisabled,SECONDARY:t.colors.contentSecondary}[s]}})),y=e=>{let{displayValue:s,paymentProfileTitle:t,useCredits:n,hasBusinessProfiles:a}=e;const i=(0,d.T)(),r=s?.financialAccountTexts?.defaultText||"";let o=t?.text;return t?.displayable?(0,c.BX)(c.HY,{children:[a?(0,c.BX)(c.HY,{children:[i("components.payments_cell.personal")," - "]}):null,t?.displayable]}):(n&&(o=r?`${r} + ${o}`:o),a&&(o=`${i("components.payments_cell.personal")} - ${o}`),(0,c.tZ)("span",{children:o}))},E=e=>{const s=e?.financialAccountTexts?.detailTextV2,t=s?.richTextElements?.[0],n=t?.text?.text?.text,a=t?.text?.text?.color;return{color:a,text:n}},f=e=>{let{displayValue:s}=e;const{color:t,text:n}=E(s);return(0,c.tZ)(p,{$color:t,children:n})};function m(e){return!e||e.type===a.Hu.Personal}function P(e){return e.map((e=>e.amountString)).join(", ")}function U(e){if(!e)return null;const s={text:"",displayable:null},t=(e.tokenType||"").toLowerCase();switch(t){case"uber_test":case"derivative":case"paytm":s.text=e.cardType||t||"";break;case"paypal":s.displayable=(0,c.tZ)(n.v,{id:"shared.paypal"});break;case"cash":s.displayable=(0,c.tZ)(n.v,{id:"shared.cash"});break;case"stored_value":s.displayable=(0,c.tZ)(n.v,{id:"shared.uber_cash"});break;case"upi":s.displayable=(0,c.tZ)(n.v,{id:"shared.upi"});break;case"paypay":s.displayable=(0,c.tZ)(n.v,{id:"shared.paypay"});break;case"venmo":s.displayable=(0,c.tZ)(n.v,{id:"shared.venmo"});break;case"braintree":case"zaakpay":case"bancontact":s.text=function(e){const{cardType:s,cardNumber:t,displayable:n}=e;return n?.displayName?n.displayName:`${s?`${s} - `:"•••• "}${t||""}`}(e);break;case"apple_pay_display":s.text="Apple Pay";break;case"UBER_PAY":s.text=e.tokenDisplayName||e.displayable?.displayName||e.accountName||"";break;default:s.text=e.accountName||""}return s}const b=(e,s,t)=>{if(!e)return null;const a=(0,c.tZ)("div",{children:e?.name});if(!e?.components?.periodicCapComponent&&!e?.components?.perTripCapComponent)return{displayable:t?(0,c.tZ)("div",{children:e.description}):(0,c.tZ)(n.v,{id:"checkout.business_payments_balance.billed_to_company"}),text:""};if(e.components?.periodicCapComponent){const{amount:t,usage:i,currencyCode:o}=e.validationExtra?.periodicCapBalance||{},l="number"==typeof t&&"number"==typeof i?(0,r.xG)(s,o||"",100*(t-i)):null;if(l)return{displayable:{DAILY:(0,c.tZ)(n.v,{id:"checkout.business_payments_balance.daily",data:{balance:l}}),WEEKLY:(0,c.tZ)(n.v,{id:"checkout.business_payments_balance.weekly",data:{balance:l}}),MONTHLY:(0,c.tZ)(n.v,{id:"checkout.business_payments_balance.monthly",data:{balance:l}}),DEFAULT:a}[e.components?.periodicCapComponent?.period||"DEFAULT"],text:""}}else{const{amount:t,currencyCode:a}=e.validationExtra?.perTripCapBalance||{},i="number"!=typeof t?"":(0,r.xG)(s,a||"",100*t);if(i)return{displayable:(0,c.tZ)(n.v,{id:"checkout.business_payments_balance.per_order",data:{balance:i}}),text:""}}return{displayable:a,text:""}};function _(e){return"ManagedBusiness"===e?.type&&e?.managedBusinessProfileAttributes?.theme?.logos?.Large?.url||""}function C(e,s){return e.find((e=>e.type===a.Hu.Personal&&e.defaultPaymentProfileUuid===s))}function h(e,s){const t=e.find((e=>e.uuid===s));return m(t)?null:t}function S(e){return e&&"Personal"!==e.type?"business":"personal"}function N(e){let{profile:s,paymentProfile:t,useCredits:i,paymentProfiles:r,creditBalances:o,selectedBusinessPolicy:u,selectedBusinessExpenseCode:d,selectedBusinessExpenseMemo:p,hasBusinessProfiles:_,errorActions:C,showCheckoutErrors:h,secondaryPaymentSelectionRequired:S,localeCode:N,shouldShowSecondaryPaymentSelection:g,isOrgManagedUser:B,auxiliaryPaymentProfile:D,hideUberCash:x}=e,O={text:"",displayable:null},v=!1;const A={payment:[],mealProgram:null,expenseCode:null},R={message:{text:"",displayable:null},action:null},T=U(t),{title:Z,description:M,shouldRenderBalanceBreakdown:L,hasUberCashTitle:k}=(e=>{let{paymentProfile:s,hasBusinessProfiles:t,creditBalances:n,useCredits:a}=e;const i=n?.find((e=>Boolean(e.balancesV2))),r=i?.balancesV2;if(!r||!s)return{shouldRenderBalanceBreakdown:!1,hasUberCashTitle:!1,description:{displayable:null,text:""},title:{displayable:null,text:""}};const o=U(s),l=s?.uuid?r?.displayOverrides?.[s?.uuid]:{},u=Boolean(l)&&a?l:r?.defaultDisplay,{text:d}=E(u),p=a&&Boolean(r)&&Boolean(d);if(a&&!p){const e=r?.defaultDisplay?.uberBalanceInfo?.defaultText||"";return{shouldRenderBalanceBreakdown:!1,hasUberCashTitle:Boolean(e),description:{displayable:null,text:""},title:{displayable:null,text:e}}}return{title:{displayable:(0,c.tZ)(y,{displayValue:u,paymentProfileTitle:o,useCredits:a,hasBusinessProfiles:t}),text:""},description:{displayable:(0,c.tZ)(f,{displayValue:u}),text:""},shouldRenderBalanceBreakdown:p,hasUberCashTitle:!1}})({paymentProfile:t,creditBalances:o,useCredits:i,hasBusinessProfiles:_}),I=k?Z:{text:"",displayable:(0,c.tZ)(n.v,{id:"shared.uber_cash_with_balance",data:{balance:P(o)}})};if(_)if(t&&(0,l.H)(t)){O.displayable=(0,c.tZ)(n.v,{id:"components.payments_cell.personal"});const e=U(D);e&&(A.payment.push(e),T&&A.payment.push({displayable:(0,c.tZ)(n.v,{id:"shared.add_secondary_payment_method"}),text:""}))}else if(!B&&m(s)){if(O.displayable=(0,c.tZ)(n.v,{id:"components.payments_cell.personal"}),D){const e=U(D);e&&(A.payment.push(e),T&&A.payment.push(T))}else L?(O=Z,A.payment.push(M),v=!0):(i&&A.payment.push(I),T&&A.payment.push(T));t||(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.addPaymentMethod"}),R.action=C.getPaymentSelectAction())}else{if(O.text=s?.name||"",O.displayable=(0,c.tZ)(n.v,{id:"components.payments_cell.business"}),s?.isMealProgramRequired){if(u?.isExpenseMemoRequired&&h&&(p||(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.add_expense_memo"}),R.action=C.getAddExpenseMemoAction(s?.uuid||"",u?.uuid||""))),u?.isExpenseCodeRequired&&h&&(d?.expenseCode||(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.add_expense_code"}),R.action=C.getAddExpenseCodeAction(s?.uuid||"",u?.uuid||""))),g){const e=U(r.find((e=>e.uuid===s?.secondaryPaymentProfileUuid)));e?A.payment.push(e):h&&S&&(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.add_secondary_payment_method"}),R.action=C.getAddSecondaryPaymentMethodAction(s?.uuid||"",u?.uuid||""))}if(u){if(s.managedBusinessProfileAttributes?.billingMode!==a.vO.Decentralized||u.components?.periodicCapComponent||u.components?.perTripCapComponent){const e=b(u,N,!1);e&&(A.mealProgram=e)}}else R.message.displayable=(0,c.tZ)(n.v,{id:"shared.select_meal_program"}),R.action=C.getSelectMealProgramAction(s?.uuid||"")}(function(e,s){return s&&(0,l.H)(s)||e?.type===a.Hu.Personal||e?.type===a.Hu.Business||e?.type===a.Hu.ManagedBusiness&&e?.managedBusinessProfileAttributes?.billingMode===a.vO.Decentralized})(s,t)&&(T?A.payment.push(T):(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.addPaymentMethod"}),R.action=C.getAddPaymentMethodAction(s?.uuid||"")))}else D?(O={text:D?.displayable?.displayName||D?.tokenDisplayName||"",displayable:null},g?(R.message.displayable=(0,c.tZ)(n.v,{id:"shared.add_secondary_payment_method"}),R.action=C.getPaymentSelectAction()):T&&A.payment.push(T)):i&&L?(O=Z,A.payment.push(M),v=!0):i&&!x?(O=I,T&&A.payment.push(T)):O=T||O;return{primary:O,secondary:A,error:R,hidePlusSign:v}}function g(e){const s=(e?.tokenType||"unknown").toLowerCase();switch(s){case"google":case"google_pay":return i.Z.google;case"paypal":case"uber_test":case"derivative":case"paytm":case"braintree":case"zaakpay":return function(e){const s=(e||"unknown").toLowerCase();switch(s){case"american_express":case"amex":return i.Z["american express"];default:return i.Z[s]||i.Z.unknown}}(e?.cardType||s);case"stored_value":return i.Z.uber;case"apple_pay_display":return i.Z.applepay;default:return i.Z[s]||i.Z.unknown}}function B(e){const s=e.find((e=>"Personal"===e.type));return{profileUuid:s?.uuid||"",paymentProfileUuid:s?.defaultPaymentProfileUuid||""}}function D(e,s){const t=s.find((s=>s.uuid===e&&s.type!==a.Hu.ManagedFamily));return Boolean(t)}function x(e){const s=e.find((e=>"Personal"!==e.type&&e.type!==a.Hu.ManagedFamily));return{profileUuid:s?.uuid||"",paymentProfileUuid:s?.defaultPaymentProfileUuid||""}}function O(e,s,t){return{getPaymentSelectAction:function(){return()=>e.push((0,o.vN_)(s,"paymentsSelectProfile"))},getAddPaymentMethodAction:function(t){return()=>e.push((0,o.vN_)(s,"paymentsEdit"))},getSelectMealProgramAction:function(s){return()=>e.push(t(s))},getAddExpenseCodeAction:function(t,n){const a=(0,o.vN_)(s,"businessSelectExpenseCode",`${t}|${n}`);return()=>e.push(a)},getAddExpenseMemoAction:function(t,n){const a=(0,o.vN_)(s,"businessEnterExpenseMemo",`${t}|${n}`);return()=>e.push(a)},getAddSecondaryPaymentMethodAction:function(t,n){const a=(0,o.vN_)(s,"paymentsSelectSecondaryPaymentProfile",`${t}|${n}`);return()=>e.push(a)}}}const v=Object.freeze({mealPlan:"meal_plan",personalBusiness:"personal_business",personalOnly:"personal_only",businessOnly:"business_only",unknown:"unknown"}),A=(e,s,t)=>t?v.businessOnly:e&&s===v.mealPlan?v.mealPlan:e?v.personalBusiness:e?v.unknown:v.personalOnly},99195:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var n=t(8051);const a={alipay:(0,n.pZ)(t(84648)),"american express":(0,n.pZ)(t(31153)),applepay:(0,n.pZ)(t(44001)),cash:(0,n.pZ)(t(4354)),cc:(0,n.pZ)(t(70925)),diners:(0,n.pZ)(t(18646)),discover:(0,n.pZ)(t(90465)),google:(0,n.pZ)(t(84174)),india:(0,n.pZ)(t(4354)),jcb:(0,n.pZ)(t(42643)),mastercard:(0,n.pZ)(t(36391)),paypal:(0,n.pZ)(t(34506)),paytm:(0,n.pZ)(t(8797)),uber:(0,n.pZ)(t(90187)),unionpay:(0,n.pZ)(t(20072)),unknown:(0,n.pZ)(t(22181)),ubertest:(0,n.pZ)(t(90187)),venmo:(0,n.pZ)(t(8521)),visa:(0,n.pZ)(t(66987)),upi:(0,n.pZ)(t(65760)),paypay:(0,n.pZ)(t(85931)),derivative:(0,n.pZ)(t(60413)),vouchers:(0,n.pZ)(t(40050)),bancontact:(0,n.pZ)(t(89373))}},21117:(e,s,t)=>{"use strict";t.d(s,{Z:()=>S});var n=t(36151),a=t(74622),i=t(91631),r=t(86979),o=t(20568),l=t(71076);function u(e){const[s,t]=(0,n.useState)(null),{searchBusinessExpenseCodes:a,businessExpenseCodes:i,setBusinessExpenseCodes:r}=function(e){const[s,t]=(0,n.useState)({data:null,error:null,hasLoaded:!1,isLoading:!1}),a=(0,o.Z)("searchBusinessExpenseCodesForUserV1"),i=e=>e?e.trim().toLowerCase():"";return{searchBusinessExpenseCodes:(0,n.useCallback)((n=>{let{query:r,resetPageToken:o}=n;t({...s,isLoading:!0});const u=i(r),d=Boolean(s.data&&i(s.data.query)===u);if(d&&o)return void t({...s,isLoading:!1});const c=o?"1":s.data?.paging?.nextPageToken;a({profileUuid:e,pagingInfo:{pageToken:c||"1",limit:25},keyword:u}).then((e=>{const n=Number(e.paging?.currentPage)>1&&d;t({data:{...e,...n?{expenseCodes:[...s.data?.expenseCodes||[],...e.expenseCodes||[]]}:null},error:null,hasLoaded:!0,isLoading:!1})})).catch((e=>{e instanceof l.F||t({data:null,error:e,hasLoaded:!0,isLoading:!1})}))}),[s,e,a]),businessExpenseCodes:s,setBusinessExpenseCodes:t}}(e.profileUuid);return(0,n.useEffect)((()=>{e.profileUuid&&e.policyUuid&&!i?.hasLoaded&&!i.isLoading&&a({query:"",resetPageToken:!0})}),[e.policyUuid,e.profileUuid,i,a]),{businessExpenseCodes:i,searchBusinessExpenseCodes:a,setBusinessExpenseCodes:r,selectedBusinessExpenseCode:s,setSelectedBusinessExpenseCode:t}}var d=t(62149),c=t(47986);var p=t(88631),y=t(2237),E=t(62459);var f=t(98976);function m(e){const[s,t]=(0,n.useState)(null),[i,r]=(0,n.useState)(null),o=function(e,s){const t=(0,E.Z)("getBusinessPoliciesForUserV2"),n=(0,y.H)("getBusinessPoliciesForUserV2",e);return(0,a.useQuery)({queryKey:n,queryFn:e=>{let{queryKey:s}=e;return t.request("getBusinessPoliciesForUserV2",s[1])},...s?.queryObserverOptions})}(e,{queryObserverOptions:{enabled:Boolean(s?.uuid&&s.type===p.Hu.ManagedBusiness&&e.profileUuid||e.checkoutProfileType===p.Hu.ManagedFamily)}}),l=(0,f.hn)(o);return{businessPolicies:{hasLoaded:l?.hasLoaded,data:l?.data?.businessPolicies,isLoading:l?.isLoading,error:l?.error},policies:l?.data?.policies,selectedBusinessProfile:s,selectedBusinessPolicy:i,setSelectedBusinessPolicy:r,setSelectedBusinessProfile:t}}var P=t(33535),U=t(34626),b=t(15070),_=t(17759);function C(e){let{hasBusinessProfile:s,businessProfilesData:t}=e;return s&&Boolean((t||[]).find((e=>e.status===_.DR&&"Personal"===e.type)))}var h=t(63824);function S(){const{user:e}=(0,U.Z)(),s=(0,d.TH)(),t=(0,i.k6)(),o=(0,P.ZP)(),l=(0,b.v)((e=>e.checkout)),y=l?.selectedBusinessPayment||null,[f,_]=(0,n.useState)(!1),S=e.data?.isLoggedIn,N=(0,E.Z)("getBusinessProfilesV1"),g=(0,a.useQuery)("getBusinessProfilesV1",(()=>N.request("getBusinessProfilesV1",null)),{enabled:S}),{params:B,isOnPolicyRoute:D,isOnSecondaryPaymentRoute:x,isOnExpenseCodeRoute:O,isOnExpenseMemoRoute:v,isOnStartGroupOrder:A}=function(){const e=(0,d.TH)(),{modalContext:s}=(0,c.RAN)(e,["modalContext"]),{modalName:t}=(0,c.RAN)(e,["modalName"]),[n,a]=s.split("|"),r="businessSelectPolicy"===t,o="paymentsSelectSecondaryPaymentProfile"===t,l="businessSelectExpenseCode"===t,u="businessEnterExpenseMemo"===t,p=n&&a?{params:{profileUuid:n,policyUuid:a}}:null,y=r&&n?{params:{profileUuid:n}}:null,E=o?p:null,f=l?p:null,m=u?p:null,P=(0,i.LX)(e.pathname,c.YEU),U=(0,i.LX)(e.pathname,c.gqw),b=Boolean(P)||Boolean(U);return{params:y?.params||E?.params||f?.params||m?.params||P?.params||U?.params||{},isOnPolicyRoute:r,isOnSecondaryPaymentRoute:o,isOnExpenseCodeRoute:l,isOnExpenseMemoRoute:u,isOnStartGroupOrder:b}}(),R=D||x||O||v,T=B.profileUuid||y?.profileUuid||"";let Z=!1;(g.data||[]).forEach((e=>{[p.Hu.Business,p.Hu.ManagedBusiness].includes(e.type)&&(Z=!0)}));const M=g?.data?.find((e=>e?.defaultPaymentProfileUuid===l?.selectedPersonalPayment?.uuid)),L=M?.type,{businessPolicies:k,policies:I,selectedBusinessProfile:H,selectedBusinessPolicy:F,setSelectedBusinessPolicy:q,setSelectedBusinessProfile:w}=m({profileUuid:T,checkoutProfileType:L,timezone:(0,h.Z)()}),{businessExpenseCodes:V,searchBusinessExpenseCodes:z,setBusinessExpenseCodes:Y,selectedBusinessExpenseCode:G,setSelectedBusinessExpenseCode:j}=u({profileUuid:T,policyUuid:B.policyUuid||""}),[$,X]=function(e){const[s,t]=(0,n.useState)(null);return[s,t]}(B.policyUuid),{currentStep:K}=function(e){const[s,t]=(0,n.useState)("PROFILE"),{selectedBusinessPayment:a,selectedBusinessProfile:i,selectedBusinessPolicy:r,selectedBusinessExpenseCode:o,selectedBusinessExpenseMemo:l}=e;return(0,n.useEffect)((()=>{i||t("PROFILE"),i&&!r&&t("POLICY"),i&&r&&i?.isMealProgramRequired&&(r.isExpenseCodeRequired||t("COMPLETE"),r?.isExpenseCodeRequired&&!o&&t("EXPENSE_CODE"),r?.isExpenseCodeRequired&&!r.isExpenseMemoRequired&&o&&t("COMPLETE"),r?.isExpenseCodeRequired&&o&&r?.isExpenseMemoRequired&&t(l?"COMPLETE":"EXPENSE_MEMO")),a?.paymentProfileUuid&&i?.type===p.Hu.Business&&t("COMPLETE")}),[a,i,r,o,l]),{currentStep:s}}({selectedBusinessPayment:y,selectedBusinessProfile:H,selectedBusinessPolicy:F,selectedBusinessExpenseCode:G,selectedBusinessExpenseMemo:$}),W=(0,n.useCallback)((()=>{if(D)return(0,c.vN_)(s,"paymentsSelectProfile");if(x||O)return k&&k.data&&k.data&&k.data.length>1&&H&&H.uuid?(0,c.vN_)(s,"businessSelectPolicy",H.uuid):(0,c.vN_)(s,"paymentsSelectProfile");if(v){if(F&&H&&H.uuid){const e=F.uuid,t=H.uuid;return(0,c.vN_)(s,"businessSelectExpenseCode",`${t}|${e}`)}return(0,c.vN_)(s,"paymentsSelectProfile")}return(0,c.C45)(s)}),[k,O,v,x,D,s,F,H]),Q=(0,n.useCallback)((e=>"group_order"===e?(0,c.Ljk)(s,(0,c.WxO)(B)):(0,c.C45)(s)),[s,B]),J=(0,n.useCallback)((()=>{w(null),X(null),j(null),q(null),Y({isLoading:!1,hasLoaded:!1,data:null,error:null})}),[Y,j,X,q,w]),ee=(0,n.useCallback)(((e,n)=>{J(),o("eats:business_switch_profile_type",{businessDetails:{parentFlow:n||"checkout"}});const a=(g.data||[]).find((s=>s.uuid===e));if(!g.data||!a)return t.replace(Q(n));if(w(a),!a.isManagedBusiness)return t.replace(Q(n));const i="group_order"===n?(0,c.$m7)(s,(0,c.WxO)(B),e):(0,c.vN_)(s,"businessSelectPolicy",e);return t.replace(i)}),[Q,g.data,t,s,J,w,B,o]),se=(0,n.useCallback)((()=>H?{profileUUID:H?.uuid,profileType:H?.type,policyUUID:F?.uuid,policyVersion:F?.version,expenseCode:G?.expenseCode,expenseMemo:$}:{policyUUID:null,profileUUID:null,policyVersion:null,profileType:p.Hu.Personal,expenseCode:null,expenseMemo:null}),[H,F,G,$]);return(0,n.useEffect)((()=>{B.profileUuid&&B.profileUuid!==H?.uuid&&ee(B.profileUuid),(D||A)&&k?.hasLoaded&&H?.uuid===B.profileUuid&&1===k?.data?.length&&q((k?.data||[])[0])}),[k,I,g,t,D,s,ee,B,H,q,A]),(0,n.useEffect)((()=>{if(!R&&!H&&g.data&&y&&y.profileUuid&&y.profileUuid!==H?.uuid){const e=(0,r.b6)(g.data,y.profileUuid);w(e)}if(!R&&k.data&&y&&y.policyUuid&&y.policyUuid!==F?.uuid){const e=(k?.data||[]).find((e=>e.uuid===y.policyUuid));q(e)}}),[R,y,g.data,w,H,I,k,q,F]),{businessPolicies:k,policies:I,businessProfiles:g,getBusinessProfiles:g.refetch,onSelectBusinessProfile:ee,setSelectedBusinessProfile:w,hasBusinessProfile:Z,isOrgManagedUser:C({hasBusinessProfile:Z,businessProfilesData:g.data}),selectedBusinessProfile:H,selectedBusinessPolicy:F,setSelectedBusinessPolicy:q,businessExpenseCodes:V,searchBusinessExpenseCodes:z,selectedBusinessExpenseCode:G,setSelectedBusinessExpenseCode:j,selectedBusinessExpenseMemo:$,setSelectedBusinessExpenseMemo:X,requiresProfileFlow:e=>{if(!g.data||!e)return!1;const s=g.data.find((s=>s.uuid===e));return s?.type===p.Hu.ManagedBusiness||s?.type===p.Hu.Business},getBackUrl:W,handleBusinessBackButton:()=>{X(null),j(null),z({query:"",resetPageToken:!0}),(O||D||x)&&q(null),t.replace(W())},currentStep:K,confirmedProfileSelected:f,setConfirmedProfileSelected:_,getInitialUrl:Q,getBusinessDetails:se}}},46113:(e,s,t)=>{"use strict";t.d(s,{r:()=>a});var n=t(83401);function a(e){return{healthcareBenefitsPaymentProfile:e.find((e=>(0,n.H)(e))),nonHealthcareBenefitsPaymentProfiles:e.filter((e=>!(0,n.H)(e)))}}},84939:(e,s,t)=>{"use strict";t.d(s,{Z:()=>B});var n=t(36151),a=t(58984),i=t(15070),r=t(34626),o=t(33535),l=t(9545),u=t(64388),d=t(49188),c=t(74622),p=t(2237),y=t(62459);function E(e,s){const t=(0,y.Z)("getUberBalancesV1"),n=(0,p.H)("getUberBalancesV1",e);return(0,c.useQuery)({queryKey:n,queryFn:e=>{let{queryKey:s}=e;return t.request("getUberBalancesV1",s[1])},...s?.queryObserverOptions})}var f=t(60849),m=t(79620),P=t(86990);function U(e){let{cartCurrencyCode:s,storeCurrencyCode:t}=e;return Boolean(s&&t&&s!==t)}var b=t(70605),_=t(88631),C=t(20924),h=t(68262),S=t(76892),N=t(46113),g=t(26487);function B(e){let{businessProfiles:s,draftOrder:t}=e;const c=(0,a.I0)();let p=!1;const y=(0,o.ZP)(),{user:B}=(0,r.Z)(),{creditBalances:D,getCreditBalances:x}=function(){const{serverCart:e}=(0,l.Z)(),{store:s}=(0,u.ZP)(e.data?.storeUuid),t=(0,o.ZP)(),{user:a}=(0,r.Z)(),i=a.data?.isLoggedIn,c=e.data?.cartUuid,p=s.data?.uuid,y=(0,P.Z)({storeId:p??"",originalCurrencyCode:e.data?.currencyCode||""}),b=s.data?.currencyCode||"",_=(0,f.ip)({...m.S.ubercash_balance_breakdown_enabled,defaultValue:!1});(0,n.useEffect)((()=>{U({cartCurrencyCode:y,storeCurrencyCode:b})?t("eats:cart__currency_code__mismatch",{cartCurrencyCodeMismatch:{detectionSource:"useGetCreditBalancesHook",cartInfo:{cartUuid:c,currencyCode:y},storeInfo:{storeUuid:p,currencyCode:b}}}):y&&b&&t("eats:cart__currency_code__match",{cartCurrencyCodeMismatch:{detectionSource:"useGetCreditBalancesHook",cartInfo:{cartUuid:c,currencyCode:y},storeInfo:{storeUuid:p,currencyCode:b}}})}),[c,p,y,b,t]),(0,n.useEffect)((()=>{t("eats:load_uber_cash_balance",{source:_?"ubercash":"passport"})}),[_,t]);let C=y;U({cartCurrencyCode:y,storeCurrencyCode:b})&&(C=b);const h=(_?E:d.b)({currencyCode:C},{queryObserverOptions:{enabled:Boolean(C)&&i}});return{isLoading:h.isLoading,isError:h.isError,getCreditBalances:h.refetch,creditBalances:h.data?.creditBalances||[]}}(),O=(0,i.v)((e=>e.checkout)),v=(0,i.v)((e=>e.selectedPaymentsMeta)),{useCredits:A,extraPaymentData:R,selectedPersonalPayment:T}=O||{},{selectedMembershipPayment:Z}=v,[M,L]=(0,n.useState)(null),[k,I]=(0,n.useState)(null),{shouldUsePaymentsHub:H,paymentsHubProfiles:F,publishableKey:q,integrationName:w,preferredProfileUUID:V}=(0,h.Z)(),{lastSelectedProfile:z,paymentProfiles:Y}=B.data?.paymentProfiles||{lastSelectedProfile:"",paymentProfiles:[]},G=H&&F?F:Y,j=(0,n.useCallback)((e=>{const t=(0,S.mR)(s.data,e);return t||(G&&e?G.find((s=>s.uuid===e)):null)}),[G,s]),{healthcareBenefitsPaymentProfile:$}=(0,N.r)(G);$&&t&&Array.isArray(t.extraPaymentProfiles)&&(p=Boolean(t.extraPaymentProfiles.find((e=>e.paymentProfileUUID===$.uuid))));const X=(0,C.Z)(),K=j(T?.uuid),W=(s.data||[]).find((e=>e.defaultPaymentProfileUuid===T?.uuid)),Q=j(V),J=j(z),ee=K?.uuid||Q?.uuid||J?.uuid,se=(s.data||[]).find((e=>e.type===_.Hu.Personal)),te=j(se?.defaultPaymentProfileUuid),ne=(0,n.useCallback)((e=>{const s=j(e);s&&c((0,b.yG)({uuid:s.uuid}))}),[c,j]),ae=(0,n.useCallback)((e=>{const s=j(e);s&&c((0,g.lt)({uuid:s.uuid}))}),[c,j]);return(0,n.useEffect)((()=>{z.length>0&&!G.includes(z)&&y("eats:payment_hub_last_profile_uuid_miss",{lastProfileUuid:z,webPayments:{key:q,integrationName:w}})}),[y,w,z,G,q]),(0,n.useEffect)((()=>{z&&z.length>0&&y("eats:payments_last_selected_profile_defined")}),[y,z]),(0,n.useEffect)((()=>{V&&V.length>0&&y("eats:payments_preferred_profile_defined")}),[y,V]),(0,n.useEffect)((()=>{const{nonHealthcareBenefitsPaymentProfiles:e}=(0,N.r)(G);if(X){const e=G.find((e=>"paypay"===e?.tokenType));e?.uuid&&T?.uuid!==e?.uuid&&c((0,b.yG)({uuid:e?.uuid}))}else K||W||!T?!T?.uuid&&(ee||te?.uuid||e.length>0)&&c((0,b.yG)({uuid:K?.uuid||Q?.uuid||J?.uuid||te?.uuid||e[0].uuid})):c((0,b.yG)(null))}),[c,J,Q,T,K,ee,X,j,te,G,W,$]),{selectedPersonalPayment:K||Q||J,selectedMembershipPayment:j(Z?.uuid),updateSelectedPersonalPayment:ne,updateSelectedMembershipPayment:ae,guestPaymentProfile:M,setGuestPaymentProfile:L,guestPaymentProfileV2:k,setGuestPaymentProfileV2:I,extraPaymentData:R,paymentProfiles:G,creditBalances:D,useCredits:A,useHealthcareBenefits:p,healthcareBenefitsPaymentProfile:$,getCreditBalances:x}}},49188:(e,s,t)=>{"use strict";t.d(s,{b:()=>r});var n=t(74622),a=t(2237),i=t(62459);function r(e,s){const t=(0,i.Z)("getCreditBalancesV1"),r=(0,a.H)("getCreditBalancesV1",e);return(0,n.useQuery)({queryKey:r,queryFn:e=>{let{queryKey:s}=e;return t.request("getCreditBalancesV1",s[1])},...s?.queryObserverOptions})}},88631:(e,s,t)=>{"use strict";t.d(s,{$C:()=>l,Hu:()=>r,TW:()=>i,vO:()=>o});var n=t(46668),a=t(17759);const i={...n.E,data:[]},r=(a.DR,a.OU,a.JK,a.il,{Personal:"Personal",Business:"Business",ManagedBusiness:"ManagedBusiness",ManagedFamily:"ManagedFamily",Commuter:"Commuter"}),o={Centralized:"Centralized",Decentralized:"Decentralized"},l=(n.E,{...n.E,data:{expenseCodes:[],hasMore:!1,query:""}})},76892:(e,s,t)=>{"use strict";t.d(s,{SE:()=>a,X$:()=>i,mR:()=>r});var n=t(88631);const a=Object.freeze({personal:"personal",business:"business"}),i=Object.freeze({membership_personal:"membership_personal"}),r=(e,s)=>(e||[]).find((e=>(e.defaultPaymentProfileUuid===s||e.uuid===s)&&e.type===n.Hu.ManagedFamily))},63824:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});const n=()=>{try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(e)return e}catch(e){return"Etc/Unknown"}return"Etc/Unknown"}},89373:(e,s,t)=>{e.exports=t.p+"f93f7c0e3996c021.svg"},4354:(e,s,t)=>{e.exports=t.p+"37053d4d3972ae6d.svg"},31153:(e,s,t)=>{e.exports=t.p+"472475c485d211d4.svg"},18646:(e,s,t)=>{e.exports=t.p+"4dbcffc65086d2a1.svg"},90465:(e,s,t)=>{e.exports=t.p+"298c5d3f9e2f0415.svg"},42643:(e,s,t)=>{e.exports=t.p+"4a8c2b5a0ef3d828.svg"},36391:(e,s,t)=>{e.exports=t.p+"85573f825c72de21.svg"},90187:(e,s,t)=>{e.exports=t.p+"16de2f01b2abfcd4.svg"},66987:(e,s,t)=>{e.exports=t.p+"c57afa92c9773650.svg"},70925:(e,s,t)=>{e.exports=t.p+"a90ee32180aec8e4.svg"},60413:(e,s,t)=>{e.exports=t.p+"0b243493e38d216d.svg"},84648:(e,s,t)=>{e.exports=t.p+"7d599df78947c601.svg"},44001:(e,s,t)=>{e.exports=t.p+"a01e1bb4a6328427.svg"},84174:(e,s,t)=>{e.exports=t.p+"6b22c989b1553e5e.svg"},34506:(e,s,t)=>{e.exports=t.p+"29c3a6a2d4cd40fa.svg"},85931:(e,s,t)=>{e.exports=t.p+"ace8b254555025fb.svg"},8797:(e,s,t)=>{e.exports=t.p+"807d3e39daf4977c.svg"},20072:(e,s,t)=>{e.exports=t.p+"82144546657e40d2.svg"},22181:(e,s,t)=>{e.exports=t.p+"155e5c4d6a0dd96b.svg"},65760:(e,s,t)=>{e.exports=t.p+"bd8dd7999964321d.svg"},8521:(e,s,t)=>{e.exports=t.p+"7bcefd4dbe11d684.svg"},40050:(e,s,t)=>{e.exports=t.p+"899713dd6dea5932.svg"}}]);