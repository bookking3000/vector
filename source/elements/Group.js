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
* A group is a sctructural element that allows for elements to be grouped
* together and have styles and transformations applied to the elements in the
* group.
*/
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    function Group() {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Group();
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    return Group;
}(Element_js_1["default"]));
exports["default"] = Group;
