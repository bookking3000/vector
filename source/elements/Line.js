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
* A circle is a basic shape element with a start and end position.
*/
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    /**
    * Constructs a line between the points (x1, y1) and (x2, y2)
    */
    function Line(x1, y1, x2, y2) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Line(x1, y1, x2, y2);
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(Line.prototype, "x1", {
        /**
        * Returns the x position of the start position
        */
        get: function () {
            return this.root.x1.baseVal.value;
        },
        /**
        * Sets the x position of the start position
        */
        set: function (x1) {
            this.root.x1.baseVal.value = x1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "y1", {
        /**
        * Returns the y position of the start position
        */
        get: function () {
            return this.root.y1.baseVal.value;
        },
        /**
        * Sets the y position of the start position
        */
        set: function (y1) {
            this.root.y1.baseVal.value = y1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "x2", {
        /**
        * Returns the x position of the end position
        */
        get: function () {
            return this.root.x2.baseVal.value;
        },
        /**
        * Sets the x position of the end position
        */
        set: function (x2) {
            this.root.x2.baseVal.value = x2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "y2", {
        /**
        * Returns the y position of the end position
        */
        get: function () {
            return this.root.y2.baseVal.value;
        },
        /**
        * Sets the y position of the end position
        */
        set: function (y2) {
            this.root.y2.baseVal.value = y2;
        },
        enumerable: true,
        configurable: true
    });
    /*
    * Translates the position of the line to a new position from its current
    * position. TODO: this is inconsistent with other translate methods within
    * the elements. Probably best to conform to how SVG implements translate with
    * the transform attribute, and then implement a move method or something.
    */
    Line.prototype.translate = function (x, y) {
        this.root.x1.baseVal.value += x;
        this.root.y1.baseVal.value += y;
        this.root.x2.baseVal.value += x;
        this.root.y2.baseVal.value += y;
    };
    Object.defineProperty(Line.prototype, "fill", {
        /**
        * Returns the fill style of this line
        */
        get: function () {
            return this.root.style.fill;
        },
        /**
        * Sets the fill style of this line
        */
        set: function (s) {
            this.root.style.fill = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "stroke", {
        /**
        * Returns the stroke style of this line
        */
        get: function () {
            return this.root.style.stroke;
        },
        /**
        * Sets the stroke style of this line
        */
        set: function (s) {
            this.root.style.stroke = s;
        },
        enumerable: true,
        configurable: true
    });
    return Line;
}(Element_js_1["default"]));
exports["default"] = Line;
