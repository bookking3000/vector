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
var Circle_js_1 = require("./Circle.js");
var Text_js_1 = require("./Text.js");
var SVG_js_1 = require("../SVG.js");
//Bostock had something about fitting text here, seems cool https://observablehq.com/@mbostock/fit-text-to-circle
/**
* A Node is a basic element with a position, radius, and text held within it.
*/
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    /**
    * Constructs a Node element at the position (x,y) with radius r containing the string text
    */
    function Node(cx, cy, r, text) {
        var _this = _super.call(this) || this;
        _this.edges = new Set();
        _this.root = SVG_js_1["default"].Group();
        _this.nodeName = new Text_js_1["default"](cx, cy, text);
        _this.nodeName.style.textAnchor = "middle";
        _this.nodeName.root.setAttribute("alignment-baseline", "middle");
        _this.nodeCircle = new Circle_js_1["default"](cx, cy, r);
        _this.nodeCircle.fill = '#f8f8f8';
        _this.root.appendChild(_this.nodeCircle.root);
        _this.root.appendChild(_this.nodeName.root);
        _this.root.classList.add('default');
        _this.root.id = _this.id;
        return _this;
    }
    /**
    * Returns the number of edges coming out of this node.
    */
    Node.prototype.edgeWeight = function () {
        return this.edges.size;
    };
    /**
    * Adds an edge to this node.
    */
    Node.prototype.addEdge = function (edge) {
        this.edges.add(edge);
    };
    return Node;
}(Element_js_1["default"]));
exports["default"] = Node;
