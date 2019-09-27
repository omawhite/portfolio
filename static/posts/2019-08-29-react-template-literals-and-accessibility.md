---
templateKey: blog-post
title: 'React, template literals, and accessibility '
date: 2019-08-30T03:14:07.839Z
description: >-
  Something I noticed working with react and screen readers and how it helped me
  learn more about strings in javascript.
featuredimage: /img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg
tags:
  - Accessibility Engineering React JavaScript
---
Something I noticed working with react over the past two-ish years was the difference in how iOS voice over behaves when encountering variables improperly interpolated into strings. In our code base I would occasionally come across something like this in a component:

``

```
const SOME_STRING = "some string"...<p> This is {SOME_STRING}</p>
```

``

This seemed fine to me at the time, I was aware of template literals, but wasn't sure what the difference between using them and not was in situations like these. It wasn't until I had to do some accessibility work that involved iOS voice over that I made a discovery, this was breaking the experience for users employing a screen reader to navigate our site. 

Initially I wasn't sure why this was, but figured that perhaps it was something react specific or had to do with webpack, or the way we transpiled and constructed the bundle for our site that somehow meant the template literals came out alright, but something like the above example didn't. After doing some digging I realized it actually has to do with how strings work with javascript and the DOM.

Put video demonstrating this here

Turns out that when you don't use template literals to properly interpolate variables into your strings things don't end up the DOM as you intended.

![screenshot of the dom output from my code sandbox experiment](/img/screenshot-2019-09-26-20.46.04.png "You can see the string is broken up inside of our first paragraph tag")

After doing a little bit of further research and experimentation, I found out what was going on.  You don't have to use template literals to get the desired effect, but you do have to properly use strings. When writing regular HTML the following is normal:

```
<p>Just a regular paragraph tag nothing to see here</p>
```

So it would seems logical that in react world where your javascript and html are intertwined that:

```
const WOULD = 'would'<p>This {WOULD} work<p>
```

And it kinda does, visually you site would look fine, but upon inspecting the DOM you would discover three separate strings within this paragraph tag. So if you want to do things properly, and don't want to take advantage of template literals you need to do the following:

```
const LIKE = 'like<p>{"something " + LIKE + " this will also work"}</p>
```

By making sure to wrap your strings in quotes and append them together like in the above example you can avoid your DOM output from being all screwed up. One caveat with this approach though, is that you have to make sure to add spaces to the beginning and end of your strings other wise you end up with an output in the dom like:

```
<p>Make sureyoudon't forget your spaces</p>
```

I have only observed screen readers tripping over improperly interpolated strings this on iOS devices only, but given the DOM output I wouldn't be surprised if the experience is the same with other screen reading technologies. 

Moral of the story, I think there are two. First when in doubt, I would suggest making use of this useful ES6 feature, syntactically I find it more pleasant than the alternative and it helps maintain a pleasant experience for all of your site's users. Secondly its important to have an understanding of fundamentals, I consider myself a pretty good software engineer and the folks I work with are phenomenal. Despite that we still had simple mistakes like this in our code that made for a bad experience. Don't be afraid to go reacquaint yourself with the simple fundamental stuff, engineering is about always learning and re-learning, that's part of the fun.

Checkout my code sandbox to experiment more:

https://codesandbox.io/embed/wandering-pine-bg1e4?fontsize=14
