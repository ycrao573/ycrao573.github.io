"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var HomePage_1 = require("../HomePage");
var project_card_1 = require("./project-card");
require("./styles.scss");
var Meta = antd_1.Card.Meta;
var Title = antd_1.Typography.Title;
var Projects = function () {
    var useToken = antd_1.theme.useToken;
    var token = useToken().token;
    var value = react_1.useContext(HomePage_1.ThemeContext);
    return (react_1["default"].createElement("div", { className: "projects", id: "projects" },
        react_1["default"].createElement(Title, { level: 3, className: "header" }, "Projects"),
        react_1["default"].createElement("div", { className: "projects-list" },
            react_1["default"].createElement(project_card_1.ProjectCard, { imgUrl: 'https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png_.webp', extraStyles: { padding: '15%' }, prodLink: "https://redmart.lazada.sg/", title: 'RedMart by Lazada', description: 'Coming Soon', badges: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(antd_1.Badge, { color: "#ee4054", count: "React" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "#ee4054", count: "TypeScript" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "#ee4054", count: "CSS/SCSS" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "#ee4054", count: "Rax" })) }),
            react_1["default"].createElement(project_card_1.ProjectCard, { imgUrl: 'https://github.com/ycrao573/ar-tour-guide-fyp/raw/master/assets/images/banner.png', githubLink: 'https://github.com/ycrao573/ar-tour-guide-fyp', title: 'Final Year Project: Travelee', description: "This final year project involves developing a mobile app using Flutter and Firebase, employing advanced technologies like Google's geolocation, image recognition, and Wikitude AR SDK. It aims to improve the experience of travelers when navigating local tourist attractions, providing them with seamless and intuitive guidance", badges: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(antd_1.Badge, { color: "aqua", count: "Flutter" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "aqua", count: "Android" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "aqua", count: "Firebase" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "aqua", count: "JavaScript" })) }),
            react_1["default"].createElement(project_card_1.ProjectCard, { imgUrl: 'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals/raw/master/resources/Poster.jpeg', githubLink: 'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals', title: 'Year 3 DIP: GoGoGoals', description: 'A group project for building an mobile app for tracking goals and manage personal productivity. It allow users to easily manage and view goals by category, with intelligent recommendation of to-dos.', badges: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(antd_1.Badge, { color: "orange", count: "Flutter" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "orange", count: "Node.js" }),
                    react_1["default"].createElement(antd_1.Badge, { color: "orange", count: "Firebase" })) }))));
};
exports["default"] = Projects;
