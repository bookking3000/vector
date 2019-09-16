"use strict";
exports.__esModule = true;
var LinkedList_js_1 = require("./LinkedList.js");
/**
A dependency graph models relationships between nodes. The graph is directed and asyclic, throwing a circular dependency exception if circular dependencies are added.
*/
var DependencyGraph = /** @class */ (function () {
    /**
    Constructs an empty dependency graph.
    */
    function DependencyGraph() {
        this.relationships = new Map();
        this._size = 0;
    }
    /***
    Adds a node into the dependency graph. If the node already exists within the graph, does nothing.
    */
    DependencyGraph.prototype.add = function (node) {
        if (!this.contains(node)) {
            this.relationships.set(node, new Set());
            this._size++;
        }
    };
    /**
    Returns true if the node exists within the dependency graph.
    */
    DependencyGraph.prototype.contains = function (node) {
        return this.relationships.has(node);
    };
    /**
    Removes the node from the dependency graph. If the node does not exist does nothing.
    */
    DependencyGraph.prototype.remove = function (node) {
        if (this.relationships["delete"](node)) {
            this._size--;
        }
    };
    /**
    Returns the number of vertices in the dependency graph.
    */
    DependencyGraph.prototype.size = function () {
        return this._size;
    };
    /**
    Adds a dependency between two nodes. If either of the nodes do not exist within the dependency graph, throws an exception.
    */
    DependencyGraph.prototype.addDependency = function (from, to) {
        // Make sure the nodes exist
        this.add(from);
        this.add(to);
        // Add the dependency
        this.relationships.get(from).add(to);
        // Check for circular dependencies
        this.traverse(from, from);
    };
    /**
    Traverses the graph structuring checking for circular dependecies. If a circular dependency is added, throws an error.
    */
    DependencyGraph.prototype.traverse = function (current, node, visited) {
        if (visited === void 0) { visited = new Set(); }
        // Mark this node as visited
        visited.add(current);
        // Recursively call this method on dependents of the argument node
        var dependents = this.getDependents(current, true);
        for (var _i = 0, dependents_1 = dependents; _i < dependents_1.length; _i++) {
            var d = dependents_1[_i];
            // Check if this dependency causes a circular dependency
            if (d == node) {
                throw new Error("circular dependency");
            }
            // Continue traversing un-explored nodes
            if (!visited.has(d)) {
                this.traverse(d, node, visited);
            }
        }
    };
    /**
    Returns true if a node has dependents.
    */
    DependencyGraph.prototype.hasDependents = function (node) {
        return this.contains(node) && this.relationships.get(node).size != 0;
    };
    /**
    * Returns an iterator to the dependents of the node.
    */
    DependencyGraph.prototype.getDependents = function (node, shallow) {
        if (shallow === void 0) { shallow = false; }
        // If the node does not exist return an empty iterable
        if (!this.relationships.has(node)) {
            return [];
        }
        // If shallow, return adjacent dependencies.
        if (shallow) {
            return this.relationships.get(node).keys();
        }
        else {
            // Get the dependents including the original node.
            var list = this.getTopologicalDependents(node);
            // Remove the starting node and return the dependents.
            list.remove();
            return list;
        }
    };
    /**
    Returns a list of the arguent node and all of its dependents in topological order.
    */
    DependencyGraph.prototype.getTopologicalDependents = function (node, visited, list) {
        if (visited === void 0) { visited = new Set(); }
        if (list === void 0) { list = new LinkedList_js_1["default"](); }
        // Mark this node as visited
        visited.add(node);
        // Recursively call this method on dependents of the argument node
        var dependents = this.getDependents(node, true);
        for (var _i = 0, dependents_2 = dependents; _i < dependents_2.length; _i++) {
            var d = dependents_2[_i];
            if (!visited.has(d)) {
                this.getTopologicalDependents(d, visited, list);
            }
        }
        // Insert node to the front of iterator to retain Topological ordering
        list.insert(node);
        return list;
    };
    /**
    Returns the nodes within this dependency graph.
    */
    DependencyGraph.prototype.getNodes = function () {
        return this.relationships.keys();
    };
    /**
    Returns a string representation of this dependency graph.
    */
    DependencyGraph.prototype.toString = function () {
        // Build a string of dependencies in the form of from->to
        var result = "";
        for (var _i = 0, _a = this.getNodes(); _i < _a.length; _i++) {
            var from = _a[_i];
            for (var _b = 0, _c = this.getDependents(from, true); _b < _c.length; _b++) {
                var to = _c[_b];
                result += from.toString() + '->' + to.toString() + '\n';
            }
        }
        return result;
    };
    /**
    Generates a DependenyGraph object from a string representation.
    */
    DependencyGraph.Generate = function (str) {
        var graph = new DependencyGraph();
        // Prime the loop
        var start = 0;
        var index = str.indexOf('->', start);
        while (index > 0) {
            // Get the first part of the dependency
            var from = str.substring(start, index);
            // Get the second part of the dependency
            start = index + 1;
            index = str.indexOf('\n', index);
            var to = str.substring(start + 1, index);
            // Add the dependency to the graph
            graph.addDependency(from, to);
            // Get the next string if there is one
            start = index + 1;
            index = str.indexOf('->', start);
        }
        return graph;
    };
    return DependencyGraph;
}());
exports["default"] = DependencyGraph;
