"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var PlutoPage = /** @class */ (function (_super) {
    __extends(PlutoPage, _super);
    /**
     *
     */
    function PlutoPage() {
        return _super.call(this, 'pluto-url') || this;
    }
    return PlutoPage;
}(index_1.BasePage));
exports.PlutoPage = PlutoPage;
