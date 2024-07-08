---
title: "Add New Custom Field and Query by Weekly Views in WordPress"
summary:
    "Learn how to add a new custom field to your WordPress posts and query them
    by weekly views."
pubDate: 2024-07-08
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/blog/wordpress-custom-field-to-query-by-weekly-views.webp"
tags: ["wordpress", "php"]
slug: wordpress-custom-field-to-query-by-weekly-views
category: "WordPress"
---

WordPress allows you to create new meta_keys for your posts. This is useful when
you want to store additional information about your posts. In this article, we
will create a new custom field to store the weekly views of a post and query
them.

Claro, aquí tienes el artículo estructurado de manera más clara y concisa para que el usuario pueda copiar el código rápidamente sin necesidad de leer demasiado.

---

## 1. Add a New Custom Field

We can add a new custom field in different ways. Without code by using the plugin ACF (Advanced Custom Fields) or with code. In this case, we will use code.

To add a new custom field, WordPress provides the `add_post_meta()` and `update_post_meta()` functions. It's not necessary to use the first one because `update_post_meta()` will add the custom field if it doesn't exist.

### Code for `single.php`

```php title="single.php"
<?php
$author = get_the_author();
$post_id = get_the_ID();
$hasPostThumbnail = has_post_thumbnail($post_id);

// Increment the weekly views counter (custom field we will use in most-viewed.php in our case)
$views = get_post_meta($post_id, 'weekly_views', true);
$views = $views ? $views + 1 : 1;

update_post_meta($post_id, 'weekly_views', $views);
?>
```

By doing this, we can see in the database that the custom field `weekly_views` has been added to the post.

![Custom Field Database](/images/blog/screenshots/custom-field-database.png)

## 2. Query by Weekly Views

To query by weekly views, we can use the `meta_key` and `meta_value` parameters in the `WP_Query` class.

### Code for `most-viewed.php`

```php title="most-viewed.php"
<?php
$args = array(
  'post_type' => 'post',
  'meta_key' => 'weekly_views', // Custom field key created in single.php
  'posts_per_page' => 10,
  'orderby' => 'meta_value_num',
  'order' => 'DESC',
);

// Execute the query
$query = new WP_Query($args);
?>
```

Then we can use `most-viewed.php` in any template we want.

### Code for `index.php`

```php title="index.php"
<?php require_once('most-viewed.php'); ?>
// This returns the $query we can use to loop through the posts
...Filter the loop
```

## 3. Reset Weekly Views Counter Every Week

In `functions.php`, we need to add a function to reset the weekly views counter every week.

### Code for `functions.php`

```php title="functions.php"
function reset_weekly_views()
{
  $args = array(
    'post_type' => 'post',
    'posts_per_page' => -1
  );
  $posts = new WP_Query($args);

  if ($posts->have_posts()) {
    while ($posts->have_posts()) {
      $posts->the_post();
      delete_post_meta(get_the_ID(), 'weekly_views');
    }
  }

  wp_reset_postdata();
}

if (!wp_next_scheduled('reset_weekly_views_event')) {
  wp_schedule_event(time(), 'weekly', 'reset_weekly_views_event');
}

// Hook the function to the event
add_action('reset_weekly_views_event', 'reset_weekly_views');
```

By setting this up, the `weekly_views` counter will reset every week, ensuring that the most viewed posts of the last seven days are always up-to-date.