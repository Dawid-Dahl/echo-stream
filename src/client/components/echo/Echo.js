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
var EchoMedia_1 = __importDefault(require("./EchoMedia"));
var EchoText_1 = __importDefault(require("./EchoText"));
var EchoFooter_1 = __importDefault(require("./footer/EchoFooter"));
var Echo = function (_a) {
    var text = _a.text, mediaUrl = _a.mediaUrl, author = _a.author, date = _a.date, authorScreenName = _a.authorScreenName, profileImageUrl = _a.profileImageUrl, sourceDate = _a.sourceDate, platform = _a.platform, sourceLink = _a.sourceLink;
    return (react_1.default.createElement(Wrapper, null,
        react_1.default.createElement(EchoMedia_1.default, { mediaUrl: mediaUrl, sourceLink: sourceLink }),
        react_1.default.createElement(EchoText_1.default, { text: text }),
        react_1.default.createElement(EchoFooter_1.default, { date: date, author: author, authorScreenName: authorScreenName, profileImageUrl: profileImageUrl, sourceDate: sourceDate, sourceLink: sourceLink, platform: platform })));
};
exports.default = Echo;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 1em;\n\tborder-radius: var(--border-radius);\n\tbackground-color: var(--main-grey-color);\n\toverflow: hidden;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 1em;\n\tborder-radius: var(--border-radius);\n\tbackground-color: var(--main-grey-color);\n\toverflow: hidden;\n"])));
var templateObject_1;
