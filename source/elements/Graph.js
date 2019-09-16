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
var Element_js_1 = require("../elements/Element.js");
var Node_js_1 = require("../elements/Node.js");
var Edge_js_1 = require("../elements/Edge.js");
var SVG_js_1 = require("../SVG.js");
var Graph = /** @class */ (function (_super) {
    __extends(Graph, _super);
    function Graph() {
        var _this = _super.call(this) || this;
        _this.root = SVG_js_1["default"].Group();
        _this.root.id = _this.id;
        _this.nodes = [];
        var defs = SVG_js_1["default"].Defs();
        defs.innerHTML = "<marker id=\"arrow\" refX=\"10\" refY=\"5\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" style=\"fill:#333333;\"></path></marker>";
        _this.root.appendChild(defs);
        return _this;
    }
    Graph.prototype.clear = function () {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].edges.forEach(function (item) {
                item.remove();
            });
            this.nodes[i].remove();
        }
        this.nodes = [];
    };
    Graph.prototype.addNode = function (x, y, text, r) {
        if (r === void 0) { r = 20; }
        var node = new Node_js_1["default"](x, y, r, text);
        this.root.appendChild(node.root);
        this.nodes.push(node);
        return node;
    };
    Graph.prototype.addEdge = function (from, to, directed) {
        var edge = new Edge_js_1["default"](from, to, directed);
        if (directed) {
            edge.root.setAttribute('marker-end', "url(#arrow)");
        }
        this.root.appendChild(edge.root);
        from.addEdge(edge);
        to.addEdge(edge);
        return edge;
    };
    Graph.prototype.size = function () {
        return this.nodes.length;
    };
    return Graph;
}(Element_js_1["default"]));
exports["default"] = Graph;
