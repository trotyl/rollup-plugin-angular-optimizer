"use strict";
exports.__esModule = true;
var build_optimizer_1 = require("@angular-devkit/build-optimizer");
function optimizer() {
    return {
        name: 'angular-optimizer',
        transform: function (content) { return build_optimizer_1.buildOptimizer({ content: content }).content; }
    };
}
exports["default"] = optimizer;
