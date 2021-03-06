﻿/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-scenario.d.ts" />

'use strict';

describe('動画コントローラのテスト', () => {
    var $rootScope: ng.IRootScopeService;
    var $scope: Nihachilab.Controllers.Scope;
    var $httpBackend: ng.IHttpBackendService;
    var $http: ng.IHttpService;
    var factory: Nihachilab.MockFactorys.VideoMockFactory;
    var videoController: Nihachilab.Controllers.VideoController;
    var videoService: Nihachilab.Services.VideoService;

    beforeEach(inject((_$httpBackend_: ng.IHttpBackendService
        , _$http_: ng.IHttpService
        , _$rootScope_: ng.IRootScopeService) => {

        $rootScope = _$rootScope_;
        $scope = <Nihachilab.Controllers.Scope>$rootScope.$new();
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);

        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);

        // 動画コントローラの生成
        videoController = new Nihachilab.Controllers.VideoController($scope, videoService);
        $httpBackend.flush();
    }));

    it('動画リストを全件取得して$scopeにセットする', () => {
        expect($scope.videos.length).toBe(factory.getMockCount());
    });
});