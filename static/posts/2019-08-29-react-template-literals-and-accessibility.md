---
templateKey: blog-post
title: 'React, template literals, and accessibility '
date: 2019-08-30T03:14:07.839Z
description: >-
  Something I noticed working with react was the difference in how in how
  templates literals affect screen readers.
featuredimage: /img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg
tags:
  - Accessibility Engineering React JavaScript
---
Something I noticed working with react over the past two-ish years was the difference in how iOS voice over behaves when encountering variables injected into strings that aren't utilizing ES6's template literales feature. In our code base I would occasionally come across something like this in a component:

``

```
const SOME_STRING = "some string"...<p> This is {SOME_STRING}</p>
```

``

This seemed fine to me at the time, I was aware of template literals, but wasn't sure what the difference between using them and not was in situations like these. It wasn't until I had to do some accessibility work that involved iOS voice over that I made a discovery, our failure to use template literals across our codebase was breaking the experience for users employing a screen reader to navigate our site.

Put video demonstrating this here

Turn out that when you don't use template literals to properly interpolate variables into your strings things don't end up the DOM as you intended.

![screenshot of the dom output from my code sandbox experiment](/img/screenshot-2019-09-26-20.46.04.png "You can see the string is broken up inside of our first paragraph tag")

I have only observed screen readers tripping over this on iOS devices, but given the DOM output I wouldn't be surprised if the experience is the same with other screen reading technologies. So when in doubt, I would suggest making use of this useful ES6 feature for the sake of maintaining a pleasant experience for all of your site's users.

Checkout my code sandbox to experiment more:

https://codesandbox.io/embed/wandering-pine-bg1e4?fontsize=14
