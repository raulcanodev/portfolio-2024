---
title: "Hooks in WordPress"
summary: "WordPress gives us two hooks to work with: actions and filters. They are used to modify the behavior of WordPress without modifying the core files."
pubDate: 2024-07-20
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/blog/hooks-in-wordpress.webp"
tags: [""]
slug: hooks-in-wordpress
category: "WordPress"
---

## Hooks in WordPress

WordPress gives us two hooks to work with: actions and filters. That will allow us to modify the behavior of WordPress without modifying the core files.

*The main difference* between `actions` and `filters` is that actions are used to add new functionality, new code to WordPress at some especified point, while filters are used to modify the data before it is sent to the browser.

For example there is an action hook called `wp_enqueue_scripts` that is used to add styles and scripts to the WordPress site, so you don't have to modify the `header.php` file and add the styles and scripts manually. This is widely used by plugins and themes.


## Action Hooks

As mentioned, actions hooks add new code to WordPress at some specified point. It "stops" the execution of the code, runs the code you added, and then continues the execution of the WordPress code.

Actions hooks have two parameters: the name of the action and the function that will be executed when the action is triggered.

For example, if you want to add a new menu item to the admin bar, you can use the `admin_bar_menu` action hook. This action hook is triggered when the admin bar is being built.

```php
function add_new_menu_item($wp_admin_bar) {
    $args = array(
        'id' => 'new_menu_item',
        'title' => 'New Menu Item',
        'href' => 'https://example.com',
        'meta' => array(
            'class' => 'new-menu-item',
            'target' => '_blank'
        )
    );

    $wp_admin_bar->add_node($args);
}
add_action('admin_bar_menu', 'add_new_menu_item');
/* When the admin_bar_menu action is build
* the function add_new_menu_item will be executed
*/
```

### The two functions `do_action` and `add_action`

[add_action()](https://developer.wordpress.org/reference/functions/add_action/):  You use this to tell WordPress, “Hey, when this event happens, make sure to run this function.” You’re just giving instructions for later.

[do_action()](https://developer.wordpress.org/reference/functions/do_action/): This is used to trigger the action. It tells WordPress, “Hey, this event has happened, so run all the functions that are hooked to it.”

```php
do_action('admin_bar_menu');
```

```php
add_action('admin_bar_menu', 'add_new_menu_item');
add_action('admin_bar_menu', 'add_another_menu_item');
```


*Does the add_action run the function itself?*

No, `add_action()` does not run the function itself. It only tells WordPress to run the function later when the action is triggered by `do_action()`.



### Priority

Then you also have the *priority parameter*, which is optional. It allows you to specify the order in which the functions are executed. The lower the number, the earlier the function is executed. The default value is 10.

```php
add_action('admin_bar_menu', 'add_new_menu_item', 10);
```

Practical example of the priority, imagine I want to add a function that add style sheet to the front end, instead of using the `!important` rule in CSS. I can set a very low priority to the function that adds our style sheet, so this file will override every single CSS rule.

```php
add_action('wp_enqueue_scripts', 'add_stylesheet_function', 9999);
```


## Filters Hooks

Filters hijack the data and modify it before it is sent to the browser. They are used to modify the data before it is displayed on the screen.

You take the data WordPress gives you by default, hijack it, and modify it before it is sent to the browser.

For example imagine if you want to add the corporation name to the end of the title of every post. You can achieve this by using a filter.


## Tools

There are some plugins that can help you to work with hooks in WordPress.

[Simply Show Hooks](https://wordpress.org/plugins/simply-show-hooks/) This plugin will show you all the hooks in the current page.

<img src="https://i.pinimg.com/originals/94/fe/cf/94fecfe4d68614636eeb4e21af0f68b4.png" alt="Simply Show Hooks" width="500" height="300" >
<br>

If you want to see the order of when the hooks are executed, you can use the [Debug Bar Actions and Filters Addon](https://wordpress.com/plugins/debug-bar-actions-and-filters-addon).

<img src="https://ps.w.org/debug-bar-actions-and-filters-addon/assets/banner-772x250.png?rev=1322500" alt="Debug Bar Actions and Filters Addon" width="500" height="300" >