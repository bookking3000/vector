"use strict";
exports.__esModule = true;
var DependencyGraph_js_1 = require("./model/DependencyGraph.js");
/**
* This controller manages the dependencies between elements.
*/
var Controller = /** @class */ (function () {
    /**
    * Constructs a controller
    */
    function Controller() {
        this.dependencyGraph = new DependencyGraph_js_1["default"]();
        this.elements = new Map();
    }
    /**
    * Clears all the elements from this controller.
    */
    Controller.prototype.clear = function () {
        this.dependencyGraph = new DependencyGraph_js_1["default"](); // TODO: implement clear method
        this.elements.clear();
    };
    /**
    * Adds an element to this controller.
    */
    Controller.prototype.add = function (element) {
        this.dependencyGraph.add(element);
        this.elements.set(element.id, element);
    };
    /**
    * Removes an element from this controller.
    */
    Controller.prototype.remove = function (element) {
        this.dependencyGraph.remove(element);
        this.elements["delete"](element.id);
    };
    /**
    * Returns the element corresponding to the unique string identifier
    */
    Controller.prototype.get = function (id) {
        return this.elements.get(id);
    };
    /**
    * Updates this element and all of its dependents
    */
    Controller.prototype.update = function (element) {
        var deps = this.dependencyGraph.getDependents(element);
        for (var _i = 0, deps_1 = deps; _i < deps_1.length; _i++) {
            var d = deps_1[_i];
            d.update();
        }
    };
    return Controller;
}());
exports["default"] = Controller;
