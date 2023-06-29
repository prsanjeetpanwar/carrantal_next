"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var CustomButton_1 = require("./CustomButton");
var Hero = function () {
    var handleScroll = function () {
    };
    return (React.createElement("div", { className: "hero" },
        React.createElement("div", { className: "flex-1 pt-36\r\npadding-x " },
            React.createElement("h1", { className: "hero__title" }, "Find,book or rent a car --quickly and easily!"),
            React.createElement("p", { className: "hero__subtitle" }, "Streamline your car rental experience with our effortless booking process"),
            React.createElement(CustomButton_1["default"], { title: "Explore cars", containerStyles: 'bg-primary-blue\r\n     text-white rounded-full mt-10 ', handleclick: handleScroll })),
        React.createElement("div", { className: "hero__image-container" },
            React.createElement("div", { className: "hero__image" },
                React.createElement(image_1["default"], { src: '/hero.png', alt: 'hero', fill: true, className: 'object-contain' })),
            React.createElement("div", { className: "hero__image-overlay" }))));
};
exports["default"] = Hero;
