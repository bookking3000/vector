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
var Element_js_1 = require("../elements/Element.js");
var Path_js_1 = require("../elements/Path.js");
var Circle_js_1 = require("../elements/Circle.js");
var Rectangle_js_1 = require("../elements/Rectangle.js");
/**
* A control point is a draggable two dimensional point.
*/
var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    /**
    * Constructs a control at the position (x,y)
    */
    function Control(x, y) {
        var _this = _super.call(this) || this;
        /**
        * Modifying the transform function allows for the control to be constrained
        * to a path or constrained to the region enclosed in a path.
        */
        _this.constrain = function (_oldPosition, newPosition) {
            return newPosition;
        };
        // create the svg components
        _this.root = SVG_js_1["default"].Group();
        _this.point = SVG_js_1["default"].Circle(0, 0, Control.pointRadius);
        _this.handle = SVG_js_1["default"].Circle(0, 0, Control.handleRadius);
        _this.root.classList.add('control');
        _this.point.classList.add('control-point');
        _this.handle.classList.add('control-handle');
        _this.root.appendChild(_this.point);
        _this.root.appendChild(_this.handle);
        _this.root.id = _this.id;
        // initialize instance variables
        _this._x = x;
        _this._y = y;
        _this._dx = 0;
        _this._dy = 0;
        // the default behavior of a control is to update its dependents on change
        _this.onchange = function () {
            this.updateDependents();
        };
        _this.update = function () { };
        // translate the control to its initial position
        _this.translate(x, y);
        // register event handlers
        var control = _this;
        _this.root.onmousedown = function (event) {
            control.handleMouseDown(event);
        };
        _this.root.ondblclick = function (event) {
            // do nothing on double click
            event.preventDefault();
        };
        _this.handle.onmouseout = function (event) {
            control.handleMouseOut(event);
        };
        // set passive to false so chrome doesn't complain
        _this.handle.addEventListener('touchstart', control.handleTouchStart.bind(_this), { passive: false });
        // initialize window event listeners only once
        if (!Control.initalized) {
            window.onmouseover = Control.handleMouseOver;
            window.onmousemove = Control.handleMouseMove;
            window.onmouseup = Control.handleInputEnd;
            window.addEventListener('touchend', Control.handleInputEnd, { passive: false });
            window.addEventListener('touchmove', Control.handleTouchMove, { passive: false });
            Control.initalized = true;
        }
        return _this;
    }
    /**
    * Handles when the user moves their mouse over the window. If there is an
    * active control, the control's position is updated.
    */
    Control.handleMouseMove = function (event) {
        if (Control.active != null) {
            var x = event.clientX + Control.slopX;
            var y = event.clientY + Control.slopY;
            Control.active.translate(x, y);
        }
    };
    /**
    * Handles a touch move event. If there is an active control, the control's
    * position is updated.
    */
    Control.handleTouchMove = function (event) {
        if (Control.active != null) {
            var x = event.touches[0].clientX + Control.slopX;
            var y = event.touches[0].clientY + Control.slopY;
            Control.active.translate(x, y);
            event.preventDefault();
        }
    };
    /**
    * Handles when a use mouses up over the window or ends their touch event.
    */
    Control.handleInputEnd = function (event) {
        if (Control.active != null) {
            // remove highlighting from the active control and set to null
            Control.active.handle.classList.remove('highlight');
            Control.active = null;
            // fire a mouseover event to highlight either: an interactive control,
            // the recently active control, or a different element entirely.
            // Currently, whichever element is highest in the DOM order will be the
            // target. In the future the most recently active Control could be
            // prioritized for user experience.
            if (event.type != "touchend") {
                event.target.dispatchEvent(new MouseEvent('mouseover', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                }));
            }
        }
    };
    /**
    * When a user mouses over a control, add the class "highlight" to the control
    * handle.
    */
    Control.handleMouseOver = function (event) {
        if (Control.active == null && !Element_js_1["default"].disable && event.target.tagName == 'circle') {
            event.target.classList.add('highlight');
        }
    };
    /**
    * When a user mouses out of a control handle and when there is no active
    * control, remove the "highlight" class from the event target.
    */
    Control.prototype.handleMouseOut = function (event) {
        if (Control.active == null) {
            event.target.classList.remove('highlight');
        }
    };
    /**
    * Handle when a user mouses down over a Control's handle. Stores the error in
    * the user's click as well as stores which Control the user is clicking.
    */
    Control.prototype.handleMouseDown = function (event) {
        if (!Element_js_1["default"].disable) {
            Control.active = this;
            Control.slopX = Control.active.x - event.clientX;
            Control.slopY = Control.active.y - event.clientY;
        }
    };
    /**
    * Handle when a user touches over a Control's handle. Stores the error in
    * the user's input as well as stores which Control the user is clicking.
    */
    Control.prototype.handleTouchStart = function (event) {
        if (!Element_js_1["default"].disable) {
            Control.active = this;
            Control.slopX = Control.active.x - event.touches[0].clientX;
            Control.slopY = Control.active.y - event.touches[0].clientY;
            event.preventDefault();
        }
    };
    /**
    * Moves the control to a new location
    */
    Control.prototype.translate = function (x, y) {
        // call the internal transform function
        var point = this.constrain({ x: this.x, y: this.y }, { x: x, y: y });
        // update the instance data
        this._dx = point.x - this._x;
        this._dy = point.y - this._y;
        this._x = point.x;
        this._y = point.y;
        // transform the position of the contorl
        this.root.setAttribute('transform', "translate( " + this.x + ", " + this.y + ")");
        // call the onchange function
        this._onchange();
    };
    Object.defineProperty(Control.prototype, "x", {
        /**
        * Gets the x position of the control.
        */
        get: function () {
            return this._x;
        },
        /**
        * Updates the x position of the control.
        */
        set: function (x) {
            this._dx = x - this.x;
            this._x = x;
            this.root.setAttribute('transform', 'translate( ' + this.x + ', ' + this.y + ')');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "y", {
        /**
        * Gets the y position of the control.
        */
        get: function () {
            return this._y;
        },
        /**
        * Updates the y position of the control.
        */
        set: function (y) {
            this._dy = y - this.y;
            this._y = y;
            this.root.setAttribute('transform', 'translate( ' + this.x + ', ' + this.y + ')');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "dx", {
        /**
        * Gets the change in x position of this control.
        */
        get: function () {
            return this._dx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "dy", {
        /**
        * Gets the change in y position of this control.
        */
        get: function () {
            return this._dy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "onchange", {
        get: function () {
            return this._onchange;
        },
        /**
        * Whenever the position of this control is changed this function is called.
        */
        set: function (func) {
            this._onchange = func;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Constrains the movement of this control point to the path of the provided
    * element.
    */
    Control.prototype.constrainTo = function (element) {
        this.addDependency(element);
        if (element instanceof Path_js_1["default"]) {
            throw Error('not implemented');
        }
        else if (element instanceof Circle_js_1["default"]) {
            this.constrain = function (_oldPosition, newPosition) {
                // Calculate the angle between the current coordinate and the origin
                var angle = Math.atan2(newPosition.y - element.cy, newPosition.x - element.cx);
                // Set the controls position to the vector in the direction of the angle
                // above and with the magnitude of the radius of the circle.
                var x = element.r * Math.cos(angle) + element.cx;
                var y = element.r * Math.sin(angle) + element.cy;
                // Return the new position
                return { x: x, y: y };
            };
        }
        else if (element instanceof Rectangle_js_1["default"]) {
        }
    };
    /**
    * Constrains the control to follow the path of the circle specified by the
    * arguments. TODO: add a method to constrain the control to a path
    */
    Control.prototype.constrainToCircle = function (cx, cy, r) {
        // set the constrain function
        this.constrain = function (_oldPosition, newPosition) {
            // Calculate the angle between the current coordinate and the origin
            var angle = Math.atan2(newPosition.y - cy, newPosition.x - cx);
            // Set the controls position to the vector in the direction of the angle
            // above and with the magnitude of the radius of the circle.
            var x = r * Math.cos(angle) + cx;
            var y = r * Math.sin(angle) + cy;
            // Return the new position
            return { x: x, y: y };
        };
    };
    /**
    * Constrains the control to the box defined by the points (x1, y1) and
    * (x2, y2). The first point defines the top-left corner of the box, the
    * second the bottom-right corner of the box.
    */
    Control.prototype.constrainWithinBox = function (x1, y1, x2, y2) {
        this.constrain = function (_oldPosition, newPosition) {
            var x = newPosition.x;
            var y = newPosition.y;
            if (x < x1) {
                x = x1;
            }
            if (y < y1) {
                y = y1;
            }
            if (x > x2) {
                x = x2;
            }
            if (y > y2) {
                y = y2;
            }
            return { x: x, y: y };
        };
    };
    /**
    * Constrain this control to only move left and right along its current x
    * position.
    */
    Control.prototype.constrainToX = function () {
        this.constrain = function (oldPosition, newPosition) {
            return { x: newPosition.x, y: oldPosition.y };
        };
    };
    /**
    * Constrain this control to only move up and down along its current y
    * position.
    */
    Control.prototype.constrainToY = function () {
        this.constrain = function (oldPosition, newPosition) {
            return { x: oldPosition.x, y: newPosition.y };
        };
    };
    // Describes the size of the control handle and point
    Control.pointRadius = 4;
    Control.handleRadius = 13;
    // Keeps track of the active control and the error in the user's click
    Control.active = null;
    Control.slopX = 0;
    Control.slopY = 0;
    // Keep track of whether global event listeners have been initialized
    Control.initalized = false;
    return Control;
}(Element_js_1["default"]));
exports["default"] = Control;
