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

/***/ "./src/Event.ts":
/*!**********************!*\
  !*** ./src/Event.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
var Event = /** @class */ (function () {
    function Event(id) {
        this.id = '';
        this.id = id;
    }
    Event.prototype.addClickEvent = function () {
        var _this = this;
        var btn = jquery_1.default('#' + this.id);
        btn.click(function () {
            _this.animateBar();
        });
    };
    Event.prototype.animateBar = function () {
        var trapezium = jquery_1.default('#trapezium');
        trapezium.css({
            'animation': 'oscillate 4s infinite',
            'position': 'relative'
        });
        var elbow = jquery_1.default('#trapezoid').children('#trapezium-elbow');
        elbow.css({
            'animation': 'resizer 4s infinite',
            'position': 'relative'
        });
        this.moveWaveAndParticle();
    };
    Event.prototype.moveWaveAndParticle = function () {
        var waveLines = jquery_1.default('.wave-box');
        this.generateKeyFrames(waveLines.length, waveLines);
        jquery_1.default.each(waveLines, function (i, v) {
            setInterval(function () {
                jquery_1.default(v).css({ 'animation': 'wave-' + i + ' ' + i + 's infinite', 'position': 'absolute' });
            }, 100 * i);
        });
    };
    Event.prototype.generateKeyFrames = function (n, el) {
        var cssKeyFrame = '';
        for (var i = 0; i < n; i++) {
            var marginLeft = el[i].style['margin-left'].replace('px', '');
            var num = parseInt(marginLeft) + i;
            i >= 0 ? num = num - 2 : num = num;
            cssKeyFrame += "          @keyframes wave-" + i + " {\n                0% {margin-left: " + parseInt(marginLeft) + "px;}\n                50% {margin-left: " + num + "px;}\n                100% {margin-left: " + parseInt(marginLeft) + "px;} \n              }                 ";
        }
        jquery_1.default('head').append('<style>' + cssKeyFrame + '</style>');
    };
    Event.prototype.changeHandler = function (event) {
        console.log(event);
    };
    return Event;
}());
exports.default = Event;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUNBQXlDLG1CQUFPLENBQUMseURBQXdCO0FBQ3pFLGdDQUFnQyxtQkFBTyxDQUFDLHVDQUFlO0FBQ3ZELDhCQUE4QixtQkFBTyxDQUFDLG1DQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwrQkFBK0IsbUJBQU8sQ0FBQyxvREFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNEVBQTRFO0FBQ3JILGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHNCQUFzQiw2Q0FBNkMsdUJBQXVCLDRCQUE0Qix3QkFBd0IsNkNBQTZDLGtCQUFrQjtBQUM5UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJtYWluLjJiNzIxZDNkZDBiOGJmNzI2NDY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2FudmFzX2ludGVyZmFjZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9jYW52YXMtaW50ZXJmYWNlXCIpKTtcclxudmFyIERyYXdpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRHJhd2luZ1wiKSk7XHJcbnZhciBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9FdmVudFwiKSk7XHJcbnZhciBJbmRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuaW5zdCA9IG5ldyBjYW52YXNfaW50ZXJmYWNlXzEuZGVmYXVsdCgnY2FudmFzJywgNTAwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRfMS5kZWZhdWx0KCdldnQnKTtcclxuICAgIH1cclxuICAgIEluZGV4LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5hZGRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlTWFpbkRpdigpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVUcmFwZXppdW0oKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlV2F2ZWxpbmVzKDQ1KTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlU2VsZWN0KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkQ2xpY2tFdmVudCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRleDtcclxufSgpKTtcclxubmV3IEluZGV4KCkuaW5pdCgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIganF1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImpxdWVyeVwiKSk7XHJcbnZhciBFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50KGlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIEV2ZW50LnByb3RvdHlwZS5hZGRDbGlja0V2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGJ0biA9IGpxdWVyeV8xLmRlZmF1bHQoJyMnICsgdGhpcy5pZCk7XHJcbiAgICAgICAgYnRuLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUJhcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV2ZW50LnByb3RvdHlwZS5hbmltYXRlQmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0cmFwZXppdW0gPSBqcXVlcnlfMS5kZWZhdWx0KCcjdHJhcGV6aXVtJyk7XHJcbiAgICAgICAgdHJhcGV6aXVtLmNzcyh7XHJcbiAgICAgICAgICAgICdhbmltYXRpb24nOiAnb3NjaWxsYXRlIDRzIGluZmluaXRlJyxcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBlbGJvdyA9IGpxdWVyeV8xLmRlZmF1bHQoJyN0cmFwZXpvaWQnKS5jaGlsZHJlbignI3RyYXBleml1bS1lbGJvdycpO1xyXG4gICAgICAgIGVsYm93LmNzcyh7XHJcbiAgICAgICAgICAgICdhbmltYXRpb24nOiAncmVzaXplciA0cyBpbmZpbml0ZScsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vdmVXYXZlQW5kUGFydGljbGUoKTtcclxuICAgIH07XHJcbiAgICBFdmVudC5wcm90b3R5cGUubW92ZVdhdmVBbmRQYXJ0aWNsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgd2F2ZUxpbmVzID0ganF1ZXJ5XzEuZGVmYXVsdCgnLndhdmUtYm94Jyk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUtleUZyYW1lcyh3YXZlTGluZXMubGVuZ3RoLCB3YXZlTGluZXMpO1xyXG4gICAgICAgIGpxdWVyeV8xLmRlZmF1bHQuZWFjaCh3YXZlTGluZXMsIGZ1bmN0aW9uIChpLCB2KSB7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGpxdWVyeV8xLmRlZmF1bHQodikuY3NzKHsgJ2FuaW1hdGlvbic6ICd3YXZlLScgKyBpICsgJyAnICsgaSArICdzIGluZmluaXRlJywgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyB9KTtcclxuICAgICAgICAgICAgfSwgMTAwICogaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnQucHJvdG90eXBlLmdlbmVyYXRlS2V5RnJhbWVzID0gZnVuY3Rpb24gKG4sIGVsKSB7XHJcbiAgICAgICAgdmFyIGNzc0tleUZyYW1lID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBlbFtpXS5zdHlsZVsnbWFyZ2luLWxlZnQnXS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgICAgICAgICAgdmFyIG51bSA9IHBhcnNlSW50KG1hcmdpbkxlZnQpICsgaTtcclxuICAgICAgICAgICAgaSA+PSAwID8gbnVtID0gbnVtIC0gMiA6IG51bSA9IG51bTtcclxuICAgICAgICAgICAgY3NzS2V5RnJhbWUgKz0gXCIgICAgICAgICAgQGtleWZyYW1lcyB3YXZlLVwiICsgaSArIFwiIHtcXG4gICAgICAgICAgICAgICAgMCUge21hcmdpbi1sZWZ0OiBcIiArIHBhcnNlSW50KG1hcmdpbkxlZnQpICsgXCJweDt9XFxuICAgICAgICAgICAgICAgIDUwJSB7bWFyZ2luLWxlZnQ6IFwiICsgbnVtICsgXCJweDt9XFxuICAgICAgICAgICAgICAgIDEwMCUge21hcmdpbi1sZWZ0OiBcIiArIHBhcnNlSW50KG1hcmdpbkxlZnQpICsgXCJweDt9IFxcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGpxdWVyeV8xLmRlZmF1bHQoJ2hlYWQnKS5hcHBlbmQoJzxzdHlsZT4nICsgY3NzS2V5RnJhbWUgKyAnPC9zdHlsZT4nKTtcclxuICAgIH07XHJcbiAgICBFdmVudC5wcm90b3R5cGUuY2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXZlbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9