/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
var InvoiceController = (function () {
    function InvoiceController() {
        this.usdToForeignRates = {};
        this.init();
    }
    InvoiceController.prototype.total = function (outCurr) {
        return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
    };
    InvoiceController.prototype.convertCurrency = function (amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] * 1 / this.usdToForeignRates[inCurr];
    };
    InvoiceController.prototype.pay = function () {
        window.alert("Thanks!");
    };
    InvoiceController.prototype.init = function () {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.usdToForeignRates['USD'] = 1;
        this.usdToForeignRates['EUR'] = 0.74;
        this.usdToForeignRates['CNY'] = 6.09;
    };
    return InvoiceController;
})();
angular.module('invoice1', []).controller('InvoiceController', [InvoiceController]);
//# sourceMappingURL=invoice1.js.map