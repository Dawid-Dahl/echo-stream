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
var ProfileName = function (_a) {
    var author = _a.author, authorScreenName = _a.authorScreenName;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("p", null, author + " (" + authorScreenName + ")"))));
};
exports.default = ProfileName;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tp {\n\t\tmargin: 0;\n\t}\n"], ["\n\tp {\n\t\tmargin: 0;\n\t}\n"])));
var templateObject_1;
