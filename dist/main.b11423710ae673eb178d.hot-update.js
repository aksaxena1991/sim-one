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
        var style = "\n        <style>\n        .title-div{\n            padding: 15px;\n            height: 20px;\n            border-bottom: 1px solid black;\n        }\n        .title-div span {\n            font-weight: 500;\n        }\n        div#inst-div {\n            padding: 0px 15px 0px 15px;\n            height: 70px;\n            border-bottom: 1px solid black;\n        }\n        div#control-div {\n            border-bottom: 1px solid black;\n            height: 50px;\n        }\n        div#left {\n            float: left;\n        }\n        div#right {\n            float: right;\n        }\n        div#left, div#right {\n            padding: 10px 15px 0px 15px;\n        }\n        .btn {\n            width: 90px;\n            margin: 0px 0px 0px 10px;\n            border-radius: 15px;\n            padding: 3px;\n            border-style: solid;\n            color: white;\n        }\n        button#start {\n            \n            border-color: #2bbc2b;\n            background: #2bbc2b;\n            \n        }\n        button#reset {\n            \n            border-color: #e22020;\n            background: #e22020;\n            \n        }\n        div#activity-div {\n            height: 255px;\n            margin-top: 0px;\n            \n        }\n        label{\n            color: #058686;\n        }\n        input[type=\"radio\"]:checked,\n        input[type=\"radio\"]:checked:after {\n            background-color: #ffa500;\n            position: relative;\n        }\n        </style>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhd2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsb0RBQVE7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLDRDQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCLFdBQVcsbUJBQW1CLFlBQVksb0JBQW9CLFdBQVcsYUFBYSxnQ0FBZ0Msa0JBQWtCLGFBQWEsbUJBQW1CLGFBQWEsb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0IsMEJBQTBCLHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsV0FBVztBQUMzZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw0QkFBNEIsMkJBQTJCLDZDQUE2QyxXQUFXLDJCQUEyQiwrQkFBK0IsV0FBVyx3QkFBd0IseUNBQXlDLDJCQUEyQiw2Q0FBNkMsV0FBVywyQkFBMkIsNkNBQTZDLDJCQUEyQixXQUFXLG9CQUFvQiwwQkFBMEIsV0FBVyxxQkFBcUIsMkJBQTJCLFdBQVcsK0JBQStCLDBDQUEwQyxXQUFXLGdCQUFnQiwwQkFBMEIsdUNBQXVDLGtDQUFrQywyQkFBMkIsa0NBQWtDLDJCQUEyQixXQUFXLHdCQUF3QixrREFBa0Qsa0NBQWtDLHlCQUF5Qix3QkFBd0Isa0RBQWtELGtDQUFrQyx5QkFBeUIsNEJBQTRCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLGdCQUFnQiw2QkFBNkIsV0FBVyx1RkFBdUYsd0NBQXdDLGlDQUFpQyxXQUFXO0FBQzMrQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJDQUEyQztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJtYWluLmIxMTQyMzcxMGFlNjczZWIxNzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2FudmFzX2ludGVyZmFjZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9jYW52YXMtaW50ZXJmYWNlXCIpKTtcclxudmFyIERyYXdpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRHJhd2luZ1wiKSk7XHJcbnZhciBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9FdmVudFwiKSk7XHJcbnZhciBJbmRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuaW5zdCA9IG5ldyBjYW52YXNfaW50ZXJmYWNlXzEuZGVmYXVsdCgnY2FudmFzJywgNTAwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRfMS5kZWZhdWx0KCdzdGFydCcsICdyZXNldCcpO1xyXG4gICAgfVxyXG4gICAgSW5kZXgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZFNjcmlwdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVNYWluRGl2KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVRyYXBleml1bSgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkU3RhcnRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkUmVzZXRFdmVudCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRleDtcclxufSgpKTtcclxubmV3IEluZGV4KCkuaW5pdCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIganF1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImpxdWVyeVwiKSk7XHJcbnZhciBzdHlsZV8xID0gcmVxdWlyZShcIi4uL3NyYy9jc3Mvc3R5bGVcIik7XHJcbnZhciBEcmF3aW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJhd2luZygpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG4gICAgfVxyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuYWRkU2NyaXB0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoZWFkID0ganF1ZXJ5XzEuZGVmYXVsdCgnaGVhZCcpO1xyXG4gICAgICAgIGhlYWQuaHRtbChcIjxzdHlsZT5cXG4gICAgICAgIEBrZXlmcmFtZXMgb3NjaWxsYXRlIHtcXG4gICAgICAgICAgICAwJSB7bGVmdDogMHB4O31cXG4gICAgICAgICAgICA1MCUge2xlZnQ6IDIwcHg7fVxcbiAgICAgICAgICAgIDEwMCUge2xlZnQ6IDBweDt9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgQGtleWZyYW1lcyByZXNpemVyIHtcXG4gICAgICAgICAgICAwJSB7d2lkdGg6IDMwcHg7fVxcbiAgICAgICAgICAgIDUwJSB7d2lkdGg6IDUwcHg7fVxcbiAgICAgICAgICAgIDEwMCUge3dpZHRoOiAzMHB4O31cXG4gICAgICAgICAgfVxcbiAgICAgICAgICAucGFydGljbGV7XFxuICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6MTBweDtcXG4gICAgICAgICAgICBtYXJnaW46MzVweCAwcHggMHB4IC00cHg7XFxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDojM2MzYzNjO1xcbiAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cIik7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlTWFpbkRpdiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm9keSA9IGpxdWVyeV8xLmRlZmF1bHQodGhpcy5ib2R5KTtcclxuICAgICAgICBib2R5LmNzcyhzdHlsZV8xLmNzcy5ib2R5KTtcclxuICAgICAgICBqcXVlcnlfMS5kZWZhdWx0KHRoaXMuYm9keSkuYXBwZW5kKCc8ZGl2ICBpZD1cIm1haW4tZGl2XCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgdmFyIGVsID0ganF1ZXJ5XzEuZGVmYXVsdCgnI21haW4tZGl2Jyk7XHJcbiAgICAgICAgZWwuY3NzKHN0eWxlXzEuY3NzLm1haW5EaXYpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGF5b3V0KCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuY3JlYXRlTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRpdGxlRGl2LmlkID0gJ3RpdGxlLWRpdic7XHJcbiAgICAgICAgdGl0bGVEaXYuY2xhc3NOYW1lID0gJ3RpdGxlLWRpdic7XHJcbiAgICAgICAgdmFyIGluc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbnN0RGl2LmlkID0gJ2luc3QtZGl2JztcclxuICAgICAgICBpbnN0RGl2LmNsYXNzTmFtZSA9ICdpbnN0LWRpdic7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udHJvbHMuaWQgPSAnY29udHJvbC1kaXYnO1xyXG4gICAgICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdjb250cm9sLWRpdic7XHJcbiAgICAgICAgdmFyIGFjdGl2aXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYWN0aXZpdHlEaXYuaWQgPSAnYWN0aXZpdHktZGl2JztcclxuICAgICAgICBhY3Rpdml0eURpdi5jbGFzc05hbWUgPSAnYWN0aXZpdHktZGl2JztcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjbWFpbi1kaXYnKTtcclxuICAgICAgICBlbC5hcHBlbmQodGl0bGVEaXYpLmFwcGVuZChpbnN0RGl2KS5hcHBlbmQoY29udHJvbHMpLmFwcGVuZChhY3Rpdml0eURpdik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnN0cnVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgICAgICB0aGlzLnNldEluc3RydWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0aXRsZS1kaXYnKTtcclxuICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzcGFuLmlubmVySFRNTCA9ICdMb25naXR1ZGluYWwgV2F2ZSc7XHJcbiAgICAgICAgdGl0bGUuaHRtbChzcGFuKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5zZXRJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLmlubmVySFRNTCA9IFwiPHN0cm9uZz5JbnN0cnVjdGlvbjo8L3N0cm9uZz4gUHJlc3MgPFN0YXJ0PiB0byBzZWUgdGhlIHdhdmUgbW90aW9uLiBPYnNlcnZlIGhvdyB0aGUgcGFydGljbGVzIHZpYnJhdGUgYXMgdGhlIGxvbmdpdHVkaW5hbCB3YXZlcyBwYXNzIHRoZW0uIEhvdyBpcyB0aGUgZGlyZWN0aW9uIG9mIG1vdmVtZW50IG9mIHRoZSBwYXJ0aWNsZXMgcmVsYXRlZCB0byB0aGUgZGlyZWN0aW9uIG9mIHRyYXZlbCBvZiB0aGUgd2F2ZT9cIjtcclxuICAgICAgICB2YXIgaW5zID0ganF1ZXJ5XzEuZGVmYXVsdCgnI2luc3QtZGl2Jyk7XHJcbiAgICAgICAgaW5zLmh0bWwocCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd2luZy5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gXCJcXG4gICAgICAgIDxzdHlsZT5cXG4gICAgICAgIC50aXRsZS1kaXZ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlLWRpdiBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I2luc3QtZGl2IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I2NvbnRyb2wtZGl2IHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I2xlZnQge1xcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2I3JpZ2h0IHtcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYjbGVmdCwgZGl2I3JpZ2h0IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAuYnRuIHtcXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b24jc3RhcnQge1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzJiYmMyYjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmJiYzJiO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgYnV0dG9uI3Jlc2V0IHtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlMjIwMjA7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyMjAyMDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiNhY3Rpdml0eS1kaXYge1xcbiAgICAgICAgICAgIGhlaWdodDogMjU1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgbGFiZWx7XFxuICAgICAgICAgICAgY29sb3I6ICMwNTg2ODY7XFxuICAgICAgICB9XFxuICAgICAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQsXFxuICAgICAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE1MDA7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cIjtcclxuICAgICAgICBqcXVlcnlfMS5kZWZhdWx0KCdoZWFkJykuYXBwZW5kKHN0eWxlKTtcclxuICAgIH07XHJcbiAgICBEcmF3aW5nLnByb3RvdHlwZS5jcmVhdGVUcmFwZXppdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJ0cmFwZXpvaWRcXFwiPlxcbiAgICAgICAgPGRpdiAgaWQ9XFxcInRyYXBleml1bVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2ICBpZD1cXFwidHJhcGV6aXVtLWVsYm93XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlwiKTtcclxuICAgICAgICB2YXIgZWwgPSBqcXVlcnlfMS5kZWZhdWx0KCcjdHJhcGV6aXVtJyk7XHJcbiAgICAgICAgZWwuY3NzKHN0eWxlXzEuY3NzLnRyYXBleml1bSk7XHJcbiAgICAgICAgdmFyIHRlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3RyYXBleml1bS1lbGJvdycpO1xyXG4gICAgICAgIHRlLmNzcyhzdHlsZV8xLmNzc1tcInRyYXBleml1bS1lbGJvd1wiXSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVXYXZlbGluZXMoNDUpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3RybERpdiA9IGpxdWVyeV8xLmRlZmF1bHQoJyNjb250cm9sLWRpdicpO1xyXG4gICAgICAgIHZhciBzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHN0YXJ0LmlkID0gJ3N0YXJ0JztcclxuICAgICAgICBzdGFydC5jbGFzc05hbWUgPSAnYnRuJztcclxuICAgICAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCc7XHJcbiAgICAgICAgdmFyIHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXQuaWQgPSAncmVzZXQnO1xyXG4gICAgICAgIHJlc2V0LmNsYXNzTmFtZSA9ICdidG4nO1xyXG4gICAgICAgIHJlc2V0LnRleHRDb250ZW50ID0gJ1Jlc2V0JztcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5pZCA9ICdyaWdodCc7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3JpZ2h0JztcclxuICAgICAgICBlbC5hcHBlbmQoc3RhcnQpO1xyXG4gICAgICAgIGVsLmFwcGVuZChyZXNldCk7XHJcbiAgICAgICAgY3RybERpdi5hcHBlbmQoZWwpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZUNvbnRyb2xzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWluRGl2ID0ganF1ZXJ5XzEuZGVmYXVsdCgnI2NvbnRyb2wtZGl2Jyk7XHJcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJsZWZ0XFxcIj48bGFiZWw+U2hvdzwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgaWQ9XFxcInZhbDFcXFwiIG5hbWU9XFxcIm9wdGlvblxcXCIgdmFsdWU9XFxcIjRcXFwiLz4gXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJ2YWwxXFxcIj4gNCBQYXJ0aWNsZXM8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJvcHRpb25cXFwiIHZhbHVlPVxcXCIwXFxcIiBpZD1cXFwidmFsMlxcXCIvPiBcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbDJcXFwiPiBDaGFpbiBvZiBwYXJ0aWNsZXM8L2xhYmVsPiA8L2Rpdj5cXG4gICAgICAgIFwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgfTtcclxuICAgIERyYXdpbmcucHJvdG90eXBlLmNyZWF0ZVdhdmVsaW5lcyA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIG1haW5EaXYgPSBqcXVlcnlfMS5kZWZhdWx0KCcjYWN0aXZpdHktZGl2Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gJyc7XHJcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGUgPSBcIjxkaXYgIGlkPVxcXCJwYXJ0aWNsZS1cIiArIGkgKyBcIlxcXCIgY2xhc3M9XFxcInBhcnRpY2xlXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChcIjxkaXYgaWQ9XFxcIndhdmUtYm94LVwiICsgaSArIFwiXFxcIiBjbGFzcz1cXFwid2F2ZS1ib3hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndhdmVcXFwiIGlkPVxcXCJ3YXZlLVwiICsgaSArIFwiXFxcIj48L2Rpdj5cIiArIHBhcnRpY2xlICsgXCI8L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIHZhciB3YXZlID0ganF1ZXJ5XzEuZGVmYXVsdCgnI3dhdmUtYm94LScgKyBpKTtcclxuICAgICAgICAgICAgd2F2ZS5jc3Moc3R5bGVfMS5jc3NbXCJ3YXZlXCJdKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAoMTAgKiAoaSArICg1LjMpKSkgKyAncHgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbnRyb2xzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdpbmc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERyYXdpbmc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=