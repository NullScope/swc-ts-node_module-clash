import { Route, Controller, Get } from "tsoa";

@Route("test")
export class TestController extends Controller {
  @Get()
  getTest() {
    return { test: "test" };
  }
}
