// With absolute path for Foo import
import Foo from "/abs/path/to/module.js";
import Bar from "./module2.js";

let bar = new Bar();

bar instanceof Foo; // false

// --------------------
// With dynamic path for Foo import (same as in module2.js)
import Foo from "./module.js";
import Bar from "./module2.js";

let bar = new Bar();

bar instanceof Foo; // true
