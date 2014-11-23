/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var MockFactorys;
    (function (MockFactorys) {
        "use strict";
        var VideoMockFactory = (function () {
            function VideoMockFactory() {
            }
            /**
             * 動画モックのリストを取得します。
             */
            VideoMockFactory.prototype.getVideoMocks = function () {
                var mockVideos = [];
                var getNewInstance = function (id) {
                    var video = new Nihachilab.Models.Video();
                    video.id = id;
                    return video;
                };
                mockVideos.push(getNewInstance(1));
                mockVideos.push(getNewInstance(2));
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
//# sourceMappingURL=video-mock.js.map