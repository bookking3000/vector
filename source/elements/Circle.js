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
var Element_js_1 = require("./Element.js");
var SVG_js_1 = require("../SVG.js");
/**
* A circle is a basic geometric element with a position and radius.
*
* properties:
*   - cx
*   - cy
*   - r
*/
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    function Circle(cx, cy, r) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Circle(cx, cy, r);
        _this.root.classList.add('default');
        _this.root.id = _this.id;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "r", {
        /**
        * Returns the radius of this circle.
        */
        get: function () {
            return this.root.r.baseVal.value;
        },
        /**
        * Sets the value of the radius of this circle.
        */
        set: function (value) {
            this.root.r.baseVal.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "cx", {
        /**
        * Returns the x position of the rectangle
        */
        get: function () {
            return this.root.cx.baseVal.value;
        },
        /**
        * Sets the x position of the rectangle
        */
        set: function (n) {
            this.root.cx.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "cy", {
        /**
        * Returns the y position of the rectangle
        */
        get: function () {
            return this.root.cy.baseVal.value;
        },
        /**
        * Sets the y position of the rectangle
        */
        set: function (n) {
            this.root.cy.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Translates the circle to a new position by changing the x and y attributes.
    */
    Circle.prototype.translate = function (x, y) {
        this.root.cx.baseVal.value = this.root.cx.baseVal.value + x;
        this.root.cy.baseVal.value = this.root.cy.baseVal.value + y;
    };
    Object.defineProperty(Circle.prototype, "fill", {
        /**
        * Returns the fill style of this circle
        */
        get: function () {
            return this.root.style.fill;
        },
        /**
        * Sets the fill style of this circle
        */
        set: function (s) {
            this.root.style.fill = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "stroke", {
        /**
        * Returns the stroke style of this circle
        */
        get: function () {
            return this.root.style.stroke;
        },
        /**
        * Sets the stroke style of this circle
        */
        set: function (s) {
            this.root.style.stroke = s;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}(Element_js_1["default"]));
exports["default"] = Circle;
