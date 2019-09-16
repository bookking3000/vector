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
var Tspan_js_1 = require("./Tspan.js");
/**
* Text is a basic element containing string contents
*/
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    /**
    * Constructs text at the position (x,y) with the provided string
    */
    function Text(x, y, text) {
        if (text === void 0) { text = ''; }
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Text(x, y, text);
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(Text.prototype, "contents", {
        /**
        * Sets the contents of this element
        */
        get: function () {
            return this.root.innerHTML;
        },
        /**
        * Sets the contents of this element
        */
        set: function (str) {
            this.root.innerHTML = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "x", {
        /**
        * Gets the x position of this element
        */
        get: function () {
            return Number(this.root.getAttribute('x'));
        },
        /**
        * Sets the x position of this element
        */
        set: function (value) {
            this.root.setAttribute('x', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "y", {
        /**
        * Gets the y position of this element
        */
        get: function () {
            return Number(this.root.getAttribute('y'));
        },
        /**
        * Sets the y position of this element
        */
        set: function (value) {
            this.root.setAttribute('y', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "length", {
        /**
        * Returns the length of the text
        */
        get: function () {
            var context = document.createElement("canvas").getContext("2d");
            return context.measureText(this.root.innerHTML).width;
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.tspan = function (text) {
        var tspan = new Tspan_js_1["default"](text);
        this.root.appendChild(tspan.root);
        return tspan;
    };
    return Text;
}(Element_js_1["default"]));
exports["default"] = Text;
