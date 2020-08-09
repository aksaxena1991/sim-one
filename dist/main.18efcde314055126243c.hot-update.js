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
        this.event = new Event_1.default('start', 'reset');
    }
    Index.prototype.init = function () {
        this.drawing.addScript();
        this.drawing.createMainDiv();
        this.drawing.createTrapezium();
        this.event.addStartEvent();
        this.event.addResetEvent();
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
    Drawing.prototype.createInstruction = function () {
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
        this.createInstruction();
        this.setTitle();
    };
    Drawing.prototype.setTitle = function () {
        var title = jquery_1.default('#title-div');
        var span = document.createElement('span');
        span.innerHTML = 'Longitudinal Wave';
        title.html(span);
    };
    Drawing.prototype.setInstruction = function () {
        var p = document.createElement('p');
        p.innerHTML = "<strong>Instruction:</strong> Press <Start> to see the wave motion. Observe how the particles vibrate as the longitudinal waves pass them. How is the direction of movement of the particles related to the direction of travel of the wave?";
        var ins = jquery_1.default('#inst-div');
        ins.html(p);
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
        var ctrlDiv = jquery_1.default('#control-div');
        var start = document.createElement('button');
        start.id = 'start';
        start.className = 'start';
        start.textContent = 'Start';
        var reset = document.createElement('button');
        reset.id = 'reset';
        reset.className = 'reset';
        reset.textContent = 'Reset';
        var el = document.createElement('div');
        el.id = 'right';
        el.className = 'right';
        el.append(start);
        el.append(reset);
        ctrlDiv.append(el);
    };
    Drawing.prototype.createControls = function () {
        var mainDiv = jquery_1.default('#control-div');
        mainDiv.append("<div id=\"left\"><input type=\"radio\" id=\"val1\" name=\"option\" value=\"4\"/> \n        <label for=\"val1\"> 4 Particles</label>\n        <input type=\"radio\" name=\"option\" value=\"0\" id=\"val2\"/> \n        <label for=\"val2\"> Chain of particles</label> </div>\n        ");
        this.createButton();
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
        this.createControls();
    };
    return Drawing;
}());
exports.default = Drawing;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsb0RBQVE7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDRDQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLFdBQVcsbUJBQW1CLFlBQVksb0JBQW9CLFdBQVcsYUFBYSxnQ0FBZ0Msa0JBQWtCLGFBQWEsbUJBQW1CLGFBQWEsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0IsMEJBQTBCLHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsV0FBVztBQUMzZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQ0FBMkM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoibWFpbi4xOGVmY2RlMzE0MDU1MTI2MjQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNhbnZhc19pbnRlcmZhY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvY2FudmFzLWludGVyZmFjZVwiKSk7XHJcbnZhciBEcmF3aW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0RyYXdpbmdcIikpO1xyXG52YXIgRXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRXZlbnRcIikpO1xyXG52YXIgSW5kZXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgICAgICB0aGlzLmluc3QgPSBuZXcgY2FudmFzX2ludGVyZmFjZV8xLmRlZmF1bHQoJ2NhbnZhcycsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgnc3RhcnQnLCAncmVzZXQnKTtcclxuICAgIH1cclxuICAgIEluZGV4LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5hZGRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlTWFpbkRpdigpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVUcmFwZXppdW0oKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZFN0YXJ0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZFJlc2V0RXZlbnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5kZXg7XHJcbn0oKSk7XHJcbm5ldyBJbmRleCgpLmluaXQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGpxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG52YXIgc3R5bGVfMSA9IHJlcXVpcmUoXCIuLi9zcmMvY3NzL3N0eWxlXCIpO1xyXG52YXIgRHJhd2luZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuICAgIH1cclxuICAgIERyYXdpbmcucHJvdG90eXBlLmFkZFNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IGpxdWVyeV8xLmRlZmF1bHQoJ2hlYWQnKTtcclxuICAgICAgICBoZWFkLmh0bWwoXCI8c3R5bGU+XFxuICAgICAgICBAa2V5ZnJhbWVzIG9zY2lsbGF0ZSB7XFxuICAgICAgICAgICAgMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgICAgNTAlIHtsZWZ0OiAyMHB4O31cXG4gICAgICAgICAgICAxMDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBrZXlmcmFtZXMgcmVzaXplciB7XFxuICAgICAgICAgICAgMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgICA1MCUge3dpZHRoOiA1MHB4O31cXG4gICAgICAgICAgICAxMDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLnBhcnRpY2xle1xcbiAgICAgICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOjM1cHggMHB4IDBweCAtNHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzNjM2MzYztcXG4gICAgICAgIH1cXG4gICAgICAgIDwvc3R5bGU+XCIpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZU1haW5EaXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSk7XHJcbiAgICAgICAgYm9keS5jc3Moc3R5bGVfMS5jc3MuYm9keSk7XHJcbiAgICAgICAganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpLmFwcGVuZCgnPGRpdiAgaWQ9XCJtYWluLWRpdlwiPjwvZGl2PicpO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy5tYWluRGl2KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUluc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUxheW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZURpdi5pZCA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTmFtZSA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHZhciBpbnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5zdERpdi5pZCA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgaW5zdERpdi5jbGFzc05hbWUgPSAnaW5zdC1kaXYnO1xyXG4gICAgICAgIHZhciBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmlkID0gJ2NvbnRyb2wtZGl2JztcclxuICAgICAgICBjb250cm9scy5jbGFzc05hbWUgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIHZhciBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGl2aXR5RGl2LmlkID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgYWN0aXZpdHlEaXYuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuYXBwZW5kKHRpdGxlRGl2KS5hcHBlbmQoaW5zdERpdikuYXBwZW5kKGNvbnRyb2xzKS5hcHBlbmQoYWN0aXZpdHlEaXYpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5zdHJ1Y3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RpdGxlLWRpdicpO1xyXG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJ0xvbmdpdHVkaW5hbCBXYXZlJztcclxuICAgICAgICB0aXRsZS5odG1sKHNwYW4pO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLnNldEluc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCI8c3Ryb25nPkluc3RydWN0aW9uOjwvc3Ryb25nPiBQcmVzcyA8U3RhcnQ+IHRvIHNlZSB0aGUgd2F2ZSBtb3Rpb24uIE9ic2VydmUgaG93IHRoZSBwYXJ0aWNsZXMgdmlicmF0ZSBhcyB0aGUgbG9uZ2l0dWRpbmFsIHdhdmVzIHBhc3MgdGhlbS4gSG93IGlzIHRoZSBkaXJlY3Rpb24gb2YgbW92ZW1lbnQgb2YgdGhlIHBhcnRpY2xlcyByZWxhdGVkIHRvIHRoZSBkaXJlY3Rpb24gb2YgdHJhdmVsIG9mIHRoZSB3YXZlP1wiO1xyXG4gICAgICAgIHZhciBpbnMgPSBqcXVlcnlfMS5kZWZhdWx0KCcjaW5zdC1kaXYnKTtcclxuICAgICAgICBpbnMuaHRtbChwKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVUcmFwZXppdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJ0cmFwZXpvaWRcXFwiPlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2ICBpZD1cXFwidHJhcGV6aXVtLWVsYm93XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlwiKTtcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjdHJhcGV6aXVtJyk7XHJcbiAgICAgICAgZWwuY3NzKHN0eWxlXzEuY3NzLnRyYXBlem9pZCk7XHJcbiAgICAgICAgdmFyIHRlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bS1lbGJvdycpO1xyXG4gICAgICAgIHRlLmNzcyhzdHlsZV8xLmNzc1tcInRyYXBleml1bS1lbGJvd1wiXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVXYXZlbGluZXMoNDUpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3RybERpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNjb250cm9sLWRpdicpO1xyXG4gICAgICAgIHZhciBzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHN0YXJ0LmlkID0gJ3N0YXJ0JztcclxuICAgICAgICBzdGFydC5jbGFzc05hbWUgPSAnc3RhcnQnO1xyXG4gICAgICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcclxuICAgICAgICB2YXIgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZXNldC5pZCA9ICdyZXNldCc7XHJcbiAgICAgICAgcmVzZXQuY2xhc3NOYW1lID0gJ3Jlc2V0JztcclxuICAgICAgICByZXNldC50ZXh0Q29udGVudCA9ICdSZXNldCc7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWwuaWQgPSAncmlnaHQnO1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdyaWdodCc7XHJcbiAgICAgICAgZWwuYXBwZW5kKHN0YXJ0KTtcclxuICAgICAgICBlbC5hcHBlbmQocmVzZXQpO1xyXG4gICAgICAgIGN0cmxEaXYuYXBwZW5kKGVsKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNjb250cm9sLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwibGVmdFxcXCI+PGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBpZD1cXFwidmFsMVxcXCIgbmFtZT1cXFwib3B0aW9uXFxcIiB2YWx1ZT1cXFwiNFxcXCIvPiBcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbDFcXFwiPiA0IFBhcnRpY2xlczwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcIm9wdGlvblxcXCIgdmFsdWU9XFxcIjBcXFwiIGlkPVxcXCJ2YWwyXFxcIi8+IFxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsMlxcXCI+IENoYWluIG9mIHBhcnRpY2xlczwvbGFiZWw+IDwvZGl2PlxcbiAgICAgICAgXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnV0dG9uKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlV2F2ZWxpbmVzID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNhY3Rpdml0eS1kaXYnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGFydGljbGUgPSAnJztcclxuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZSA9IFwiPGRpdiAgaWQ9XFxcInBhcnRpY2xlLVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwicGFydGljbGVcXFwiPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwid2F2ZS1ib3gtXCIgKyBpICsgXCJcXFwiIGNsYXNzPVxcXCJ3YXZlLWJveFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2F2ZVxcXCIgaWQ9XFxcIndhdmUtXCIgKyBpICsgXCJcXFwiPjwvZGl2PlwiICsgcGFydGljbGUgKyBcIjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgdmFyIHdhdmUgPSBqcXVlcnlfMS5kZWZhdWx0KCcjd2F2ZS1ib3gtJyArIGkpO1xyXG4gICAgICAgICAgICB3YXZlLmNzcyhzdHlsZV8xLmNzc1tcIndhdmVcIl0pLmNzcyh7ICdtYXJnaW4tbGVmdCc6ICgxMCAqIChpICsgKDUuMykpKSArICdweCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29udHJvbHMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd2luZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRHJhd2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==