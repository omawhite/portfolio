---
templateKey: blog-post
title: Sharing my site with github actions
date: 2019-09-10T03:27:43.789Z
description: How I automatically share the source for my site.
featuredimage: /img/dl-v2-linkedin_fb.png
tags:
  - github github-actions devops automation
---
I love automation, especially when it saves you from repeating the same tasks over and over again. So I was really excited when I was notified that i got selected to try out the [github actions](https://github.com/features/actions) beta. One problem in particular I was hoping they would help me solve is sharing code from the private repo for my site, to a public one when I was ready. 

I use Netlify CMS as my content management system, which leverages git, so anytime I'm in the middle of creating content, whether it's a blog post or anything else, that would be out in the open before it was ready if I developed it on a public repo. I also sometimes prefer to work on site features privately, only revealing them when I'm happy with the state that they are in.

I figured the easy solution was to just keep to repos, a public one for the world to be able to view to their hearts content and a private one that I could work from in peace. It seemed simple enough, but I didn't want to have to manually push code to two remotes. Ideally I wanted to be able to push code to the private remote and on merges to the master branch have the copied over to the public repo. 

To do this I figured that some type of CI/CD tool would be required, but I wanted a solution that wouldn't require me to pay much money. I'm familiar with [drone](https://drone.io/) and originally thought I might stand up an instance of it on the server I have running at home, but once I got invited to the github actions beta I figured that could solve my problem and give me the opportunity to familiarize myself with a new tool.

![screenshot of the github action i used to sync my repos](/img/screenshot-2019-09-10-00.11.20.png "A screen shot of the action i used")

After a bit of tinkering and research I found [an action](https://github.com/marketplace/actions/git-sync-action) someone else had already made that worked for my use case. I was able to set this action up without much difficulty to keep my two repos in sync, so I would consider my first experiment with github actions to be success.

While I'm still more used to the way drone handles things, I think github actions have a lot of promise. I think their biggest potential is their re-usability. Once they are out of beta and more widespread I imagine there will be a plethora of useful github actions for folks to pick from, similarly to how you can find a docker image for just about anything these days. I'll definitely be coming back to them in the future. Check out the repo for my site [here.](https://github.com/omawhite/louiswhite.me)
