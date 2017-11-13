"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_optimizer_1 = require("@angular-devkit/build-optimizer");
function optimizer() {
    return {
        name: 'angular-optimizer',
        transform: (content, id) => {
            const { content: code, sourceMap: map } = build_optimizer_1.buildOptimizer({ content, inputFilePath: id, emitSourceMap: true });
            if (!code) { return null }
            if (!map) { return code }
            return { code, map };
        },
    };
}
exports.default = optimizer;
