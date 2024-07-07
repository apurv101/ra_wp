//tealium universal tag - utag.168 ut4.0.202405131632, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={id:id};var md5;utag.globals=utag.globals||{};utag.o[loader].sender[id]=u;u.ev={view:1,link:1};u.initialized=false;u.scriptrequested=false;u.queue=[];if(utag.ut.md5===undefined){md5=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)
try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}
return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}
return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);(function(t){var n=md5,r=n.lib,e=r.WordArray,i=r.Hasher,o=n.algo,s=[];!function(){for(var n=0;n<64;n++)s[n]=4294967296*t.abs(t.sin(n+1))|0}();var a=o.MD5=i.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var r=0;r<16;r++){var e=n+r,i=t[e];t[e]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}
var o=this._hash.words,a=t[n+0],d=t[n+1],l=t[n+2],p=t[n+3],y=t[n+4],g=t[n+5],w=t[n+6],v=t[n+7],_=t[n+8],m=t[n+9],B=t[n+10],x=t[n+11],b=t[n+12],S=t[n+13],H=t[n+14],z=t[n+15],C=o[0],M=o[1],A=o[2],D=o[3];C=c(C,M,A,D,a,7,s[0]),D=c(D,C,M,A,d,12,s[1]),A=c(A,D,C,M,l,17,s[2]),M=c(M,A,D,C,p,22,s[3]),C=c(C,M,A,D,y,7,s[4]),D=c(D,C,M,A,g,12,s[5]),A=c(A,D,C,M,w,17,s[6]),M=c(M,A,D,C,v,22,s[7]),C=c(C,M,A,D,_,7,s[8]),D=c(D,C,M,A,m,12,s[9]),A=c(A,D,C,M,B,17,s[10]),M=c(M,A,D,C,x,22,s[11]),C=c(C,M,A,D,b,7,s[12]),D=c(D,C,M,A,S,12,s[13]),A=c(A,D,C,M,H,17,s[14]),C=u(C,M=c(M,A,D,C,z,22,s[15]),A,D,d,5,s[16]),D=u(D,C,M,A,w,9,s[17]),A=u(A,D,C,M,x,14,s[18]),M=u(M,A,D,C,a,20,s[19]),C=u(C,M,A,D,g,5,s[20]),D=u(D,C,M,A,B,9,s[21]),A=u(A,D,C,M,z,14,s[22]),M=u(M,A,D,C,y,20,s[23]),C=u(C,M,A,D,m,5,s[24]),D=u(D,C,M,A,H,9,s[25]),A=u(A,D,C,M,p,14,s[26]),M=u(M,A,D,C,_,20,s[27]),C=u(C,M,A,D,S,5,s[28]),D=u(D,C,M,A,l,9,s[29]),A=u(A,D,C,M,v,14,s[30]),C=f(C,M=u(M,A,D,C,b,20,s[31]),A,D,g,4,s[32]),D=f(D,C,M,A,_,11,s[33]),A=f(A,D,C,M,x,16,s[34]),M=f(M,A,D,C,H,23,s[35]),C=f(C,M,A,D,d,4,s[36]),D=f(D,C,M,A,y,11,s[37]),A=f(A,D,C,M,v,16,s[38]),M=f(M,A,D,C,B,23,s[39]),C=f(C,M,A,D,S,4,s[40]),D=f(D,C,M,A,a,11,s[41]),A=f(A,D,C,M,p,16,s[42]),M=f(M,A,D,C,w,23,s[43]),C=f(C,M,A,D,m,4,s[44]),D=f(D,C,M,A,b,11,s[45]),A=f(A,D,C,M,z,16,s[46]),C=h(C,M=f(M,A,D,C,l,23,s[47]),A,D,a,6,s[48]),D=h(D,C,M,A,v,10,s[49]),A=h(A,D,C,M,H,15,s[50]),M=h(M,A,D,C,g,21,s[51]),C=h(C,M,A,D,b,6,s[52]),D=h(D,C,M,A,p,10,s[53]),A=h(A,D,C,M,B,15,s[54]),M=h(M,A,D,C,d,21,s[55]),C=h(C,M,A,D,_,6,s[56]),D=h(D,C,M,A,z,10,s[57]),A=h(A,D,C,M,w,15,s[58]),M=h(M,A,D,C,S,21,s[59]),C=h(C,M,A,D,y,6,s[60]),D=h(D,C,M,A,x,10,s[61]),A=h(A,D,C,M,l,15,s[62]),M=h(M,A,D,C,m,21,s[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+A|0,o[3]=o[3]+D|0},_doFinalize:function(){var n=this._data,r=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(e/4294967296),s=e;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,n,r,e,i,o,s){var a=t+(n&r|~n&e)+i+s;return(a<<o|a>>>32-o)+n}function u(t,n,r,e,i,o,s){var a=t+(n&e|r&~e)+i+s;return(a<<o|a>>>32-o)+n}function f(t,n,r,e,i,o,s){var a=t+(n^r^e)+i+s;return(a<<o|a>>>32-o)+n}function h(t,n,r,e,i,o,s){var a=t+(r^(n|~e))+i+s;return(a<<o|a>>>32-o)+n}n.MD5=i._createHelper(a),n.HmacMD5=i._createHmacHelper(a)}(Math));}else{md5=utag.ut.md5;}
u.generateEventID=function(event,data,lookup_id){var hash_input=(data["tealium_timestamp_epoch"]||(function(){var d=new Date();return Math.floor(d.getTime()/1000);})())
+"-"+lookup_id+"-"+event,event_id=md5.MD5(hash_input).toString();return event_id;};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.processPixelId=function(eventName,pixelId){if(eventName.indexOf('tw-')!==-1){eventName=eventName.replace('tw-','');}
if(eventName.indexOf(pixelId)!==-1){eventName=eventName.replace(pixelId+'-','');}
return eventName;};u.parametersParser=function(paramObject){var newObj={contents:[]};if(paramObject){Object.keys(paramObject).forEach(function(key){if(Array.isArray(paramObject[key])){paramObject[key].forEach(function(param,index){if(newObj.contents.length<paramObject[key].length){newObj.contents[index]={};}
newObj.contents[index][key]=param;});}else{newObj[key]=paramObject[key];}});}
return newObj;};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.loaderCallback=function(event_name,data_layer){u.initialized=true;twq('config',u.data.pixelId);u.callback(event_name,data_layer);};u.callback=function(event_name,data_layer){u.data.events.forEach(function(event){var autoGeneratedId=''
if(u.toBoolean(u.data.generate_event_id)){var lookup_id=data_layer.tealium_random||Math.random().toFixed(16).substring(2);autoGeneratedId=u.generateEventID(event,data_layer,lookup_id)
utag.globals[lookup_id]=window.utag.globals[lookup_id]||{};window.utag.globals[lookup_id]["twitter_"+event+"_"+u.id]=autoGeneratedId;}
var processed_event_id=u.processPixelId(event,u.data.pixelId);var event_id='tw-'+u.data.pixelId+'-'+processed_event_id;var eventData=u.clearEmptyKeys({email_address:u.data.email_address,phone_number:u.data.phone_number,external_id:u.data.external_id,search_string:u.data.search_string,description:u.data.description,twclid:u.data.twclid,status:u.data.status,value:u.data.value,currency:u.data.currency,conversion_id:u.data.conversion_id,content_type:u.data.content_type,content_id:u.data.content_id,content_name:u.data.content_name,content_price:u.data.content_price,num_items:u.data.num_items,content_group_id:u.data.content_group_id});if(autoGeneratedId!==''){eventData.conversion_id=autoGeneratedId||'';}
utag.ut.merge(eventData,u.data[event]||{},1);twq('event',event_id,u.parametersParser(eventData));});};u.map={"ut.event:view":"tw-o43i6-oc3wp","funnel_step:1":"tw-o43i6-oc3wx","funnel_step:3":"tw-o43i6-oc3wr","funnel_step:5":"tw-o43i6-oc3wt","funnel_step:6":"tw-o43i6-oc3wu","funnel_step:4":"tw-o43i6-oc3ws","FB_TutorialCompleted:true":"tw-o43i6-oc3ww","_cprod":"product_id","_cquan":"product_quantity","currency_code":"tw-o43i6-oc3wr.currency,tw-o43i6-oc3ws.currency,tw-o43i6-oc3wt.currency,tw-o43i6-oc3wu.currency,tw-o43i6-oc3ww.currency","product_price":"tw-o43i6-oc3ws.value","price_total":"tw-o43i6-oc3wt.value,tw-o43i6-oc3wu.value,tw-o43i6-oc3ww.value","hashedEmail":"tw-o43i6-oc3wp.email_address,tw-o43i6-oc3wx.email_address,tw-o43i6-oc3wr.email_address,tw-o43i6-oc3ws.email_address,tw-o43i6-oc3wt.email_address,tw-o43i6-oc3wu.email_address,tw-o43i6-oc3ww.email_address","searchTopRestList":"tw-o43i6-oc3wp.contents,tw-o43i6-oc3wx.contents","restaurant_id":"tw-o43i6-oc3wr.contents,tw-o43i6-oc3ws.contents,tw-o43i6-oc3wt.contents,tw-o43i6-oc3wu.contents,tw-o43i6-oc3ww.contents"};u.extend=[function(a,b){try{if((b['funnel_step'].toString().toLowerCase().indexOf('6'.toLowerCase())>-1&&b['newOrReturning'].toString().toLowerCase().indexOf('new'.toLowerCase())>-1)){b['FB_TutorialCompleted']='true'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(b.eventLabel.indexOf('place-order|order-id')>-1){var orderId=b.eventLabel.split(":")[b.eventLabel.split(":").length-1];b.orderId=orderId||'';b.fb_order_id="ewtpo_"+orderId;if(b.newOrReturning==="new"){b.fb_order_id_ft="ewft_"+orderId;}
result=[];for(var i=0;i<b.product_quantity.length;i++){test={'id':b.menu_id[i],'quantity':b.product_quantity[i]};result.push(test)}
restaurantData={'id':b.restaurant_id,'quantity':"1",'item_price':b.price_total};result.push(restaurantData);b.fb_contents=result;}
if(b.eventLabel.indexOf('remove-from-cart|')>-1){var removeFromCart=b.eventLabel.split('|')[0];b.removeFromCart=removeFromCart||'';}
if(typeof(b.userId)!=="undefined"&&b.userId.length>0){b.fb_var=b.userId;}else{b.fb_var=b["cp.marketing_vistor_id"];}
if(b.eventLabel.indexOf('add-to-cart|')>-1){result=[]
test={'id':b.menu_id.toString(),'quantity':b.quantity};result.push(test)
restaurantData={'id':b.restaurant_id,'quantity':"1",'item_price':parseFloat(b.product_price)};result.push(restaurantData);b.fb_contents=result;}
if(b.eventLabel.indexOf('restaurant-list')>-1&&b.eventName.indexOf('stores_eats')>-1){b.searchTopRestList=b.restaurant_list.slice(0,10);}
if((typeof(b.restaurant_id)!=="undefined"&&b.restaurant_id.length>0)&&(typeof(b.menu_id)!=="undefined"&&b.menu_id.length>0)){b.fb_content_ids=[];b.fb_content_ids=[b.restaurant_id];b.fb_content_ids=b.fb_content_ids.concat(b.menu_id);}}}catch(e){utag.DB(e)}}];u.send=function(utag_event,data_layer){if(u.ev[utag_event]||u.ev.all!==undefined){utag.DB('send:168');utag.DB(data_layer);var a,b,c,d,e,f,g,h;a=utag_event;b=data_layer;u.data={base_url:'https://static.ads-twitter.com/uwt.js',pixelId:'o43i6',generate_event_id:"true"||"true",email_address:'',phone_number:'',external_id:'',search_string:'',description:'',twclid:'',status:'',value:'',currency:'',conversion_id:'',content_type:'',content_id:'',content_name:'',content_price:'',num_items:'',content_group_id:'',events:[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB('send:168:EXTENSIONS');utag.DB(data_layer);Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key){if(data_layer[mapping_key]!==undefined&&data_layer[mapping_key]!==''){var destinations=u.map[mapping_key].split(',');destinations.forEach(function(parameter){if(u.data.hasOwnProperty(parameter)||parameter.indexOf('.')>-1){u.map_func(parameter.split('.'),u.data,data_layer[mapping_key]);}});}else{var event_destinations=mapping_key.split(':');if(event_destinations.length===2&&String(data_layer[event_destinations[0]])===String(event_destinations[1])){if(u.map[mapping_key]){u.data.events=u.data.events.concat(u.map[mapping_key].split(','));}}}});utag.DB('send:168:MAPPINGS');utag.DB(u.data);var eCommerceMapping=[{eCommerceData:data_layer._ctotal,name:'value',isArray:false},{eCommerceData:data_layer._ccurrency,name:'currency',isArray:false},{eCommerceData:data_layer._corder,name:'conversion_id',isArray:false},{eCommerceData:data_layer._ccat,name:'content_type',isArray:true},{eCommerceData:data_layer._csku,name:'content_id',isArray:true},{eCommerceData:data_layer._cprodname,name:'content_name',isArray:true},{eCommerceData:data_layer._cprice,name:'content_price',isArray:true},{eCommerceData:data_layer._cquan,name:'num_items',isArray:true}];eCommerceMapping.forEach(function(dataObject){if(!dataObject.isArray){u.data[dataObject.name]=u.data[dataObject.name]||dataObject.eCommerceData||'';}else if(u.data[dataObject.name].length===0&&dataObject.eCommerceData!==undefined&&dataObject.isArray){u.data[dataObject.name]=dataObject.eCommerceData.slice(0);}});if(!u.data.pixelId){utag.DB(u.id+': Tag not fired: Required attribute Pixel Id not populated');return;}
if(u.initialized){u.callback(utag_event,data_layer);}else{if(!u.scriptrequested){u.scriptrequested=true;!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[]);}(window,document,'script');utag.ut.loader({'type':'script','src':u.data.base_url,'cb':function(){u.loaderCallback(utag_event,data_layer)},'loc':'script','id':'utag_168','attrs':{}});}}
utag.DB('send:168:COMPLETE');}};utag.o[loader].loader.LOAD(id);}('168','uber.eatsv2'));}catch(error){utag.DB(error);}