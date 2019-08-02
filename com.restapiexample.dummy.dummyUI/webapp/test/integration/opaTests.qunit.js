/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/restapiexample/dummy/dummyUI/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
