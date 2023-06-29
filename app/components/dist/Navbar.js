"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var image_1 = require("next/image");
var CustomButton_1 = require("./CustomButton");
var Navbar = function () {
    return (react_1["default"].createElement("header", { className: 'w-full absolute z-10' },
        react_1["default"].createElement("nav", { className: 'max-w-[1440px] mx-auto\r\n        flex justify-between items-center\r\n        sm:px-16 px-6 py-4\r\n        ' },
            react_1["default"].createElement(link_1["default"], { href: '/', className: 'flex justify-center\r\n            items-center' },
                react_1["default"].createElement(image_1["default"], { src: '/logo.svg', alt: 'Car Main Log', width: 118, height: 18, className: 'object-contain' })),
            react_1["default"].createElement(CustomButton_1["default"], { title: 'Sign In', containerStyles: 'text-primary-blue\r\n  rounded-full bg-white min-w-[130px]  ', btnType: "button" }))));
};
exports["default"] = Navbar;
