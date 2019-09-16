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
* A path element allows for the creation of complicated shapes and curves.
*/
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    /**
    * Construct a new path element with a string of commands.
    */
    function Path(d) {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Path(d);
        _this.root.classList.add('default');
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    Object.defineProperty(Path.prototype, "d", {
        /**
        * Returns the d attribute
        */
        get: function () {
            return this.root.getAttribute('d');
        },
        /**
        * Sets the d attribute
        */
        set: function (d) {
            this.root.setAttribute('d', d);
        },
        enumerable: true,
        configurable: true
    });
    return Path;
}(Element_js_1["default"]));
exports["default"] = Path;
