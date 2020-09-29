# Day 30 - Github with node.js

Github is a platform which hosts millions of lines of code in the form of code repositories. Github also provides Oauth based APIs which developers can integrate into their apps. In this tutorial we'll walk you through a simple demo app in which we let the user authenticate via their github account and we'll fetch the information of the authenticated user and display that information in JSON format on our screen.

## Topics Covered:

> To run scripts: \$ node <file-name.js>

1. [Prerequisites]()

2. [Creating an Github App]()

3. [Creating the node.js Application]()

4. [Test the application]()

5. [Further Expansion]()

## Summary

In this chapter of 30 days of node tutorial series, we learned about nodejs and github api we accomplished the following:

1. We learned how to create an Oauth 2.0 based app on github.

2. We understood the process of user authorizing our app to use their information through the use of `access_token`.

3. We walked you through the process of obtaining authorization code and exchanging it for access token.

4. And at last ,we used the `access_token` obtained to fetch information about the user

This tutorial was meant to be minimal and as simple as it could be , in real projects you can fetch a lot of information about the user and their github repos as per the needs of your app.
