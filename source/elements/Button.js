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
* A button that when pressed fires an onclick event.
*/
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    /**
    * Constructs a button at the position (x,y)
    */
    function Button(x, y, text) {
        var _this = _super.call(this) || this;
        /**
        * The state of the checkbox
        */
        _this._count = 0;
        _this.root = SVG_js_1["default"].Group();
        _this.root.setAttribute('transform', "translate(" + x + "," + y + ")");
        _this.root.classList.add('button');
        _this.root.id = _this.id;
        // Create a text element
        _this.text = new Text_js_1["default"](0, 1, text);
        _this.text.root.setAttribute('alignment-baseline', 'middle');
        _this.text.root.style.textAnchor = 'middle';
        // TODO: why is this.text.root.textLength returning zero?
        _this.box = new Rectangle_js_1["default"](0, -16, _this.text.length * 2 + 16, 32);
        _this.box.root.setAttribute('rx', '2px');
        _this.text.x = _this.box.x + _this.box.width / 2;
        _this.root.appendChild(_this.box.root);
        _this.root.appendChild(_this.text.root);
        return _this;
    }
    Object.defineProperty(Button.prototype, "onclick", {
        /**
        * Fires when the user clicks the left button on the button.
        */
        set: function (handler) {
            this.root.onclick = handler;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * The default behavior is to update its dependents on change.
    */
    Button.prototype.onchange = function () {
        this.updateDependents();
    };
    return Button;
}(Element_js_1["default"]));
exports["default"] = Button;
