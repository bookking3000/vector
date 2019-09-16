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
* An ellipse is a basic element with a position, x-radius, and y-radius
*/
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    /**
    * Constructs a ellipse element at the position (x,y)
    */
    function Ellipse(cx, cy, rx, ry) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Ellipse(cx, cy, rx, ry);
        _this.root.classList.add('default');
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(Ellipse.prototype, "cx", {
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
    Object.defineProperty(Ellipse.prototype, "cy", {
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
    Object.defineProperty(Ellipse.prototype, "rx", {
        /**
        * Returns the width of the rectangle
        */
        get: function () {
            return this.root.rx.baseVal.value;
        },
        /**
        * Sets the width of the rectangle
        */
        set: function (n) {
            this.root.rx.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "ry", {
        /**
        * Returns the height of the rectangle
        */
        get: function () {
            return this.root.ry.baseVal.value;
        },
        /**
        * Sets the height of the rectangle
        */
        set: function (n) {
            this.root.ry.baseVal.value = n;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Translates the ellipse to a new position by changing the x and y attributes.
    */
    Ellipse.prototype.translate = function (x, y) {
        this.root.cx.baseVal.value = this.root.cx.baseVal.value + x;
        this.root.cy.baseVal.value = this.root.cy.baseVal.value + y;
    };
    Object.defineProperty(Ellipse.prototype, "fill", {
        /**
        * Returns the fill style of this ellipse
        */
        get: function () {
            return this.root.style.fill;
        },
        /**
        * Sets the fill style of this ellipse
        */
        set: function (s) {
            this.root.style.fill = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "stroke", {
        /**
        * Returns the stroke style of this ellipse
        */
        get: function () {
            return this.root.style.stroke;
        },
        /**
        * Sets the stroke style of this ellipse
        */
        set: function (s) {
            this.root.style.stroke = s;
        },
        enumerable: true,
        configurable: true
    });
    return Ellipse;
}(Element_js_1["default"]));
exports["default"] = Ellipse;
