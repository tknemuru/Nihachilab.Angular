/// <reference path="./Scripts/typings/angularjs/angular.d.ts" />
"use strict";
angular.module('app', []).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/index.html', controller: 'app.FooController' });
}]);
//# sourceMappingURL=app.js.map