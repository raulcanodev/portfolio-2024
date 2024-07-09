---
title: 'Bootstrap 5 Classes'
summary: 'Find out almost all the classes available in Bootstrap 5.'
pubDate: 2024-07-08
emoji: '💻'
author: 'Raul Cano'
linkAuthor: 'https://x.com/raulcanodev'
image: '/blog/bootstrap-5-classes.webp'
tags: ['life', 'career', 'tech']
slug: bootstrap-5-classes
category: 'Bootstrap 5'
---

Summary for almost all the classes available in Bootstrap 5. This will help you to quickly find the class you need for your project.

# Index

1. [Display Classes](#display-classes)
2. [Position Classes](#position-classes)
3. [Border Classes](#border-classes)
4. [Color](#color)
    - [Text Color Classes](#text-color-classes)
    - [Background Color Classes](#background-color-classes)
5. [Visibility Classes](#visibility-classes)
6. [Form Classes](#form-classes)
7. [Navbar Classes](#navbar-classes)
8. [Grid Classes](#grid-classes)
9. [Shadow Classes](#shadow-classes)

## Classes and Values in Rem

### Values in Rem (approximate)

| Class   | Value in Rem |
|---------|--------------|
| .-1     | 0.25 rem     |
| .-2     | 0.5 rem      |
| .-3     | 1 rem        |
| .-4     | 1.5 rem      |
| .-5     | 3 rem        |
| .-auto  | Automatic (Centered) |

**Example:** `.mx-4` = 1.5 rem

## Margin Classes


| Class   | Description |
|---------|-------------|
| m       | Applies margin to all four sides of the element. |
| mt      | Applies margin to the top of the element. |
| mb      | Applies margin to the bottom of the element. |
| ms      | Applies margin to the left side of the element. |
| me      | Applies margin to the right side of the element. |
| mx      | Applies margin to the left and right sides of the element. |
| my      | Applies margin to the top and bottom of the element. |
| m-auto  | Centers the element horizontally and applies automatic margin. |
| mt-auto | Centers the element vertically at the top and applies automatic margin to the sides. |
| mb-auto | Centers the element vertically at the bottom and applies automatic margin to the sides. |
| ml-auto | Centers the element horizontally on the left side and applies automatic margin to the top and bottom. |
| mr-auto | Centers the element horizontally on the right side and applies automatic margin to the top and bottom. |

## Multiple Elements inside a `div`


| Class         | Description                          |
|---------------|--------------------------------------|
| vstack gap-3  | Spaces above and below               |
| hstack gap-4  | Elements aligned side by side        |

## Padding Classes


| Class   | Description |
|---------|-------------|
| p       | Applies padding to all four sides of the element. |
| pt      | Applies padding to the top of the element. |
| pb      | Applies padding to the bottom of the element. |
| ps      | Applies padding to the left side of the element. |
| pe      | Applies padding to the right side of the element. |
| px      | Applies padding to the left and right sides of the element. |
| py      | Applies padding to the top and bottom of the element. |
| p-0     | Removes all padding from the element. |
| p-1     | Applies a small padding to the element. |
| p-2     | Applies moderate padding to the element. |
| p-3     | Applies larger padding to the element. |
| p-4     | Applies very large padding to the element. |
| p-5     | Applies extremely large padding to the element. |
| p-auto  | Applies automatic padding to the element. |
| pt-auto | Applies automatic padding to the top of the element. |
| pb-auto | Applies automatic padding to the bottom of the element. |
| pl-auto | Applies automatic padding to the left side of the element. |
| pr-auto | Applies automatic padding to the right side of the element. |
| px-auto | Applies automatic padding to the left and right sides of the element. |
| py-auto | Applies automatic padding to the top and bottom of the element. |

## Width Classes


| Class      | Description |
|------------|-------------|
| .w-25      | Sets the width of the element to 25%. |
| .w-50      | Sets the width of the element to 50%. |
| .w-75      | Sets the width of the element to 75%. |
| .w-100     | Sets the width of the element to 100%. |
| .mw-100    | Sets the maximum width of the element to 100%. |

## Height Classes


| Class      | Description |
|------------|-------------|
| .h-25      | Sets the height of the element to 25%. |
| .h-50      | Sets the height of the element to 50%. |
| .h-75      | Sets the height of the element to 75%. |
| .h-100     | Sets the height of the element to 100%. |
| .mh-100    | Sets the maximum height of the element to 100%. |

## Button Classes


| Class                          | Description |
|--------------------------------|-------------|
| .btn                           | Applies basic button styles. |
| .btn-primary                   | Applies primary button styles. |
| .btn-secondary                 | Applies secondary button styles. |
| .btn-success                   | Applies success button styles. |
| .btn-danger                    | Applies danger button styles. |
| .btn-warning                   | Applies warning button styles. |
| .btn-info                      | Applies info button styles. |
| .btn-lg                        | Defines large button styles. |
| .btn-sm                        | Defines small button styles. |
| .btn-block                     | Defines block-level button styles. |
| .btn-outline-primary           | Creates outline button with primary color. |
| .btn-outline-secondary         | Creates outline button with secondary color. |
| .btn-outline-success           | Creates outline button with success color. |
| .btn-outline-danger            | Creates outline button with danger color. |
| .btn-outline-warning           | Creates outline button with warning color. |
| .btn-outline-info              | Creates outline button with info color. |
| .btn-link                      | Creates a button with link style without button appearance. |

## Icon Classes


| Class      | Description |
|------------|-------------|
| .bi        | Adds icons using Bootstrap Icons. |
| .fas       | Adds icons using Font Awesome Solid. |
| .far       | Adds icons using Font Awesome Regular. |
| .fab       | Adds icons using Font Awesome Brands. |
| .fa-*      | Specifies a particular icon (replace * with the icon name). For example, `.fa-home` for a home icon. |

## Display Classes

| Class          | Description                                             |
|----------------|---------------------------------------------------------|
| .d-none        | Hides the element.                                      |
| .d-inline      | Makes the element inline.                               |
| .d-inline-block| Makes the element inline but allows width and height adjustments. |
| .d-block       | Makes the element a block.                              |
| .d-table       | Makes the element a table.                              |
| .d-table-cell  | Makes the element a table cell.                         |
| .d-flex        | Creates a flex container.                               |
| .d-inline-flex | Creates an inline flex container.                       |
| .d-sm-none     | Hides the element on small screens.                     |
| .d-md-none     | Hides the element on medium screens.                    |
| .d-lg-none     | Hides the element on large screens.                     |
| .d-xl-none     | Hides the element on extra large screens.               |

## Position Classes


| Class             | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| .position-static  | Positions the element statically (default).                                 |
| .position-relative| Positions the element relative to its normal position.                      |
| .position-absolute| Positions the element absolutely relative to the nearest positioned ancestor.|
| .position-fixed   | Positions the element fixed relative to the browser window.                 |
| .position-sticky  | Positions the element sticky based on the user's scroll position.           |
| .fixed-top        | Fixes the element at the top of the window.                                 |
| .fixed-bottom     | Fixes the element at the bottom of the window.                              |
| .sticky-top       | Fixes the element at the top of the window when the user scrolls down.      |

## Border Classes

| Class                 | Description                                     |
|-----------------------|-------------------------------------------------|
| .border               | Adds a border to an element.                    |
| .border-top           | Adds a border to the top side of an element.    |
| .border-right         | Adds a border to the right side of an element.  |
| .border-bottom        | Adds a border to the bottom side of an element. |
| .border-left          | Adds a border to the left side of an element.   |
| .border-0             | Removes the border from an element.             |
| .rounded              | Adds rounded borders to an element.             |
| .rounded-top          | Adds rounded borders to the top side of an element. |
| .rounded-right        | Adds rounded borders to the right side of an element. |
| .rounded-bottom       | Adds rounded borders to the bottom side of an element. |
| .rounded-left         | Adds rounded borders to the left side of an element.  |

## Color

### Text Color Classes

| Class           | Description            |
|-----------------|------------------------|
| .text-primary   | Primary text color (blue). |
| .text-secondary | Secondary text color (gray). |
| .text-success   | Success text color (green). |
| .text-danger    | Danger text color (red). |
| .text-warning   | Warning text color (yellow). |
| .text-info      | Info text color (light blue). |
| .text-light     | Light text color (white). |
| .text-dark      | Dark text color (black). |

### Background Color Classes

| Class           | Description             |
|-----------------|-------------------------|
| .bg-primary     | Primary background color (blue). |
| .bg-secondary   | Secondary background color (gray). |
| .bg-success     | Success background color (green). |
| .bg-danger      | Danger background color (red). |
| .bg-warning     | Warning background color (yellow). |
| .bg-info        | Info background color (light blue). |
| .bg-light       | Light background color (white). |
| .bg-dark        | Dark background color (black). |

## Visibility Classes

| Class      | Description                                     |
|------------|-------------------------------------------------|
| .invisible | Makes the element invisible but still occupies space. |
| .visible   | Makes the element visible.                      |

## Form Classes


| Class          | Description                                                          |
|----------------|----------------------------------------------------------------------|
| .form-control  | Applies styles to form input elements, such as text fields.          |
| .form-check    | Applies styles to checkable elements, such as checkboxes and radio buttons. |
| .form-group    | Groups form elements and adds spacing between them.                  |
| .form-inline   | Creates an inline form to align elements horizontally.               |
| .form-horizontal| Creates a horizontal form to align elements in a label-field layout. |

## Navbar Classes


| Class              | Description                                                                   |
|--------------------|-------------------------------------------------------------------------------|
| .navbar            | Applies basic styles to a navigation bar.                                     |
| .navbar-expand-lg  | Controls when the navigation bar collapses on large devices.                  |
| .navbar-expand-md  | Controls when the navigation bar collapses on medium devices.                 |
| .navbar-expand-sm  | Controls when the navigation bar collapses on small devices.                  |
| .navbar-light      | Controls the light color scheme of the navigation bar.                        |
| .navbar-dark       | Controls the dark color scheme of the navigation bar.                         |
| .navbar-brand      | Styles the brand logo or name in the navigation bar.                          |

## Grid Classes


| Class            | Description                                             |
|------------------|---------------------------------------------------------|
| .container       | Creates a fixed container centered on the page.         |
| .container-fluid | Creates a full-width container.                         |
| .row             | Creates a row for grid elements.                        |
| .col-*           | Defines the number of columns an element will occupy in a row (replace * with a number from 1 to 12). |
| .offset-*        | Offsets an element by a specified number of columns (replace * with a number from 1 to 11). |

## Shadow Classes


| Class        | Description                                |
|--------------|--------------------------------------------|
| .shadow      | Adds a soft shadow.                        |
| .shadow-lg   | Adds a large shadow for a more pronounced effect. |
| .shadow-sm   | Adds a small shadow for a subtle effect.   |
| .shadow-none | Removes the shadow from the element.       |