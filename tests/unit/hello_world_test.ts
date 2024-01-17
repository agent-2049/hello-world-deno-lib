import { assertEquals } from "assert";
import { HelloWorld }  from "../../src/mod.ts";

Deno.test("HelloWorld class should return 'Hello World!'", () => {
    const helloWorld = new HelloWorld();
    assertEquals(helloWorld.sayHello(), "Hello World!");
  });