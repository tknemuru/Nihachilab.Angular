/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

module Nihachilab.MockFactorys {
    "use strict";

    export class VideoMockFactory {
        /**
         * 動画モックリストの要素数を取得します。
         */
        public getMockCount(): number {
            return this.mockCount;
        }
        private mockCount: number = 2;

        /**
         * コンストラクタ
         */
        constructor($httpBackend: ng.IHttpBackendService) {
            $httpBackend.whenGET(Configs.ApiConfig.getVideoUrl())
                .respond(this.getVideoMocks());
        }

        /**
         * 動画モックのリストを取得します。
         */
        public getVideoMocks(): Nihachilab.Models.Video[] {
            var mockVideos: Nihachilab.Models.Video[] = [];
            for (var i = 0; i < this.mockCount; i++) {
                mockVideos.push(this.getNewInstance(i));
            }
            return mockVideos;
        }

        /**
         * 動画モックの新しいインスタンスを取得します。
         */
        private getNewInstance(id: number): Nihachilab.Models.Video {
            var video = new Nihachilab.Models.Video();
            video.id = id;
            return video;
        }
    }
}