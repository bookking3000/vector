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
var Element_js_1 = require("./Element.js");
/**
* A rectangle is a basic element with a position, width, and height. The
* position refers to the top left corner of the rectangle
*/
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Rectangle(x, y, width, height);
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "x", {
        /**
        * Returns the x position of the rectangle
        */
        get: function () {
            return this.root.x.baseVal.value;
        },
        /**
        * Sets the x position of the rectangle
        */
        set: function (n) {
            this.root.x.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        /**
        * Returns the y position of the rectangle
        */
        get: function () {
            return this.root.y.baseVal.value;
        },
        /**
        * Sets the y position of the rectangle
        */
        set: function (n) {
            this.root.y.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
        * Returns the width of the rectangle
        */
        get: function () {
            return this.root.width.baseVal.value;
        },
        /**
        * Sets the width of the rectangle
        */
        set: function (n) {
            this.root.width.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
        * Returns the height of the rectangle
        */
        get: function () {
            return this.root.height.baseVal.value;
        },
        /**
        * Sets the height of the rectangle
        */
        set: function (n) {
            this.root.height.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    /*
    * Translates the position of the rectangle to a new position from its current
    * position. TODO: this is inconsistent with other translate methods within
    * the elements. Probably best to conform to how SVG implements translate with
    * the transform attribute, and then implement a move method or something.
    */
    Rectangle.prototype.translate = function (x, y) {
        this.root.x.baseVal.value = this.root.x.baseVal.value + x;
        this.root.y.baseVal.value = this.root.y.baseVal.value + y;
    };
    Object.defineProperty(Rectangle.prototype, "fill", {
        /**
        * Returns the fill style of this rectangle
        */
        get: function () {
            return this.root.style.fill;
        },
        /**
        * Sets the fill style of this rectangle
        */
        set: function (s) {
            this.root.style.fill = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "stroke", {
        /**
        * Returns the stroke style of this rectangle
        */
        get: function () {
            return this.root.style.stroke;
        },
        /**
        * Sets the stroke style of this rectangle
        */
        set: function (s) {
            this.root.style.stroke = s;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}(Element_js_1["default"]));
exports["default"] = Rectangle;
