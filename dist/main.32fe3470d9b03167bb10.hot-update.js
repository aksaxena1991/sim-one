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
    Drawing.prototype.createLayout = function () {
        var titleDiv = document.createElement('div');
        titleDiv.id = 'title-div';
        titleDiv.className = 'title-div';
        var instDiv = document.createElement('div');
        instDiv.id = 'inst-div';
        instDiv.className = 'inst-div';
        var controls = document.createElement('div');
        controls.id = 'control-div';
        controls.className = 'control-div';
        var body = jquery_1.default(this.body);
        body.append(titleDiv).append(instDiv).append(controls);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG9EQUFRO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyw0Q0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixXQUFXLG1CQUFtQixZQUFZLG9CQUFvQixXQUFXLGFBQWEsZ0NBQWdDLGtCQUFrQixhQUFhLG1CQUFtQixhQUFhLG9CQUFvQixhQUFhLGFBQWEsc0JBQXNCLDBCQUEwQix5QkFBeUIsdUNBQXVDLGdDQUFnQyxnQ0FBZ0MsaUNBQWlDLFdBQVc7QUFDM2dCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQ0FBMkM7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6Im1haW4uMzJmZTM0NzBkOWIwMzE2N2JiMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjYW52YXNfaW50ZXJmYWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL2NhbnZhcy1pbnRlcmZhY2VcIikpO1xyXG52YXIgRHJhd2luZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9EcmF3aW5nXCIpKTtcclxudmFyIEV2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0V2ZW50XCIpKTtcclxudmFyIEluZGV4ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0ID0gbmV3IGNhbnZhc19pbnRlcmZhY2VfMS5kZWZhdWx0KCdjYW52YXMnLCA1MDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbmV3IERyYXdpbmdfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudF8xLmRlZmF1bHQoJ2V2dCcpO1xyXG4gICAgfVxyXG4gICAgSW5kZXgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZFNjcmlwdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVNYWluRGl2KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVRyYXBleml1bSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVXYXZlbGluZXMoNDUpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hZGRDbGlja0V2ZW50KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEluZGV4O1xyXG59KCkpO1xyXG5uZXcgSW5kZXgoKS5pbml0KCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBqcXVlcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwianF1ZXJ5XCIpKTtcclxudmFyIHN0eWxlXzEgPSByZXF1aXJlKFwiLi4vc3JjL2Nzcy9zdHlsZVwiKTtcclxudmFyIERyYXdpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEcmF3aW5nKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcbiAgICB9XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5hZGRTY3JpcHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhlYWQgPSBqcXVlcnlfMS5kZWZhdWx0KCdoZWFkJyk7XHJcbiAgICAgICAgaGVhZC5odG1sKFwiPHN0eWxlPlxcbiAgICAgICAgQGtleWZyYW1lcyBvc2NpbGxhdGUge1xcbiAgICAgICAgICAgIDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICAgIDUwJSB7bGVmdDogMjBweDt9XFxuICAgICAgICAgICAgMTAwJSB7bGVmdDogMHB4O31cXG4gICAgICAgICAgfVxcbiAgICAgICAgICBAa2V5ZnJhbWVzIHJlc2l6ZXIge1xcbiAgICAgICAgICAgIDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgICAgNTAlIHt3aWR0aDogNTBweDt9XFxuICAgICAgICAgICAgMTAwJSB7d2lkdGg6IDMwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYXJ0aWNsZXtcXG4gICAgICAgICAgICBoZWlnaHQ6MTBweDtcXG4gICAgICAgICAgICB3aWR0aDoxMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjozNXB4IDBweCAwcHggLTRweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiMzYzNjM2M7XFxuICAgICAgICB9XFxuICAgICAgICA8L3N0eWxlPlwiKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVNYWluRGl2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2R5ID0ganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpO1xyXG4gICAgICAgIGJvZHkuY3NzKHN0eWxlXzEuY3NzLmJvZHkpO1xyXG4gICAgICAgIGpxdWVyeV8xLmRlZmF1bHQodGhpcy5ib2R5KS5hcHBlbmQoJzxkaXYgIGlkPVwibWFpbi1kaXZcIj48L2Rpdj4nKTtcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjbWFpbi1kaXYnKTtcclxuICAgICAgICBlbC5jc3Moc3R5bGVfMS5jc3MubWFpbkRpdik7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlRGl2LmlkID0gJ3RpdGxlLWRpdic7XHJcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NOYW1lID0gJ3RpdGxlLWRpdic7XHJcbiAgICAgICAgdmFyIGluc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnN0RGl2LmlkID0gJ2luc3QtZGl2JztcclxuICAgICAgICBpbnN0RGl2LmNsYXNzTmFtZSA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbHMuaWQgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdjb250cm9sLWRpdic7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSk7XHJcbiAgICAgICAgYm9keS5hcHBlbmQodGl0bGVEaXYpLmFwcGVuZChpbnN0RGl2KS5hcHBlbmQoY29udHJvbHMpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVRyYXBleml1bSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwidHJhcGV6b2lkXFxcIj5cXG4gICAgICAgIDxkaXYgIGlkPVxcXCJ0cmFwZXppdW1cXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bS1lbGJvd1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cIik7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bScpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy50cmFwZXpvaWQpO1xyXG4gICAgICAgIHZhciB0ZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXppdW0tZWxib3cnKTtcclxuICAgICAgICB0ZS5jc3Moc3R5bGVfMS5jc3NbXCJ0cmFwZXppdW0tZWxib3dcIl0pO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoJzxidXR0b24gaWQ9XCJldnRcIj5DbGljayBNZTwvYnV0dG9uPicpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoXCI8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJ2YWwxXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCI0XFxcIi8+IFxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsMVxcXCI+IDQgUGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwib3B0aW9uXFxcIiB2YWx1ZT1cXFwiMFxcXCIgaWQ9XFxcInZhbDJcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwyXFxcIj4gQ2hhaW4gb2YgcGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIFwiKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVXYXZlbGluZXMgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd2luZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhd2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==