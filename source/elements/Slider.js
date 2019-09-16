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
var SVG_js_1 = require("../SVG.js");
var Line_js_1 = require("../elements/Line.js");
var Element_js_1 = require("../elements/Element.js");
var ControlCircle_js_1 = require("./ControlCircle.js");
/**
* A horizontal slider is an object that allows for a control to be moved along
* a user- defined range. The slider has a minimum value and a maximum value
* which default to the range [0, 100].
*/
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    /**
    * Constructs the slider at the position (x,y). The leftmost edge of the line
    * is placed at this location.
    */
    function Slider(x, y, width, value) {
        if (width === void 0) { width = 100; }
        if (value === void 0) { value = 0; }
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Group();
        _this.line = new Line_js_1["default"](x, y, x + width, y);
        _this.line.root.style.strokeWidth = '1.5';
        _this.line.root.style.strokeLinecap = 'round';
        _this.control = new ControlCircle_js_1["default"](x + value, y);
        _this.control.constrainWithinBox(x, y, x + width, y);
        _this.control.point.r.baseVal.value -= 1.5;
        _this.control.handle.r.baseVal.value -= 2;
        _this.control.handle.style.strokeWidth = '2';
        _this.root.appendChild(_this.line.root);
        _this.root.appendChild(_this.control.root);
        _this.root.id = _this.id;
        _this.update = function () { };
        _this.addDependency(_this.control);
        _this.width = width;
        _this.min = 0;
        _this.max = 100;
        _this.value = value;
        return _this;
    }
    Object.defineProperty(Slider.prototype, "onchange", {
        set: function (fn) {
            this.control.onchange = function () {
                this.control._onchange();
                fn();
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "width", {
        /**
        * Returns the width of the display line
        */
        get: function () {
            return this.line.x2 - this.line.x1;
        },
        /**
        * Sets the width of the display line
        */
        set: function (width) {
            this.line.x2 = this.line.x1 + width;
            this.control.constrainWithinBox(this.line.x1, this.line.y1, this.line.x2, this.line.y2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "value", {
        /**
        * Returns the value currently represented by this slider.
        */
        get: function () {
            return (this.control.x - this.line.x1) / this.width * (this.range);
        },
        /**
        * Sets the value currently represented by this slider.
        */
        set: function (n) {
            this.control.x = this.line.x1 + n / this.range * (this.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "min", {
        /**
        * Returns the minimum possible value of the range.
        */
        get: function () {
            return this._min;
        },
        /**
        * Sets the minimum possible value of the range.
        */
        set: function (value) {
            this._min = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "max", {
        /**
        * Returns the maximum possible value of the range.
        */
        get: function () {
            return this._max;
        },
        /**
        * Returns the maximum possible value of the range.
        */
        set: function (value) {
            this._max = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slider.prototype, "range", {
        /**
        * Returns the length of the range represented by this slider.
        */
        get: function () {
            return this.max - this.min;
        },
        enumerable: true,
        configurable: true
    });
    return Slider;
}(Element_js_1["default"]));
exports["default"] = Slider;
