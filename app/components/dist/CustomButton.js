"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomButton = function (_a) {
    var btnType = _a.btnType, title = _a.title, containerStyles = _a.containerStyles, handleclick = _a.handleclick;
    return (react_1["default"].createElement("button", { disabled: false, type: "button", className: "custom-btn " + containerStyles, onClick: (handleclick) },
        react_1["default"].createElement("span", { className: 'flex-1 ' }, title)));
};
exports["default"] = CustomButton;
