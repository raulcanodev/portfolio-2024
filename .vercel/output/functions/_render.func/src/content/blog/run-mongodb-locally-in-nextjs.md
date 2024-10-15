---
title: "Setting up MongoDB locally in a Next.js project [Mac]"
summary: "We will see how to install MongoDB locally and add the MONGODB_URI to a Next.js project on a Mac. It is important to have your Next.js project already created."
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

Mongo places your data in the `test` (`test>`) database  by default. If you want to create a new database, you can do it with the `use` command + the name of the database.


## 5. Create a new collection

We are going to test the connection in the terminal with a new collection called `myNewCollection`.

```bash
db.createCollection('myNewCollection')
```

## 6. Insert a new document

```bash
db.myNewCollection.insertOne({ name: 'Raul', age: 30 })
```

## 7. Query all documents

```bash
db.myNewCollection.find()
```

## `Note:` Keep this in mind before going to the next step

- You can have multiple databases in MongoDB.
- Each database can have multiple collections.
- Each collection can have multiple documents.

The structure is like this:

```bash
Database
  Collection
    Document
```

The `Database` is the top-level container for our data. It is the container for collections. The `Collection` is a group of documents. The `Document` is a set of key-value pairs that you might be manipulating them with mongoose in your Next.js project.

In the terminal when you run `mongosh` normally you are in the `test` database, thats why you see the `test>` prompt. So then all the commands you run are in the `test` database.

So when you run `test> db.myNewCollection.find()` you are querying the `myNewCollection` collection in the `test` database.

---

## 8. Add the MongoDB URI to Next.js .env.local file

Ok so now we have MongoDB installed and running on our Mac. We need to add the MongoDB URI to our Next.js project.

```bash
mongosh
```

You will see the MongoDB shell prompt of the step 4. `copy` the "Connecting to" value.

```bash
Connecting to: mongodb://127.0.0.1:27017/...
```

Go to Next.js and paste it in your `.env.local` file in your Next.js project.

```json
MONGODB_URI=mongodb://127.0.0.1:27017/...
```

## 9. Test the connection

You can forget the previous collection we created in the terminal.

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

Make sure you are in the correct database and collection otherwise you will not see the new user.

---

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

### References
[MongoDB Doc](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
