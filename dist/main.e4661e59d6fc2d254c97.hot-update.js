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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLG9EQUFRO0FBQy9DLGNBQWMsbUJBQU8sQ0FBQyw0Q0FBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixXQUFXLG1CQUFtQixZQUFZLG9CQUFvQixXQUFXLGFBQWEsZ0NBQWdDLGtCQUFrQixhQUFhLG1CQUFtQixhQUFhLG9CQUFvQixhQUFhLGFBQWEsc0JBQXNCLDBCQUEwQix5QkFBeUIsdUNBQXVDLGdDQUFnQyxnQ0FBZ0MsaUNBQWlDLFdBQVc7QUFDM2dCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJDQUEyQztBQUMxRjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoibWFpbi5lNDY2MWU1OWQ2ZmMyZDI1NGM5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNhbnZhc19pbnRlcmZhY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvY2FudmFzLWludGVyZmFjZVwiKSk7XHJcbnZhciBEcmF3aW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0RyYXdpbmdcIikpO1xyXG52YXIgRXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRXZlbnRcIikpO1xyXG52YXIgSW5kZXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgICAgICB0aGlzLmluc3QgPSBuZXcgY2FudmFzX2ludGVyZmFjZV8xLmRlZmF1bHQoJ2NhbnZhcycsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgnZXZ0Jyk7XHJcbiAgICB9XHJcbiAgICBJbmRleC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuYWRkU2NyaXB0KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZU1haW5EaXYoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlVHJhcGV6aXVtKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVdhdmVsaW5lcyg0NSk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVNlbGVjdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZENsaWNrRXZlbnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5kZXg7XHJcbn0oKSk7XHJcbm5ldyBJbmRleCgpLmluaXQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGpxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG52YXIgc3R5bGVfMSA9IHJlcXVpcmUoXCIuLi9zcmMvY3NzL3N0eWxlXCIpO1xyXG52YXIgRHJhd2luZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuICAgIH1cclxuICAgIERyYXdpbmcucHJvdG90eXBlLmFkZFNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IGpxdWVyeV8xLmRlZmF1bHQoJ2hlYWQnKTtcclxuICAgICAgICBoZWFkLmh0bWwoXCI8c3R5bGU+XFxuICAgICAgICBAa2V5ZnJhbWVzIG9zY2lsbGF0ZSB7XFxuICAgICAgICAgICAgMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgICAgNTAlIHtsZWZ0OiAyMHB4O31cXG4gICAgICAgICAgICAxMDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBrZXlmcmFtZXMgcmVzaXplciB7XFxuICAgICAgICAgICAgMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgICA1MCUge3dpZHRoOiA1MHB4O31cXG4gICAgICAgICAgICAxMDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLnBhcnRpY2xle1xcbiAgICAgICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOjM1cHggMHB4IDBweCAtNHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzNjM2MzYztcXG4gICAgICAgIH1cXG4gICAgICAgIDwvc3R5bGU+XCIpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZU1haW5EaXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSk7XHJcbiAgICAgICAgYm9keS5jc3Moc3R5bGVfMS5jc3MuYm9keSk7XHJcbiAgICAgICAganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpLmFwcGVuZCgnPGRpdiAgaWQ9XCJtYWluLWRpdlwiPjwvZGl2PicpO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy5tYWluRGl2KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUxheW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZURpdi5pZCA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTmFtZSA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHZhciBpbnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5zdERpdi5pZCA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgaW5zdERpdi5jbGFzc05hbWUgPSAnaW5zdC1kaXYnO1xyXG4gICAgICAgIHZhciBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmlkID0gJ2NvbnRyb2wtZGl2JztcclxuICAgICAgICBjb250cm9scy5jbGFzc05hbWUgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIHZhciBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGl2aXR5RGl2LmlkID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgYWN0aXZpdHlEaXYuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuYXBwZW5kKHRpdGxlRGl2KS5hcHBlbmQoaW5zdERpdikuYXBwZW5kKGNvbnRyb2xzKS5hcHBlbmQoYWN0aXZpdHlEaXYpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVRyYXBleml1bSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwidHJhcGV6b2lkXFxcIj5cXG4gICAgICAgIDxkaXYgIGlkPVxcXCJ0cmFwZXppdW1cXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bS1lbGJvd1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cIik7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bScpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy50cmFwZXpvaWQpO1xyXG4gICAgICAgIHZhciB0ZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXppdW0tZWxib3cnKTtcclxuICAgICAgICB0ZS5jc3Moc3R5bGVfMS5jc3NbXCJ0cmFwZXppdW0tZWxib3dcIl0pO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoJzxidXR0b24gaWQ9XCJldnRcIj5DbGljayBNZTwvYnV0dG9uPicpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYWZ0ZXIoXCI8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJ2YWwxXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCI0XFxcIi8+IFxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsMVxcXCI+IDQgUGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwib3B0aW9uXFxcIiB2YWx1ZT1cXFwiMFxcXCIgaWQ9XFxcInZhbDJcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwyXFxcIj4gQ2hhaW4gb2YgcGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIFwiKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVXYXZlbGluZXMgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd2luZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhd2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==