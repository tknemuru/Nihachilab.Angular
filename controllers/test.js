/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
var TestModule;
(function (TestModule) {
    var Moge;
    (function (Moge) {
        "use strict";
        var HogeService = (function () {
            function HogeService() {
            }
            return HogeService;
        })();
        Moge.HogeService = HogeService;
        var FooController = (function () {
            function FooController($scope, hogeService) {
                this.$scope = $scope;
                this.hogeService = hogeService;
            }
            return FooController;
        })();
        Moge.FooController = FooController;
    })(Moge = TestModule.Moge || (TestModule.Moge = {}));
})(TestModule || (TestModule = {}));
angular.module('fuga.aga', []).service('HogeService', TestModule.Moge.HogeService);
angular.module('fuga.moge', ['fuga.aga']).controller('FooController', ['$scope', 'HogeService', TestModule.Moge.FooController]);
//# sourceMappingURL=test.js.map