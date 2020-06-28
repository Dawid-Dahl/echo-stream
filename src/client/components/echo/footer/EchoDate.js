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
var relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
var dayjs_1 = __importDefault(require("dayjs"));
dayjs_1.default.extend(relativeTime_1.default);
var EchoDate = function (_a) {
    var sourceDate = _a.sourceDate;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, null, dayjs_1.default(parseInt(sourceDate)).fromNow())));
};
exports.default = EchoDate;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;
