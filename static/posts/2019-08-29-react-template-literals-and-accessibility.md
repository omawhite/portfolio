---
templateKey: blog-post
title: 'React, template literals, accessibility, iOS, iOS voiceover'
date: 2019-08-30T03:14:07.839Z
description: >-
  How working with React and screen readers helped me learn more about strings
  in javascript.
featuredimage: /img/5ff6e03f-0ffe-4606-855e-5dfee4556f44.jpeg
tags:
  - Accessibility Engineering React JavaScript
---
Something I have noticed working with React over the past two-ish years is the difference in how iOS voice over behaves when encountering variables improperly interpolated into strings. In our code base, I would occasionally come across something like this in a component:

``

```
const SOME_STRING = "some string"...<p> This is {SOME_STRING}</p>
```

``

The above seemed fine to me; I was aware of template literals, but wasn't sure of the difference between using them or not in situations like this. It wasn't until I had to do some accessibility work with iOS voice over, that I discovered that this issue was breaking the experience for users who needed a screen reader to navigate our site. 

In the beginning, I wasn't sure why this was happening, but figured that it might be one of the following:  something React specific, something to do with webpack, or, something to do with the way we transpiled and constructed the bundle for our site. The template literals worked as intended, but the above example did not. After some digging, I discovered it was actually related to how strings work with javascript and the DOM.

Put video demonstrating this here

Turns out that when you don't use template literals to interpolate variables into your strings in javascript, variables as strings, don't end up the in the DOM the way you intended.

![screenshot of the dom output from my code sandbox experiment](/img/screenshot-2019-09-26-20.46.04.png "You can see the string is broken up inside of our first paragraph tag")

Further research and experimentation, revealed the culprit. You don't have to use template literals to get the desired effect, but you do have to properly use strings. When writing regular HTML, the following is normal:

```
<p>Just a regular paragraph tag nothing to see here</p>
```

So it would seem logical that in the React world, where javascript and html are inextricable, that:

```
const WOULD = 'would'<p>This {WOULD} work<p>
```

And it kinda does, visually your site would look fine, but upon inspection; the DOM would reveal three separate strings within this paragraph tag. So if you are running into problems with iOS, or iOS voiceover and template literals, the following will solve the problem:

```
const LIKE = 'like<p>{"something " + LIKE + " this will also work"}</p>
```

By making sure to wrap your strings in quotes and append them together like in this example here; you can avoid your DOM output causing issues with a user’s screen reader. One caveat with this approach though, is that you have to make sure to add spaces to the beginning and end of your strings, other wise you end up with an output in the DOM like:

```
<p>Make sureyoudon't forget your spaces</p>
```

I have only observed screen readers tripping over improperly interpolated strings on iOS devices, but, given the DOM output, I wouldn't be surprised if the experience is the same with other screen reading technologies. 

I think there are two lessons to be learned here. One, when in doubt, make use of the ES6 feature. Syntactically, I find it more pleasant than the alternative, and it helps maintain a consistent experience for your site's users. Secondly, its important to practice the fundamentals. I consider myself to be a pretty good software engineer, and the folks I work with are phenomenal, but debugging can be a challenge for everyone, regardless of skill. So don’t be afraid to re-acquaint yourself with the chance to constantly flex that debugging muscle. It will allow you to catch syntax errors in your code that an editor might miss, or simply won’t detect. In the process, you’ll be making a consistent and pleasant experience for ALL users. Those with screen readers, and those without. Being a sought after engineer, even at the senior level is always about mental flexing of the brain cells; learning, re-learning, practicing, fortunately, that's part of the fun - for me anyway. 

Checkout my code sandbox to experiment more:

https://codesandbox.io/embed/wandering-pine-bg1e4?fontsize=14
