"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const fs = require("fs");
function showTree(node, indent = '    ') {
    console.log(indent + ts.SyntaxKind[node.kind]);
    if (node.getChildCount() === 0) {
        console.log(indent + '    Text: ' + node.getText());
    }
    for (let child of node.getChildren()) {
        showTree(child, indent + '    ');
    }
}
let buffer = fs.readFileSync('demo.ts');
let content = buffer.toString('utf-8');
let node = ts.createSourceFile('demo.ts', content, ts.ScriptTarget.Latest, true);
showTree(node);
