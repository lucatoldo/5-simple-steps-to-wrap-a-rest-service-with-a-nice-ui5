sap.ui.define([
	"sap/ui/test/Opa5"
], function(Opa5) {
	"use strict";

	return Opa5.extend("com.restapiexample.dummy.dummyUI.test.integration.arrangements.Startup", {

		iStartMyApp: function () {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "com.restapiexample.dummy.dummyUI",
					async: true,
					manifest: true
				}
			});
		}

	});
});
