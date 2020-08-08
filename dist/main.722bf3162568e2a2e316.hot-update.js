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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6Im1haW4uNzIyYmYzMTYyNTY4ZTJhMmUzMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjYW52YXNfaW50ZXJmYWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL2NhbnZhcy1pbnRlcmZhY2VcIikpO1xyXG52YXIgRHJhd2luZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9EcmF3aW5nXCIpKTtcclxudmFyIEV2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3JjL0V2ZW50XCIpKTtcclxudmFyIEluZGV4ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0ID0gbmV3IGNhbnZhc19pbnRlcmZhY2VfMS5kZWZhdWx0KCdjYW52YXMnLCA1MDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nID0gbmV3IERyYXdpbmdfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBFdmVudF8xLmRlZmF1bHQoJ2V2dCcpO1xyXG4gICAgfVxyXG4gICAgSW5kZXgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZFNjcmlwdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVNYWluRGl2KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVRyYXBleml1bSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuY3JlYXRlQnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hZGRDbGlja0V2ZW50KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEluZGV4O1xyXG59KCkpO1xyXG5uZXcgSW5kZXgoKS5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=