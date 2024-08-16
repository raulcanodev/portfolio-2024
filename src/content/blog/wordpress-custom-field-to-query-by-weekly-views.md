---
title: "Add New Custom Field and Query by Weekly Views in WordPress"
summary:
    "How can I filter posts by weekly views in WordPress? In this article, we will show you how to add a new custom field to your WordPress posts and query them by the total views of the week."
pubDate: 2024-07-08
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/wordpress.webp"
tags: ["wordpress", "php"]
slug: wordpress-custom-field-to-query-by-weekly-views
category: "WordPress"
---
WordPress allows you to create new meta_keys for your posts. This is useful when
you want to store additional information about your posts. 

By the other hand the [WordPress CRON event](https://developer.wordpress.org/plugins/cron/scheduling-wp-cron-events/) allows you to schedule events to run at specific times. In this case, we will use it to reset the daily views counter every day, store the daily views in a weekly array, and calculate the total weekly views.

---

## 1. Add a New Custom Field to Store Daily Views

We can add a new custom field in different ways. Without code by using the plugin ACF (Advanced Custom Fields) or with code. In this case, we will use code.

To add a new custom field, WordPress provides the [add_post_meta()](https://developer.wordpress.org/reference/functions/add_post_meta/) and [update_post_meta()](https://developer.wordpress.org/reference/functions/update_post_meta/) functions. It's not necessary to use the first one because update_post_meta() will add the custom field if it doesn't exist.

### Code for `single.php`

```php title="single.php"
<?php while (have_posts()) : the_post(); ?>

  <?php
  // Get the post ID and increment the daily views counter
  $post_id = get_the_ID(); // Get the post ID from the loop 
  $daily_views = get_post_meta($post_id, 'daily_views', true);
  $daily_views = $daily_views ? $daily_views + 1 : 1;

  update_post_meta($post_id, 'daily_views', $daily_views);
  ?>

  ...Your post content

<?php endwhile; ?>
```

By doing so, we can see in the database that the custom field `daily_views` has been added to the post. Inside the postmeta table


## 2. Create CRON event to reset the daily views counter every day

To reset the daily views counter every day, we can use the WordPress CRON event. We will create a new function in `functions.php` to reset the daily views counter for all posts.

### Code for `functions.php`

```php title="most-viewed.php"
function reset_daily_views()
{
	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	);

	$posts = new WP_Query($args);

	if ($posts->have_posts()) {
		while ($posts->have_posts()) {
			$posts->the_post();
			delete_post_meta(get_the_ID(), 'daily_views'); // Delete the daily views counter
		}
	}
	wp_reset_postdata();
}

if (!wp_next_scheduled('reset_daily_views_hook')) {
	wp_schedule_event(time(), 'daily', 'reset_daily_views_hook');
}

add_action('reset_daily_views_hook', 'reset_daily_views');
```

## 3. Add a New Custom Field to Store Weekly Views With a CRON Event

We will create a new function in `functions.php` to store the daily views in a weekly array. This function will be executed every day to store the daily views in the `weekly_views` custom field.

```php title="functions.php"
function add_day_to_week()
{
	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	);

	$posts = new WP_Query($args);

	if ($posts->have_posts()) {
		while ($posts->have_posts()) {
			$posts->the_post();

			$daily_views = get_post_meta(get_the_ID(), 'daily_views', true);  // Comes from single.php
			$weekly_views = get_post_meta(get_the_ID(), 'weekly_views', true);

			if (!is_array($weekly_views)) {
				$weekly_views = array();
			}

			if (count($weekly_views) >= 7) {
				array_shift($weekly_views);
			}

			$weekly_views[] = $daily_views;

			update_post_meta(get_the_ID(), 'weekly_views', $weekly_views);
		}
	}
	wp_reset_postdata();
}

if (!wp_next_scheduled('add_day_to_week_hook')) {
	wp_schedule_event(time(), 'daily', 'add_day_to_week_hook');
}

add_action('add_day_to_week_hook', 'add_day_to_week');
```

## 4. Add a New Custom Field to Store The Total Views During The Week

This is a simple sum of the `weekly_views` array. We will create a new function in `functions.php` to store the total weekly views for all posts.

```php title="functions.php"

function total_weekly_views()
{
	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
	);

	$posts = new WP_Query($args);

	if ($posts->have_posts()) {
		while ($posts->have_posts()) {
			$posts->the_post();

			$weekly_views = get_post_meta(get_the_ID(), 'weekly_views', true);

			if (!is_array($weekly_views)) {
				$weekly_views = array();
			}

			$total_weekly_views = array_sum($weekly_views);

			update_post_meta(get_the_ID(), 'total_weekly_views', $total_weekly_views);
		}
	}
	wp_reset_postdata();
}

if (!wp_next_scheduled('total_weekly_views_hook')) {
	wp_schedule_event(time(), 'daily', 'total_weekly_views_hook');
}

add_action('total_weekly_views_hook', 'total_weekly_views');
```

## 5. Query Posts by Weekly Views

Now that we have the `total_weekly_views` custom field, we can query the posts by weekly views. We will create a new file called `most-viewed.php` to query the posts by weekly views.

```php title="most-viewed.php"
<?php
$args = array(
  'post_type'      => 'post',
  'posts_per_page' => 5,
  'meta_key'       => 'total_weekly_views',
  'orderby'        => 'meta_value_num',
  'order'          => 'DESC',
);

$query = new WP_Query($args);
?>
```

This code will return the `$query` we can use to loop through the posts.

```php title="index.php"
<?php require_once('most-viewed.php'); ?>
// This returns the $query we can use to loop through the posts
...Filter the loop
```

## How To Test The CRON Events
To test the CRON events you can use the [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) plugin. This plugin allows you to view and control what's happening in the WP-Cron system.

Then you can simulate the CRON events by clicking on the "Run Now" button.

## Conclusion

There are of course many ways to achieve this. This is just one of them. You can use this as a base and improve it according to your needs. 

Hope this helps you to filter posts by weekly views in WordPress without external plugins.
