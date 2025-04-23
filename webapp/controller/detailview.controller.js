sap.ui.define([
    "./basecontroller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
     "sap/ui/model/FilterOperator",
     "sap/ui/core/Fragment"
    
], (Controller,JSONModel,Filter,FilterOperator,Fragment) => {
    "use strict";
 
    return Controller.extend("app.mininginfo.controller.detailview", {
        onInit() {

            // let oModel= new JSONModel("/model/mockData/miningData.json")
            // this.getView().setModel(oModel,"MiningModel")

            let oRouter=this.getOwnerComponent().getRouter()
            oRouter.attachRoutePatternMatched(this.onRouteMatched,this)

          
        },
        onRouteMatched:function(oEvent){
            //console.log(oEvent)
            let index=oEvent.getParameter("arguments").index
            let sPath1="MiningModel>/locations/"+index
            let oView=this.getView()
            oView.bindElement(sPath1)
        },

            onFilter:function(){
                let aFilter=[]
                let sSupp=this.getView().byId("idInptSupp").getValue()
                let sRes=this.getView().byId("idResources").getValue()
                if(sSupp){
                    let filterSupp=new Filter("supplier name",FilterOperator.Contains,sSupp)
                    aFilter.push(filterSupp)
                }
                if(sRes){
                    let filterRes=new Filter("resource",FilterOperator.Contains,sRes)
                    aFilter.push(filterRes)
                }
    
                let oTable=this.getView().byId("idResTable")
              let bindingInfo=oTable.getBinding("items")
                 bindingInfo.filter(aFilter);
            },

            onConfimSupp:function(oEvent){
                let oSeletedItems=oEvent.getParameter("selectedItem")
                let sValue=oSeletedItems.getProperty("info")
                let oInput=sap.ui.getCore().byId(this.inputFeild)
                    oInput.setValue(sValue)
             
              },

              onF4Help:function(oEvent){
                this.inputFeild=oEvent.getSource().getId()
               let oModel=this.getView().getModel("MiningModel")
               let aData=oModel.getProperty("/resources")
                let deepCopy=JSON.parse(JSON.stringify(aData))
                let oModelFrag=new JSONModel({newSuppSet:deepCopy})
    
    
                if(!this.oDiolog){
                    this.oDiolog=Fragment.load({
     
                        fragmentName:"app.mininginfo.fragements.suppPopUp",
                        controller:this
     
                    }).then((dialog)=>{
                        this.oDiolog=dialog
                        this.getView().addDependent(this.oDiolog)
                        this.getView().setModel(oModelFrag, "FragmentModel")
                        this.oDiolog.open()    
                    })    
                }else{
                    this.oDiolog.open()
                }
            }
         
    });
});
 