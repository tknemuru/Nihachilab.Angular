/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var MockFactorys;
    (function (MockFactorys) {
        "use strict";
        var VideoMockFactory = (function () {
            /**
             * コンストラクタ
             */
            function VideoMockFactory($httpBackend) {
                this.mockCount = 2;
                $httpBackend.whenGET(Nihachilab.Configs.ApiConfig.getVideoUrl()).respond(this.getVideoMocks());
            }
            /**
             * 動画モックリストの要素数を取得します。
             */
            VideoMockFactory.prototype.getMockCount = function () {
                return this.mockCount;
            };
            /**
             * 動画モックのリストを取得します。
             */
            VideoMockFactory.prototype.getVideoMocks = function () {
                var mockVideos = [];
                for (var i = 0; i < this.mockCount; i++) {
                    mockVideos.push(this.getNewInstance(i));
                }
                return mockVideos;
            };
            /**
             * 動画モックの新しいインスタンスを取得します。
             */
            VideoMockFactory.prototype.getNewInstance = function (id) {
                var video = new Nihachilab.Models.Video();
                video.id = id;
                return video;
            };
            return VideoMockFactory;
        })();
        MockFactorys.VideoMockFactory = VideoMockFactory;
    })(MockFactorys = Nihachilab.MockFactorys || (Nihachilab.MockFactorys = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=video-mock-factory.js.map