---
title: 'Next Auth error: To confirm your identity, sign in with the same account you used originally.'
summary: 'Maybe you want to use a email provider and Google at the same time.'
pubDate: 2099-01-30
emoji: '💻'
author: 'Raul Cano'
linkAuthor: 'https://x.com/raulcanodev'
image: '/thumbnails/code.webp'
tags: ['']
slug: next-auth-error-to-confirm-your-identity-sign-in-with-the-same-account-you-used-originally
category: 'NextJS'
---

I encountered this error when I was building my first Next.js project with Next Auth, and as I was getting crazy with it, I decided to write to don't forget it.

The thing is that I wanted to use a `email provider` and `Google provider` or any other, at the same time. I didn't understand why this error was happening, and there were no clear answers on the internet. It may be something easy for someone with more experience, but...

## Understanding the error

In the case I'm mentioning, the error is due to the fact we want the user to be able to sign in with Google and with an email provider. And for security reasons, Next Auth wants to prevent this.

But why?

Well lets imagine that a user signs in with the Google provider. He will have is own account and blablabla.

Now what if the same user signs in with the email provider? He will have another account, and this is not what we want. We want the user to have only one account, no matter how he signs in.

But Next Auth doesn't Know whether the user is the same or not. So it throws this error.

## Solution

The solution is to add an option to allow this behavior. This is done by adding the `allowDangerousEmailAccountLinking` option to the Google provider.

Here is the code:

```typescript
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      // Your email provider configuration
    }),
  ],
```
And ta da!

