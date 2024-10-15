---
title: "How to remove optgroup in Safari with jQuery in WordPress"
summary: "The disabled attribute or the hidden attribute does not work in Safari the same way as in other browsers. In Safari, the optgroup is not hidden, but it is disabled. Safari add an opacity but does not hide the optgroup."
pubDate: 2024-07-23
emoji: "💻"
author: "Raul Cano"
linkAuthor: "https://x.com/raulcanodev"
image: "/thumbnails/js.webp"
tags: ["jQuery", "WordPress"]
slug: remove-optgroup-in-safari
category: "WordPress"
---

## How to remove optgroup in Safari with jQuery in WordPress

Imagine we have two select fields, one for the country and another for the city. The city select field is grouped by the country. When we select a country, the city select field is updated with the cities of the selected country.

`Select Country:`
```html
<select name="country" id="country">
  <option value="spain">Spain</option>
  <option value="france">France</option>
  <option value="usa">USA</option>
  <option value="mexico">Mexico</option>
</select>
```

`Select City:`  
```html
<select name="city" id="city">
  <optgroup label="Spain">
    <option value="madrid">Madrid</option>
    <option value="barcelona">Barcelona</option>
  </optgroup>
  <optgroup label="France">
    <option value="paris">Paris</option>
    <option value="lyon">Lyon</option>
  </optgroup>
  <optgroup label="USA">
    <option value="new-york">New York</option>
    <option value="los-angeles">Los Angeles</option>
  </optgroup>
  <optgroup label="Mexico">
    <option value="mexico-city">Mexico City</option>
    <option value="guadalajara">Guadalajara</option>
  </optgroup>
</select>
```

If we just want to show the cities of the selected country, you may encounter a problem in Safari. The disabled attribute or the hidden attribute does not work in Safari the same way as in other browsers.

To achieve this, we can use jQuery to remove the optgroup that we don't want to show. 

```js
  // SHOW ONLY "CITY" RELATED TO "COUNTRY"
  // Remove all "optgroup" and "endoptgroup" options
  $('option:contains("optgroup")').remove();
  $('option:contains("endoptgroup")').remove();

  $('select[name="city"]').hide(); // Hide the "city" select until a "country" is selected

  const countrySelect = $('select[name="country"]');
  const allOptgroups = $('select[name="city"]').find("optgroup").toArray();

  // Handle changes in the "country" select
  countrySelect.on("change", function () {
    var citySelect = $('select[name="city"]'); // It gives us the city <select></select>
    var countryValue = $(this).val();

    citySelect.show();
    citySelect.empty(); // Empty the "city" select

    allOptgroups.forEach(optgroup => {
      const $optgroup = $(optgroup);
      if ($optgroup.attr('label') === countryValue) {
        citySelect.append($optgroup); // Append the optgroup that matches the selected country
      }
    });
  });
```

In this example, we remove all the optgroup and endoptgroup options. 

We hide the city select field and store all the optgroups in an array. 

When the country select field changes, we show the city select field, empty it, and append the optgroup that matches the selected country.

And the best part is that this works in all browsers, including Safari.