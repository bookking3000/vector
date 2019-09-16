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
var SVG_js_1 = require("./SVG.js");
// basic elements
var Circle_js_1 = require("./elements/Circle.js");
var Element_js_1 = require("./elements/Element.js");
var Ellipse_js_1 = require("./elements/Ellipse.js");
var Group_js_1 = require("./elements/Group.js");
var Line_js_1 = require("./elements/Line.js");
var Path_js_1 = require("./elements/Path.js");
var Text_js_1 = require("./elements/Text.js");
var Rectangle_js_1 = require("./elements/Rectangle.js");
var Node_js_1 = require("./elements/Node.js");
var Edge_js_1 = require("./elements/Edge.js");
// input elements
var Button_js_1 = require("./elements/Button.js");
var CheckBox_js_1 = require("./elements/CheckBox.js");
var Control_js_1 = require("./elements/Control.js");
var ControlCircle_js_1 = require("./elements/ControlCircle.js");
var Scrubber_js_1 = require("./elements/Scrubber.js");
var Slider_js_1 = require("./elements/Slider.js");
var RadioControl_js_1 = require("./elements/RadioControl.js");
// complex elements
var Plot_js_1 = require("./elements/Plot.js");
var Graph_js_1 = require("./elements/Graph.js");
var Map_js_1 = require("./elements/Map.js");
/**
* This class exposes the high level functionality of our library. Elements can
* created and related together
*
* By default input elements are added to a SVG "controls" group and visual
* elements are added to the "background" group. This ensures that controls will
* alwaysbe focusable, despite the order in which elements are created.
*/
var Interactive = /** @class */ (function (_super) {
    __extends(Interactive, _super);
    /**
    * Constructs a new interactive object within the HTML element corresponding
    * to the id. If no element is found throws an error.
    * TODO: (possibly) if the string is null, then create a headless interactive
    */
    function Interactive(id) {
        var _this = _super.call(this) || this;
        // internal variables
        _this._width = 0;
        _this._height = 0;
        _this._originX = 0;
        _this._originY = 0;
        // store a reference to the container element, check to make sure such an
        // element exists.
        _this.container = document.getElementById(id);
        if (_this.container === null || _this.container === undefined) {
            throw new Error("There is no HTML element with the id: " + id);
        }
        _this.container.classList.add('interactive-container');
        // create and append the root svg element and group elements
        _this.root = _this.container.appendChild(SVG_js_1["default"].SVG());
        _this.root.classList.add('interactive');
        _this.root.id = _this.id;
        _this.style = _this.root.style;
        _this.background = _this.root.appendChild(SVG_js_1["default"].Group());
        _this.controls = _this.root.appendChild(SVG_js_1["default"].Group());
        // default configuration
        _this.width = 600;
        _this.height = 300;
        _this.window = false;
        // prevent the default behavior of selecting text
        _this.container.addEventListener('mousedown', function (event) {
            event.preventDefault();
        });
        return _this;
    }
    Object.defineProperty(Interactive.prototype, "width", {
        /**
        * Returns the width of this interactive area.
        */
        get: function () {
            return this._width;
        },
        /**
        * Sets the width of this interactive area.
        */
        set: function (value) {
            this._width = value;
            this.root.setAttribute('width', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "height", {
        /**
        * Returns the height of this interactive area.
        */
        get: function () {
            return this._height;
        },
        /**
        * Sets the height of this interactive area.
        */
        set: function (value) {
            this._height = value;
            this.root.setAttribute('height', value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "originX", {
        /**
        * Returns the value of the x-coordinate of the origin.
        */
        get: function () {
            return this._originX;
        },
        /**
        * Sets the x coordinate of the origin.
        */
        set: function (value) {
            this._originX = value;
            this.setViewBox(this.minX, this.minY, this.width, this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "originY", {
        /**
        * Returns the value of the x-coordinate of the origin.
        */
        get: function () {
            return this._originY;
        },
        /**
        * Sets the y coordinate of the origin.
        */
        set: function (value) {
            this._originY = value;
            this.setViewBox(this.minX, this.minY, this.width, this.height);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "window", {
        /**
        * If set to true, styles the interactive to float on top of the background.
        * This feature is good for interactives where elements can be dragged out of
        * the bounds of the container element.
        */
        set: function (value) {
            if (value) {
                this.root.classList.add('window');
            }
            else {
                this.root.classList.remove('window');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "border", {
        /**
        * If set to true, draws a minimal border around the interactive.
        */
        set: function (value) {
            if (value) {
                this.root.classList.add('border');
            }
            else {
                this.root.classList.remove('border');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "minX", {
        // TODO: yikes that didn't work as expected
        // set flipCoordinateSystem( value:boolean ) {
        //   if( value ) {
        //     this.svg.style.transform = 'scale(1,-1)';
        //   } else {
        //     this.svg.style.transform = '';
        //   }
        // }
        /**
        * Returns the minimum x-coordinate of this interactive.
        */
        get: function () {
            return -this.originX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "minY", {
        /**
        * Returns the minimum y-coordinate of this interactive.
        */
        get: function () {
            return -this.originY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "maxX", {
        /**
        * Returns the maximum x-coordinate of this interactive.
        */
        get: function () {
            return this.minX + this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "maxY", {
        /**
        * Returns the maximum y-coordinate of this interactive.
        */
        get: function () {
            return this.minY + this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interactive.prototype, "description", {
        /**
        * A user provided description of this interactive.
        */
        set: function (description) {
            this.root.setAttribute('data-description', description);
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Sets the viewbox of the root svg element to the provided values.
    * TODO: look into css transform-origin
    */
    Interactive.prototype.setViewBox = function (minX, minY, width, height) {
        this.root.setAttribute('viewBox', minX + " " + minY + " " + width + " " + height);
    };
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    Interactive.prototype.button = function (x, y, label) {
        var button = new Button_js_1["default"](x, y, label);
        this.controls.appendChild(button.root);
        return button;
    };
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    Interactive.prototype.checkBox = function (x, y, label, value) {
        var checkBox = new CheckBox_js_1["default"](x, y, label, value);
        this.controls.appendChild(checkBox.root);
        return checkBox;
    };
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    Interactive.prototype.radioControl = function (labels, x, y, index) {
        if (index === void 0) { index = 0; }
        var radioControl = new RadioControl_js_1["default"](labels, x, y, index);
        this.controls.appendChild(radioControl.root);
        return radioControl;
    };
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    Interactive.prototype.control = function (x, y) {
        var control = new Control_js_1["default"](x, y);
        this.controls.appendChild(control.root);
        return control;
    };
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    Interactive.prototype.controlCircle = function (x, y) {
        var control = new ControlCircle_js_1["default"](x, y);
        this.controls.appendChild(control.root);
        return control;
    };
    /**
    * Creates a plot within this interactive at the position (x,y).
    */
    Interactive.prototype.plot = function (userEvents) {
        if (userEvents === void 0) { userEvents = true; }
        var plot = new Plot_js_1["default"](userEvents);
        this.background.appendChild(plot.root);
        return plot;
    };
    /**
    * Creates a graph element within this interactive
    */
    Interactive.prototype.graph = function () {
        var graph = new Graph_js_1["default"]();
        this.background.appendChild(graph.root);
        return graph;
    };
    /**
    * Creates a graph element within this interactive
    */
    Interactive.prototype.map = function (mapName, width, height) {
        var map = new Map_js_1["default"](this, mapName, width, height);
        return map;
    };
    /**
    * Creates a slider input within this interactive
    */
    Interactive.prototype.slider = function (x, y, width, value) {
        var slider = new Slider_js_1["default"](x, y, width, value);
        this.controls.appendChild(slider.root);
        return slider;
    };
    /**
    * Creates a scrubber with a play and pause button at the position (x,y).
    */
    Interactive.prototype.scrubber = function (x, y, width) {
        var scrubber = new Scrubber_js_1["default"](x, y, width);
        this.controls.appendChild(scrubber.root);
        return scrubber;
    };
    /**
    * Creates a circle within this interactive.
    */
    Interactive.prototype.circle = function (cx, cy, r) {
        var circle = new Circle_js_1["default"](cx, cy, r);
        this.background.appendChild(circle.root);
        return circle;
    };
    /**
    * Creates an ellipse within this interactive.
    */
    Interactive.prototype.ellipse = function (cx, cy, rx, ry) {
        var ellipse = new Ellipse_js_1["default"](cx, cy, rx, ry);
        this.background.appendChild(ellipse.root);
        return ellipse;
    };
    /**
    * Creates a line within this interactive.
    */
    Interactive.prototype.line = function (x1, y1, x2, y2) {
        var line = new Line_js_1["default"](x1, y1, x2, y2);
        this.background.appendChild(line.root);
        return line;
    };
    /**
    * Creates a path within this interactive.
    */
    Interactive.prototype.path = function (d) {
        var path = new Path_js_1["default"](d);
        this.background.appendChild(path.root);
        return path;
    };
    /**
    * Creates a rectangle within this interactive.
    */
    Interactive.prototype.rectangle = function (x, y, width, height) {
        var rectangle = new Rectangle_js_1["default"](x, y, width, height);
        this.background.appendChild(rectangle.root);
        return rectangle;
    };
    /**
    * Creates text within this interactive.
    */
    Interactive.prototype.text = function (x, y, contents) {
        if (contents === void 0) { contents = ''; }
        var text = new Text_js_1["default"](x, y, contents);
        this.background.appendChild(text.root);
        return text;
    };
    /**
    * Creates a node within this interactive.
    */
    Interactive.prototype.node = function (x, y, r, contents) {
        var node = new Node_js_1["default"](x, y, r, contents);
        this.background.appendChild(node.root);
        return node;
    };
    /**
    * Creates an edge connecting two nodes within this interactive.
    */
    Interactive.prototype.edge = function (nodeFrom, nodeTo, directed) {
        var edge = new Edge_js_1["default"](nodeFrom, nodeTo, directed);
        this.background.appendChild(edge.root);
        return edge;
    };
    /**
    * Creates a group element
    */
    Interactive.prototype.group = function () {
        var group = new Group_js_1["default"]();
        this.background.appendChild(group.root);
        return group;
    };
    /**
    *
    */
    Interactive.prototype.loadSVG = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var svg, group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SVG_js_1["default"].getSVG(url)];
                    case 1:
                        svg = _a.sent();
                        group = new Group_js_1["default"]();
                        group.root.appendChild(svg);
                        this.background.appendChild(group.root);
                        return [2 /*return*/, group];
                }
            });
        });
    };
    return Interactive;
}(Element_js_1["default"]));
exports["default"] = Interactive;
