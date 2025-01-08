"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TestController", {
    enumerable: true,
    get: function() {
        return TestController;
    }
});
const _tsoa = require("../../tsoa");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
class TestController extends _tsoa.Controller {
    getTest() {
        return {
            test: "test"
        };
    }
}
_ts_decorate([
    (0, _tsoa.Get)()
], TestController.prototype, "getTest", null);
TestController = _ts_decorate([
    (0, _tsoa.Route)("test")
], TestController);

//# sourceMappingURL=test.js.map