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
        var style = "\n        <style>\n        .title-div{\n            padding: 15px;\n            height: 20px;\n            border-bottom: 1px solid black;\n        }\n        .title-div span {\n            font-weight: 500;\n        }\n        div#inst-div {\n            padding: 0px 15px 0px 15px;\n            height: 70px;\n            border-bottom: 1px solid black;\n        }\n        div#control-div {\n            border-bottom: 1px solid black;\n            height: 50px;\n        }\n        div#left {\n            float: left;\n        }\n        div#right {\n            float: right;\n        }\n        div#left, div#right {\n            padding: 10px 15px 0px 15px;\n        }\n        .btn {\n            width: 90px;\n            margin: 0px 0px 0px 10px;\n            border-radius: 15px;\n            padding: 3px;\n            border-style: solid;\n            color: white;\n        }\n        button#start {\n            \n            border-color: #2bbc2b;\n            background: #2bbc2b;\n            \n        }\n        button#reset {\n            \n            border-color: #e22020;\n            background: #e22020;\n            \n        }\n        div#activity-div {\n            height: 255px;\n            margin-top: 0px;\n            \n        }\n        label{\n            color: #058686;\n        }\n        input[type='radio'] {\n            display: none;\n          }\n          \n          label {\n            color: #666;\n            font-weight: normal;\n          }\n          \n          label:before {\n            content: \" \";\n            display: inline-block;\n            position: relative;\n            top: 5px;\n            margin: 0 5px 0 0;\n            width: 20px;\n            height: 20px;\n            border-radius: 11px;\n            border: 2px solid #004c97;\n            background-color: transparent;\n          }\n          \n          input[type=radio]:checked + label:after {\n            border-radius: 11px;\n            width: 12px;\n            height: 12px;\n            position: absolute;\n            top: 9px;\n            left: 10px;\n            content: \" \";\n            display: block;\n            background: #f00;\n          }\n        </style>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsb0RBQVE7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDRDQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLFdBQVcsbUJBQW1CLFlBQVksb0JBQW9CLFdBQVcsYUFBYSxnQ0FBZ0Msa0JBQWtCLGFBQWEsbUJBQW1CLGFBQWEsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0IsMEJBQTBCLHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsV0FBVztBQUMzZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw0QkFBNEIsMkJBQTJCLDZDQUE2QyxXQUFXLDJCQUEyQiwrQkFBK0IsV0FBVyx3QkFBd0IseUNBQXlDLDJCQUEyQiw2Q0FBNkMsV0FBVywyQkFBMkIsNkNBQTZDLDJCQUEyQixXQUFXLG9CQUFvQiwwQkFBMEIsV0FBVyxxQkFBcUIsMkJBQTJCLFdBQVcsK0JBQStCLDBDQUEwQyxXQUFXLGdCQUFnQiwwQkFBMEIsdUNBQXVDLGtDQUFrQywyQkFBMkIsa0NBQWtDLDJCQUEyQixXQUFXLHdCQUF3QixrREFBa0Qsa0NBQWtDLHlCQUF5Qix3QkFBd0Isa0RBQWtELGtDQUFrQyx5QkFBeUIsNEJBQTRCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLGdCQUFnQiw2QkFBNkIsV0FBVywrQkFBK0IsNEJBQTRCLGFBQWEsK0JBQStCLDBCQUEwQixrQ0FBa0MsYUFBYSxzQ0FBc0MsNkJBQTZCLG9DQUFvQyxpQ0FBaUMsdUJBQXVCLGdDQUFnQywwQkFBMEIsMkJBQTJCLGtDQUFrQyx3Q0FBd0MsNENBQTRDLGFBQWEsaUVBQWlFLGtDQUFrQywwQkFBMEIsMkJBQTJCLGlDQUFpQyx1QkFBdUIseUJBQXlCLDZCQUE2Qiw2QkFBNkIsK0JBQStCLGFBQWE7QUFDdHJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMkNBQTJDO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6Im1haW4uYTFmMDBlZTE5M2Q0ODMwYzUxODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjYW52YXNfaW50ZXJmYWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL2NhbnZhcy1pbnRlcmZhY2VcIikpO1xyXG52YXIgRHJhd2luZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9EcmF3aW5nXCIpKTtcclxudmFyIEV2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0V2ZW50XCIpKTtcclxudmFyIEluZGV4ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0ID0gbmV3IGNhbnZhc19pbnRlcmZhY2VfMS5kZWZhdWx0KCdjYW52YXMnLCA1MDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbmV3IERyYXdpbmdfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudF8xLmRlZmF1bHQoJ3N0YXJ0JywgJ3Jlc2V0Jyk7XHJcbiAgICB9XHJcbiAgICBJbmRleC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuYWRkU2NyaXB0KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZU1haW5EaXYoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlVHJhcGV6aXVtKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hZGRTdGFydEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hZGRSZXNldEV2ZW50KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEluZGV4O1xyXG59KCkpO1xyXG5uZXcgSW5kZXgoKS5pbml0KCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBqcXVlcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwianF1ZXJ5XCIpKTtcclxudmFyIHN0eWxlXzEgPSByZXF1aXJlKFwiLi4vc3JjL2Nzcy9zdHlsZVwiKTtcclxudmFyIERyYXdpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEcmF3aW5nKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcbiAgICB9XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5hZGRTY3JpcHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhlYWQgPSBqcXVlcnlfMS5kZWZhdWx0KCdoZWFkJyk7XHJcbiAgICAgICAgaGVhZC5odG1sKFwiPHN0eWxlPlxcbiAgICAgICAgQGtleWZyYW1lcyBvc2NpbGxhdGUge1xcbiAgICAgICAgICAgIDAlIHtsZWZ0OiAwcHg7fVxcbiAgICAgICAgICAgIDUwJSB7bGVmdDogMjBweDt9XFxuICAgICAgICAgICAgMTAwJSB7bGVmdDogMHB4O31cXG4gICAgICAgICAgfVxcbiAgICAgICAgICBAa2V5ZnJhbWVzIHJlc2l6ZXIge1xcbiAgICAgICAgICAgIDAlIHt3aWR0aDogMzBweDt9XFxuICAgICAgICAgICAgNTAlIHt3aWR0aDogNTBweDt9XFxuICAgICAgICAgICAgMTAwJSB7d2lkdGg6IDMwcHg7fVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYXJ0aWNsZXtcXG4gICAgICAgICAgICBoZWlnaHQ6MTBweDtcXG4gICAgICAgICAgICB3aWR0aDoxMHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjozNXB4IDBweCAwcHggLTRweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiMzYzNjM2M7XFxuICAgICAgICB9XFxuICAgICAgICA8L3N0eWxlPlwiKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVNYWluRGl2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBib2R5ID0ganF1ZXJ5XzEuZGVmYXVsdCh0aGlzLmJvZHkpO1xyXG4gICAgICAgIGJvZHkuY3NzKHN0eWxlXzEuY3NzLmJvZHkpO1xyXG4gICAgICAgIGpxdWVyeV8xLmRlZmF1bHQodGhpcy5ib2R5KS5hcHBlbmQoJzxkaXYgIGlkPVwibWFpbi1kaXZcIj48L2Rpdj4nKTtcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjbWFpbi1kaXYnKTtcclxuICAgICAgICBlbC5jc3Moc3R5bGVfMS5jc3MubWFpbkRpdik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMYXlvdXQoKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGl0bGVEaXYuaWQgPSAndGl0bGUtZGl2JztcclxuICAgICAgICB0aXRsZURpdi5jbGFzc05hbWUgPSAndGl0bGUtZGl2JztcclxuICAgICAgICB2YXIgaW5zdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGluc3REaXYuaWQgPSAnaW5zdC1kaXYnO1xyXG4gICAgICAgIGluc3REaXYuY2xhc3NOYW1lID0gJ2luc3QtZGl2JztcclxuICAgICAgICB2YXIgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250cm9scy5pZCA9ICdjb250cm9sLWRpdic7XHJcbiAgICAgICAgY29udHJvbHMuY2xhc3NOYW1lID0gJ2NvbnRyb2wtZGl2JztcclxuICAgICAgICB2YXIgYWN0aXZpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhY3Rpdml0eURpdi5pZCA9ICdhY3Rpdml0eS1kaXYnO1xyXG4gICAgICAgIGFjdGl2aXR5RGl2LmNsYXNzTmFtZSA9ICdhY3Rpdml0eS1kaXYnO1xyXG4gICAgICAgIHZhciBlbCA9IGpxdWVyeV8xLmRlZmF1bHQoJyNtYWluLWRpdicpO1xyXG4gICAgICAgIGVsLmFwcGVuZCh0aXRsZURpdikuYXBwZW5kKGluc3REaXYpLmFwcGVuZChjb250cm9scykuYXBwZW5kKGFjdGl2aXR5RGl2KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluc3RydWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5zdHJ1Y3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRpdGxlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RpdGxlLWRpdicpO1xyXG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJ0xvbmdpdHVkaW5hbCBXYXZlJztcclxuICAgICAgICB0aXRsZS5odG1sKHNwYW4pO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLnNldEluc3RydWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gXCI8c3Ryb25nPkluc3RydWN0aW9uOjwvc3Ryb25nPiBQcmVzcyA8U3RhcnQ+IHRvIHNlZSB0aGUgd2F2ZSBtb3Rpb24uIE9ic2VydmUgaG93IHRoZSBwYXJ0aWNsZXMgdmlicmF0ZSBhcyB0aGUgbG9uZ2l0dWRpbmFsIHdhdmVzIHBhc3MgdGhlbS4gSG93IGlzIHRoZSBkaXJlY3Rpb24gb2YgbW92ZW1lbnQgb2YgdGhlIHBhcnRpY2xlcyByZWxhdGVkIHRvIHRoZSBkaXJlY3Rpb24gb2YgdHJhdmVsIG9mIHRoZSB3YXZlP1wiO1xyXG4gICAgICAgIHZhciBpbnMgPSBqcXVlcnlfMS5kZWZhdWx0KCcjaW5zdC1kaXYnKTtcclxuICAgICAgICBpbnMuaHRtbChwKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBcIlxcbiAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgLnRpdGxlLWRpdntcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICB9XFxuICAgICAgICAudGl0bGUtZGl2IHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYjaW5zdC1kaXYge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYjY29udHJvbC1kaXYge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYjbGVmdCB7XFxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYjcmlnaHQge1xcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNsZWZ0LCBkaXYjcmlnaHQge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5idG4ge1xcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIGJ1dHRvbiNzdGFydCB7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMmJiYzJiO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYmJjMmI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBidXR0b24jcmVzZXQge1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UyMjAyMDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTIyMDIwO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I2FjdGl2aXR5LWRpdiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICBsYWJlbHtcXG4gICAgICAgICAgICBjb2xvcjogIzA1ODY4NjtcXG4gICAgICAgIH1cXG4gICAgICAgIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIFxcbiAgICAgICAgICBsYWJlbDpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHRvcDogNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDRjOTc7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogOXB4O1xcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMDA7XFxuICAgICAgICAgIH1cXG4gICAgICAgIDwvc3R5bGU+XCI7XHJcbiAgICAgICAganF1ZXJ5XzEuZGVmYXVsdCgnaGVhZCcpLmFwcGVuZChzdHlsZSk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlVHJhcGV6aXVtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI2FjdGl2aXR5LWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwidHJhcGV6b2lkXFxcIj5cXG4gICAgICAgIDxkaXYgIGlkPVxcXCJ0cmFwZXppdW1cXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bS1lbGJvd1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cIik7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bScpO1xyXG4gICAgICAgIGVsLmNzcyhzdHlsZV8xLmNzcy50cmFwZXppdW0pO1xyXG4gICAgICAgIHZhciB0ZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXppdW0tZWxib3cnKTtcclxuICAgICAgICB0ZS5jc3Moc3R5bGVfMS5jc3NbXCJ0cmFwZXppdW0tZWxib3dcIl0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlV2F2ZWxpbmVzKDQ1KTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN0cmxEaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjY29udHJvbC1kaXYnKTtcclxuICAgICAgICB2YXIgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzdGFydC5pZCA9ICdzdGFydCc7XHJcbiAgICAgICAgc3RhcnQuY2xhc3NOYW1lID0gJ2J0bic7XHJcbiAgICAgICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xyXG4gICAgICAgIHZhciByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHJlc2V0LmlkID0gJ3Jlc2V0JztcclxuICAgICAgICByZXNldC5jbGFzc05hbWUgPSAnYnRuJztcclxuICAgICAgICByZXNldC50ZXh0Q29udGVudCA9ICdSZXNldCc7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWwuaWQgPSAncmlnaHQnO1xyXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdyaWdodCc7XHJcbiAgICAgICAgZWwuYXBwZW5kKHN0YXJ0KTtcclxuICAgICAgICBlbC5hcHBlbmQocmVzZXQpO1xyXG4gICAgICAgIGN0cmxEaXYuYXBwZW5kKGVsKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWFpbkRpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNjb250cm9sLWRpdicpO1xyXG4gICAgICAgIG1haW5EaXYuYXBwZW5kKFwiPGRpdiBpZD1cXFwibGVmdFxcXCI+PGxhYmVsPlNob3c8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGlkPVxcXCJ2YWwxXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCI0XFxcIi8+IFxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidmFsMVxcXCI+IDQgUGFydGljbGVzPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwib3B0aW9uXFxcIiB2YWx1ZT1cXFwiMFxcXCIgaWQ9XFxcInZhbDJcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwyXFxcIj4gQ2hhaW4gb2YgcGFydGljbGVzPC9sYWJlbD4gPC9kaXY+XFxuICAgICAgICBcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdXR0b24oKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVXYXZlbGluZXMgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI2FjdGl2aXR5LWRpdicpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0aWNsZSA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlID0gXCI8ZGl2ICBpZD1cXFwicGFydGljbGUtXCIgKyBpICsgXCJcXFwiIGNsYXNzPVxcXCJwYXJ0aWNsZVxcXCI+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJ3YXZlLWJveC1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcIndhdmUtYm94XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3YXZlXFxcIiBpZD1cXFwid2F2ZS1cIiArIGkgKyBcIlxcXCI+PC9kaXY+XCIgKyBwYXJ0aWNsZSArIFwiPC9kaXY+XCIpO1xyXG4gICAgICAgICAgICB2YXIgd2F2ZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN3YXZlLWJveC0nICsgaSk7XHJcbiAgICAgICAgICAgIHdhdmUuY3NzKHN0eWxlXzEuY3NzW1wid2F2ZVwiXSkuY3NzKHsgJ21hcmdpbi1sZWZ0JzogKDEwICogKGkgKyAoNS4zKSkpICsgJ3B4JyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb250cm9scygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEcmF3aW5nO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBEcmF3aW5nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9