# Day 25 - Clusters in node.js

Normally, node.js server runs on a single port and utilize only single core of the OS system which leads to wastage of hardware capabilities. So, in order to take the full use of multi-core system, we launch cluster of node.js processes to handle the load. This process is known as clustering. Clustering in node.js allows us to create different processes which can share the same server port. we can simply access cluster module using the following:

```js
var cluster = require("cluster");
```

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [How is it done ?]()

2. [Distributing incoming connections in clusters]()

3. [Methods of cluster module]()

4. [Events of cluster module]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about cluster and a coding example of how we can perform simple clustering. Also we learned about the methods and events of cluster module of node.js.
