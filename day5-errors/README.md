# Day 5 - All about errors

An `error` object in node.js does not specify any circumstances under which the error occured but `error` object does capture a stack trace which details the point in the code where the error was instantiated and may provide error description. All errors generated by node.js are either instantiated from `error` class or are intance of `error` class.

## Topics covered:

> To run scripts: \$ node <file-name.js>

1. [properties of errors]()

2. [propagration and interception]()

3. [callbacks]()

4. [try-catch]()

5. [about errors]()

## Summary

In this part of the node.js series 30 days of node we learned about `errors` . We learned what are errors and errors in node.js and properties of errors in node.js.
We also learned about error propagation and interception in nodejs , what is the concept of node.js styles callbacks and why it is better to avoid try/catch while using asynchronous functions. Lastly we learned about the 4 categories most of the errors belong to which are Standard javascript errors , system errors , user-specified errors and assertion errors .