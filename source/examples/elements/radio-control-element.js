"use strict";
exports.__esModule = true;
var Interactive_js_1 = require("../../Interactive.js");
var Util_js_1 = require("../../Util.js");
var interactive = new Interactive_js_1["default"](Util_js_1.getScriptName());
interactive.width = 768;
interactive.height = 150;
interactive.root.style.border = "1px solid grey";
var radio = interactive.radioControl(["blue", "red", "green", "yellow"], 20, 20);
var ellipse = interactive.ellipse(400, 75, 50, 50);
ellipse.addDependency(radio);
ellipse.update = function () {
    ellipse.style.fill = radio.getCurrentValue();
};
ellipse.update();
