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
var data = require("../mapsJson.js");
var Element_js_1 = require("../elements/Element.js");
/**
* Map class for displaying geographic maps of the world and its different parts.
*/
var GeoMap = /** @class */ (function (_super) {
    __extends(GeoMap, _super);
    /*
    * interactive: the object that called map()
    * mapName: the name of the map you wish to render
    * width: width of the map
    * height: height of the map
    */
    function GeoMap(interactive, mapName, width, height) {
        var _this = _super.call(this) || this;
        _this.mapName = mapName;
        _this.interactive = interactive;
        _this.interactive.width = width;
        _this.interactive.height = height;
        if (mapName.toLowerCase() == 'world' || mapName.toLowerCase() == 'globe' || mapName.toLowerCase() == 'united-states-detail')
            _this.generatePaths();
        else
            _this.findPathForString(mapName);
        var bbox = _this.interactive.background.getBBox();
        _this.interactive.root.setAttribute('transform', 'scale(1,-1)');
        _this.interactive.setViewBox(bbox.x, bbox.y, bbox.width, bbox.height);
        return _this;
    }
    /*
    * Get the json for the selected map name
    */
    GeoMap.prototype.getJson = function (mapName) {
        switch (mapName) {
            case "united-states-detail":
                return data.usData;
            case "globe":
                return data.globalData;
            default:
                return data.globalData;
        }
        ;
    };
    /*
    * Process the geo json and create all paths
    */
    GeoMap.prototype.generatePaths = function () {
        var json = this.getJson(this.mapName);
        var k = 0;
        var c = 0;
        var i = 1;
        for (var c_1 = 0; c_1 < json.features.length; c_1++) {
            for (var k_1 = 0; k_1 < json.features[c_1].geometry.coordinates.length; k_1++) {
                if (json.features[c_1].geometry.coordinates[k_1].length == 1) {
                    var path = this.interactive.path('M 0 0');
                    path.root.classList.add('country');
                    path.root.classList.remove("default");
                    path.root.setAttribute("name", json.features[c_1].properties.name);
                    path.style.stroke = '#333333';
                    path.style.fill = 'ffffff';
                    path.style.strokeWidth = '.1px';
                    var startX = json.features[c_1].geometry.coordinates[k_1][0][0][0];
                    var startY = json.features[c_1].geometry.coordinates[k_1][0][0][1];
                    // draw the path of the country
                    path.d = "M " + startX + " " + startY + "  ";
                    for (i = 1; i < json.features[c_1].geometry.coordinates[k_1][0].length; i++) {
                        var x = json.features[c_1].geometry.coordinates[k_1][0][i][0];
                        var y = json.features[c_1].geometry.coordinates[k_1][0][i][1];
                        path.d += "L " + x + " " + y + " ";
                    }
                }
                else {
                    var path = this.interactive.path('M 0 0');
                    path.root.classList.add('country');
                    path.root.classList.remove("default");
                    path.root.setAttribute("name", json.features[c_1].properties.name);
                    path.style.stroke = '#333333';
                    path.style.fill = 'ffffff';
                    path.style.strokeWidth = '.1px';
                    var startX = json.features[c_1].geometry.coordinates[k_1][0][0];
                    var startY = json.features[c_1].geometry.coordinates[k_1][0][1];
                    path.d = "M " + startX + " " + startY + " ";
                    for (i = 1; i < json.features[c_1].geometry.coordinates[k_1].length; i++) {
                        var x = json.features[c_1].geometry.coordinates[k_1][i][0];
                        var y = json.features[c_1].geometry.coordinates[k_1][i][1];
                        path.d += "L " + x + " " + y + " ";
                    }
                }
            }
        }
    };
    GeoMap.prototype.findPathForString = function (name) {
        var listOfNames = name.split(',');
        var json = data.globalData;
        var k = 0;
        var c = 0;
        var i = 1;
        for (var c_2 = 0; c_2 < json.features.length; c_2++) {
            for (var k_2 = 0; k_2 < json.features[c_2].geometry.coordinates.length; k_2++) {
                if (!listOfNames.includes(json.features[c_2].properties.name.toLowerCase())) {
                    continue;
                }
                if (json.features[c_2].geometry.coordinates[k_2].length == 1) {
                    var path = this.interactive.path('M 0 0');
                    path.root.classList.add('country');
                    path.root.classList.remove("default");
                    path.root.setAttribute("name", json.features[c_2].properties.name);
                    path.style.stroke = '#333333';
                    path.style.fill = 'ffffff';
                    path.style.strokeWidth = '.1px';
                    var startX = json.features[c_2].geometry.coordinates[k_2][0][0][0];
                    var startY = json.features[c_2].geometry.coordinates[k_2][0][0][1];
                    // draw the path of the country
                    path.d = "M " + startX + " " + startY + "  ";
                    for (i = 1; i < json.features[c_2].geometry.coordinates[k_2][0].length; i++) {
                        var x = json.features[c_2].geometry.coordinates[k_2][0][i][0];
                        var y = json.features[c_2].geometry.coordinates[k_2][0][i][1];
                        path.d += "L " + x + " " + y + " ";
                    }
                }
                else {
                    var path = this.interactive.path('M 0 0');
                    path.root.classList.add('country');
                    path.root.classList.remove("default");
                    path.root.setAttribute("name", json.features[c_2].properties.name);
                    path.style.stroke = '#333333';
                    path.style.fill = 'ffffff';
                    path.style.strokeWidth = '.1px';
                    var startX = json.features[c_2].geometry.coordinates[k_2][0][0];
                    var startY = json.features[c_2].geometry.coordinates[k_2][0][1];
                    path.d = "M " + startX + " " + startY + " ";
                    for (i = 1; i < json.features[c_2].geometry.coordinates[k_2].length; i++) {
                        var x = json.features[c_2].geometry.coordinates[k_2][i][0];
                        var y = json.features[c_2].geometry.coordinates[k_2][i][1];
                        path.d += "L " + x + " " + y + " ";
                    }
                }
            }
        }
    };
    /**
    * The default behavior is to update its dependents on change.
    */
    GeoMap.prototype.onchange = function () {
        this.updateDependents();
    };
    return GeoMap;
}(Element_js_1["default"]));
exports["default"] = GeoMap;
