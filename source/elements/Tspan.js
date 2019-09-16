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
* A tspan element is a text element that allows the user to change the style
* or position of the rendered text inside the tspan.
*/
var TSpan = /** @class */ (function (_super) {
    __extends(TSpan, _super);
    /**
    * Constructs a tspan element
    */
    function TSpan(str) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].TSpan(str);
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(TSpan.prototype, "text", {
        /**
        * The text contents of this tspan element
        */
        get: function () {
            return this.root.innerHTML;
        },
        /**
        * Sets the text contents of this tspan element to the provided string
        */
        set: function (str) {
            this.root.innerHTML = str;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Creates a child tspan element.
    */
    TSpan.prototype.tspan = function (str) {
        var tspan = new TSpan(str);
        this.root.appendChild(tspan.root);
        return tspan;
    };
    return TSpan;
}(Element_js_1["default"]));
exports["default"] = TSpan;
