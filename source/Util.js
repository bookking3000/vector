"use strict";
exports.__esModule = true;
var file_js_1 = require("./util/file.js");
function parseName(filename) {
    var start = filename.lastIndexOf("/") + 1;
    var end = filename.lastIndexOf(".");
    return filename.substr(start, end - start);
}
/**
* Returns the current script name.
*/
function getScriptName(trimExtension) {
    if (trimExtension === void 0) { trimExtension = true; }
    // Variables
    var error = new Error();
    var source;
    var lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/);
    var currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);
    var name;
    // Get the script name
    if ((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] != "") {
        name = source[1];
    }
    else if ((source = currentStackFrameRegex.exec(error.stack.trim()))) {
        name = source[1];
    }
    else {
        return error.message;
    }
    // Return name
    if (trimExtension) {
        var position = name.lastIndexOf(".");
        return name.substr(0, position);
    }
    else {
        return name;
    }
}
exports.getScriptName = getScriptName;
/**
* Returns the point where two lines intersect. The first line is defined by the
* points p1 and p2. The second line is defined by the points p3 and p4.
*/
function PointWhereTwoLinesIntersect(p1, p2, p3, p4) {
    var slope1 = (p2.y - p1.y) / (p2.x - p1.x);
    var slope2 = (p4.y - p3.y) / (p4.x - p3.x);
    var b1 = (p2.y - p2.x * slope1);
    var b2 = (p4.y - p4.x * slope2);
    var x = (b2 - b1) / (slope1 - slope2);
    var y;
    if (!isFinite(slope1)) {
        x = p1.x;
        y = p3.y + slope2 * (x - p3.x);
    }
    else if (!isFinite(slope2)) {
        x = p3.x;
        y = p1.y + slope1 * (x - p1.x);
    }
    else {
        y = p1.y + slope1 * (x - p1.x);
    }
    return { x: x, y: y };
}
exports.PointWhereTwoLinesIntersect = PointWhereTwoLinesIntersect;
/**
* Returns the next prime number after the given integer.
*/
function nextPrime(n) {
    if (!Number.isInteger(n)) {
        throw Error('Please pass an integer as a parameter');
    }
    // Search for the next prime until it is found
    while (!isPrime(++n)) {
    }
    return n;
}
exports.nextPrime = nextPrime;
/**
* Returns true if the number is prime, false otherwise.
*/
function isPrime(n) {
    if (!Number.isInteger(n) || n <= 1) {
        return false;
    }
    // Check if any of the numbers, up to the square root of the number, evenly
    // divide the number
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
/**
* Downloads the current drawing as an svg file.
*/
function download(id, filename) {
    var svg = document.getElementById(id);
    console.log(id);
    var styleSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
        // TODO: there is a better way to do this
        if (document.styleSheets[i].href != null && document.styleSheets[i].href.includes("library.css")) {
            styleSheet = document.styleSheets[i];
            break;
        }
    }
    var style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.type = "text/css";
    var css = "";
    for (var i = 0; i < styleSheet.rules.length; i++) {
        var rule = styleSheet.rules[i];
        css += rule.cssText + "\n";
    }
    style.innerHTML = css;
    svg.appendChild(style);
    // console.log(svg.outerHTML);
    // console.log(style);
    // console.log(svg);
    var data = svg.outerHTML.replace("&gt;", ">").replace("&lt;", "<");
    var blob = new Blob([data], { type: 'image/svg+xml' });
    file_js_1.saveAs(blob, filename, {});
}
exports.download = download;
/**
* Returns a promise containing the response object.
*/
function getURL(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            // This is called even on 404 etc so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });
}
exports.getURL = getURL;
/**
* Gets the URL parameters of the current session.
*/
function getUrlParams(str) {
    var hashes = str.slice(str.indexOf('?') + 1).split('&');
    var params = new Map();
    for (var _i = 0, hashes_1 = hashes; _i < hashes_1.length; _i++) {
        var h = hashes_1[_i];
        var value = h.split('=');
        params.set(value[0], value[1]);
    }
    return params;
}
exports.getUrlParams = getUrlParams;
// TODO: this is unfinished
function setUrlParams(param, value) {
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search.slice(1));
    params.set(param, value);
    alert(url.href);
    // window.location.href = url.href;
    window.open(url.href);
}
exports.setUrlParams = setUrlParams;
function loadScript(url, element) {
    getURL(url).then(function (response) {
        var div = document.createElement('div');
        div.id = parseName(url);
        var script = document.createElement('script');
        script.type = 'module';
        script.src = url;
        element.appendChild(div);
        element.appendChild(script);
    });
}
exports.loadScript = loadScript;
