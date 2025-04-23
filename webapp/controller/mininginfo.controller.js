sap.ui.define([
    "./basecontroller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    
    
], (baseontroller,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return baseontroller.extend("app.mininginfo.controller.mininginfo", {
        onInit() {

            // let oModel= new JSONModel("/model/mockData/miningData.json")
            // this.getView().setModel(oModel,"MiningModel")

           
        },

        onSearch:function(oEvent){
            var searchString=oEvent.getParameter("query")||oEvent.getParameter("newValue");
            var oName=new Filter("Name",sap.ui.model.FilterOperator.Contains,searchString);
            
       
            var aFilter=[oName];
               
            var oList=this.getView().byId("idMinList");
            var oBinding=oList.getBinding("items");
            oBinding.filter(aFilter);
           
        },

        onItemSelect:function(oEvent){
            var oList=oEvent.getParameter("listItem");
            let sPath=oList.getBindingContextPath();
            let aItems=sPath.split("/")
            let id=aItems[aItems.length-1]
            let oRouter=this.getOwnerComponent().getRouter()
            oRouter.navTo("Routedetail",{
                index:id
            })
        },

        onSort:function(){
            if(!this.bDescending){
            this.bDescending=false;   //Variable is being used as a flag(true/false) to determine howt he list should be sorted
            }
           
            var oSorter=new sap.ui.model.Sorter("Name",this.bDescending);
            var oList=this.getView().byId("idMinList");
            var oBinding=oList.getBinding("items");
            oBinding.sort(oSorter);
            this.bDescending=!this.bDescending;
           
        },
    });
});