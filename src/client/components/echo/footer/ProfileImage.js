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
var utils_1 = require("../../../utils/utils");
//profile images get higher res if you remove _normal from the URL.
var ProfileImage = function (_a) {
    var profileImageUrl = _a.profileImageUrl;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null, profileImageUrl ? (react_1.default.createElement("img", { src: profileImageUrl && utils_1.stringTrimmer("_normal", profileImageUrl), alt: "profile image" })) : (react_1.default.createElement("div", null)))));
};
exports.default = ProfileImage;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 1em;\n\n\timg {\n\t\tborder-radius: 50%;\n\t\theight: 3em;\n\t\twidth: 3em;\n\t}\n\n\t/* div {\n\t\theight: 300px;\n\t\twidth: 300px;\n\t\tborder-radius: 50%;\n\t} */\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: 1em;\n\n\timg {\n\t\tborder-radius: 50%;\n\t\theight: 3em;\n\t\twidth: 3em;\n\t}\n\n\t/* div {\n\t\theight: 300px;\n\t\twidth: 300px;\n\t\tborder-radius: 50%;\n\t} */\n"])));
var templateObject_1;
