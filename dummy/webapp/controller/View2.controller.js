sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("app.dummy.controller.View2", {

        onInit: function () {
            // Initialize your controller if needed
        },

        // Navigation function for the Back button
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1); 
            } else {
                // If there's no history, navigate to View1 using the router
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("view1"); // Replace "view1" with the name of your route to View1
            }
        }
    });
});
