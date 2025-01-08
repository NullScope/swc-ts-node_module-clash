/* tslint:disable */ /* eslint-disable */ // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RegisterRoutes", {
    enumerable: true,
    get: function() {
        return RegisterRoutes;
    }
});
const _runtime = require("@tsoa/runtime");
const _test = require("../controllers/test");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {};
const templateService = new _runtime.ExpressTemplateService(models, {
    "noImplicitAdditionalProperties": "throw-on-extras",
    "bodyCoercion": true
});
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/test', ...(0, _runtime.fetchMiddlewares)(_test.TestController), ...(0, _runtime.fetchMiddlewares)(_test.TestController.prototype.getTest), async function TestController_getTest(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({
                args,
                request,
                response
            });
            const controller = new _test.TestController();
            await templateService.apiHandler({
                methodName: 'getTest',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined
            });
        } catch (err) {
            return next(err);
        }
    });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
} // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

//# sourceMappingURL=routes.js.map