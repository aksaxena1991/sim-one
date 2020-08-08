exports.id = "main";
exports.modules = {

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_interface_1 = __importDefault(__webpack_require__(/*! ./src/canvas-interface */ "./src/canvas-interface.ts"));
var Drawing_1 = __importDefault(__webpack_require__(/*! ./src/Drawing */ "./src/Drawing.ts"));
var Event_1 = __importDefault(__webpack_require__(/*! ./src/Event */ "./src/Event.ts"));
var Index = /** @class */ (function () {
    function Index() {
        this.inst = new canvas_interface_1.default('canvas', 500, 500);
        this.drawing = new Drawing_1.default();
        this.event = new Event_1.default('evt');
    }
    Index.prototype.init = function () {
        this.drawing.addScript();
        this.drawing.createMainDiv();
        this.drawing.createTrapezium();
        this.drawing.createWavelines(45);
        this.drawing.createSelect();
        this.drawing.createButton();
        this.event.addClickEvent();
    };
    return Index;
}());
new Index().init();


/***/ }),

/***/ "./src/Drawing.ts":
/*!************************!*\
  !*** ./src/Drawing.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
var style_1 = __webpack_require__(/*! ../src/css/style */ "./src/css/style.ts");
var Drawing = /** @class */ (function () {
    function Drawing() {
        this.body = document.getElementById('body');
    }
    Drawing.prototype.addScript = function () {
        var head = jquery_1.default('head');
        head.html("<style>\n        @keyframes oscillate {\n            0% {left: 0px;}\n            50% {left: 20px;}\n            100% {left: 0px;}\n          }\n          @keyframes resizer {\n            0% {width: 30px;}\n            50% {width: 50px;}\n            100% {width: 30px;}\n          }\n          .particle{\n            height:10px;\n            width:10px;\n            margin:35px 0px 0px -4px;\n            position:absolute;\n            border-radius:50%;\n            background:#3c3c3c;\n        }\n        </style>");
    };
    Drawing.prototype.createMainDiv = function () {
        var body = jquery_1.default(this.body);
        body.css(style_1.css.body);
        jquery_1.default(this.body).append('<div  id="main-div"></div>');
        var el = jquery_1.default('#main-div');
        el.css(style_1.css.mainDiv);
    };
    Drawing.prototype.createTrapezium = function () {
        var mainDiv = jquery_1.default('#main-div');
        mainDiv.append("<div id=\"trapezoid\">\n        <div  id=\"trapezium\"></div>\n        <div  id=\"trapezium-elbow\"></div>\n        </div>");
        var el = jquery_1.default('#trapezium');
        el.css(style_1.css.trapezoid);
        var te = jquery_1.default('#trapezium-elbow');
        te.css(style_1.css["trapezium-elbow"]);
    };
    Drawing.prototype.createButton = function () {
        var mainDiv = jquery_1.default('#main-div');
        mainDiv.after('<button id="evt">Click Me</button>');
    };
    Drawing.prototype.createSelect = function () {
        var mainDiv = jquery_1.default('#main-div');
        mainDiv.after("<input type=\"radio\" id=\"val1\" name=\"option\" value=\"4\"/> \n        <label for=\"val1\"> 4 Particles</label>\n        <input type=\"radio\" name=\"option\" value=\"0\" id=\"val2\"/> \n        <label for=\"val2\"> Chain of particles</label>\n        ");
    };
    Drawing.prototype.createWavelines = function (n) {
        var mainDiv = jquery_1.default('#main-div');
        for (var i = 0; i < n; i++) {
            var particle = '';
            if (i % 2 === 1) {
                particle = "<div  id=\"particle-" + i + "\" class=\"particle\"></div>";
            }
            mainDiv.append("<div id=\"wave-box-" + i + "\" class=\"wave-box\">\n            <div class=\"wave\" id=\"wave-" + i + "\"></div>" + particle + "</div>");
            var wave = jquery_1.default('#wave-box-' + i);
            wave.css(style_1.css["wave"]).css({ 'margin-left': (10 * (i + (5.3))) + 'px' });
        }
    };
    return Drawing;
}());
exports.default = Drawing;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG9EQUFRO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyw0Q0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixXQUFXLG1CQUFtQixZQUFZLG9CQUFvQixXQUFXLGFBQWEsZ0NBQWdDLGtCQUFrQixhQUFhLG1CQUFtQixhQUFhLG9CQUFvQixhQUFhLGFBQWEsc0JBQXNCLDBCQUEwQix5QkFBeUIsdUNBQXVDLGdDQUFnQyxnQ0FBZ0MsaUNBQWlDLFdBQVc7QUFDM2dCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkNBQTJDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJtYWluLmFmYzU4MmRiMGZjYzVhMzlmYThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2FudmFzX2ludGVyZmFjZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9jYW52YXMtaW50ZXJmYWNlXCIpKTtcclxudmFyIERyYXdpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRHJhd2luZ1wiKSk7XHJcbnZhciBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9FdmVudFwiKSk7XHJcbnZhciBJbmRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuaW5zdCA9IG5ldyBjYW52YXNfaW50ZXJmYWNlXzEuZGVmYXVsdCgnY2FudmFzJywgNTAwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRfMS5kZWZhdWx0KCdldnQnKTtcclxuICAgIH1cclxuICAgIEluZGV4LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5hZGRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlTWFpbkRpdigpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVUcmFwZXppdW0oKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlV2F2ZWxpbmVzKDQ1KTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlU2VsZWN0KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkQ2xpY2tFdmVudCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRleDtcclxufSgpKTtcclxubmV3IEluZGV4KCkuaW5pdCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIganF1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImpxdWVyeVwiKSk7XHJcbnZhciBzdHlsZV8xID0gcmVxdWlyZShcIi4uL3NyYy9jc3Mvc3R5bGVcIik7XHJcbnZhciBEcmF3aW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJhd2luZygpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG4gICAgfVxyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuYWRkU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoZWFkID0ganF1ZXJ5XzEuZGVmYXVsdCgnaGVhZCcpO1xyXG4gICAgICAgIGhlYWQuaHRtbChcIjxzdHlsZT5cXG4gICAgICAgIEBrZXlmcmFtZXMgb3NjaWxsYXRlIHtcXG4gICAgICAgICAgICAwJSB7bGVmdDogMHB4O31cXG4gICAgICAgICAgICA1MCUge2xlZnQ6IDIwcHg7fVxcbiAgICAgICAgICAgIDEwMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgQGtleWZyYW1lcyByZXNpemVyIHtcXG4gICAgICAgICAgICAwJSB7d2lkdGg6IDMwcHg7fVxcbiAgICAgICAgICAgIDUwJSB7d2lkdGg6IDUwcHg7fVxcbiAgICAgICAgICAgIDEwMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgfVxcbiAgICAgICAgICAucGFydGljbGV7XFxuICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgICAgICBtYXJnaW46MzVweCAwcHggMHB4IC00cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDojM2MzYzNjO1xcbiAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cIik7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlTWFpbkRpdiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm9keSA9IGpxdWVyeV8xLmRlZmF1bHQodGhpcy5ib2R5KTtcclxuICAgICAgICBib2R5LmNzcyhzdHlsZV8xLmNzcy5ib2R5KTtcclxuICAgICAgICBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSkuYXBwZW5kKCc8ZGl2ICBpZD1cIm1haW4tZGl2XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuY3NzKHN0eWxlXzEuY3NzLm1haW5EaXYpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVRyYXBleml1bSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwidHJhcGV6b2lkXFxcIj5cXG4gICAgICAgIDxkaXYgIGlkPVxcXCJ0cmFwZXppdW1cXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bS1lbGJvd1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cIik7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bScpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy50cmFwZXpvaWQpO1xyXG4gICAgICAgIHZhciB0ZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXppdW0tZWxib3cnKTtcclxuICAgICAgICB0ZS5jc3Moc3R5bGVfMS5jc3NbXCJ0cmFwZXppdW0tZWxib3dcIl0pO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoJzxidXR0b24gaWQ9XCJldnRcIj5DbGljayBNZTwvYnV0dG9uPicpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoXCI8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJ2YWwxXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCI0XFxcIi8+IFxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsMVxcXCI+IDQgUGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwib3B0aW9uXFxcIiB2YWx1ZT1cXFwiMFxcXCIgaWQ9XFxcInZhbDJcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwyXFxcIj4gQ2hhaW4gb2YgcGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIFwiKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVXYXZlbGluZXMgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd2luZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhd2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==