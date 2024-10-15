import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C0avBOm-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"index\">Index</h2>\n<ul>\n<li><a href=\"#hooks-in-wordpress\">Hooks in WordPress</a>\n<ul>\n<li><a href=\"#action-hooks\">Action Hooks</a>\n<ul>\n<li><a href=\"#the-two-functions-do_action-and-add_action\">The two functions <code>do_action</code> and <code>add_action</code></a></li>\n<li><a href=\"#priority\">Priority</a></li>\n</ul>\n</li>\n<li><a href=\"#filters-hooks\">Filters Hooks</a>\n<ul>\n<li><a href=\"#apply_filters\">apply_filters()</a></li>\n<li><a href=\"#add_filter\">add_filter()</a></li>\n</ul>\n</li>\n<li><a href=\"#tools\">Tools</a></li>\n</ul>\n</li>\n</ul>\n<h2 id=\"hooks-in-wordpress\">Hooks in WordPress</h2>\n<p>WordPress gives us two hooks to work with: actions and filters. That will allow us to modify the behavior of WordPress without modifying the core files.</p>\n<p><em>The main difference</em> between <code>actions</code> and <code>filters</code> is that actions are used to add new functionality, new code to WordPress at some especified point, while filters are used to modify the data before it is sent to the browser.</p>\n<p>For example there is an action hook called <code>wp_enqueue_scripts</code> that is used to add styles and scripts to the WordPress site, so you don’t have to modify the <code>header.php</code> file and add the styles and scripts manually. This is widely used by plugins and themes.</p>\n<h2 id=\"action-hooks\">Action Hooks</h2>\n<p>As mentioned, actions hooks add new code to WordPress at some specified point. It “stops” the execution of the code, runs the code you added, and then continues the execution of the WordPress code.</p>\n<p>Actions hooks have two parameters: the name of the action and the function that will be executed when the action is triggered.</p>\n<p>For example, if you want to add a new menu item to the admin bar, you can use the <code>admin_bar_menu</code> action hook. This action hook is triggered when the admin bar is being built.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#B392F0\"> add_new_menu_item</span><span style=\"color:#E1E4E8\">($wp_admin_bar) {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    $args </span><span style=\"color:#F97583\">=</span><span style=\"color:#79B8FF\"> array</span><span style=\"color:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">        'id'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#9ECBFF\"> 'new_menu_item'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">        'title'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#9ECBFF\"> 'New Menu Item'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">        'href'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#9ECBFF\"> 'https://example.com'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">        'meta'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#79B8FF\"> array</span><span style=\"color:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">            'class'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#9ECBFF\"> 'new-menu-item'</span><span style=\"color:#E1E4E8\">,</span></span>\n<span class=\"line\"><span style=\"color:#9ECBFF\">            'target'</span><span style=\"color:#F97583\"> =></span><span style=\"color:#9ECBFF\"> '_blank'</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        )</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    );</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    $wp_admin_bar</span><span style=\"color:#F97583\">-></span><span style=\"color:#B392F0\">add_node</span><span style=\"color:#E1E4E8\">($args);</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">add_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'admin_bar_menu'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'add_new_menu_item'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">/* When the admin_bar_menu action is build</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">* the function add_new_menu_item will be executed</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">*/</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"the-two-functions-do_action-and-add_action\">The two functions <code>do_action</code> and <code>add_action</code></h3>\n<p><a href=\"https://developer.wordpress.org/reference/functions/add_action/\">add_action()</a>:  You use this to tell WordPress, “Hey, when this event happens, make sure to run this function.” You’re just giving instructions for later.</p>\n<p><a href=\"https://developer.wordpress.org/reference/functions/do_action/\">do_action()</a>: This is used to trigger the action. It tells WordPress, “Hey, this event has happened, so run all the functions that are hooked to it.”</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#B392F0\">do_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'admin_bar_menu'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#B392F0\">add_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'admin_bar_menu'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'add_new_menu_item'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">add_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'admin_bar_menu'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'add_another_menu_item'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<p><em>Does the add_action run the function itself?</em></p>\n<p>No, <code>add_action()</code> does not run the function itself. It only tells WordPress to run the function later when the action is triggered by <code>do_action()</code>.</p>\n<h3 id=\"priority\">Priority</h3>\n<p>Then you also have the <em>priority parameter</em>, which is optional. It allows you to specify the order in which the functions are executed. The lower the number, the earlier the function is executed. The default value is 10.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#B392F0\">add_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'admin_bar_menu'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'add_new_menu_item'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">10</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Practical example of the priority, imagine I want to add a function that add style sheet to the front end, instead of using the <code>!important</code> rule in CSS. I can set a very low priority to the function that adds our style sheet, so this file will override every single CSS rule.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#B392F0\">add_action</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'wp_enqueue_scripts'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'add_stylesheet_function'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">9999</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"filters-hooks\">Filters Hooks</h2>\n<p>Unlike the action hooks, that don’t return any value to the function that call them, the filters hooks do. They allow you to modify the data before it is sent to the browser.</p>\n<p>Filters <em>works through a pair of functions</em>: <code>apply_filters()</code> and <code>add_filter()</code>.</p>\n<h3 id=\"apply_filters\">apply_filters()</h3>\n<p><a href=\"https://developer.wordpress.org/reference/functions/apply_filters/\">apply_filters()</a>: Is the one that defines the filter hook within the WordPress code.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">$content </span><span style=\"color:#F97583\">=</span><span style=\"color:#B392F0\"> apply_filters</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'the_content'</span><span style=\"color:#E1E4E8\">, $content, </span><span style=\"color:#9ECBFF\">'This is additional text'</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<p>The first argument is the name of the filter, and the second is the data that will be filtered.</p>\n<h3 id=\"add_filter\">add_filter()</h3>\n<p><a href=\"https://developer.wordpress.org/reference/functions/add_filter/\">add_filter()</a>: Tells WordPress to run the function you specify when the filter is triggered.</p>\n<p>The <code>add_filter()</code> function has up to four parameters:</p>\n<p>1- The name of the filter.</p>\n<p>2- The function that will be executed when the filter is triggered.</p>\n<p>3- The priority of the function. The lower the number, the earlier the function is executed. <code>(Optional)</code>(Default is 10)</p>\n<p>4- The number of arguments that the function accepts. <code>(Optional)</code> (Default is 1)</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"php\"><code><span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#B392F0\"> modify_contet</span><span style=\"color:#E1E4E8\">($content, $additional_text) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">    return</span><span style=\"color:#E1E4E8\"> $content </span><span style=\"color:#F97583\">.</span><span style=\"color:#9ECBFF\"> ' - '</span><span style=\"color:#F97583\"> .</span><span style=\"color:#E1E4E8\"> $additional_text;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#B392F0\">add_filter</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'the_content'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#9ECBFF\">'modify_contet'</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">10</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#79B8FF\">2</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Here we are adding a filter to the <code>the_content</code> filter hook. When the <code>the_content</code> filter hook is triggered, the <code>modify_content</code> function will be executed. The function will receive two arguments, the content and the additional text.</p>\n<p>WordPress has as least 2000 filters, so you can modify almost everything in WordPress. <a href=\"https://developer.wordpress.org/apis/hooks/filter-reference/\">Here</a> you can see a lot of the filters in WordPress.</p>\n<h2 id=\"tools\">Tools</h2>\n<p>There are some plugins that can help you to work with hooks in WordPress.</p>\n<p><a href=\"https://wordpress.org/plugins/simply-show-hooks/\">Simply Show Hooks</a> This plugin will show you all the hooks in the current page.</p>\n<img src=\"https://i.pinimg.com/originals/94/fe/cf/94fecfe4d68614636eeb4e21af0f68b4.png\" alt=\"Simply Show Hooks\" width=\"500\" height=\"300\">\n<br>\n<p>If you want to see the order of when the hooks are executed, you can use the <a href=\"https://wordpress.com/plugins/debug-bar-actions-and-filters-addon\">Debug Bar Actions and Filters Addon</a>.</p>\n<img src=\"https://ps.w.org/debug-bar-actions-and-filters-addon/assets/banner-772x250.png?rev=1322500\" alt=\"Debug Bar Actions and Filters Addon\" width=\"500\" height=\"300\">";

				const frontmatter = {"title":"Hooks in WordPress","summary":"WordPress gives us two hooks to work with: actions and filters. They are used to modify the behavior of WordPress without modifying the core files.","pubDate":"2024-07-20T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/thumbnails/wordpress.webp","tags":[""],"slug":"hooks-in-wordpress","category":"WordPress"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog/hooks-in-wordpress.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Index\r\n\r\n- [Hooks in WordPress](#hooks-in-wordpress)\r\n  - [Action Hooks](#action-hooks)\r\n    - [The two functions `do_action` and `add_action`](#the-two-functions-do_action-and-add_action)\r\n    - [Priority](#priority)\r\n  - [Filters Hooks](#filters-hooks)\r\n    - [apply_filters()](#apply_filters)\r\n    - [add_filter()](#add_filter)\r\n  - [Tools](#tools)\r\n\r\n## Hooks in WordPress\r\n\r\nWordPress gives us two hooks to work with: actions and filters. That will allow us to modify the behavior of WordPress without modifying the core files.\r\n\r\n*The main difference* between `actions` and `filters` is that actions are used to add new functionality, new code to WordPress at some especified point, while filters are used to modify the data before it is sent to the browser.\r\n\r\nFor example there is an action hook called `wp_enqueue_scripts` that is used to add styles and scripts to the WordPress site, so you don't have to modify the `header.php` file and add the styles and scripts manually. This is widely used by plugins and themes.\r\n\r\n\r\n## Action Hooks\r\n\r\nAs mentioned, actions hooks add new code to WordPress at some specified point. It \"stops\" the execution of the code, runs the code you added, and then continues the execution of the WordPress code.\r\n\r\nActions hooks have two parameters: the name of the action and the function that will be executed when the action is triggered.\r\n\r\nFor example, if you want to add a new menu item to the admin bar, you can use the `admin_bar_menu` action hook. This action hook is triggered when the admin bar is being built.\r\n\r\n```php\r\nfunction add_new_menu_item($wp_admin_bar) {\r\n    $args = array(\r\n        'id' => 'new_menu_item',\r\n        'title' => 'New Menu Item',\r\n        'href' => 'https://example.com',\r\n        'meta' => array(\r\n            'class' => 'new-menu-item',\r\n            'target' => '_blank'\r\n        )\r\n    );\r\n\r\n    $wp_admin_bar->add_node($args);\r\n}\r\nadd_action('admin_bar_menu', 'add_new_menu_item');\r\n/* When the admin_bar_menu action is build\r\n* the function add_new_menu_item will be executed\r\n*/\r\n```\r\n\r\n### The two functions `do_action` and `add_action`\r\n\r\n[add_action()](https://developer.wordpress.org/reference/functions/add_action/):  You use this to tell WordPress, “Hey, when this event happens, make sure to run this function.” You’re just giving instructions for later.\r\n\r\n[do_action()](https://developer.wordpress.org/reference/functions/do_action/): This is used to trigger the action. It tells WordPress, “Hey, this event has happened, so run all the functions that are hooked to it.”\r\n\r\n```php\r\ndo_action('admin_bar_menu');\r\n```\r\n\r\n```php\r\nadd_action('admin_bar_menu', 'add_new_menu_item');\r\nadd_action('admin_bar_menu', 'add_another_menu_item');\r\n```\r\n\r\n\r\n*Does the add_action run the function itself?*\r\n\r\nNo, `add_action()` does not run the function itself. It only tells WordPress to run the function later when the action is triggered by `do_action()`.\r\n\r\n\r\n\r\n### Priority\r\n\r\nThen you also have the *priority parameter*, which is optional. It allows you to specify the order in which the functions are executed. The lower the number, the earlier the function is executed. The default value is 10.\r\n\r\n```php\r\nadd_action('admin_bar_menu', 'add_new_menu_item', 10);\r\n```\r\n\r\nPractical example of the priority, imagine I want to add a function that add style sheet to the front end, instead of using the `!important` rule in CSS. I can set a very low priority to the function that adds our style sheet, so this file will override every single CSS rule.\r\n\r\n```php\r\nadd_action('wp_enqueue_scripts', 'add_stylesheet_function', 9999);\r\n```\r\n\r\n\r\n## Filters Hooks\r\n\r\nUnlike the action hooks, that don't return any value to the function that call them, the filters hooks do. They allow you to modify the data before it is sent to the browser.\r\n\r\nFilters *works through a pair of functions*: `apply_filters()` and `add_filter()`.\r\n\r\n### apply_filters()\r\n[apply_filters()](https://developer.wordpress.org/reference/functions/apply_filters/): Is the one that defines the filter hook within the WordPress code.\r\n\r\n```php\r\n$content = apply_filters('the_content', $content, 'This is additional text');\r\n```\r\n\r\nThe first argument is the name of the filter, and the second is the data that will be filtered.\r\n\r\n### add_filter()\r\n[add_filter()](https://developer.wordpress.org/reference/functions/add_filter/): Tells WordPress to run the function you specify when the filter is triggered.\r\n\r\n\r\nThe `add_filter()` function has up to four parameters:\r\n\r\n1- The name of the filter.\r\n\r\n2- The function that will be executed when the filter is triggered.\r\n\r\n3- The priority of the function. The lower the number, the earlier the function is executed. `(Optional)`(Default is 10)\r\n\r\n4- The number of arguments that the function accepts. `(Optional)` (Default is 1)\r\n\r\n\r\n```php\r\nfunction modify_contet($content, $additional_text) {\r\n    return $content . ' - ' . $additional_text;\r\n}\r\n\r\nadd_filter('the_content', 'modify_contet', 10, 2);\r\n```\r\n\r\nHere we are adding a filter to the `the_content` filter hook. When the `the_content` filter hook is triggered, the `modify_content` function will be executed. The function will receive two arguments, the content and the additional text.\r\n\r\nWordPress has as least 2000 filters, so you can modify almost everything in WordPress. [Here](https://developer.wordpress.org/apis/hooks/filter-reference/) you can see a lot of the filters in WordPress.\r\n\r\n## Tools\r\n\r\nThere are some plugins that can help you to work with hooks in WordPress.\r\n\r\n[Simply Show Hooks](https://wordpress.org/plugins/simply-show-hooks/) This plugin will show you all the hooks in the current page.\r\n\r\n<img src=\"https://i.pinimg.com/originals/94/fe/cf/94fecfe4d68614636eeb4e21af0f68b4.png\" alt=\"Simply Show Hooks\" width=\"500\" height=\"300\" >\r\n<br>\r\n\r\nIf you want to see the order of when the hooks are executed, you can use the [Debug Bar Actions and Filters Addon](https://wordpress.com/plugins/debug-bar-actions-and-filters-addon).\r\n\r\n<img src=\"https://ps.w.org/debug-bar-actions-and-filters-addon/assets/banner-772x250.png?rev=1322500\" alt=\"Debug Bar Actions and Filters Addon\" width=\"500\" height=\"300\" >";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"index","text":"Index"},{"depth":2,"slug":"hooks-in-wordpress","text":"Hooks in WordPress"},{"depth":2,"slug":"action-hooks","text":"Action Hooks"},{"depth":3,"slug":"the-two-functions-do_action-and-add_action","text":"The two functions do_action and add_action"},{"depth":3,"slug":"priority","text":"Priority"},{"depth":2,"slug":"filters-hooks","text":"Filters Hooks"},{"depth":3,"slug":"apply_filters","text":"apply_filters()"},{"depth":3,"slug":"add_filter","text":"add_filter()"},{"depth":2,"slug":"tools","text":"Tools"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
