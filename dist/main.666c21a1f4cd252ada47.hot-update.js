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
        this.createLayout();
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
        var activityDiv = document.createElement('div');
        activityDiv.id = 'activity-div';
        activityDiv.className = 'activity-div';
        var el = jquery_1.default('#main-div');
        el.append(titleDiv).append(instDiv).append(controls).append(activityDiv);
    };
    Drawing.prototype.createTrapezium = function () {
        var mainDiv = jquery_1.default('#activity-div');
        mainDiv.append("<div id=\"trapezoid\">\n        <div  id=\"trapezium\"></div>\n        <div  id=\"trapezium-elbow\"></div>\n        </div>");
        var el = jquery_1.default('#trapezium');
        el.css(style_1.css.trapezoid);
        var te = jquery_1.default('#trapezium-elbow');
        te.css(style_1.css["trapezium-elbow"]);
        this.createWavelines(45);
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
        var mainDiv = jquery_1.default('#activity-div');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyxvREFBUTtBQUMvQyxjQUFjLG1CQUFPLENBQUMsNENBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0IsV0FBVyxtQkFBbUIsWUFBWSxvQkFBb0IsV0FBVyxhQUFhLGdDQUFnQyxrQkFBa0IsYUFBYSxtQkFBbUIsYUFBYSxvQkFBb0IsYUFBYSxhQUFhLHNCQUFzQiwwQkFBMEIseUJBQXlCLHVDQUF1QyxnQ0FBZ0MsZ0NBQWdDLGlDQUFpQyxXQUFXO0FBQzNnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJDQUEyQztBQUMxRjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoibWFpbi42NjZjMjFhMWY0Y2QyNTJhZGE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNhbnZhc19pbnRlcmZhY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvY2FudmFzLWludGVyZmFjZVwiKSk7XHJcbnZhciBEcmF3aW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0RyYXdpbmdcIikpO1xyXG52YXIgRXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRXZlbnRcIikpO1xyXG52YXIgSW5kZXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgICAgICB0aGlzLmluc3QgPSBuZXcgY2FudmFzX2ludGVyZmFjZV8xLmRlZmF1bHQoJ2NhbnZhcycsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgnZXZ0Jyk7XHJcbiAgICB9XHJcbiAgICBJbmRleC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuYWRkU2NyaXB0KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZU1haW5EaXYoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlVHJhcGV6aXVtKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZENsaWNrRXZlbnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5kZXg7XHJcbn0oKSk7XHJcbm5ldyBJbmRleCgpLmluaXQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGpxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG52YXIgc3R5bGVfMSA9IHJlcXVpcmUoXCIuLi9zcmMvY3NzL3N0eWxlXCIpO1xyXG52YXIgRHJhd2luZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuICAgIH1cclxuICAgIERyYXdpbmcucHJvdG90eXBlLmFkZFNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IGpxdWVyeV8xLmRlZmF1bHQoJ2hlYWQnKTtcclxuICAgICAgICBoZWFkLmh0bWwoXCI8c3R5bGU+XFxuICAgICAgICBAa2V5ZnJhbWVzIG9zY2lsbGF0ZSB7XFxuICAgICAgICAgICAgMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgICAgNTAlIHtsZWZ0OiAyMHB4O31cXG4gICAgICAgICAgICAxMDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBrZXlmcmFtZXMgcmVzaXplciB7XFxuICAgICAgICAgICAgMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgICA1MCUge3dpZHRoOiA1MHB4O31cXG4gICAgICAgICAgICAxMDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLnBhcnRpY2xle1xcbiAgICAgICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOjM1cHggMHB4IDBweCAtNHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzNjM2MzYztcXG4gICAgICAgIH1cXG4gICAgICAgIDwvc3R5bGU+XCIpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZU1haW5EaXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSk7XHJcbiAgICAgICAgYm9keS5jc3Moc3R5bGVfMS5jc3MuYm9keSk7XHJcbiAgICAgICAganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpLmFwcGVuZCgnPGRpdiAgaWQ9XCJtYWluLWRpdlwiPjwvZGl2PicpO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy5tYWluRGl2KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUxheW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZURpdi5pZCA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTmFtZSA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHZhciBpbnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5zdERpdi5pZCA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgaW5zdERpdi5jbGFzc05hbWUgPSAnaW5zdC1kaXYnO1xyXG4gICAgICAgIHZhciBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmlkID0gJ2NvbnRyb2wtZGl2JztcclxuICAgICAgICBjb250cm9scy5jbGFzc05hbWUgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIHZhciBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGl2aXR5RGl2LmlkID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgYWN0aXZpdHlEaXYuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuYXBwZW5kKHRpdGxlRGl2KS5hcHBlbmQoaW5zdERpdikuYXBwZW5kKGNvbnRyb2xzKS5hcHBlbmQoYWN0aXZpdHlEaXYpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVRyYXBleml1bSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNhY3Rpdml0eS1kaXYnKTtcclxuICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcInRyYXBlem9pZFxcXCI+XFxuICAgICAgICA8ZGl2ICBpZD1cXFwidHJhcGV6aXVtXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgIGlkPVxcXCJ0cmFwZXppdW0tZWxib3dcXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XCIpO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXppdW0nKTtcclxuICAgICAgICBlbC5jc3Moc3R5bGVfMS5jc3MudHJhcGV6b2lkKTtcclxuICAgICAgICB2YXIgdGUgPSBqcXVlcnlfMS5kZWZhdWx0KCcjdHJhcGV6aXVtLWVsYm93Jyk7XHJcbiAgICAgICAgdGUuY3NzKHN0eWxlXzEuY3NzW1widHJhcGV6aXVtLWVsYm93XCJdKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVdhdmVsaW5lcyg0NSk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hZnRlcignPGJ1dHRvbiBpZD1cImV2dFwiPkNsaWNrIE1lPC9idXR0b24+Jyk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlU2VsZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hZnRlcihcIjxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgaWQ9XFxcInZhbDFcXFwiIG5hbWU9XFxcIm9wdGlvblxcXCIgdmFsdWU9XFxcIjRcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwxXFxcIj4gNCBQYXJ0aWNsZXM8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCIwXFxcIiBpZD1cXFwidmFsMlxcXCIvPiBcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbDJcXFwiPiBDaGFpbiBvZiBwYXJ0aWNsZXM8L2xhYmVsPlxcbiAgICAgICAgXCIpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVdhdmVsaW5lcyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd2luZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhd2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==