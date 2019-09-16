"use strict";
exports.__esModule = true;
/**
* A node class contains data and a recursive next point.
*/
var Node = /** @class */ (function () {
    /**
    Constructs a new node with the provided data and sets next to be null.
    */
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
/**
* A dynamic, singlely linked list.
*/
var LinkedList = /** @class */ (function () {
    /**
    Consstructs an empty linked list.
    */
    function LinkedList() {
        this.head = null;
    }
    /**
    Inserts a node at the beginning of the list
    */
    LinkedList.prototype.insert = function (element) {
        if (this.head == null) {
            this.head = new Node(element);
        }
        else {
            var temp = this.head;
            this.head = new Node(element);
            this.head.next = temp;
        }
    };
    /**
    Returns the first element in the list, or null if the list is empty.
    */
    LinkedList.prototype.first = function () {
        if (this.head != null) {
            return this.head.data;
        }
        else {
            return null;
        }
    };
    /**
    Removes the first element in the list. Returns true if element was successfully removed, false otherwise.
    */
    LinkedList.prototype.remove = function () {
        if (this.head != null) {
            this.head = this.head.next;
            return true;
        }
        else {
            return false;
        }
    };
    /**
    Returns an iterator over the elements in the list
    */
    LinkedList.prototype[Symbol.iterator] = function () {
        var current = this.head;
        var iterator = {
            next: function () {
                if (current == null) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                else {
                    var data = current.data;
                    current = current.next;
                    return {
                        done: false,
                        value: data
                    };
                }
            }
        };
        return iterator;
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
