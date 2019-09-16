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
var Rectangle_js_1 = require("../elements/Rectangle.js");
var Text_js_1 = require("../elements/Text.js");
var Element_js_1 = require("../elements/Element.js");
/**
* A checkbox with an label. The can be checked, unchecked, and related to other
* elements.
*/
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    /**
    * Constructs a control at the position (x,y)
    */
    function CheckBox(x, y, text, value) {
        var _this = _super.call(this) || this;
        /**
        * The state of the checkbox
        */
        _this._value = false;
        _this.root = SVG_js_1["default"].Group();
        _this.root.setAttribute('transform', "translate(" + x + "," + y + ")");
        _this.root.id = _this.id;
        _this.box = new Rectangle_js_1["default"](-6.5, -6.5, 13, 13);
        _this.box.root.setAttribute('rx', '2px');
        _this.text = new Text_js_1["default"](18, 1, text);
        _this.text.root.setAttribute('alignment-baseline', 'middle');
        _this.root.appendChild(_this.box.root);
        _this.root.appendChild(_this.text.root);
        var temp = _this;
        _this.value = value;
        _this.box.root.onmousedown = function () {
            temp.toggle();
        };
        _this.addDependency(_this.box);
        return _this;
    }
    Object.defineProperty(CheckBox.prototype, "value", {
        /**
        * Returns true if the box is checked, false if it is not.
        */
        get: function () {
            return this._value;
        },
        /**
        * Sets the value to true and visually checks the box.
        */
        set: function (value) {
            if (this._value = value) {
                this.box.root.style.fill = '#404040';
            }
            else {
                this.box.root.style.fill = '#f2f2f2';
            }
            this.onchange();
        },
        enumerable: true,
        configurable: true
    });
    /**
    * The default behavior is to update its dependents on change.
    */
    CheckBox.prototype.onchange = function () {
        this.updateDependents();
    };
    /**
    * Converts the current true/false state of the checkbox to a zero or one.
    */
    CheckBox.prototype.number = function () {
        return this.value ? 1 : 0;
    };
    /**
    * Toggles the state of this check box.
    */
    CheckBox.prototype.toggle = function () {
        this.value = !this.value;
    };
    return CheckBox;
}(Element_js_1["default"]));
exports["default"] = CheckBox;
