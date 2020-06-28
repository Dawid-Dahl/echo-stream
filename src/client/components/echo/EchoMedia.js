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
var EchoMedia = function (_a) {
    var mediaUrl = _a.mediaUrl, sourceLink = _a.sourceLink;
    var isVideo = mediaUrl ? Boolean(mediaUrl.match(/video.twimg.com/)) : false;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null, isVideo ? (react_1.default.createElement("video", { src: mediaUrl, controls: true, loop: true, autoPlay: true })) : mediaUrl ? (react_1.default.createElement("a", { href: sourceLink, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("img", { src: mediaUrl, alt: "media image" }))) : (react_1.default.createElement("div", null)))));
};
exports.default = EchoMedia;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 100%;\n\n\timg {\n\t\twidth: 100%;\n\t\tmax-height: 25em;\n\t\tobject-fit: cover;\n\t\tcursor: pointer;\n\t}\n\n\tvideo {\n\t\twidth: 100%;\n\t\tmax-height: 25em;\n\t\tobject-fit: cover;\n\t\tcursor: pointer;\n\t}\n"], ["\n\twidth: 100%;\n\n\timg {\n\t\twidth: 100%;\n\t\tmax-height: 25em;\n\t\tobject-fit: cover;\n\t\tcursor: pointer;\n\t}\n\n\tvideo {\n\t\twidth: 100%;\n\t\tmax-height: 25em;\n\t\tobject-fit: cover;\n\t\tcursor: pointer;\n\t}\n"])));
var templateObject_1;
