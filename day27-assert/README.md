# Day 27 - Assert Module in node.js

Assert module in node.js is an inbuilt module which can be used to write tests. It provides a way to perform unit tests on node.js expressions. If the test case is failed or 0 or false then , an error is raised. If the test case is passed or 1 or true then it provides no feedback. Although this module is intended for only internal use in node.js but we can still access it using the following:

```js
var assert = require("assert");
```

Note that `assert` is not a testing framework and we must not treat it like one.

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [How it works]()

2. [Methods of `assert` module]()

## Summary

In this chapter of 30 days of node , we learned about what is assert module and how we can use it in our code. We also learned about all the methods of assert module with code examples. Methods include: `assert()` , `assert.deepEqual()`, `assert.deepStrictEqual()` , `assert.doesNotThrow()`, `assert.equal()` , `assert.fail()`, `assert.ifError()` , `assert.notDeepEqual()` , `assert.notDeepStrictEqual()` , `assert.notEqual()` , `assert.notStrictEqual()`, `assert.ok()` , `assert.strictEqual()` , `assert.throws()`.
