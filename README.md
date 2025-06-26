# In-View Parallax Elements

## Parallax any element on a page

### Simple setup

1. Download/Fork
2. Include the JS file (standard or minified)
3. Add `.your-class-name` class to the element
4. Use `data-speed=""` to change the scroll speed (anything less than 1 - negatives allowed)

### Usage

```
$('.your-class-name').parallaxInView({
  minWidth: 768,      // Custom minimum width in px
  offset: 150,        // Custom offset threshold in px
  speedAttr: 'speed'  // Can be changed if your data attribute is named differently
});
````

## Licence

MIT. Don't be a dick.