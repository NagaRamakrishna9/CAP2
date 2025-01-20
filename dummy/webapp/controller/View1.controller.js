sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("app.dummy.controller.View1", {
        onInit: function () {
        },

        onLoginPress: function () {
            // Example validation logic for login
            var username = this.byId("userInput").getValue();
            var password = this.byId("passwordInput").getValue();

            if (username === "admin" && password === "admin") {
                MessageToast.show("Login successful");
                this.getOwnerComponent().getRouter().navTo("view2");
            } else {
                MessageToast.show("Invalid credentials");
            }
        }
    });
});
