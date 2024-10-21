---
title: "Setting up Vite in WordPress Theme"
summary: "How to set up Vite in a WordPress theme"
pubDate: 2024-10-21
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/code.webp"
tags: [""]
slug: "setting-up-a-compiler-in-wordpress"
category: ["JavaScript"]
---

## Compiler vs Bundler
Let's briefly figure out some doubts I had between the difference of a compiler and a bundler. In the past we were using Babel and Webpack, with Babel you can compile your JavaScript code and Webpack will bundle it into a single file or multiple files. But now I'm using Vite as a bundler and compiler, since it covers both functionalities and it's faster than Webpack.

### Compiler
A JavaScript compiler allows you to write code using the latest version of JavaScript (ECMAScript 6) and it will transform or compile it to a version that is compatible with most browsers.

It's primarily configured with a file or in your build tool (Vite, Rollup, Gulp, etc.).

Example of a code written in modern JavaScript ES6:
```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

After it compiles the code, it will look like this (ES5):
``` javascript
var greet = function(name) {
  console.log('Hello, ' + name + '!');
};
```

### Bundler
The purpose of a bundler is to group or bundle all your assets (JavaScript, CSS, etc.) into a single file or multiple files that can be loaded by the browser.

It's primarily configured with a file or in your build tool (Vite, Webpack, Rollup, etc.).

## Setting up Vite in WordPress

### Creating the package.json file
You can simply run `npm init -y` to create a `package.json` file with default values.

### Add the devDependencies in your package.json

``` bash
npm install --save-dev vite sass
```
Or you can add them to devDependencies in your package.json file.

``` json
  "devDependencies": {
    "vite": "^5.4.9",
    "sass": "^1.80.3",
  }
```
Then run `npm install` to install the dependencies.

If you are using VSC you can also install the extension `Version Lens` to see or update the versions of your dependencies.

### Add the scripts in your package.json
``` json
  "scripts": {
    "start": "vite build --watch",
    "dev": "vite",
    "build": "vite build"
  }
```

### Create the vite.config.mjs file
Inside the root of your project, create a `vite.config.mjs` file and add the following code:

``` javascript
//vite.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
  // Vite configuration options
});
```

In the configuration file, you can define various options for your project, like the root directory and build options.

The root directory is where your JavaScript files are located, and the build options define the output directory and the input files.

### Fill the entry and output variables in Vite

Change the paths according to your project. In Vite, you don't explicitly define entry and output paths like in Webpack. Instead, you set the root and build options.

``` javascript
//vite.config.mjs
import { defineConfig } from 'vite';
import { resolve } from 'path';

// Get the main.js where all your JavaScript files are imported
const JS_FILE = resolve('src/scripts/main.js')

// Define where the compiled and minified JavaScript files will be saved
const BUILD_DIR = resolve(__dirname, 'dist');

export default defineConfig({
  build: {
    assetsDir: '', // Will save the compiled JavaScript files in the root of the dist folder
    manifest: true, // Generate manifest.json file (for caching)
    emptyOutDir: true, // Empty the dist folder before building
    outDir: BUILD_DIR,
    rollupOptions: {
      input: JS_FILE,
    },
  },
});

```

With this configuration, Vite will compile and bundle your JavaScript files into the `dist` directory. But not the CSS.

### Folder structure with JavaScript files
At this point we should have something like this:

```md
mytheme/
├── dist/
│   ├── main-AD2AS.js
│   └── .vite/
│       └── manifest.json
├── src/
│   └── scripts/
│       ├── main.js
│       ├── woo/
│       └── components/
├── node_modules/
├── package.json
├── package-lock.json
├── functions.php
└── style.css
```

## Enqueue JavaScript in functions.php

```php
<?php
// ... other code
add_action('wp_enqueue_scripts', function(){
    $manifestPath = get_theme_file_path('dist/.vite/manifest.json');
    
    // Check if the manifest file exists and is readable before using it
    if (file_exists($manifestPath)) {
        $manifest = json_decode(file_get_contents($manifestPath), true);
        
        // Check if the file is in the manifest before enqueuing
        if (isset($manifest['src/scripts/main.js'])) {
            wp_enqueue_script('mytheme', get_theme_file_uri('dist/' . $manifest['src/scripts/main.js']['file']));
        }
    }
});
?>
```

## Building the CSS
For this part we don't need to touch the `vite.config.mjs` file any more. We just need to add the CSS files to the `main.js` file.

```javascript
// src/scripts/main.js

/**
 * Main JS file for Cartify Child
 * 
 * Import the main css file
 * Import all the JavaScript files that are needed for the theme.
 */

// Import the main CSS file
import '../styles/main.scss'

// Build the main JS file
// ... other js files imports

```

In our case we need to create the `main.scss` file in the `src/styles/` directory. There you will add or import all the other CSS files that you need.

### Folder structure with CSS files

```md
mytheme/
├── dist/
│   ├── main-something.js
│   └── .vite/
│       └── manifest.json
├── src/
│   ├── scripts/
│   │   ├── main.js
│   │   ├── woo/
│   │   └── components/
│   └── styles/
│       ├── main.scss
│       └── general/
├── node_modules/
├── package.json
├── package-lock.json
├── functions.php
└── style.css
```
## Enqueue CSS in functions.php
And as we did with the JavaScript files, we need to enqueue the CSS file in the `functions.php` file. We just need to update the previous code to enqueue the CSS file.

```php
add_action('wp_enqueue_scripts', function(){
    $manifestPath = get_theme_file_path('dist/.vite/manifest.json');
    
    // Check if the manifest file exists and is readable before using it
    if (file_exists($manifestPath)) {
        $manifest = json_decode(file_get_contents($manifestPath), true);
        
        // Check if the file is in the manifest before enqueuing
        if (isset($manifest['src/scripts/main.js'])) {
            wp_enqueue_script('mytheme', get_theme_file_uri('dist/' . $manifest['src/scripts/main.js']['file']));
            // Enqueue the CSS file
            wp_enqueue_style('mytheme', get_theme_file_uri('dist/' . $manifest['src/scripts/main.js']['css'][0]));
        }
    }
});
```

### My .vite/manifest.json file
Just for your curiosity, this is how my `manifest.json` file looks like:

```json
{
  "src/scripts/main.js": {
    "file": "main-BL027S3L.js",
    "name": "main",
    "src": "src/scripts/main.js",
    "isEntry": true,
    "css": [
      "main-BLUr3EH8.css"
    ]
  }
}
```

## Running Vite
Now you can run Vite with the following command:

``` bash
npm run start
```

## Conclusion
This is how you can set up Vite in a WordPress theme. It's a bit different from Webpack, but it's faster and easier to configure. You can also use Vite for many other projects.