sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], (BaseController,JSONModel) => {
    "use strict";
  
    return BaseController.extend("app.mininginfo.controller.App", {
        onInit() {
       
        },
        getModel:function(){
          return this.getOwnerComponent().getModel()

        }
    });
  });