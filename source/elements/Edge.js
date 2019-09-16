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
//Make the function static and extend from Line
/**
* Creates a line connecting two edges, with an arrow if directed.
*/
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    /**
    * Constructs a line frmo the edge of the two circle elements.
    */
    function Edge(nodeFrom, nodeTo, directed) {
        var _this = _super.call(this) || this;
        var arr = _this.calculateLinePosition(nodeFrom, nodeTo);
        _this.directed = directed;
        _this.root = SVG_js_1["default"].Line(arr[0], arr[1], arr[2], arr[3]);
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        return _this;
    }
    /**
    * Function to find where the line connecting two circles should go. return an Array
    * containing [x1, y1, x2, y2] of the line.
    */
    Edge.prototype.calculateLinePosition = function (nodeFrom, nodeTo) {
        var y1 = nodeFrom.nodeCircle.cy;
        var y2 = nodeTo.nodeCircle.cy;
        var x1 = nodeFrom.nodeCircle.cx;
        var x2 = nodeTo.nodeCircle.cx;
        var deltaY = y2 - y1;
        var deltaX = x2 - x1;
        var L = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
        var r1Lx = nodeFrom.nodeCircle.r / L * deltaX;
        var r1Ly = nodeFrom.nodeCircle.r / L * deltaY;
        var r2Lx = nodeTo.nodeCircle.r / L * deltaX;
        var r2Ly = nodeTo.nodeCircle.r / L * deltaY;
        var y1Prime = y1 + r1Ly;
        var y2Prime = y2 - r2Ly;
        var x1Prime = x1 + r1Lx;
        var x2Prime = x2 - r2Lx;
        return new Array(x1Prime, y1Prime, x2Prime, y2Prime);
    };
    return Edge;
}(Element_js_1["default"]));
exports["default"] = Edge;
