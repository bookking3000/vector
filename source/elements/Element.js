"use strict";
exports.__esModule = true;
var Controller_js_1 = require("../Controller.js");
/**
* A basic element of the interactive ecosystem. Each element has an unique
* identifier, an update function to be defined by the user, and the ability to
* add dependencies on other elements.
*/
var Element = /** @class */ (function () {
    /**
    * Constructs the elements and adds it into the current controller.
    * TODO: Have the constructor take in a root SVGEelement and assign the id to it?
    */
    function Element() {
        // give this element an unique id
        this._id = this.constructor.name.toLowerCase() + "-" + Element.count++;
        // add this element to the controller
        Element.controller.add(this);
    }
    /**
    * Clears the static data structures holding elements and resets the count.
    */
    Element.clear = function (disable) {
        if (disable === void 0) { disable = false; }
        Element.count = 0;
        Element.controller.clear();
        Element.disable = disable;
    };
    Object.defineProperty(Element.prototype, "id", {
        /**
        * Returns the unique generated identifier associated with this element.
        */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Removes this element from the DOM and from the Element controller.
    */
    Element.prototype.remove = function () {
        Element.controller.remove(this);
        this.root.remove();
    };
    /**
    * Declares this element dependent on the provided element(s).
    */
    Element.prototype.addDependency = function () {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
            var element = elements_1[_a];
            Element.controller.dependencyGraph.addDependency(element, this);
        }
    };
    /**
    * Updates all of the elements that depend on this element.
    */
    Element.prototype.updateDependents = function () {
        Element.controller.update(this);
    };
    /**
    * Allows for the events attatched to elements to be disabled.
    */
    Element.disable = false;
    /**
    * The controller manages the dependencies between elements. Every element
    * is added to this controller upon creation.
    */
    Element.controller = new Controller_js_1["default"]();
    /**
    * This number uniquely identifes elements
    */
    Element.count = 0;
    return Element;
}());
exports["default"] = Element;
