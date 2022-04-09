"use strict";(self.webpackChunkengineering_com=self.webpackChunkengineering_com||[]).push([[599],{599:(R,f,b)=>{b.r(f),b.d(f,{default:()=>A});const _=document.createElement("template");_.innerHTML='<style>\n    #dialog_content {\n        margin: 10px 10px 5px 10px;\n        background: #DDD;\n        overflow: auto;\n        text-align: left;\n        border: 1px solid #5a6162;\n    }\n\n    #dialog_content p,\n    #dialog_content select,\n    #dialog_content label {\n        margin: 10px;\n        line-height: 1.3em;\n    }\n\n    #dialog_container {\n        font-family: Verdana;\n        text-align: center;\n        left: 50%;\n        top: 50%;\n        max-width: 440px;\n        z-index: 50001;\n        background: #5a6162;\n        border: 1px outset #777;\n        font-family: Verdana, Helvetica, sans-serif;\n        font-size: 0.8em;\n    }\n\n    #dialog_container,\n    #dialog_content {\n        border-radius: 5px;\n        -moz-border-radius: 5px;\n        -webkit-border-radius: 5px;\n    }\n\n    #dialog_buttons input[type=text] {\n        width: 90%;\n        display: block;\n        margin: 0 0 5px 11px;\n    }\n\n    #dialog_buttons input[type=button] {\n        margin: 0 1em;\n    }\n</style>\n<elix-dialog id="dialog_box" aria-label="SVG-Edit storage preferences" closed>\n    <div class="overlay"></div>\n    <div id="dialog_container">\n        <div id="dialog_content">\n            <p id="notificationNote"> </p>\n            <select id="se-storage-pref">\n                <option value="prefsAndContent" id="prefsAndContent"></option>\n                <option value="prefsOnly" id="prefsOnly"></option>\n                <option value="noPrefsOrContent" id="noPrefsOrContent"></option>\n            </select>\n            <label title="" id="se-remember-title">\n                <input type="checkbox" id="se-remember" value="" checked="checked">\n            </label>\n        </div>\n        <div id="dialog_buttons">\n            <button id="storage_ok"></button>\n            <button id="storage_cancel"></button>\n        </div>\n    </div>\n</elix-dialog>';class S extends HTMLElement{constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.append(_.content.cloneNode(!0)),this.$dialog=this._shadowRoot.querySelector("#dialog_box"),this.$storage=this._shadowRoot.querySelector("#js-storage"),this.$okBtn=this._shadowRoot.querySelector("#storage_ok"),this.$cancelBtn=this._shadowRoot.querySelector("#storage_cancel"),this.$storageInput=this._shadowRoot.querySelector("#se-storage-pref"),this.$rememberInput=this._shadowRoot.querySelector("#se-remember")}init(o){this.setAttribute("common-ok",o.t("common.ok")),this.setAttribute("common-cancel",o.t("common.cancel")),this.setAttribute("notify-editor_pref_msg",o.t("notification.editorPreferencesMsg")),this.setAttribute("properties-prefs_and_content",o.t("properties.prefs_and_content")),this.setAttribute("properties-prefs_only",o.t("properties.prefs_only")),this.setAttribute("properties-no_prefs_or_content",o.t("properties.no_prefs_or_content")),this.setAttribute("tools-remember_this_choice",o.t("tools.remember_this_choice")),this.setAttribute("tools-remember_this_choice_title",o.t("tools.remember_this_choice_title"))}static get observedAttributes(){return["dialog","storage","common-ok","common-cancel","notify-editor_pref_msg","properties-prefs_and_content","tools-remember_this_choice","tools-remember_this_choice_title","properties-prefs_only","properties-no_prefs_or_content"]}attributeChangedCallback(o,r,i){let n;switch(o){case"dialog":"open"===i?this.$dialog.open():this.$dialog.close();break;case"storage":this.$storageInput.options[0].disabled="true"!==i;break;case"common-ok":this.$okBtn.textContent=i;break;case"common-cancel":this.$cancelBtn.textContent=i;break;case"notify-editor_pref_msg":n=this._shadowRoot.querySelector("#notificationNote"),n.textContent=i;break;case"properties-prefs_and_content":n=this._shadowRoot.querySelector("#prefsAndContent"),n.textContent=i;break;case"properties-prefs_only":n=this._shadowRoot.querySelector("#prefsOnly"),n.textContent=i;break;case"properties-no_prefs_or_content":n=this._shadowRoot.querySelector("#noPrefsOrContent"),n.textContent=i;break;case"tools-remember_this_choice":n=this._shadowRoot.querySelector("#se-remember-title"),n.prepend(i);break;case"tools-remember_this_choice_title":n=this._shadowRoot.querySelector("#se-remember-title"),n.setAttribute("title",i)}}get dialog(){return this.getAttribute("dialog")}set dialog(o){this.setAttribute("dialog",o)}connectedCallback(){const o=(r,i)=>{const n=new CustomEvent("change",{detail:{trigger:i,select:this.$storageInput.value,checkbox:this.$rememberInput.checked}});this.dispatchEvent(n)};svgEditor.$click(this.$okBtn,r=>o(0,"ok")),svgEditor.$click(this.$cancelBtn,r=>o(0,"cancel"))}}customElements.define("se-storage-dialog",S);const v=()=>{k("svgeditstore")},k=e=>{document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"},x=e=>{e=e?"storagePrompt="+e:"";const o=top.location;o.href.includes("storagePrompt=")?o.href=o.href.replace(/([&?])storagePrompt=[^&]*(&?)/,function(r,i,n){return(e?i:"")+e+(!e&&n?i:n||"")}):o.href+=(o.href.includes("?")?"&":"?")+e};var A={name:"storage",init(){const e=this,{svgCanvas:o,storage:r}=e,{noStorageOnLoad:i,forceStorage:n,canvasName:P}=e.configObj.curConfig;if(r&&(n||!i&&/(?:^|;\s*)svgeditstore=prefsAndContent/.test(document.cookie))){const t="svgedit-"+P,s=r.getItem(t);if(s){var g;e.loadFromString(s);const a=null!==(g=r.getItem("title-".concat(t)))&&void 0!==g?g:"untitled.svg";e.topPanel.updateTitle(a)}}const d=document.createElement("se-storage-dialog");d.setAttribute("id","se-storage-dialog"),e.$container.append(d),d.init(e.i18next),d.addEventListener("change",t=>{var s,a,c;if(d.setAttribute("dialog","close"),"ok"===(null==t||null===(s=t.detail)||void 0===s?void 0:s.trigger))if("noPrefsOrContent"!==(null==t||null===(c=t.detail)||void 0===c?void 0:c.select)){var p;const l=new URL(top.location).searchParams.get("storagePrompt");if(document.cookie="svgeditstore="+encodeURIComponent(t.detail.select)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT","true"===l&&null!=t&&null!==(p=t.detail)&&void 0!==p&&p.checkbox)return void x()}else{var u,m,h;if(v(),e.configObj.curConfig.emptyStorageOnDecline&&null!=t&&null!==(u=t.detail)&&void 0!==u&&u.checkbox&&(y(""),Object.keys(e.curPrefs).forEach(l=>{l="svg-edit-"+l,e.storage&&e.storage.removeItem(l),k(l)})),null!=t&&null!==(m=t.detail)&&void 0!==m&&m.select&&null!=t&&null!==(h=t.detail)&&void 0!==h&&h.checkbox)return void x("false")}else"cancel"===(null==t||null===(a=t.detail)||void 0===a?void 0:a.trigger)&&v();C(),e.storagePromptState="closed",e.updateCanvas(!0)});const y=t=>{const s="svgedit-".concat(e.configObj.curConfig.canvasName);t?(r.setItem(s,t),r.setItem("title-".concat(s),e.title)):(r.removeItem(s),r.removeItem("".concat(s,"-title")))},C=()=>{window.addEventListener("beforeunload",function(){if(!/(?:^|;\s*)svgeditstore=(?:prefsAndContent|prefsOnly)/.test(document.cookie))return;/(?:^|;\s*)svgeditstore=prefsAndContent/.test(document.cookie)&&y(o.getSvgString()),e.setConfig({no_save_warning:!0});const{curPrefs:t}=e.configObj;Object.entries(t).forEach(s=>{let[a,c]=s;a="svg-edit-"+a,void 0!==c&&(r?r.setItem(a,c):window.widget?window.widget.setPreferenceForKey(c,a):(c=encodeURIComponent(c),document.cookie=encodeURIComponent(a)+"="+c+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"))})})};let w=!1;return{name:"storage",callback(){const t=new URL(top.location).searchParams.get("storagePrompt");if(!w)if(w=!0,n||"true"!==t&&("false"===t||/(?:^|;\s*)svgeditstore=(?:prefsAndContent|prefsOnly)/.test(document.cookie)))i&&!n||C();else{const s=Boolean(r);e.storagePromptState="waiting";const a=document.getElementById("se-storage-dialog");a.setAttribute("dialog","open"),a.setAttribute("storage",s)}}}}}}}]);