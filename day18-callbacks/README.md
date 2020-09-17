# Day 18 - Concepts of callbacks in node.js

Node.js is asynchronous which means node.js doesn't wait for the blocking functions ( such as file I/O , calling some RestAPI and waiting for result or writing some data to db , etc ) to finish instead node.js uses callbacks and carries on with the execution of other tasks. A callback is simply a asynchronous equivalent for a function which is called after the execution of given task. Concept of callback prevents any blocking in node.js and allow other tasks to be executed in the meantime. It is named callback because at some point of time it is going to be `called back` . Node.js makes ample use of callbacks. All APIs in node.js supports the concept of callbacks.

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [Non-Blocking Vs Blocking code]()

2. [Callback Hell]()

3. [Avoiding callback hell]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about the concept of callbacks, blocking and non-blocking code, callback hell and lastly how to avoid callback hell.
