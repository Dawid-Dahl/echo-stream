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
var PlatformLogo_1 = __importDefault(require("./PlatformLogo"));
var EchoDate_1 = __importDefault(require("./EchoDate"));
var ProfileName_1 = __importDefault(require("./ProfileName"));
var ProfileImage_1 = __importDefault(require("./ProfileImage"));
var EchoFooter = function (_a) {
    var author = _a.author, authorScreenName = _a.authorScreenName, profileImageUrl = _a.profileImageUrl, sourceDate = _a.sourceDate, sourceLink = _a.sourceLink, platform = _a.platform;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(ProfileImage_1.default, { profileImageUrl: profileImageUrl }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(ProfileName_1.default, { author: author, authorScreenName: authorScreenName }),
                    react_1.default.createElement(EchoDate_1.default, { sourceDate: sourceDate }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(PlatformLogo_1.default, { platform: platform, sourceLink: sourceLink })))));
};
exports.default = EchoFooter;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 4em;\n\twidth: 100%;\n\tcolor: white;\n\n\t> :nth-child(1) {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t> :nth-child(2) {\n\t\tdisplay: flex;\n\t\t/* align-items: center; */\n\t\tjustify-content: center;\n\t}\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmin-height: 4em;\n\twidth: 100%;\n\tcolor: white;\n\n\t> :nth-child(1) {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\n\t> :nth-child(2) {\n\t\tdisplay: flex;\n\t\t/* align-items: center; */\n\t\tjustify-content: center;\n\t}\n"])));
var templateObject_1;
