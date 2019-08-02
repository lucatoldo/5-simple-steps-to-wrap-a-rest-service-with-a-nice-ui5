sap.ui.define([
  "sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
], function(Controller) {
  "use strict";

  return Controller.extend("com.restapiexample.dummy.dummyUI.controller.MainView", {
		onInit: function() {
			var oModel = new JSONModel({
				data: {}
			});
			this.getView().setModel(oModel);
		},
		onPress: function(event) {
			var sValue = this.byId("inputValue").getValue();
                        var inputarray = sValue.split(",");
			var aData = $.ajax({
				url: '/destinations/api/v1/create',
				dataType: 'json',
				type: 'post',
				async: false,
				data: JSON.stringify({"name":  inputarray[0],
                                                      "salary": inputarray[1],
                                                      "age": inputarray[2]
                                                     }),
				processData: false,
				success: function(data, textStatus, jQxhr) {
					var oModel = new JSONModel({
						data: {}
					});
					oModel.setData(data);
				}
			});
			this.byId("result").setText(aData.responseText);
		}
});
});
