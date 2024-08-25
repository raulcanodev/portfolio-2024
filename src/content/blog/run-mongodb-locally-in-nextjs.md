---
title: "Setting up MongoDB locally in a Next.js project [Mac]"
summary: "We will see how to install MongoDB locally in a Next.js project on a Mac. It is important to have your Next.js project already created."
pubDate: 2024-08-25
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/server.webp"
tags: [""]
slug: run-mongodb-locally-in-nextjs
category: "MongoDB"
---

Mac M2 Sonoma | Next.js 14.2.6 | MongoDB 7.0

## 1. Install MongoDB with Homebrew

```bash
brew tap mongodb/brew
```

```bash
brew install mongodb-community@7.0
```

## 2. Start MongoDB service

```bash
brew services start mongodb-community@7.0
```

## 3. Check MongoDB service status

```bash
brew services list
```

Here you should have a table like this with the status `started`:
  
```bash
Name              Status  User File
mongodb-community started user ~/Library/[...]/mongodb-community
```

## 4. Connect to MongoDB

```bash
mongosh
```

Now you can see the MongoDB shell prompt:

```bash
Current Mongosh Log ID: 1234567890
Connecting to: mongodb://
Using MongoDB: 7.0.0
```

### 4.1. Show databases

```bash
show dbs
```
By default you should see some databases like `admin`, `config`, `local`, `test`.

Mongo places your data in the `test` (`test>`) database  by default. If you want to create a new database, you can do it with the `use` command.

```bash
use myNewDatabase
```


## 5. Create a new collection

```bash
db.createCollection('myNewCollection')
```

## 7. Insert a new document

```bash
db.myNewCollection.insertOne({ name: 'Raul', age: 30 })
```

## 8. Query all documents

```bash
db.myNewCollection.find()
```

## How to Stop MongoDB service 
(Do not forget to stop the service when you are done)

```bash
brew services stop mongodb-community@7.0
```
`Reestart` MongoDB service:

```bash
brew services restart mongodb-community@7.0
```
---

## 9. Add the MongoDB URI to Next.js .env.local file

```bash
mongosh
```

You will see the MongoDB shell prompt of the step 4. `Copy` the "Connecting to"

```bash
Connecting to:		mongodb://127.0.0.1:27017/...
```

Go to Next.js and paste it in your `.env.local` file in your Next.js project.

```json
// .env.local
MONGODB_URI=mongodb://127.0.0.1:27017/...
```

## 10. Test the connection

Run your Next.js project with `npm run dev` and test the connection with MongoDB, you first need to submit a form or make a request to the database, like registering a new user.

Then in the terminal:
  
  ```bash
  mongosh
```

Ensure you are in the correct database and collection in our case `test` and `users`:

```bash
use test
```

Now check the database and collection `users`:
```bash
db.users.find().pretty()
```

Here we are inside the DB `test` and the collection `users`. You should see the new user you just registered.

Make sure you are in the correct database and collection.


---


### References
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/