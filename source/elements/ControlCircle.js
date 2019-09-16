"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Control_js_1 = require("./Control.js");
// A first pass implementation of a control circle. In the future, it seems to
// make sense for basic elements to be draggable. I think this would mean
// making a draggable interface or class that contains window event handlers.
// Another alternative would be moving some of that logic into the controller or
// interactive wrapper class.
var ControlCircle = /** @class */ (function (_super) {
    __extends(ControlCircle, _super);
    /**
    * Constructs a control at the position (x,y)
    */
    function ControlCircle(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.point.r.baseVal.value = ControlCircle.circleRadius;
        _this.handle.r.baseVal.value = ControlCircle.circleRadius + .8;
        _this.handle.style.strokeWidth = '2';
        // this.point.style.fill = 'lightblue';
        _this.point.style.fill = _this.handle.style.stroke;
        return _this;
    }
    // Describes the size of the control handle and point
    ControlCircle.circleRadius = 10;
    return ControlCircle;
}(Control_js_1["default"]));
exports["default"] = ControlCircle;
