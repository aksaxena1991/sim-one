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
        this.setInstruction();
        this.setStyle();
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
    Drawing.prototype.setStyle = function () {
        var style = "\n        <style>\n        .title-div{\n            padding: 15px;\n            height: 20px;\n            border-bottom: 1px solid black;\n        }\n        .title-div span {\n            font-weight: 500;\n        }\n        div#inst-div {\n            padding: 0px 15px 0px 15px;\n            height: 70px;\n            border-bottom: 1px solid black;\n        }\n        div#control-div {\n            border-bottom: 1px solid black;\n            height: 50px;\n        }\n        div#left {\n            float: left;\n        }\n        div#right {\n            float: right;\n        }\n        div#left, div#right {\n            padding: 10px 15px 0px 15px;\n        }\n        .btn {\n            width: 90px;\n            margin: 0px 0px 0px 10px;\n            border-radius: 15px;\n            padding: 3px;\n            border-style: solid;\n            color: white;\n        }\n        button#start {\n            \n            border-color: #2bbc2b;\n            background: #2bbc2b;\n            \n        }\n        button#reset {\n            \n            border-color: #e22020;\n            background: #e22020;\n            \n        }\n        div#activity-div {\n            height: 255px;\n            margin-top: 0px;\n            \n        }\n        label{\n            color: #058686;\n            font-weight: normal;\n        }\n        input[type='radio'] {\n            display: none;\n          }\n          \n          \n          \n          label:before {\n            content: \" \";\n            display: inline-block;\n            position: relative;\n            top: 5px;\n            margin: 0 5px 0 0;\n            width: 20px;\n            height: 20px;\n            border-radius: 11px;\n            border: 2px solid #004c97;\n            background-color: transparent;\n          }\n          \n          input[type=radio]:checked + label:after {\n            border-radius: 11px;\n            width: 12px;\n            height: 12px;\n            position: absolute;\n            top: 9px;\n            left: 10px;\n            content: \" \";\n            display: block;\n            background: #f00;\n          }\n        </style>";
        jquery_1.default('head').append(style);
    };
    Drawing.prototype.createTrapezium = function () {
        var mainDiv = jquery_1.default('#activity-div');
        mainDiv.append("<div id=\"trapezoid\">\n        <div  id=\"trapezium\"></div>\n        <div  id=\"trapezium-elbow\"></div>\n        </div>");
        var el = jquery_1.default('#trapezium');
        el.css(style_1.css.trapezium);
        var te = jquery_1.default('#trapezium-elbow');
        te.css(style_1.css["trapezium-elbow"]);
        this.createWavelines(45);
    };
    Drawing.prototype.createButton = function () {
        var ctrlDiv = jquery_1.default('#control-div');
        var start = document.createElement('button');
        start.id = 'start';
        start.className = 'btn';
        start.textContent = 'Start';
        var reset = document.createElement('button');
        reset.id = 'reset';
        reset.className = 'btn';
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
        mainDiv.append("<div id=\"left\"><label>Show</label> <input type=\"radio\" id=\"val1\" name=\"option\" value=\"4\"/> \n        <label for=\"val1\"> 4 Particles</label>\n        <input type=\"radio\" name=\"option\" value=\"0\" id=\"val2\"/> \n        <label for=\"val2\"> Chain of particles</label> </div>\n        ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsb0RBQVE7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDRDQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLFdBQVcsbUJBQW1CLFlBQVksb0JBQW9CLFdBQVcsYUFBYSxnQ0FBZ0Msa0JBQWtCLGFBQWEsbUJBQW1CLGFBQWEsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0IsMEJBQTBCLHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsV0FBVztBQUMzZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw0QkFBNEIsMkJBQTJCLDZDQUE2QyxXQUFXLDJCQUEyQiwrQkFBK0IsV0FBVyx3QkFBd0IseUNBQXlDLDJCQUEyQiw2Q0FBNkMsV0FBVywyQkFBMkIsNkNBQTZDLDJCQUEyQixXQUFXLG9CQUFvQiwwQkFBMEIsV0FBVyxxQkFBcUIsMkJBQTJCLFdBQVcsK0JBQStCLDBDQUEwQyxXQUFXLGdCQUFnQiwwQkFBMEIsdUNBQXVDLGtDQUFrQywyQkFBMkIsa0NBQWtDLDJCQUEyQixXQUFXLHdCQUF3QixrREFBa0Qsa0NBQWtDLHlCQUF5Qix3QkFBd0Isa0RBQWtELGtDQUFrQyx5QkFBeUIsNEJBQTRCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLGdCQUFnQiw2QkFBNkIsa0NBQWtDLFdBQVcsK0JBQStCLDRCQUE0QixhQUFhLDhEQUE4RCw2QkFBNkIsb0NBQW9DLGlDQUFpQyx1QkFBdUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsa0NBQWtDLHdDQUF3Qyw0Q0FBNEMsYUFBYSxpRUFBaUUsa0NBQWtDLDBCQUEwQiwyQkFBMkIsaUNBQWlDLHVCQUF1Qix5QkFBeUIsNkJBQTZCLDZCQUE2QiwrQkFBK0IsYUFBYTtBQUN4b0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQ0FBMkM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoibWFpbi4yNWYxNGEzN2EzNDQ0NTc0ZDg5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNhbnZhc19pbnRlcmZhY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvY2FudmFzLWludGVyZmFjZVwiKSk7XHJcbnZhciBEcmF3aW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0RyYXdpbmdcIikpO1xyXG52YXIgRXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRXZlbnRcIikpO1xyXG52YXIgSW5kZXggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgICAgICB0aGlzLmluc3QgPSBuZXcgY2FudmFzX2ludGVyZmFjZV8xLmRlZmF1bHQoJ2NhbnZhcycsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcgPSBuZXcgRHJhd2luZ18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgnc3RhcnQnLCAncmVzZXQnKTtcclxuICAgIH1cclxuICAgIEluZGV4LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5hZGRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlTWFpbkRpdigpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVUcmFwZXppdW0oKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZFN0YXJ0RXZlbnQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50LmFkZFJlc2V0RXZlbnQoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5kZXg7XHJcbn0oKSk7XHJcbm5ldyBJbmRleCgpLmluaXQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGpxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG52YXIgc3R5bGVfMSA9IHJlcXVpcmUoXCIuLi9zcmMvY3NzL3N0eWxlXCIpO1xyXG52YXIgRHJhd2luZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcclxuICAgIH1cclxuICAgIERyYXdpbmcucHJvdG90eXBlLmFkZFNjcmlwdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGVhZCA9IGpxdWVyeV8xLmRlZmF1bHQoJ2hlYWQnKTtcclxuICAgICAgICBoZWFkLmh0bWwoXCI8c3R5bGU+XFxuICAgICAgICBAa2V5ZnJhbWVzIG9zY2lsbGF0ZSB7XFxuICAgICAgICAgICAgMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgICAgNTAlIHtsZWZ0OiAyMHB4O31cXG4gICAgICAgICAgICAxMDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBrZXlmcmFtZXMgcmVzaXplciB7XFxuICAgICAgICAgICAgMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgICA1MCUge3dpZHRoOiA1MHB4O31cXG4gICAgICAgICAgICAxMDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLnBhcnRpY2xle1xcbiAgICAgICAgICAgIGhlaWdodDoxMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOjEwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOjM1cHggMHB4IDBweCAtNHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IzNjM2MzYztcXG4gICAgICAgIH1cXG4gICAgICAgIDwvc3R5bGU+XCIpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZU1haW5EaXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSk7XHJcbiAgICAgICAgYm9keS5jc3Moc3R5bGVfMS5jc3MuYm9keSk7XHJcbiAgICAgICAganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpLmFwcGVuZCgnPGRpdiAgaWQ9XCJtYWluLWRpdlwiPjwvZGl2PicpO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy5tYWluRGl2KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxheW91dCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUluc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUxheW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZURpdi5pZCA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTmFtZSA9ICd0aXRsZS1kaXYnO1xyXG4gICAgICAgIHZhciBpbnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5zdERpdi5pZCA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgaW5zdERpdi5jbGFzc05hbWUgPSAnaW5zdC1kaXYnO1xyXG4gICAgICAgIHZhciBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmlkID0gJ2NvbnRyb2wtZGl2JztcclxuICAgICAgICBjb250cm9scy5jbGFzc05hbWUgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIHZhciBhY3Rpdml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGl2aXR5RGl2LmlkID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgYWN0aXZpdHlEaXYuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWRpdic7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuYXBwZW5kKHRpdGxlRGl2KS5hcHBlbmQoaW5zdERpdikuYXBwZW5kKGNvbnRyb2xzKS5hcHBlbmQoYWN0aXZpdHlEaXYpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW5zdHJ1Y3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnN0cnVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSBqcXVlcnlfMS5kZWZhdWx0KCcjdGl0bGUtZGl2Jyk7XHJcbiAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnTG9uZ2l0dWRpbmFsIFdhdmUnO1xyXG4gICAgICAgIHRpdGxlLmh0bWwoc3Bhbik7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuc2V0SW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSBcIjxzdHJvbmc+SW5zdHJ1Y3Rpb246PC9zdHJvbmc+IFByZXNzIDxTdGFydD4gdG8gc2VlIHRoZSB3YXZlIG1vdGlvbi4gT2JzZXJ2ZSBob3cgdGhlIHBhcnRpY2xlcyB2aWJyYXRlIGFzIHRoZSBsb25naXR1ZGluYWwgd2F2ZXMgcGFzcyB0aGVtLiBIb3cgaXMgdGhlIGRpcmVjdGlvbiBvZiBtb3ZlbWVudCBvZiB0aGUgcGFydGljbGVzIHJlbGF0ZWQgdG8gdGhlIGRpcmVjdGlvbiBvZiB0cmF2ZWwgb2YgdGhlIHdhdmU/XCI7XHJcbiAgICAgICAgdmFyIGlucyA9IGpxdWVyeV8xLmRlZmF1bHQoJyNpbnN0LWRpdicpO1xyXG4gICAgICAgIGlucy5odG1sKHApO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiXFxuICAgICAgICA8c3R5bGU+XFxuICAgICAgICAudGl0bGUtZGl2e1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG4gICAgICAgIC50aXRsZS1kaXYgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNpbnN0LWRpdiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNjb250cm9sLWRpdiB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNsZWZ0IHtcXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNyaWdodCB7XFxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I2xlZnQsIGRpdiNyaWdodCB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJ0biB7XFxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgYnV0dG9uI3N0YXJ0IHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyYmJjMmI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzJiYmMyYjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIGJ1dHRvbiNyZXNldCB7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTIyMDIwO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMjIwMjA7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBkaXYjYWN0aXZpdHktZGl2IHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1NXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIGxhYmVse1xcbiAgICAgICAgICAgIGNvbG9yOiAjMDU4Njg2O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICB9XFxuICAgICAgICBpbnB1dFt0eXBlPSdyYWRpbyddIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIFxcbiAgICAgICAgICBcXG4gICAgICAgICAgXFxuICAgICAgICAgIGxhYmVsOmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNGM5NztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgICAgICAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiA5cHg7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwMDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cIjtcclxuICAgICAgICBqcXVlcnlfMS5kZWZhdWx0KCdoZWFkJykuYXBwZW5kKHN0eWxlKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVUcmFwZXppdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJ0cmFwZXpvaWRcXFwiPlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2ICBpZD1cXFwidHJhcGV6aXVtLWVsYm93XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlwiKTtcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjdHJhcGV6aXVtJyk7XHJcbiAgICAgICAgZWwuY3NzKHN0eWxlXzEuY3NzLnRyYXBleml1bSk7XHJcbiAgICAgICAgdmFyIHRlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bS1lbGJvdycpO1xyXG4gICAgICAgIHRlLmNzcyhzdHlsZV8xLmNzc1tcInRyYXBleml1bS1lbGJvd1wiXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVXYXZlbGluZXMoNDUpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3RybERpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNjb250cm9sLWRpdicpO1xyXG4gICAgICAgIHZhciBzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHN0YXJ0LmlkID0gJ3N0YXJ0JztcclxuICAgICAgICBzdGFydC5jbGFzc05hbWUgPSAnYnRuJztcclxuICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XHJcbiAgICAgICAgdmFyIHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXQuaWQgPSAncmVzZXQnO1xyXG4gICAgICAgIHJlc2V0LmNsYXNzTmFtZSA9ICdidG4nO1xyXG4gICAgICAgIHJlc2V0LnRleHRDb250ZW50ID0gJ1Jlc2V0JztcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5pZCA9ICdyaWdodCc7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3JpZ2h0JztcclxuICAgICAgICBlbC5hcHBlbmQoc3RhcnQpO1xyXG4gICAgICAgIGVsLmFwcGVuZChyZXNldCk7XHJcbiAgICAgICAgY3RybERpdi5hcHBlbmQoZWwpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUNvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI2NvbnRyb2wtZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJsZWZ0XFxcIj48bGFiZWw+U2hvdzwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgaWQ9XFxcInZhbDFcXFwiIG5hbWU9XFxcIm9wdGlvblxcXCIgdmFsdWU9XFxcIjRcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwxXFxcIj4gNCBQYXJ0aWNsZXM8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCIwXFxcIiBpZD1cXFwidmFsMlxcXCIvPiBcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbDJcXFwiPiBDaGFpbiBvZiBwYXJ0aWNsZXM8L2xhYmVsPiA8L2Rpdj5cXG4gICAgICAgIFwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVdhdmVsaW5lcyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRyb2xzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdpbmc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERyYXdpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=