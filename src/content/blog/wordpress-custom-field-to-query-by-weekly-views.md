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

## Add a new custom field

We can add a new custom field in different ways. Without code by using the
plugin ACF (Advanced Custom Fields) or with code. In this case, we will use
code.

To add a new custom field, Wordpress provides the `add_post_meta()` and
`update_post_meta()` functions. It's not necesary to use `add_post_meta()` due
to `update_post_meta()` will add the custom field if it doesn't exist.

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

By doing so we can see in the database that the custom field `weekly_views` has
been added to the post.

<!-- ![Custom Field Database](images/blog/secreenshots/custom-field-database.png) -->

## Query by weekly views

To query by weekly views we can use the `meta_key` and `meta_value` parameters
in the `WP_Query` class.

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

Then we can use most-viewed.php in any template we want.

```php title="index.php"
  <?php get_template_part('most-viewed');
  ...Filter the loop
  ?>
```
