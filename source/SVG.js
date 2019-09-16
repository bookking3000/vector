"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Util_js_1 = require("./Util.js");
/**
* This wrapper class provides static methods for creating SVG Elements.
*/
var SVG = /** @class */ (function () {
    function SVG() {
    }
    /**
    * Constructs and returns a SVG element. The default dimensions is 600 by 300
    * units.
    */
    SVG.SVG = function (width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 300; }
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', width.toString());
        svg.setAttribute('height', height.toString());
        return svg;
    };
    /**
    * Returns a SVGTextElement element with the provided attributes.
    */
    SVG.Text = function (x, y, str) {
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x.toString());
        text.setAttribute('y', y.toString());
        if (str != undefined) {
            text.innerHTML = str;
        }
        return text;
    };
    /**
    * Returns a SVGTSpanElement element with the provided attributes.
    */
    SVG.TSpan = function (str) {
        var tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tspan.innerHTML = str;
        return tspan;
    };
    /**
    * Returns a SVGRectElement with the provided attributes.
    */
    SVG.Rectangle = function (x, y, width, height) {
        // constructs and initializes the rectangle
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x.toString());
        rect.setAttribute('y', y.toString());
        rect.setAttribute('width', width.toString());
        rect.setAttribute('height', height.toString());
        rect.classList.add('default');
        return rect;
    };
    /**
    * Returns a SVGEllipseElement with the provided attributes.
    */
    SVG.Ellipse = function (cx, cy, rx, ry) {
        var ell = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ell.setAttribute('cx', cx.toString());
        ell.setAttribute('cy', cy.toString());
        ell.setAttribute('rx', rx.toString());
        ell.setAttribute('ry', ry.toString());
        ell.classList.add('default');
        return ell;
    };
    /**
    * Returns a SVGLineElement element with the provided attributes.
    */
    SVG.Line = function (x1, y1, x2, y2) {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1.toString());
        line.setAttribute('y1', y1.toString());
        line.setAttribute('x2', x2.toString());
        line.setAttribute('y2', y2.toString());
        line.classList.add('default');
        return line;
    };
    /**
    * Returns a SVGCircleElement element with the provided attributes.
    */
    SVG.Circle = function (cx, cy, radius) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.cx.baseVal.value = cx;
        circle.cy.baseVal.value = cy;
        circle.r.baseVal.value = radius;
        return circle;
    };
    /**
    * Constructs a group element with the provided attributes.
    */
    SVG.Group = function () {
        var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        return group;
    };
    /**
    * Constructs a path element with the provided attributes.
    */
    SVG.Path = function (d) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        return path;
    };
    /**
    * Constructs and returns a clip path element
    */
    SVG.ClipPath = function () {
        var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        return clipPath;
    };
    SVG.Defs = function () {
        var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        return defs;
    };
    SVG.getSVG = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var parser, svg, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parser = new DOMParser();
                        return [4 /*yield*/, Util_js_1.getURL(url)];
                    case 1:
                        svg = _a.sent();
                        doc = parser.parseFromString(svg, 'image/svg+xml');
                        return [2 /*return*/, doc.documentElement];
                }
            });
        });
    };
    return SVG;
}());
exports["default"] = SVG;
