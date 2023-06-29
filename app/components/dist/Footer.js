"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var index_1 = require("@/app/consents/index");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "flex flex-col text-black-100 mt-5 border-t border-gray-100" },
        react_1["default"].createElement("div", { className: "flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-start items-start gap-6" },
                react_1["default"].createElement(image_1["default"], { src: "/logo.svg", alt: "logo", width: 118, height: 18, className: "object-contain" }),
                react_1["default"].createElement("p", { className: "text-base text-gray-700" },
                    "CarHub 2023 ",
                    react_1["default"].createElement("br", null),
                    "All rights reserved")),
            react_1["default"].createElement("div", { className: "footer__links" }, index_1.footerLinks.map(function (link) { return (react_1["default"].createElement("div", { key: link.title, className: "footer__link" },
                react_1["default"].createElement("h3", { className: "font-bold" }, link.title),
                link.links.map(function (item) { return (react_1["default"].createElement(link_1["default"], { key: item.title, href: item.url, className: "text-gray-500" }, item.title)); }))); }))),
        react_1["default"].createElement("div", { className: 'flex justify-between\r\n        items-center felx-wrap\r\n        mt-10\r\n        border-t border-gray-100\r\n        sm:px-16 px-6 py-10\r\n        ' },
            react_1["default"].createElement("p", null, "@2023 CarHub .All Rights Reserved"),
            react_1["default"].createElement("div", { className: 'footer__copyrights-link' },
                react_1["default"].createElement(link_1["default"], { href: '/', className: 'text-gray-500' }, "Privacy Policy"),
                react_1["default"].createElement(link_1["default"], { href: '/', className: 'text-gray-500' }, "Terms of Use")))));
};
exports["default"] = Footer;
