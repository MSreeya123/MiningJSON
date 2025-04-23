sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (BaseController,JSONModel) => {
  "use strict";

  return BaseController.extend("app.mininginfo.controller.App", {
      onInit() {
        var oModel=new JSONModel("/model/mockData/miningData.json");
      //  oModel.loadData("/model/mockData/toolsData.json")
        this.getView().setModel(oModel,"MiningModel")
    
      }
  });
});