# Day 15 - All about streams

Streams are used to handle streaming data in node.js
Streams can be readable, writable or both.
All streams are instances of eventEmitter class.
We can use the stream module via requiring it in the following way:

```js
var stream = require("stream");
```

**Types of streams**

There are four types of streams which are as follows:

1. **Readable stream:** The streams which is used to perform read operations are readable streams.

2. **Writable stream:** The streams which is used to perform write operations are writable streams.

3. **Duplex stream:** Duplex streams are the streams which implements both readable and writable stream.

4. **Transform stream:** Transform streams are duplex streams that can transform or modify data as it is read and written. Also, In transform stream output is in some way related to the input.

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [Readable stream]()

2. [Writable stream]()

3. [Duplex stream]()

4. [Transform stream]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about the basics of streams, what are they, types of streams, readable stream, writable stream , duplex stream , transform stream and lastly a coding example to explain how we can use streams in our code.
