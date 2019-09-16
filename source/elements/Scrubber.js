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
var Slider_js_1 = require("./Slider.js");
var Scrubber = /** @class */ (function (_super) {
    __extends(Scrubber, _super);
    // TODO: When the scrubber control is grabbed, active should be set to false and the animation cycle should be stopped.
    // TODO: Reset done variable when the control is changed
    // TODO: Show darker line of progress
    /**
    *
    */
    function Scrubber(x, y, width) {
        if (width === void 0) { width = 486; }
        var _this = _super.call(this, x + 80, y, width - 80, 0) || this;
        _this.active = false;
        _this.loop = false;
        _this.done = false;
        var circleRadius = 16;
        var playCircle = SVG_js_1["default"].Circle(0, 0, circleRadius);
        playCircle.style.fill = '#eeeeee';
        var radius = 8;
        var playTriangle = SVG_js_1["default"].Path(" M " + radius + " " + 0 + "\n                                  L " + radius * Math.cos(-2 * Math.PI / 3) + " " + radius * Math.sin(-2 * Math.PI / 3) + "\n                                  L " + radius * Math.cos(-4 * Math.PI / 3) + " " + radius * Math.sin(-4 * Math.PI / 3) + "\n                                  Z");
        playTriangle.style.fill = '#333333';
        _this.playButton = SVG_js_1["default"].Group();
        _this.playButton.appendChild(playCircle);
        _this.playButton.appendChild(playTriangle);
        _this.playButton.setAttribute('transform', "translate( " + x + ", " + y + ")");
        var pauseCircle = SVG_js_1["default"].Circle(0, 0, circleRadius);
        pauseCircle.style.fill = '#eeeeee';
        // TODO: style the lines with rounded end points
        var pauseLines = SVG_js_1["default"].Path(" M " + -3.5 + " " + -5 + "\n                                L " + -3.5 + " " + 5 + "\n                                M " + 3.5 + " " + -5 + "\n                                L " + 3.5 + " " + 5);
        pauseLines.style.stroke = '#333333';
        pauseLines.style.strokeWidth = '2';
        pauseLines.style.strokeLinecap = 'round';
        _this.pauseButton = SVG_js_1["default"].Group();
        _this.pauseButton.appendChild(pauseCircle);
        _this.pauseButton.appendChild(pauseLines);
        _this.pauseButton.setAttribute('transform', "translate( " + (x + 42) + ", " + y + ")");
        _this.root.appendChild(_this.playButton);
        _this.root.appendChild(_this.pauseButton);
        var scrubber = _this;
        _this.playButton.addEventListener('click', function () {
            scrubber.play();
        });
        _this.pauseButton.addEventListener('click', function () {
            scrubber.pause();
        });
        return _this;
    }
    Scrubber.prototype.play = function () {
        if (!this.active) {
            var scrubber_1 = this;
            scrubber_1.active = true;
            if (this.done) {
                this.value = this.min;
                this.done = false;
                // TODO: change this.done to true when the control is "scrubbed" to the end
            }
            var step_1 = function (timestamp) {
                scrubber_1.value = (scrubber_1.value + .2);
                if (scrubber_1.value > scrubber_1.max && !scrubber_1.loop) {
                    scrubber_1.value = scrubber_1.max;
                    scrubber_1.pause();
                    // TODO: change play icon to reset icon
                    scrubber_1.done = true;
                }
                else {
                    scrubber_1.value = scrubber_1.value % scrubber_1.max;
                    scrubber_1.requestID = window.requestAnimationFrame(step_1);
                }
            };
            // start animating
            window.requestAnimationFrame(step_1);
        }
    };
    Scrubber.prototype.pause = function () {
        this.active = false;
        window.cancelAnimationFrame(this.requestID);
    };
    return Scrubber;
}(Slider_js_1["default"]));
exports["default"] = Scrubber;
