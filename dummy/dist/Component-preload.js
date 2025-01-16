//@ui5-bundle app/dummy/Component-preload.js
sap.ui.require.preload({
	"app/dummy/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","app/dummy/model/models"],(e,t)=>{"use strict";return e.extend("app.dummy.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"app/dummy/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("app.dummy.controller.App",{onInit(){}})});
},
	"app/dummy/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("app.dummy.controller.View1",{onInit(){}})});
},
	"app/dummy/i18n/i18n.properties":'# This is the resource bundle for app.dummy\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"app/dummy/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"app.dummy","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.16.1","toolsId":"f8bab502-00c1-4eee-aac3-ce74a1010f84"},"dataSources":{"mainService":{"uri":"odata/v4/CatalogService/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.131.1","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"app.dummy.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"app.dummy.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"app.dummy.view.App","type":"XML","id":"App"}}}',
	"app/dummy/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"app/dummy/view/App.view.xml":'<mvc:View controllerName="app.dummy.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"app/dummy/view/View1.view.xml":'<mvc:View controllerName="app.dummy.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="_IDGenPage" title="Login" showHeader="false"><content><VBox id="_IDGenVBox" alignItems="Center" justifyContent="Center" height="100%"><FlexBox id="_IDGenFlexBox1" direction="Column" alignItems="Center" justifyContent="Center"><Title id="_IDGenTitle" text="Login" class="sapUiMediumMarginBottom"/><Input id="userInput" placeholder="Username" class="sapUiSmallMarginBottom" width="300px"/><Input id="passwordInput" placeholder="Password" type="Password" class="sapUiSmallMarginBottom" width="300px"/><HBox id="_IDGenHBox" class="sapUiSmallMarginBottom"><items><Button id="_IDGenButton"  type="Emphasized"  text="Login" press="onLoginPress" width="300px"/></items></HBox></FlexBox></VBox></content></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
