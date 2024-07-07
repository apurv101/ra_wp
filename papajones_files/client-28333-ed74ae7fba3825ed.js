"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[28333],{85231:(e,o,t)=>{t.d(o,{Z:()=>d});var r=t(36151),i=t(79810),n=t(92300),s=t(8905),a=t(33990);function l(e,o){const[,t]=(0,i.hQ)(),{title:r="Delete Alt",size:l,color:d,overrides:p={},...c}=e,u=(0,n.vt)({component:t.icons&&t.icons.DeleteAlt?t.icons.DeleteAlt:null},p&&p.Svg?(0,n.hq)(p.Svg):{});return(0,a.tZ)(s.Z,{viewBox:"0 0 24 24",ref:o,title:r,size:l,color:d,overrides:{Svg:u},...c,children:(0,a.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12C4 16.4183 7.58173 20 12 20ZM10.0303 8.96967C9.73743 8.67679 9.26257 8.67679 8.96967 8.96967C8.67676 9.26257 8.67676 9.73743 8.96967 10.0303L10.9393 12L8.96967 13.9697C8.67676 14.2626 8.67676 14.7374 8.96967 15.0303C9.26257 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L13.0607 12L15.0303 10.0303C15.3232 9.73743 15.3232 9.26257 15.0303 8.96967C14.7374 8.67679 14.2626 8.67679 13.9697 8.96967L12 10.9393L10.0303 8.96967Z"})})}const d=r.forwardRef(l)},28333:(e,o,t)=>{t.d(o,{Z:()=>f});var r=t(36151),i=t(92300),n=t(16782),s=t(84036),a=t(99864),l=t(79810),d=t(8905),p=t(33990);function c(e,o){const[,t]=(0,l.hQ)(),{title:r="Hide",size:n,color:s,overrides:a={},...c}=e,u=(0,i.vt)({component:t.icons&&t.icons.Hide?t.icons.Hide:null},a&&a.Svg?(0,i.hq)(a.Svg):{});return(0,p.tZ)(d.Z,{viewBox:"0 0 24 24",ref:o,title:r,size:n,color:s,overrides:{Svg:u},...c,children:(0,p.tZ)("path",{d:"M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"})})}const u=r.forwardRef(c);function h(e,o){const[,t]=(0,l.hQ)(),{title:r="Show",size:n,color:s,overrides:a={},...c}=e,u=(0,i.vt)({component:t.icons&&t.icons.Show?t.icons.Show:null},a&&a.Svg?(0,i.hq)(a.Svg):{});return(0,p.tZ)(d.Z,{viewBox:"0 0 24 24",ref:o,title:r,size:n,color:s,overrides:{Svg:u},...c,children:(0,p.tZ)("path",{d:"M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"})})}const g=r.forwardRef(h);var b=t(75267);const m=()=>null;class y extends r.Component{static defaultProps={"aria-activedescendant":null,"aria-autocomplete":null,"aria-controls":null,"aria-errormessage":null,"aria-haspopup":null,"aria-label":null,"aria-labelledby":null,"aria-describedby":null,adjoined:n.y4.none,autoComplete:"on",autoFocus:!1,disabled:!1,error:!1,positive:!1,name:"",inputMode:"text",onBlur:()=>{},onChange:()=>{},onKeyDown:()=>{},onKeyPress:()=>{},onKeyUp:()=>{},onFocus:()=>{},onClear:()=>{},clearable:!1,clearOnEscape:!0,overrides:{},pattern:null,placeholder:"",required:!1,role:null,size:n.NO.default,type:"text",readOnly:!1};inputRef=this.props.inputRef||r.createRef();state={isFocused:this.props.autoFocus||!1,isMasked:"password"===this.props.type,initialType:this.props.type,isFocusVisibleForClear:!1,isFocusVisibleForMaskToggle:!1};componentDidMount(){const{autoFocus:e,clearable:o}=this.props;this.inputRef.current&&(e&&this.inputRef.current.focus(),o&&this.inputRef.current.addEventListener("keydown",this.onInputKeyDown))}componentWillUnmount(){const{clearable:e}=this.props;e&&this.inputRef.current&&this.inputRef.current.removeEventListener("keydown",this.onInputKeyDown)}clearValue(){const e=this.inputRef.current;if(e){const o=Object.getOwnPropertyDescriptor(this.props.type===n.iB.textarea?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,"value");if(o){const t=o.set;if(t){t.call(e,"");const o=function(e){let o;return"function"==typeof window.Event?o=new window.Event(e,{bubbles:!0,cancelable:!0}):(o=document.createEvent("Event"),o.initEvent(e,!0,!0)),o}("input");e.dispatchEvent(o)}}}}onInputKeyDown=e=>{this.props.clearOnEscape&&"Escape"===e.key&&this.inputRef.current&&!this.props.readOnly&&(this.clearValue(),e.stopPropagation())};onClearIconClick=()=>{this.inputRef.current&&this.clearValue(),this.inputRef.current&&this.inputRef.current.focus()};onFocus=e=>{this.setState({isFocused:!0}),this.props.onFocus(e)};onBlur=e=>{this.setState({isFocused:!1}),this.props.onBlur(e)};getInputType(){return"password"===this.props.type?this.state.isMasked?"password":"text":this.props.type}handleFocusForMaskToggle=e=>{(0,b.E)(e)&&this.setState({isFocusVisibleForMaskToggle:!0})};handleBlurForMaskToggle=e=>{!1!==this.state.isFocusVisibleForMaskToggle&&this.setState({isFocusVisibleForMaskToggle:!1})};renderMaskToggle(){if("password"!==this.props.type)return null;const[e,o]=(0,i.jb)(this.props.overrides.MaskToggleButton,s.ac),[t,r]=(0,i.jb)(this.props.overrides.MaskToggleShowIcon,g),[a,l]=(0,i.jb)(this.props.overrides.MaskToggleHideIcon,u),d=this.state.isMasked?"Show password text":"Hide password text",c={[n.NO.mini]:"12px",[n.NO.compact]:"16px",[n.NO.default]:"20px",[n.NO.large]:"24px"}[this.props.size];return(0,p.tZ)(e,{$size:this.props.size,$isFocusVisible:this.state.isFocusVisibleForMaskToggle,"aria-label":d,onClick:()=>this.setState((e=>({isMasked:!e.isMasked}))),title:d,type:"button",...o,onFocus:(0,b.Ah)(o,this.handleFocusForMaskToggle),onBlur:(0,b.Z5)(o,this.handleBlurForMaskToggle),children:this.state.isMasked?(0,p.tZ)(t,{size:c,title:d,...r}):(0,p.tZ)(a,{size:c,title:d,...l})})}handleFocusForClear=e=>{(0,b.E)(e)&&this.setState({isFocusVisibleForClear:!0})};handleBlurForClear=e=>{!1!==this.state.isFocusVisibleForClear&&this.setState({isFocusVisibleForClear:!1})};renderClear(){const{clearable:e,value:o,disabled:t,readOnly:r,overrides:l={}}=this.props;if(t||r||!e||null==o||"string"==typeof o&&0===o.length)return null;const[d,c]=(0,i.jb)(l.ClearIconContainer,s.Er),[u,h]=(0,i.jb)(l.ClearIcon,s.i),g="Clear value",m=(0,a.t)(this.props,this.state),y={[n.NO.mini]:"14px",[n.NO.compact]:"14px",[n.NO.default]:"16px",[n.NO.large]:"22px"}[this.props.size];return(0,p.tZ)(d,{$alignTop:this.props.type===n.iB.textarea,...m,...c,children:(0,p.tZ)(u,{size:y,tabIndex:0,title:g,"aria-label":g,onClick:this.onClearIconClick,onKeyDown:e=>{!e.key||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.onClearIconClick())},role:"button",$isFocusVisible:this.state.isFocusVisibleForClear,...m,...h,onFocus:(0,b.Ah)(h,this.handleFocusForClear),onBlur:(0,b.Z5)(h,this.handleBlurForClear)})})}render(){const{overrides:{InputContainer:e,Input:o,Before:t,After:r}}=this.props,l="password"===this.state.initialType&&this.props.autoComplete===y.defaultProps.autoComplete?"new-password":this.props.autoComplete,d=(0,a.t)(this.props,this.state),[c,u]=(0,i.jb)(e,s.fv),[h,g]=(0,i.jb)(o,s.II),[b,f]=(0,i.jb)(t,m),[C,v]=(0,i.jb)(r,m);return(0,p.BX)(c,{"data-baseweb":this.props["data-baseweb"]||"base-input",...d,...u,children:[(0,p.tZ)(b,{...d,...f}),(0,p.tZ)(h,{ref:this.inputRef,"aria-activedescendant":this.props["aria-activedescendant"],"aria-autocomplete":this.props["aria-autocomplete"],"aria-controls":this.props["aria-controls"],"aria-errormessage":this.props["aria-errormessage"],"aria-haspopup":this.props["aria-haspopup"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-describedby":this.props["aria-describedby"],"aria-invalid":this.props.error,"aria-required":this.props.required,autoComplete:l,disabled:this.props.disabled,readOnly:this.props.readOnly,id:this.props.id,inputMode:this.props.inputMode,maxLength:this.props.maxLength,name:this.props.name,onBlur:this.onBlur,onChange:this.props.onChange,onFocus:this.onFocus,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp,pattern:this.props.pattern,placeholder:this.props.placeholder,type:this.getInputType(),required:this.props.required,role:this.props.role,value:this.props.value,min:this.props.min,max:this.props.max,step:this.props.step,rows:this.props.type===n.iB.textarea?this.props.rows:null,...d,...g}),this.renderClear(),this.renderMaskToggle(),(0,p.tZ)(C,{...d,...v})]})}}const f=y},16782:(e,o,t)=>{t.d(o,{NO:()=>n,Xf:()=>s,iB:()=>r,y4:()=>i});const r={textarea:"textarea"},i={none:"none",left:"left",right:"right",both:"both"},n={mini:"mini",default:"default",compact:"compact",large:"large"},s={start:"start",end:"end"}},84036:(e,o,t)=>{t.d(o,{Er:()=>a,Fp:()=>f,Hx:()=>x,II:()=>B,ac:()=>s,d5:()=>g,fC:()=>b,fv:()=>F,hB:()=>v,i:()=>l});var r=t(79810),i=t(16782),n=t(85231);const s=(0,r.zo)("button",(e=>{let{$theme:o,$size:t,$isFocusVisible:r}=e;const n={[i.NO.mini]:o.sizing.scale400,[i.NO.compact]:o.sizing.scale400,[i.NO.default]:o.sizing.scale300,[i.NO.large]:o.sizing.scale200}[t];return{display:"flex",alignItems:"center",borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",background:"none",paddingLeft:n,paddingRight:n,outline:r?`solid 3px ${o.colors.borderAccent}`:"none",color:o.colors.contentPrimary}}));s.displayName="StyledMaskToggleButton";const a=(0,r.zo)("div",(e=>{let{$alignTop:o=!1,$size:t,$theme:r}=e;const n={[i.NO.mini]:r.sizing.scale200,[i.NO.compact]:r.sizing.scale200,[i.NO.default]:r.sizing.scale100,[i.NO.large]:r.sizing.scale0}[t];return{display:"flex",alignItems:o?"flex-start":"center",paddingLeft:n,paddingRight:n,paddingTop:o?r.sizing.scale500:"0px",color:r.colors.contentPrimary}}));a.displayName="StyledClearIconContainer";const l=(0,r.zo)(n.Z,(e=>{let{$theme:o,$isFocusVisible:t}=e;return{cursor:"pointer",outline:t?`solid 3px ${o.colors.borderAccent}`:"none"}}));function d(e,o){return{[i.NO.mini]:{paddingTop:o.scale100,paddingBottom:o.scale100,paddingLeft:o.scale550,paddingRight:o.scale550},[i.NO.compact]:{paddingTop:o.scale200,paddingBottom:o.scale200,paddingLeft:o.scale550,paddingRight:o.scale550},[i.NO.default]:{paddingTop:o.scale400,paddingBottom:o.scale400,paddingLeft:o.scale550,paddingRight:o.scale550},[i.NO.large]:{paddingTop:o.scale550,paddingBottom:o.scale550,paddingLeft:o.scale550,paddingRight:o.scale550}}[e]}function p(e,o,t,r,n){let s=e===i.y4.both||e===i.y4.left&&"rtl"!==r||e===i.y4.right&&"rtl"===r||n&&"rtl"===r,a=e===i.y4.both||e===i.y4.right&&"rtl"!==r||e===i.y4.left&&"rtl"===r||n&&"rtl"!==r;return{paddingLeft:s?t.scale550:"0px",paddingRight:a?t.scale550:"0px"}}function c(e,o){return{[i.NO.mini]:o.font100,[i.NO.compact]:o.font200,[i.NO.default]:o.font300,[i.NO.large]:o.font400}[e]}function u(e,o,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;return e?{borderLeftColor:i.inputFillDisabled,borderRightColor:i.inputFillDisabled,borderTopColor:i.inputFillDisabled,borderBottomColor:i.inputFillDisabled,backgroundColor:i.inputFillDisabled}:o?{borderLeftColor:i.borderSelected,borderRightColor:i.borderSelected,borderTopColor:i.borderSelected,borderBottomColor:i.borderSelected,backgroundColor:i.inputFillActive}:t?{borderLeftColor:i.inputBorderError,borderRightColor:i.inputBorderError,borderTopColor:i.inputBorderError,borderBottomColor:i.inputBorderError,backgroundColor:i.inputFillError}:r?{borderLeftColor:i.inputBorderPositive,borderRightColor:i.inputBorderPositive,borderTopColor:i.inputBorderPositive,borderBottomColor:i.inputBorderPositive,backgroundColor:i.inputFillPositive}:{borderLeftColor:i.inputBorder,borderRightColor:i.inputBorder,borderTopColor:i.inputBorder,borderBottomColor:i.inputBorder,backgroundColor:i.inputFill}}function h(e,o){let t=o.inputBorderRadius;return e===i.NO.mini&&(t=o.inputBorderRadiusMini),{borderTopLeftRadius:t,borderBottomLeftRadius:t,borderTopRightRadius:t,borderBottomRightRadius:t}}l.displayName="StyledClearIcon";const g=e=>{const{$isFocused:o,$adjoined:t,$error:r,$disabled:i,$positive:n,$size:s,$theme:a,$theme:{borders:l,colors:d,sizing:g,typography:b,animation:m},$hasIconTrailing:y}=e;return{boxSizing:"border-box",display:"flex",overflow:"hidden",width:"100%",borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",transitionProperty:"border",transitionDuration:m.timing200,transitionTimingFunction:m.easeOutCurve,...h(s,l),...c(s,b),...u(i,o,r,n,d),...p(t,0,g,a.direction,y)}},b=(0,r.zo)("div",g);function m(e,o){return{[i.NO.mini]:{paddingRight:o.scale400,paddingLeft:o.scale400},[i.NO.compact]:{paddingRight:o.scale400,paddingLeft:o.scale400},[i.NO.default]:{paddingRight:o.scale300,paddingLeft:o.scale300},[i.NO.large]:{paddingRight:o.scale200,paddingLeft:o.scale200}}[e]}function y(e,o,t,r,i){return e?{color:i.inputEnhancerTextDisabled,backgroundColor:i.inputFillDisabled}:o?{color:i.contentPrimary,backgroundColor:i.inputFillActive}:t?{color:i.contentPrimary,backgroundColor:i.inputFillError}:r?{color:i.contentPrimary,backgroundColor:i.inputFillPositive}:{color:i.contentPrimary,backgroundColor:i.inputFill}}b.displayName="Root";const f=(0,r.zo)("div",(e=>{const{$size:o,$disabled:t,$isFocused:r,$error:i,$positive:n,$theme:{colors:s,sizing:a,typography:l,animation:d}}=e;return{display:"flex",alignItems:"center",justifyContent:"center",transitionProperty:"color, background-color",transitionDuration:d.timing200,transitionTimingFunction:d.easeOutCurve,...c(o,l),...m(o,a),...y(t,r,i,n,s)}}));function C(e,o,t,r,i){return e?{color:i.inputTextDisabled,backgroundColor:i.inputFillDisabled}:o?{color:i.contentPrimary,backgroundColor:i.inputFillActive}:t?{color:i.contentPrimary,backgroundColor:i.inputFillError}:r?{color:i.contentPrimary,backgroundColor:i.inputFillPositive}:{color:i.contentPrimary,backgroundColor:i.inputFill}}f.displayName="InputEnhancer";const v=e=>{const{$isFocused:o,$error:t,$disabled:r,$positive:i,$size:n,$theme:{colors:s,typography:a,animation:l}}=e;return{display:"flex",width:"100%",transitionProperty:"background-color",transitionDuration:l.timing200,transitionTimingFunction:l.easeOutCurve,...c(n,a),...C(r,o,t,i,s)}},F=(0,r.zo)("div",v);function k(e,o,t,r){return e?{color:r.inputTextDisabled,"-webkit-text-fill-color":r.inputTextDisabled,caretColor:r.contentPrimary,"::placeholder":{color:r.inputPlaceholderDisabled}}:{color:r.contentPrimary,caretColor:r.contentPrimary,"::placeholder":{color:r.inputPlaceholder}}}F.displayName="InputContainer";const x=e=>{const{$disabled:o,$isFocused:t,$error:r,$size:i,$theme:{colors:n,sizing:s,typography:a}}=e;return{boxSizing:"border-box",backgroundColor:"transparent",borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,borderBottomWidth:0,borderLeftStyle:"none",borderRightStyle:"none",borderTopStyle:"none",borderBottomStyle:"none",outline:"none",width:"100%",minWidth:0,maxWidth:"100%",cursor:o?"not-allowed":"text",margin:"0",paddingTop:"0",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",...c(i,a),...d(i,s),...k(o,0,0,n)}},B=(0,r.zo)("input",x);B.displayName="Input"},99864:(e,o,t)=>{function r(e,o){const{disabled:t,error:r,positive:i,adjoined:n,size:s,required:a,resize:l,readOnly:d}=e,{isFocused:p}=o;return{$isFocused:p,$disabled:t,$error:r,$positive:i,$adjoined:n,$size:s,$required:a,$resize:l,$isReadOnly:d}}t.d(o,{t:()=>r})}}]);