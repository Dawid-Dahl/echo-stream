"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var EchoText = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null, text.length < 70 ? react_1.default.createElement("h2", null, text) : react_1.default.createElement("p", null, text))));
};
exports.default = EchoText;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tcolor: white;\n\twidth: 100%;\n\n\tp {\n\t\tpadding: 1em 1em 0.5em 1em;\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t}\n\n\th2 {\n\t\tpadding: 1em 1em 0.5em 1em;\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t}\n"], ["\n\tcolor: white;\n\twidth: 100%;\n\n\tp {\n\t\tpadding: 1em 1em 0.5em 1em;\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t}\n\n\th2 {\n\t\tpadding: 1em 1em 0.5em 1em;\n\t\tmargin: 0;\n\t\ttext-align: center;\n\t}\n"])));
var templateObject_1;
