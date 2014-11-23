/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-scenario.d.ts" />

'use strict';

describe('動画サービスのテスト', () => {
    var $httpBackend: ng.IHttpBackendService;
    var $http: ng.IHttpService;
    var videoService: Nihachilab.Services.VideoService;
    var factory: Nihachilab.MockFactorys.VideoMockFactory;

    beforeEach(inject((_$httpBackend_: ng.IHttpBackendService, _$http_: ng.IHttpService) => {
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);

        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);
    }));

    it('動画リストを全件取得する', () => {
        videoService.get((data, status, headers, config) => {
            expect(data.length).toBe(factory.getMockCount());
        });
        $httpBackend.flush();
    });
});