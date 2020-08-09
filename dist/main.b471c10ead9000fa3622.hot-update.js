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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx5Q0FBeUMsbUJBQU8sQ0FBQyx5REFBd0I7QUFDekUsZ0NBQWdDLG1CQUFPLENBQUMsdUNBQWU7QUFDdkQsOEJBQThCLG1CQUFPLENBQUMsbUNBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJtYWluLmI0NzFjMTBlYWQ5MDAwZmEzNjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY2FudmFzX2ludGVyZmFjZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9jYW52YXMtaW50ZXJmYWNlXCIpKTtcclxudmFyIERyYXdpbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcmMvRHJhd2luZ1wiKSk7XHJcbnZhciBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NyYy9FdmVudFwiKSk7XHJcbnZhciBJbmRleCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgICAgIHRoaXMuaW5zdCA9IG5ldyBjYW52YXNfaW50ZXJmYWNlXzEuZGVmYXVsdCgnY2FudmFzJywgNTAwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRfMS5kZWZhdWx0KCdzdGFydCcsICdyZXNldCcpO1xyXG4gICAgfVxyXG4gICAgSW5kZXgucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmFkZFNjcmlwdCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5jcmVhdGVNYWluRGl2KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLmNyZWF0ZVRyYXBleml1bSgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkU3RhcnRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWRkUmVzZXRFdmVudCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbmRleDtcclxufSgpKTtcclxubmV3IEluZGV4KCkuaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9