---
title: "Add a Custom Block Within the Core Navigation Block in WordPress"
summary: "Step-by-step guide to add a custom block within the core navigation block in WordPress."
pubDate: 2024-08-12
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/wordpress.webp"
tags: [""]
slug: add-block-to-navigation
category: "WordPress"
---

`Note`: To follow along this you already know how to create a plugin custom block in WordPress 6.6. If you don't, you can check out the [official documentation](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/).

If you want to jump straight to the main point, see the 3 step [index.js](#3-add-the-block-to-the-navigation-block) file.

## Introduction
By default in WordPress, you can't add a custom block within the core navigation block. Here I'll show you the key steps to add add your block within the core navigation block. Bear in mind that this is a simplified version of the process, we are not going to going to create a whole block from scratch, but rather add a custom block to the navigation block.


## Block structure:
```md
wp-content/
└── plugins/
    └── my-plugin/
        ├── my-plugin.php
        └── block-example/
            ├── block.json
            ├── edit.js
            ├── editor.scss
            ├── index.js
            ├── render.php
            ├── script.js
            ├── style.scss
            └── view.js
```

## 1. Configure block.json
`block.json`:
```json
{
	"name": "my-plugin/block-example",
	"version": "0.1.0",
	"title": "Example Block",
	"category": "design",
	"textdomain": "my-plugin",
	"description": "Add the Example Block within the navbar",
	"parent": [ "core/navigation" ], <- Don't forget this
	"attributes": {
		"blockId": {
			"type": "string",
			"default": ""
		}
	},
...Everything else
}
```

## 2. Register your block
`my-plugin.php`:

```php

<?php
/**
 * Plugin Name:       My Plugin
 * Description:       An exploratory My Plugin
 * Requires at least: 6.5
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Raul Cano
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-plugin
 *
 * @package           my-plugin-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function my_plugin_block_example_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'my_plugin_block_example_init' );

```

## 3. Add the block to the Navigation block
`index.js`:

```js

import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: Edit,
	icon: 'admin-site',
});
```

```js
/**
 * Make the Example Block available to Navigation blocks.
 *
 * @since 0.1.0
 *
 * @param {Object} blockSettings The original settings of the block.
 * @param {string} blockName     The name of the block being modified.
 * @return {Object} The modified settings for the Navigation block or the original settings for other blocks.
 */
const addToNavigation = ( blockSettings, blockName ) => {
	if ( blockName === 'core/navigation' ) {
		return {
			...blockSettings,
			allowedBlocks: [
				...( blockSettings.allowedBlocks ?? [] ),
				'my-plugin/block-example', // Change this to the actual block name in block.json
			],
		};
	}
	return blockSettings;
};
addFilter(
	'blocks.registerBlockType',
	'my-plugin-block-example-add-to-navigation', // Change this to a unique name for your filter.
	addToNavigation
);

```

## Conclusion

The main file that allows us to insert a custom block inside the navigation block is `index.js`. This file is responsible for registering the block and adding the block to the navigation block. The `block.json` file is also important because it defines the block's metadata, including the parent block. Finally, the `my-plugin.php` file registers the block and its assets.
