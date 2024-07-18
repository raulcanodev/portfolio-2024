---
title: "Big O Notation"
summary: "We all know that algorithms are important, but how do we measure their efficiency? Big O notation is here to help us with that."
pubDate: 2024-07-19
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/blog/big-o-notation.webp"
tags: ["algorithms", "big-o"]
slug: big-o-notation
category: "Algorithms"
---
## Index

- [Big O Notation](#big-o-notation)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Big O: O(1)](#big-o-o1)
- [Big O: O(n)](#big-o-on)
- [Big O: O(n^2)](#big-o-on2)
- [Big O: Drop Non-Dominant Terms](#big-o-drop-non-dominant-terms)
- [Big O: O(log n)](#big-o-olog-n)
- [Better understanding](#better-understanding)
---
## Big O Notation

Big O helps us to determine the efficiency of an algorithm. It describes the worst-case scenario for how an algorithm will perform. 

Big O notation will take into account two areas: time complexity and space complexity.

### Time Complexity

We don't measure the time in seconds, but in the number of operations. If you take the same code and run it on a faster computer, the speed will be different, but the number of operations will be the same.

### Space Complexity

We measure the space complexity in the amount of memory that an algorithm uses. So it also can happen that the code use less memory but more time, or vice versa. Therefore your decision on which algorithm to use will depend on the problem you are trying to solve.


<img src="https://www.freecodecamp.org/news/content/images/2021/06/1_KfZYFUT2OKfjekJlCeYvuQ.jpeg" alt="Big O Cheat Sheet" width="600" style="margin: 0 auto;" />

---

## Big O: O(1)

O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set. 

```javascript
function doSomething(n) {
  return n + n;
}

function doSomethingElse(n) {
  return n * n;
}
```
It doesn't matter if `n` is 1 or 1,000,000, the number of operations will be one `O(1)`.

## Big O: O(n)

O(n) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

```javascript
function doSomething(n){
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function doSomethingElse(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  for (let j = 0; j < array.length; j++) {
    console.log(array[j]);
  }

```
The second function will be `O(n + n)` or `O(2n)` but we drop the constant, so it will be `O(n)`. We drop it because it doesn’t matter if it’s 2n or 100n, it will grow linearly.

## Big O: O(n^2)

O(n^2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. 

```javascript
function doSomething(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

## Big O: Drop Non-Dominant Terms

When you have multiple terms in a Big O notation, you drop the non-dominant terms. 

```javascript
function doSomething(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
```
This will be `O(n^2 + n)` but:

N squared is the dominant term, because imagine that `n` is 100, then `n^2` is 10,000 and `n` is 100. So the `n` term is not relevant.

So it will result in `O(n^2)`.

## Big O: O(log n)

Imagine you have an array of size 8. If you have to search for an element in the array, you will have to iterate through all the elements, what would be `O(n)`.

But with a binary search, you can find the element in 3 steps.

Lets say we want to look for number `1` in the array:

`1 | 2 | 3 | 4 | 5 | 6 | 7 | 8`
<br>
`1 | 2 | 3 | 4`
<br>
`1 | 2`
<br>
`1` With just 3 steps by dividing the array in half each time.

Hence, 2 to what number is 8? 2^3 = 8 what is `log2(8) = 3`. So the time complexity is `O(log n)`.

So just imagine, you have an array of 1,000,000 elements, you will find the element in 20 steps. How crazy is that?

In a function like this:


`O(log n)` is the best time complexity. It's the most efficient one. 
In this case, the number of operations will grow logarithmically. 


## Better understanding

I have found this answer on [Stack Overflow](https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly) that I think it's a good way to understand it:

`O(1)` (in the worst case): Given the page that a business's name is on and the business name, find the phone number.

`O(1)` (in the average case): Given the page that a person's name is on and their name, find the phone number.

`O(log n)`: Given a person's name, find the phone number by picking a random point about halfway through the part of the book you haven't searched yet, then checking to see whether the person's name is at that point. Then repeat the process about halfway through the part of the book where the person's name lies. (This is a binary search for a person's name.)

`O(n)`: Find all people whose phone numbers contain the digit "5".

`O(n)`: Given a phone number, find the person or business with that number.

`O(n log n)`: There was a mix-up at the printer's office, and our phone book had all its pages inserted in a random order. Fix the ordering so that it's correct by looking at the first name on each page and then putting that page in the appropriate spot in a new, empty phone book.