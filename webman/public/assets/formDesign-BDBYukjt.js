import{l as A}from"./lodash-fWIJiXPB.js";import{S as Se}from"./sortablejs-C83syoBY.js";import{v as De}from"./vars-CZGqfX5Y.js";import{_ as Oe,c as Le}from"./index-ybrmzYq5.js";import{a as N}from"./table-BHRaYvrI.js";import{d as Ne}from"./dict-C6FxRZf9.js";import Ie from"./table-BjY8BMqW.js";import{M as S}from"./@arco-design-uttiljWv.js";import{r as c,a as qe,o as Fe,h as d,n as b,k as s,t as o,l as a,m as p,q as G,F as U,P as $,p as g,s as Be,j as r,y as i,z as H,C as Me}from"./@vue-9ZIPiVZG.js";import"./@wangeditor-Bg8kJaak.js";import"./pinia-CtMvrpix.js";import"./axios-BOAqGR8s.js";import"./crypto-js-B6um_4t4.js";import"./qs-CGfOb-kZ.js";import"./side-channel-0xN0c_x9.js";import"./es-errors-CFxpeikN.js";import"./object-inspect-Pz2pmunN.js";import"./side-channel-list-asz5kCf8.js";import"./side-channel-map-DBz1yoQn.js";import"./get-intrinsic-CCph2EoF.js";import"./es-object-atoms-Ditt1eQ6.js";import"./math-intrinsics-Cv-yPkyD.js";import"./gopd-fcd2-aIC.js";import"./es-define-property-bDCdrV83.js";import"./has-symbols-BaUvM3gb.js";import"./get-proto-cKMTtFGz.js";import"./dunder-proto-CiSsr-aM.js";import"./call-bind-apply-helpers-DFdvRtIg.js";import"./function-bind-CHqF18-c.js";import"./hasown-DwiY0sux.js";import"./call-bound-BMZ_xw6V.js";import"./side-channel-weakmap-CMrfu08b.js";import"./vue-router-DXldG2q0.js";import"./nprogress-DxiOKil-.js";import"./monaco-editor-nMXQdunA.js";import"./file2md5-B4-SI92N.js";import"./spark-md5-D8tidE2e.js";import"./lodash.noop-BeiKyXVG.js";import"./vue-color-kit-w75Wyu4C.js";import"./vue-clipboard3-DpvFlCWw.js";import"./clipboard-ehac6u_s.js";import"./vue-echarts-B-rvonkO.js";import"./resize-detector-G6vbKCU7.js";import"./echarts-Cz-L25MO.js";import"./tslib-BDyQ-Jie.js";import"./zrender-xbpiMqDc.js";import"./@iconify-BfRLEUc9.js";import"./vue-i18n-PeqK6azz.js";import"./@intlify-CJ2pDqUV.js";import"./vue-QIJ1KGct.js";import"./dayjs-DUkVwsK-.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./compute-scroll-into-view-1gs_hJI2.js";import"./b-tween-BtQQsX34.js";import"./number-precision-BW_FzNZC.js";import"./scroll-into-view-if-needed-SxpMpKWN.js";import"./b-validate-DHOn5MGm.js";import"./color-JIMhKyf3.js";import"./color-string-Ckj7g19G.js";import"./color-name-BQ5IbGbl.js";import"./simple-swizzle-BUB9Iq-C.js";import"./is-arrayish-BII_q15j.js";const Re={class:"design-page"},ze={class:"design-left"},Pe=["data-id","onClick"],Ae={class:"drag-item"},Ge={class:"design-right"},$e={class:"config-label-field"},He={__name:"formDesign",setup(Je,{expose:J}){const D=c(!1),I=c([]),K=c({}),q=c(),j=c([]),L=c({}),F=c(),_=qe({id:void 0,form_width:600,is_full:!1,component_type:1,form_span:24}),t=c({}),Q=async u=>{const e=await N.readTable(u);if(e.data.namespace=="")return S.error("请先编辑配置应用名称"),!1;_.id=u,_.form_width=e.data.form_width,_.is_full=e.data.is_full==2,_.component_type=e.data.component_type,_.form_span=e.data.span,L.value=e.data.options;const k=(await N.getTableColumns({table_id:u,orderBy:"form_sort",orderType:"asc"})).data.map((n,E)=>{if(n.view_type==="inputNumber"||n.view_type==="slider"){const y={min:1,max:100,step:1};n.options=Object.assign(y,n.options),n.default_value&&(n.default_value=Number.parseInt(n.default_value))}if(["select","cascader","treeSelect"].includes(n.view_type)){const y={check_strictly:!1,field_label:"label",field_value:"value",url:""};n.options=Object.assign(y,n.options)}if(n.view_type==="uploadImage"||n.view_type==="uploadFile"){const y={multiple:!1,limit:3};n.options=Object.assign(y,n.options)}if(["editor","wangEditor","codeEditor"].includes(n.view_type)){const y={height:400};n.options=Object.assign(y,n.options)}if(n.view_type==="date"){const y={mode:"date",showTime:!1};n.options=Object.assign(y,n.options)}if(n.view_type==="cityLinkage"){const y={type:"select",mode:"name"};n.options=Object.assign(y,n.options)}return n.insert=n.is_insert==2,n.edit=n.is_edit==2,n.form_sort=E,n});j.value=k,D.value=!0,Me(()=>{X()})},W=u=>{if(t.value=u,u.view_type==="inputNumber"||u.view_type==="slider"){const e={min:1,max:100,step:1};t.value.options=Object.assign(e,u.options)}if(["select","cascader","treeSelect"].includes(u.view_type)){const e={check_strictly:!1,field_label:"label",field_value:"value",url:""};t.value.options=Object.assign(e,u.options)}if(u.view_type==="upload"){const e={type:"image",returnType:"url",multiple:!1,limit:1};t.value.options=Object.assign(e,u.options)}if(["editor","wangEditor","codeEditor"].includes(u.view_type)){const e={height:400};t.value.options=Object.assign(e,u.options)}if(u.view_type==="date"){const e={mode:"date",showTime:!1};t.value.options=Object.assign(e,u.options)}if(u.view_type==="cityLinkage"){const e={type:"select",mode:"name"};t.value.options=Object.assign(e,u.options)}},X=()=>{Se.create(q.value,{animation:1e3,onEnd:function(u){const e=u.target.children,{oldIndex:w,newIndex:k}=u;if(w==k)return;const n=A.cloneDeep(j.value);let E=null,y=null;n.map(v=>{v.id==e[w].dataset.id&&(E=v.form_sort),v.id==e[k].dataset.id&&(y=v.form_sort)}),j.value.map(v=>{v.id==e[w].dataset.id&&(v.form_sort=y),v.id==e[k].dataset.id&&(v.form_sort=E)})}})},Y=async u=>{if(u==="inputNumber"||u==="slider"){const e={min:1,max:100,step:1};t.value.options=e}if(["select","cascader","treeSelect"].includes(u)){const e={check_strictly:!1,field_label:"label",field_value:"value",url:""};t.value.options=e}if(u==="uploadImage"){const e={multiple:!1,limit:1};t.value.options=e}if(u==="uploadFile"){const e={multiple:!1,limit:1};t.value.options=e}if(["editor","wangEditor","codeEditor"].includes(u)){const e={height:400};t.value.options=e}if(u==="date"){const e={mode:"date",showTime:!1};t.value.options=e}if(u==="cityLinkage"){const e={type:"select",mode:"name"};t.value.options=e}},Z=async()=>{if(!t.value.options.url){S.error("请先配置请求地址");return}A.isUndefined(t.value.option)&&(t.value.option=[]);const{code:u,data:e}=await Le.commonGet(t.value.options.url);u===200&&(e.total?S.success("接口数据返回格式错误"):(t.value.option[t.value.column_name]=e,S.success("请求成功")))},h=async()=>{var u;(u=F.value)==null||u.open()},ee=async u=>{console.log(u),t.value.options&&(t.value.options.field_label=u.field_label,t.value.options.field_value=u.field_value,t.value.options.url=u.url)},le=async()=>{(await N.saveDesign({table:_,columns:j.value})).code===200&&(S.success("保存成功"),D.value=!1)};return Fe(async()=>{const{data:u}=await Ne.getPageList({saiType:"all"});I.value=u}),J({open:Q}),(u,e)=>{const w=d("a-divider"),k=d("a-button"),n=d("a-space"),E=d("a-input-password"),y=d("a-textarea"),v=d("a-input-number"),oe=d("a-input-tag"),ae=d("sa-switch"),te=d("a-slider"),O=d("a-select"),ne=d("sa-select"),ue=d("a-tree-select"),se=d("sa-radio"),de=d("sa-checkbox"),ie=d("a-date-picker"),pe=d("a-time-picker"),re=d("a-rate"),me=d("a-cascader"),fe=d("sa-user"),ve=d("ma-cityLinkage"),_e=d("ma-editor"),ye=d("ma-wangEditor"),Ve=d("ma-codeEditor"),be=d("sa-upload-image"),ge=d("sa-upload-file"),x=d("a-input"),we=d("a-form-item"),ke=d("a-form"),B=d("a-card"),m=d("a-radio"),V=d("a-radio-group"),ce=d("a-alert"),Ue=d("icon-select-all"),xe=d("icon-play-arrow-fill"),C=d("a-option"),M=d("a-tab-pane"),je=d("a-checkbox"),Ee=d("a-tabs"),Ce=d("a-modal");return s(),b("div",null,[o(Ce,{fullscreen:"",visible:D.value,"onUpdate:visible":e[26]||(e[26]=l=>D.value=l),footer:!1,"unmount-on-close":""},{title:a(()=>[o(n,null,{split:a(()=>[o(w,{direction:"vertical"})]),default:a(()=>[e[28]||(e[28]=p("span",null,"表单设计",-1)),o(k,{type:"primary",onClick:le},{default:a(()=>e[27]||(e[27]=[i("保存设计 ")])),_:1})]),_:1})]),default:a(()=>[p("div",Re,[p("div",ze,[o(B,{title:"设计区域"},{default:a(()=>[p("div",{style:G({border:"1px dashed #DDDDDE",padding:"20px",margin:"0 auto",width:_.is_full?"100%":_.form_width+"px"})},[o(ke,{ref:"formRef",model:K.value,"auto-label-width":!0},{default:a(()=>[p("div",{gutter:16,id:"sai-form-design",ref_key:"formDesign",ref:q,class:"arco-row"},[(s(!0),b(U,null,$(j.value,(l,Te)=>(s(),b(U,null,[l.insert?(s(),b("div",{key:0,"data-id":l.id,class:Be(["arco-col","arco-col-"+(l.span??_.form_span)]),style:G({border:t.value.id===l.id?"1px solid #165dff":""}),onClick:T=>W(l)},[p("div",Ae,[o(we,{label:l.column_comment,required:l.is_required==2},{default:a(()=>{var T,R,z,P;return[l.view_type==="password"?(s(),r(E,{key:0})):l.view_type==="textarea"?(s(),r(y,{key:1,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f},null,8,["modelValue","onUpdate:modelValue"])):l.view_type==="inputNumber"?(s(),r(v,{key:2,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f,min:l.options.min,max:l.options.max,step:l.options.step},null,8,["modelValue","onUpdate:modelValue","min","max","step"])):l.view_type==="inputTag"?(s(),r(oe,{key:3})):l.view_type==="switch"?(s(),r(ae,{key:4})):l.view_type==="slider"?(s(),r(te,{key:5,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f,min:l.options.min,max:l.options.max,step:l.options.step},null,8,["modelValue","onUpdate:modelValue","min","max","step"])):l.view_type==="select"?(s(),r(O,{key:6,"field-names":{label:l.options.field_label||"label",value:l.options.field_value||"value"},options:l.option&&l.option[l.column_name]||[]},null,8,["field-names","options"])):l.view_type==="saSelect"?(s(),r(ne,{key:7,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f,dict:l.dict_type},null,8,["modelValue","onUpdate:modelValue","dict"])):l.view_type==="treeSelect"?(s(),r(ue,{key:8,"field-names":{key:l.options.field_value||"value",title:l.options.field_label||"label",icon:"customIcon"},data:l.option&&l.option[l.column_name]||[]},null,8,["field-names","data"])):l.view_type==="radio"?(s(),r(se,{key:9,dict:l.dict_type,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f},null,8,["dict","modelValue","onUpdate:modelValue"])):l.view_type==="checkbox"?(s(),r(de,{key:10,dict:l.dict_type},null,8,["dict"])):l.view_type==="date"?(s(),r(ie,{key:11,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f,mode:l.options.mode,"show-time":l.options.showTime},null,8,["modelValue","onUpdate:modelValue","mode","show-time"])):l.view_type==="time"?(s(),r(pe,{key:12,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f},null,8,["modelValue","onUpdate:modelValue"])):l.view_type==="rate"?(s(),r(re,{key:13,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f},null,8,["modelValue","onUpdate:modelValue"])):l.view_type==="cascader"?(s(),r(me,{key:14,"check-strictly":l.options.check_strictly||!1,"field-names":{label:l.options.field_label||"label",value:l.options.field_value||"value"},options:l.option&&l.option[l.column_name]||[]},null,8,["check-strictly","field-names","options"])):l.view_type==="userSelect"?(s(),r(fe,{key:15,isEcho:!0})):l.view_type==="cityLinkage"?(s(),r(ve,{key:16,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f,type:l.options.type,mode:l.options.mode},null,8,["modelValue","onUpdate:modelValue","type","mode"])):l.view_type==="editor"?(s(),r(_e,{key:17,height:l.options.height},null,8,["height"])):l.view_type==="wangEditor"?(s(),r(ye,{key:18,height:l.options.height},null,8,["height"])):l.view_type==="codeEditor"?(s(),r(Ve,{key:19,height:l.options.height},null,8,["height"])):l.view_type==="uploadImage"?(s(),r(be,{key:20,disabled:"",multiple:((T=l.options)==null?void 0:T.multiple)||!1,limit:((R=l.options)==null?void 0:R.limit)||1},null,8,["multiple","limit"])):l.view_type==="uploadFile"?(s(),r(ge,{key:21,disabled:"",multiple:((z=l.options)==null?void 0:z.multiple)||!1,limit:((P=l.options)==null?void 0:P.limit)||1},null,8,["multiple","limit"])):(s(),r(x,{key:22,modelValue:l.default_value,"onUpdate:modelValue":f=>l.default_value=f},null,8,["modelValue","onUpdate:modelValue"]))]}),_:2},1032,["label","required"])])],14,Pe)):g("",!0)],64))),256))],512)]),_:1},8,["model"])],4)]),_:1})]),p("div",Ge,[o(B,{title:"配置区域"},{default:a(()=>[o(n,{direction:"vertical",fill:""},{default:a(()=>[o(w,{orientation:"left"},{default:a(()=>e[29]||(e[29]=[i("页面配置")])),_:1}),o(n,null,{default:a(()=>[e[30]||(e[30]=p("span",{class:"config-label"},"表单宽度：",-1)),o(v,{modelValue:_.form_width,"onUpdate:modelValue":e[0]||(e[0]=l=>_.form_width=l),min:300,max:1e4},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[33]||(e[33]=p("span",{class:"config-label"},"是否全屏：",-1)),o(V,{modelValue:_.is_full,"onUpdate:modelValue":e[1]||(e[1]=l=>_.is_full=l)},{default:a(()=>[o(m,{value:!0},{default:a(()=>e[31]||(e[31]=[i("是")])),_:1}),o(m,{value:!1},{default:a(()=>e[32]||(e[32]=[i("否")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[36]||(e[36]=p("span",{class:"config-label"},"表单类型：",-1)),o(V,{modelValue:_.component_type,"onUpdate:modelValue":e[2]||(e[2]=l=>_.component_type=l)},{default:a(()=>[o(m,{value:1},{default:a(()=>e[34]||(e[34]=[i("modal表单")])),_:1}),o(m,{value:2},{default:a(()=>e[35]||(e[35]=[i("drawer表单")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[41]||(e[41]=p("span",{class:"config-label"},"栅格：",-1)),o(V,{modelValue:_.form_span,"onUpdate:modelValue":e[3]||(e[3]=l=>_.form_span=l),type:"button"},{default:a(()=>[o(m,{value:24},{default:a(()=>e[37]||(e[37]=[i("1列")])),_:1}),o(m,{value:12},{default:a(()=>e[38]||(e[38]=[i("2列")])),_:1}),o(m,{value:8},{default:a(()=>e[39]||(e[39]=[i("3列")])),_:1}),o(m,{value:6},{default:a(()=>e[40]||(e[40]=[i("4列")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(Ee,{"default-active-key":"1",class:"mt-4"},{default:a(()=>[o(M,{key:"1",title:"基础配置"},{default:a(()=>[o(n,{direction:"vertical",fill:""},{default:a(()=>[o(w,{orientation:"left"},{default:a(()=>e[42]||(e[42]=[i("表单选项")])),_:1}),o(n,null,{default:a(()=>[e[47]||(e[47]=p("span",{class:"config-label"},"行宽：",-1)),o(V,{modelValue:t.value.span,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.span=l),type:"button"},{default:a(()=>[o(m,{value:24},{default:a(()=>e[43]||(e[43]=[i("100%")])),_:1}),o(m,{value:12},{default:a(()=>e[44]||(e[44]=[i("50%")])),_:1}),o(m,{value:8},{default:a(()=>e[45]||(e[45]=[i("33%")])),_:1}),o(m,{value:6},{default:a(()=>e[46]||(e[46]=[i("25%")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[48]||(e[48]=p("span",{class:"config-label"},"标题：",-1)),o(x,{modelValue:t.value.column_comment,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value.column_comment=l)},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[49]||(e[49]=p("span",{class:"config-label"},"字段：",-1)),o(x,{modelValue:t.value.column_name,"onUpdate:modelValue":e[6]||(e[6]=l=>t.value.column_name=l),disabled:""},null,8,["modelValue"])]),_:1}),["inputNumber"].includes(t.value.view_type)?(s(),r(n,{key:0},{default:a(()=>[e[50]||(e[50]=p("span",{class:"config-label"},"默认：",-1)),o(v,{modelValue:t.value.default_value,"onUpdate:modelValue":e[7]||(e[7]=l=>t.value.default_value=l)},null,8,["modelValue"])]),_:1})):(s(),r(n,{key:1},{default:a(()=>[e[51]||(e[51]=p("span",{class:"config-label"},"默认：",-1)),o(x,{modelValue:t.value.default_value,"onUpdate:modelValue":e[8]||(e[8]=l=>t.value.default_value=l)},null,8,["modelValue"])]),_:1})),o(n,null,{default:a(()=>[e[54]||(e[54]=p("span",{class:"config-label"},"必填：",-1)),o(V,{modelValue:t.value.is_required,"onUpdate:modelValue":e[9]||(e[9]=l=>t.value.is_required=l)},{default:a(()=>[o(m,{value:2},{default:a(()=>e[52]||(e[52]=[i("是")])),_:1}),o(m,{value:1},{default:a(()=>e[53]||(e[53]=[i("否")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(w,{orientation:"left"},{default:a(()=>e[55]||(e[55]=[i("控件选项")])),_:1}),L.value.tree_parent_id&&t.value.column_name===L.value.tree_parent_id?(s(),r(ce,{key:2,type:"warning"},{default:a(()=>e[56]||(e[56]=[i(" 树表上级自动处理树形下拉框,无需配置 ")])),_:1})):g("",!0),o(n,null,{default:a(()=>[e[57]||(e[57]=p("span",{class:"config-label"},"控件：",-1)),o(O,{modelValue:t.value.view_type,"onUpdate:modelValue":e[10]||(e[10]=l=>t.value.view_type=l),style:{width:"200px"},options:De,onChange:Y},null,8,["modelValue","options"])]),_:1}),["inputNumber","slider"].includes(t.value.view_type)?(s(),b(U,{key:3},[o(n,null,{default:a(()=>[e[58]||(e[58]=p("span",{class:"config-label"},"最小值：",-1)),o(v,{modelValue:t.value.options.min,"onUpdate:modelValue":e[11]||(e[11]=l=>t.value.options.min=l)},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[59]||(e[59]=p("span",{class:"config-label"},"最大值：",-1)),o(v,{modelValue:t.value.options.max,"onUpdate:modelValue":e[12]||(e[12]=l=>t.value.options.max=l)},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[60]||(e[60]=p("span",{class:"config-label"},"步长：",-1)),o(v,{modelValue:t.value.options.step,"onUpdate:modelValue":e[13]||(e[13]=l=>t.value.options.step=l)},null,8,["modelValue"])]),_:1})],64)):g("",!0),["cascader"].includes(t.value.view_type)?(s(),r(n,{key:4},{default:a(()=>[e[63]||(e[63]=p("span",{class:"config-label"},"严选模式：",-1)),o(V,{modelValue:t.value.options.check_strictly,"onUpdate:modelValue":e[14]||(e[14]=l=>t.value.options.check_strictly=l)},{default:a(()=>[o(m,{value:!0},{default:a(()=>e[61]||(e[61]=[i("是")])),_:1}),o(m,{value:!1},{default:a(()=>e[62]||(e[62]=[i("否")])),_:1})]),_:1},8,["modelValue"])]),_:1})):g("",!0),["select","cascader","treeSelect"].includes(t.value.view_type)?(s(),b(U,{key:5},[o(n,null,{default:a(()=>[e[65]||(e[65]=p("span",{class:"config-label"},null,-1)),o(k,{type:"primary",status:"warning",onClick:h},{icon:a(()=>[o(Ue)]),default:a(()=>[e[64]||(e[64]=i(" 模型选择 "))]),_:1})]),_:1}),o(n,null,{default:a(()=>[e[66]||(e[66]=p("span",{class:"config-label"},"字段Label：",-1)),o(x,{modelValue:t.value.options.field_label,"onUpdate:modelValue":e[15]||(e[15]=l=>t.value.options.field_label=l)},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[67]||(e[67]=p("span",{class:"config-label"},"字段Value：",-1)),o(x,{modelValue:t.value.options.field_value,"onUpdate:modelValue":e[16]||(e[16]=l=>t.value.options.field_value=l)},null,8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[68]||(e[68]=p("span",{class:"config-label"},"请求地址：",-1)),o(x,{modelValue:t.value.options.url,"onUpdate:modelValue":e[17]||(e[17]=l=>t.value.options.url=l)},null,8,["modelValue"]),o(k,{shape:"circle",onClick:Z},{default:a(()=>[o(xe)]),_:1})]),_:1})],64)):g("",!0),["saSelect","radio","checkbox"].includes(t.value.view_type)?(s(),r(n,{key:6},{default:a(()=>[e[69]||(e[69]=p("span",{class:"config-label"},"字典：",-1)),o(O,{modelValue:t.value.dict_type,"onUpdate:modelValue":e[18]||(e[18]=l=>t.value.dict_type=l),options:I.value,"allow-clear":"","field-names":{label:"name",value:"code"},placeholder:"选择数据字典"},null,8,["modelValue","options"])]),_:1})):g("",!0),["uploadImage","uploadFile"].includes(t.value.view_type)?(s(),b(U,{key:7},[o(n,null,{default:a(()=>[e[72]||(e[72]=p("span",{class:"config-label"},"是否多选：",-1)),o(V,{modelValue:t.value.options.multiple,"onUpdate:modelValue":e[19]||(e[19]=l=>t.value.options.multiple=l)},{default:a(()=>[o(m,{value:!0},{default:a(()=>e[70]||(e[70]=[i("是")])),_:1}),o(m,{value:!1},{default:a(()=>e[71]||(e[71]=[i("否")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[73]||(e[73]=p("span",{class:"config-label"},"上传数量：",-1)),o(v,{modelValue:t.value.options.limit,"onUpdate:modelValue":e[20]||(e[20]=l=>t.value.options.limit=l),min:1},null,8,["modelValue"])]),_:1})],64)):g("",!0),["editor","wangEditor","codeEditor"].includes(t.value.view_type)?(s(),r(n,{key:8},{default:a(()=>[e[74]||(e[74]=p("span",{class:"config-label"},"编辑高度：",-1)),o(v,{modelValue:t.value.options.height,"onUpdate:modelValue":e[21]||(e[21]=l=>t.value.options.height=l)},null,8,["modelValue"])]),_:1})):g("",!0),["date"].includes(t.value.view_type)?(s(),b(U,{key:9},[o(n,null,{default:a(()=>[e[80]||(e[80]=p("span",{class:"config-label"},"类型：",-1)),o(O,{modelValue:t.value.options.mode,"onUpdate:modelValue":e[22]||(e[22]=l=>t.value.options.mode=l),"allow-clear":""},{default:a(()=>[o(C,{value:"date"},{default:a(()=>e[75]||(e[75]=[i("日期选择器")])),_:1}),o(C,{value:"week"},{default:a(()=>e[76]||(e[76]=[i("周选择器")])),_:1}),o(C,{value:"month"},{default:a(()=>e[77]||(e[77]=[i("月选择器")])),_:1}),o(C,{value:"quarter"},{default:a(()=>e[78]||(e[78]=[i("季度选择器")])),_:1}),o(C,{value:"year"},{default:a(()=>e[79]||(e[79]=[i("年选择器")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[83]||(e[83]=p("span",{class:"config-label"},"显示时间：",-1)),o(V,{modelValue:t.value.options.showTime,"onUpdate:modelValue":e[23]||(e[23]=l=>t.value.options.showTime=l)},{default:a(()=>[o(m,{value:!0},{default:a(()=>e[81]||(e[81]=[i("是")])),_:1}),o(m,{value:!1},{default:a(()=>e[82]||(e[82]=[i("否")])),_:1})]),_:1},8,["modelValue"])]),_:1})],64)):g("",!0),["cityLinkage"].includes(t.value.view_type)?(s(),b(U,{key:10},[o(n,null,{default:a(()=>[e[86]||(e[86]=p("span",{class:"config-label"},"组件类型：",-1)),o(V,{modelValue:t.value.options.type,"onUpdate:modelValue":e[24]||(e[24]=l=>t.value.options.type=l)},{default:a(()=>[o(m,{value:"select"},{default:a(()=>e[84]||(e[84]=[i("下拉")])),_:1}),o(m,{value:"cascader"},{default:a(()=>e[85]||(e[85]=[i("级联")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,null,{default:a(()=>[e[89]||(e[89]=p("span",{class:"config-label"},"返回数据：",-1)),o(V,{modelValue:t.value.options.mode,"onUpdate:modelValue":e[25]||(e[25]=l=>t.value.options.mode=l)},{default:a(()=>[o(m,{value:"code"},{default:a(()=>e[87]||(e[87]=[i("省市编码")])),_:1}),o(m,{value:"name"},{default:a(()=>e[88]||(e[88]=[i("省市名称")])),_:1})]),_:1},8,["modelValue"])]),_:1})],64)):g("",!0)]),_:1})]),_:1}),o(M,{key:"2",title:"字段操作"},{default:a(()=>[o(n,{direction:"vertical",fill:""},{default:a(()=>[(s(!0),b(U,null,$(j.value,(l,Te)=>(s(),r(n,{key:l.id},{default:a(()=>[p("span",$e,H(l.column_comment)+"("+H(l.column_name)+")：",1),o(je,{modelValue:l.insert,"onUpdate:modelValue":T=>l.insert=T},{default:a(()=>e[90]||(e[90]=[i("表单显示")])),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1},8,["visible"]),o(Ie,{ref_key:"tableRef",ref:F,onChoose:ee},null,512)])}}},lo=Oe(He,[["__scopeId","data-v-1a2aae63"]]);export{lo as default};
