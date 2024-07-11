---
title: "Resetting the Full-Site Editor in WordPress"
summary: "Did you mess up your Full-Site Editor in your Local environment and now it's looks different from the Production site? Here's how to reset it."
pubDate: 2024-07-12
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/blog/resetting-the-full-site-editor-in-wordpress.webp"
tags: ["life", "career", "tech"]
slug: resetting-the-full-site-editor-in-wordpress
category: "WordPress"
---
Imagine you are working with your team on a WordPress site, and you are using the Full-Site Editor to make changes to the site. But when you push those changes to the Production site, the Full-Site Editor looks different.

To understand what is going on, let's first explain what the Full-Site Editor is in WordPress.

The Full-Site Editor is a new feature in WordPress that allows you to edit your entire site using blocks. It's a new way to build and customize your site without having to write code.

But the changes you make in the Full-Site Editor are stored in the database

And here is the problem: if you make changes in your Local environment, those changes will be stored in the database. And when you push those changes to the Production site, the Full-Site Editor will look different, simply because the database is different.

To setup all the settings on the site, WordPress will first look into the database. If the settings are not there, it will use the settings from the theme in `theme.json`. And so `theme.json` is the key to reset the Full-Site Editor, as it is pushed, and committed to the repository.

---
### Requirements
You will need to have a git branch to see the changes, that will allows you to remove them at the end.

## 1. Install Create Block Theme Plugin
Install the plugin [Create Block Theme](https://wordpress.org/plugins/create-block-theme/) and activate it.

This plugin allow us to add all the settings we've made from the database to the `theme.json` file.

Then go to Appearance > Editor > Click on the Full-Site Editor tab to open the settings of the Full-Site Editor. (Does not matter the desing you choose on the left side)



## 2. Export the settings
This will update the `theme.json` file with all the settings you've made in the Full-Site Editor. So you have them all in code (Which allows you to push or delete them).

![Save Create Block Theme](/images/blog/screenshots/save-create-block-plugin.png)

## 3. Remove the changes
Ok, now it can be a little bit confusing, but what happens is that now because we have exported the settings to the `theme.json` file, our database is now empty, and WordPress is using the settings from the `theme.json` file.

And that was the goal, clean these settings from the database.

Now that we have this settings in our `theme.json` not in the database, but we still don't want them in the `theme.json` file, so we need to remove them.

And the easiest way is to remove the changes from this current branch.

```bash
git checkout -b remove-full-site-editor
```
Here remove-full-site-editor is the name of the branch, you can name it as you want.

Or if you are using a GUI like SourceTree, do right click and remove the changes.

Now you will see how the Full-Site Editor is reset to the settings of the theme, same as the Production site.
