# Day 22 - String Decoder Module in node.js

String decoder module in node.js is used to provide an API for decoding buffer object into strings. Also , this decoding is performed in a manner that UTF-8 and UTF-16 characters multibyte coding is preserved. We can require the query string module in the following way:

```js
var sd = require("string_decoder").StringDecoder;
```

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [String decoder methods]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about String decoder method in node.js which is used for decoding buffer object into strings. We also learned about two methods of string decoder which are `stringDecoder.write(buffer)` and `stringDecoder.end([buffer])`.
