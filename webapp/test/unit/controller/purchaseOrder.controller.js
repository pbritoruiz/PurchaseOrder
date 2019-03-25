/*global QUnit*/

sap.ui.define([
	"purchaseorder/PurchaseOrder/controller/purchaseOrder.controller"
], function (Controller) {
	"use strict";

	QUnit.module("purchaseOrder Controller");

	QUnit.test("I should test the purchaseOrder controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});