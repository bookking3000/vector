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
var CheckBox_js_1 = require("./CheckBox.js");
/**
*  Radio Buttons with labels. Only one of the checkboxes will be checked at any given time.
*/
var RadioControl = /** @class */ (function (_super) {
    __extends(RadioControl, _super);
    /*
    * labels: the labels for the radio buttons
    * x: x position of control
    * y: y position of the control
    * index: the starting button to be highlighted
    */
    function RadioControl(labels, x, y, index) {
        if (index === void 0) { index = 0; }
        var _this = this;
        if (labels === undefined || labels.length == 0) {
            throw new Error('Labels must not be empty');
        }
        _this = _super.call(this) || this;
        var group = SVG_js_1["default"].Group();
        group.id = _this.id;
        group.setAttribute("transform", "translate(" + x + "," + y + ")");
        _this.root = group;
        _this.index = index;
        var counter = 0;
        _this.list = [];
        var rc = _this;
        labels.forEach(function (element, i) {
            var checkbox = new CheckBox_js_1["default"](0, counter, element, false);
            if (i == index) {
                checkbox.value = true;
            }
            checkbox.box.root.setAttribute('rx', '8px');
            checkbox.box.root.onmousedown = function () {
                rc.handleMouseDown(i);
                checkbox.value = true;
                rc.index = i;
                rc.onchange();
            };
            group.appendChild(checkbox.root);
            _this.list.push(checkbox);
            counter += 20;
        });
        return _this;
    }
    /*
    * returns the text of the currently selected button
    */
    RadioControl.prototype.getCurrentValue = function () {
        return this.list[this.index].text.contents;
    };
    /*
    * when a button is selected, deselect all others
    */
    RadioControl.prototype.handleMouseDown = function (index) {
        this.list.forEach(function (element) {
            element.value = false;
        });
    };
    /**
    * The default behavior is to update its dependents on change.
    */
    RadioControl.prototype.onchange = function () {
        this.updateDependents();
    };
    return RadioControl;
}(Element_js_1["default"]));
exports["default"] = RadioControl;
