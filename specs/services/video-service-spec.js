/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-scenario.d.ts" />
'use strict';
describe('動画サービスのテスト', function () {
    var $httpBackend;
    var $http;
    var videoService;
    var factory;
    beforeEach(inject(function (_$httpBackend_, _$http_) {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);
        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);
    }));
    it('動画リストを全件取得する', function () {
        videoService.get(function (data, status, headers, config) {
            expect(data.length).toBe(factory.getMockCount());
        });
        $httpBackend.flush();
    });
});
//# sourceMappingURL=video-service-spec.js.map