---
title: "I can't get the data I saved in the session object in getServerSession() in Next.js"
summary: "Why you dont get the session object in getServerSession() in Next.js"
pubDate: 2024-11-18
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/code.webp"
tags: [""]
slug: useSession-vs-getSession
category: "example"
---

## Why you dont get the session object in getServerSession() in Next.js

useSession() triggers a request to /api/auth/session, so it will only work on the client side. 
Therefore it also will go through your NextAuth.js configuration and will return the session object.

getServerSession() directly reads the session without triggering a request to /api/auth/session or going through your NextAuth.js configuration.

