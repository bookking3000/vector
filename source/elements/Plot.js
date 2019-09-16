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
var SVG_js_1 = require("../SVG.js");
var Rectangle_js_1 = require("../elements/Rectangle.js");
var Text_js_1 = require("../elements/Text.js");
/**
*
*/
var Plot = /** @class */ (function (_super) {
    __extends(Plot, _super);
    /**
    * Constructs a new graph capable of displaying a function in the form of
    * x -> y. The user is able to drag, zoom-in, and zoom-out on the graph to
    * explore the shape and form of the function.
    */
    function Plot(userEvents) {
        if (userEvents === void 0) { userEvents = true; }
        var _this = _super.call(this) || this;
        // default values
        _this._width = 600;
        _this._height = 300;
        _this._originX = _this.width / 2;
        _this._originY = _this.height / 2;
        _this._scaleX = 1;
        _this._scaleY = 1;
        _this._totalScale = 1;
        _this.active = false;
        // creates a transparent rectangle to capture all user events
        _this.rect = SVG_js_1["default"].Rectangle(0, 0, _this.width, _this.height);
        _this.rect.style.fill = 'transparent';
        _this.rect.style.stroke = 'none';
        // TODO: change to axis with tick marks and number labels
        // draw two lines to represent the x-axis and y-axis
        _this.xAxis = SVG_js_1["default"].Line(-10000, 0, 10000, 0);
        _this.yAxis = SVG_js_1["default"].Line(0, -10000, 0, 10000);
        // create a path to draw the internal function
        _this.path = SVG_js_1["default"].Path('');
        _this.path.classList.add('default');
        // a group to hold the path and axis, allows easy transforming of the origin
        _this.group = SVG_js_1["default"].Group();
        _this.group.appendChild(_this.path);
        _this.group.appendChild(_this.xAxis);
        _this.group.appendChild(_this.yAxis);
        // create a root element to hold everything
        _this.root = SVG_js_1["default"].Group();
        _this.root.appendChild(_this.rect);
        _this.root.appendChild(_this.group);
        _this.root.id = _this.id;
        // translate the origin to its initial position
        _this.translate(_this.originX, _this.originY);
        // Registers event listeners
        if (userEvents) {
            // create a display circle for showing input and output
            _this.circle = SVG_js_1["default"].Circle(0, 0, 4);
            _this.circle.style.fill = 'cornflowerblue';
            _this.group.appendChild(_this.circle);
            _this.xRect = new Rectangle_js_1["default"](0, 0, 125, 40);
            _this.yRect = new Rectangle_js_1["default"](120, 0, 125, 40);
            _this.xRect.root.style.fill = 'white';
            _this.yRect.root.style.fill = 'white';
            _this.root.appendChild(_this.xRect.root);
            _this.root.appendChild(_this.yRect.root);
            _this.x = new Text_js_1["default"](15, 20, 'x:0');
            _this.x.root.style.dominantBaseline = 'middle';
            _this.x.root.style.whiteSpace = 'pre';
            _this.root.appendChild(_this.x.root);
            _this.y = new Text_js_1["default"](125 + 15, 20, 'y:0');
            _this.y.root.style.dominantBaseline = 'middle';
            _this.y.root.style.whiteSpace = 'pre';
            _this.root.appendChild(_this.y.root);
            var graph_1 = _this;
            _this.root.addEventListener('mousemove', function (event) {
                graph_1.handleMouseMove(event);
            });
            _this.root.addEventListener('mousedown', function (event) {
                graph_1.handleMouseDown(event);
            });
            _this.root.addEventListener('mouseup', function (event) {
                graph_1.handleMouseUp(event);
            });
            _this.root.addEventListener('mouseleave', function (event) {
                graph_1.handleMouseLeave(event);
            });
            _this.root.addEventListener('mousewheel', function (event) {
                graph_1.handleMouseWheelEvent(event);
            }, { passive: false });
        }
        return _this;
    }
    Object.defineProperty(Plot.prototype, "width", {
        /**
        * Returns the width of this graph
        */
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "height", {
        /**
        * Returns the height of this graph
        */
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "minX", {
        /**
        * Returns the minimum x value of the view box of this graph relative to the
        * origin.
        */
        get: function () {
            return -this._originX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "minY", {
        /**
        * Returns the minimum y value of the view box of this graph relative to the
        * origin.
        */
        get: function () {
            return -this._originY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "originX", {
        /**
        * Returns the x coordinate of the origin of this graph.
        */
        get: function () {
            return this._originX;
        },
        /**
        * Sets the x coordinate of the origin of this graph.
        */
        set: function (x) {
            this.translate(x, this._originY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "originY", {
        /**
        * Returns the y coordinate of the origin of this graph.
        */
        get: function () {
            return this._originY;
        },
        /**
        * Sets the y coordinate of the origin of this graph.
        */
        set: function (y) {
            this.translate(this._originX, y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "function", {
        /**
        * Returns the internal function
        */
        get: function () {
            return this._function;
        },
        /**
        * Sets the internal function to the provided function
        */
        set: function (f) {
            this._function = f;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Returns the result of calling the internal function with the provided
    * function scaling both the input and the output.
    */
    Plot.prototype.call = function (input, scaleY) {
        if (scaleY === void 0) { scaleY = true; }
        var x = this._scaleX * (input);
        var y = (scaleY ? -this._scaleY : 1) * (this._function(x));
        return y;
    };
    /**
    * Draws the internal function over the interval [startX, endX]. The default
    * interval is [ minX - width, maxX + width ] so that when a user drags the
    * graph there is enough drawn so that a translate may be applied instead of
    * having to call draw again.
    */
    Plot.prototype.draw = function (startX, endX) {
        if (startX === void 0) { startX = this.minX - this.width; }
        if (endX === void 0) { endX = this.minX + 2 * this.width; }
        // Draw the function
        var x = startX;
        var y = this.call(x);
        if (y > 2 * this.height) {
            y = 2 * this.height;
        }
        if (y < -2 * this.height) {
            y = -2 * this.height;
        }
        var d = "M " + x + " " + y + " ";
        // TODO: remove vertical asymptote's by starting jumping to a new spot...
        // L ... L ... M ... L ... L ...
        for (x++; x < endX; x++) {
            y = this.call(x);
            if (y > 2 * this.height) {
                y = 2 * this.height;
            }
            if (y < -2 * this.height) {
                y = -2 * this.height;
            }
            d += "L " + x + " " + y.toFixed(1) + " ";
        }
        this.path.setAttribute('d', d);
        // Update the dependents if there are any
        this.updateDependents();
    };
    /**
    * Formats the input number to be displayed within the graph.
    */
    Plot.prototype.format = function (n) {
        if (n > 10000 || n < -10000 || (n < .01 && n > -.01)) {
            return n.toExponential(2);
        }
        else {
            return n.toPrecision(4);
        }
    };
    /**
    * Handle when a mouse moves over this graph. If a drag event is active then
    * translates the position of the graph to the new location.
    */
    Plot.prototype.handleMouseMove = function (event) {
        var x = event.clientX - this.rect.getBoundingClientRect().left - this.originX;
        if (this.active) {
            this._originX += event.movementX;
            this._originY += event.movementY;
            console.log("Spacer, now showing origin position:");
            console.log(this._originX);
            console.log(this._originY);
            console.log("Spacer, now showing mouse position:");
            console.log(event.x - this.rect.getBoundingClientRect().left);
            console.log(event.y - this.rect.getBoundingClientRect().top);
            console.log("Spacer, now showing client rect:");
            this.translate(this._originX, this._originY);
        }
        else {
            this.circle.cx.baseVal.value = x;
            this.circle.cy.baseVal.value = this.call(x);
        }
        var i = this._scaleX * (x);
        var o = this.call(x, false);
        this.x.contents = "x:" + (i < 0 ? '' : ' ') + this.format(i);
        this.y.contents = "y:" + (o < 0 ? '' : ' ') + this.format(o);
    };
    /**
    * When a user mouses down over this graph a drag is active.
    */
    Plot.prototype.handleMouseDown = function (_event) {
        this.active = true;
    };
    /**
    * Deactivates the current drag event.
    */
    Plot.prototype.handleMouseUp = function (_event) {
        this.active = false;
        this.draw();
    };
    /**
    * When the user's mouse leaves the graph deactivates any concurrent drag.
    */
    Plot.prototype.handleMouseLeave = function (event) {
        this.handleMouseUp(event);
    };
    /**
    * Zooms in and out on this graph. TODO: There is some jarring wheel action
    * where an active wheel event on the page will stop dead when the mouse
    * goes over the graph. Also it seems as if the scroll has pre-existing
    * "momentum" that it can also affect the graph.
    */
    Plot.prototype.handleMouseWheelEvent = function (event) {
        var ratio = .95;
        if (event.deltaY > 0) {
            this.scale(ratio, 1 / ratio, event.x - this.rect.getBoundingClientRect().left, event.y - this.rect.getBoundingClientRect().top);
        }
        else {
            this.scale(1 / ratio, ratio, event.x - this.rect.getBoundingClientRect().left, event.y - this.rect.getBoundingClientRect().top);
        }
        this.draw();
        this.circle.cy.baseVal.value = this.call(this.circle.cx.baseVal.value);
        event.preventDefault();
    };
    /**
    * Scales the x and y axis of this graph.
    */
    Plot.prototype.scale = function (x, y, posX, posY) {
        if (posX) {
            var initialScale = this._totalScale;
            //
            this._scaleX *= x;
            this._scaleY *= y;
            this._totalScale *= x;
            var scaleChange = this._totalScale - initialScale;
            var xLength = (posX - this._originX);
            var yLength = (posY - this._originY);
            var offsetX = -(xLength / Math.hypot(xLength, yLength) * scaleChange);
            var offsetY = -(yLength / Math.hypot(xLength, yLength) * scaleChange);
            console.log(this._totalScale);
            console.log(offsetX);
            console.log(offsetY);
            this._originX += offsetX;
            this._originY += offsetY;
            this.translate(this._originX, this._originY);
            this.draw();
        }
        else {
            this._scaleX *= x;
            this._scaleY *= y;
            this.draw();
        }
        // this._scaleX *= x;
        // this._scaleY *= y;
        // this.group.setAttribute('transform', `scale(${x}, ${y})`);
        // this.draw();
        // if(posX)
        // {
        //   this._originX += -posX;
        //   this._originY += -posY;
        //   this.translate(this._originX, this._originY);
        //   this.draw();
        // }
    };
    Object.defineProperty(Plot.prototype, "scaleX", {
        /**
        * Scales the x axis of this graph.
        */
        set: function (x) {
            this._scaleX *= x;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plot.prototype, "scaleY", {
        /**
        * Scales the y axis of this graph.
        */
        set: function (y) {
            this._scaleY *= y;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Translates the origin of this graph to the location (x,y).
    */
    Plot.prototype.translate = function (x, y) {
        this._originX = x;
        this._originY = y;
        this.group.setAttribute('transform', "translate(" + x + ", " + y + ")");
    };
    Plot.prototype.scaleUp = function (x, y) {
    };
    Plot.prototype.scaleDown = function (x, y) {
    };
    return Plot;
}(Element_js_1["default"]));
exports["default"] = Plot;
