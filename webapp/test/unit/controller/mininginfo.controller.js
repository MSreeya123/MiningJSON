/*global QUnit*/

sap.ui.define([
	"app/mininginfo/controller/mininginfo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mininginfo Controller");

	QUnit.test("I should test the mininginfo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
