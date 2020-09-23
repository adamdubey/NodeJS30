# Day 24 - Child Processes in node.js

Node.js , being single threaded itself , works superbly fine with single processes in a CPU but a single process in a single CPU is not enough to handle the increasing load. Limitation of a single threaded process is that no matter how advanced or powerful our server may be , it does have a limit to support load. Moreover, Node.js is single threaded but it does not mean that we can't take the advantage of multiple process.

Node.js's `child process` module is the solution with the help of which we can create many sub-processes or child processes of a single process which can be used to handle the load. These child processes can communicate with each other using inter process communication. `child_process` module is also used to access operating system functionalities by running OS commands inside child processes. We can control the input stream as well as the output stream of the child processes. We can also control the arguments to be passed to underlying OS commands. Also , pipes for `stdin` , `stdout` and `stderr` are established between the parent and the child node.js process by default. We can stream data through these pipes in non-blocking way.

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [Creating Child processes]()

2. [Asynchronous Process Creation]()

3. [Synchronous Process Creation]()

4. [Events in child process module]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about child processes. Also we learned about how we can create child processes synchronously as well as asynchronously.
