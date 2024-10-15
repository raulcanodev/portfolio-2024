const id = "hooks-in-wordpress.md";
						const collection = "blog";
						const slug = "hooks-in-wordpress";
						const body = "\r\n## Index\r\n\r\n- [Hooks in WordPress](#hooks-in-wordpress)\r\n  - [Action Hooks](#action-hooks)\r\n    - [The two functions `do_action` and `add_action`](#the-two-functions-do_action-and-add_action)\r\n    - [Priority](#priority)\r\n  - [Filters Hooks](#filters-hooks)\r\n    - [apply_filters()](#apply_filters)\r\n    - [add_filter()](#add_filter)\r\n  - [Tools](#tools)\r\n\r\n## Hooks in WordPress\r\n\r\nWordPress gives us two hooks to work with: actions and filters. That will allow us to modify the behavior of WordPress without modifying the core files.\r\n\r\n*The main difference* between `actions` and `filters` is that actions are used to add new functionality, new code to WordPress at some especified point, while filters are used to modify the data before it is sent to the browser.\r\n\r\nFor example there is an action hook called `wp_enqueue_scripts` that is used to add styles and scripts to the WordPress site, so you don't have to modify the `header.php` file and add the styles and scripts manually. This is widely used by plugins and themes.\r\n\r\n\r\n## Action Hooks\r\n\r\nAs mentioned, actions hooks add new code to WordPress at some specified point. It \"stops\" the execution of the code, runs the code you added, and then continues the execution of the WordPress code.\r\n\r\nActions hooks have two parameters: the name of the action and the function that will be executed when the action is triggered.\r\n\r\nFor example, if you want to add a new menu item to the admin bar, you can use the `admin_bar_menu` action hook. This action hook is triggered when the admin bar is being built.\r\n\r\n```php\r\nfunction add_new_menu_item($wp_admin_bar) {\r\n    $args = array(\r\n        'id' => 'new_menu_item',\r\n        'title' => 'New Menu Item',\r\n        'href' => 'https://example.com',\r\n        'meta' => array(\r\n            'class' => 'new-menu-item',\r\n            'target' => '_blank'\r\n        )\r\n    );\r\n\r\n    $wp_admin_bar->add_node($args);\r\n}\r\nadd_action('admin_bar_menu', 'add_new_menu_item');\r\n/* When the admin_bar_menu action is build\r\n* the function add_new_menu_item will be executed\r\n*/\r\n```\r\n\r\n### The two functions `do_action` and `add_action`\r\n\r\n[add_action()](https://developer.wordpress.org/reference/functions/add_action/):  You use this to tell WordPress, “Hey, when this event happens, make sure to run this function.” You’re just giving instructions for later.\r\n\r\n[do_action()](https://developer.wordpress.org/reference/functions/do_action/): This is used to trigger the action. It tells WordPress, “Hey, this event has happened, so run all the functions that are hooked to it.”\r\n\r\n```php\r\ndo_action('admin_bar_menu');\r\n```\r\n\r\n```php\r\nadd_action('admin_bar_menu', 'add_new_menu_item');\r\nadd_action('admin_bar_menu', 'add_another_menu_item');\r\n```\r\n\r\n\r\n*Does the add_action run the function itself?*\r\n\r\nNo, `add_action()` does not run the function itself. It only tells WordPress to run the function later when the action is triggered by `do_action()`.\r\n\r\n\r\n\r\n### Priority\r\n\r\nThen you also have the *priority parameter*, which is optional. It allows you to specify the order in which the functions are executed. The lower the number, the earlier the function is executed. The default value is 10.\r\n\r\n```php\r\nadd_action('admin_bar_menu', 'add_new_menu_item', 10);\r\n```\r\n\r\nPractical example of the priority, imagine I want to add a function that add style sheet to the front end, instead of using the `!important` rule in CSS. I can set a very low priority to the function that adds our style sheet, so this file will override every single CSS rule.\r\n\r\n```php\r\nadd_action('wp_enqueue_scripts', 'add_stylesheet_function', 9999);\r\n```\r\n\r\n\r\n## Filters Hooks\r\n\r\nUnlike the action hooks, that don't return any value to the function that call them, the filters hooks do. They allow you to modify the data before it is sent to the browser.\r\n\r\nFilters *works through a pair of functions*: `apply_filters()` and `add_filter()`.\r\n\r\n### apply_filters()\r\n[apply_filters()](https://developer.wordpress.org/reference/functions/apply_filters/): Is the one that defines the filter hook within the WordPress code.\r\n\r\n```php\r\n$content = apply_filters('the_content', $content, 'This is additional text');\r\n```\r\n\r\nThe first argument is the name of the filter, and the second is the data that will be filtered.\r\n\r\n### add_filter()\r\n[add_filter()](https://developer.wordpress.org/reference/functions/add_filter/): Tells WordPress to run the function you specify when the filter is triggered.\r\n\r\n\r\nThe `add_filter()` function has up to four parameters:\r\n\r\n1- The name of the filter.\r\n\r\n2- The function that will be executed when the filter is triggered.\r\n\r\n3- The priority of the function. The lower the number, the earlier the function is executed. `(Optional)`(Default is 10)\r\n\r\n4- The number of arguments that the function accepts. `(Optional)` (Default is 1)\r\n\r\n\r\n```php\r\nfunction modify_contet($content, $additional_text) {\r\n    return $content . ' - ' . $additional_text;\r\n}\r\n\r\nadd_filter('the_content', 'modify_contet', 10, 2);\r\n```\r\n\r\nHere we are adding a filter to the `the_content` filter hook. When the `the_content` filter hook is triggered, the `modify_content` function will be executed. The function will receive two arguments, the content and the additional text.\r\n\r\nWordPress has as least 2000 filters, so you can modify almost everything in WordPress. [Here](https://developer.wordpress.org/apis/hooks/filter-reference/) you can see a lot of the filters in WordPress.\r\n\r\n## Tools\r\n\r\nThere are some plugins that can help you to work with hooks in WordPress.\r\n\r\n[Simply Show Hooks](https://wordpress.org/plugins/simply-show-hooks/) This plugin will show you all the hooks in the current page.\r\n\r\n<img src=\"https://i.pinimg.com/originals/94/fe/cf/94fecfe4d68614636eeb4e21af0f68b4.png\" alt=\"Simply Show Hooks\" width=\"500\" height=\"300\" >\r\n<br>\r\n\r\nIf you want to see the order of when the hooks are executed, you can use the [Debug Bar Actions and Filters Addon](https://wordpress.com/plugins/debug-bar-actions-and-filters-addon).\r\n\r\n<img src=\"https://ps.w.org/debug-bar-actions-and-filters-addon/assets/banner-772x250.png?rev=1322500\" alt=\"Debug Bar Actions and Filters Addon\" width=\"500\" height=\"300\" >";
						const data = {title:"Hooks in WordPress",summary:"WordPress gives us two hooks to work with: actions and filters. They are used to modify the behavior of WordPress without modifying the core files.",pubDate:new Date(1721433600000),emoji:"💻",author:"Raul Cano",linkAuthor:"https://x.com/raulcanodev",image:"/thumbnails/wordpress.webp",tags:[""],slug:"hooks-in-wordpress",category:"WordPress"};
						const _internal = {
							type: 'content',
							filePath: "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog/hooks-in-wordpress.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
