# nano-template
A lightweight and pure javascript template engine

# Usage

### 1. Basic usage

**Javascript**
```js
var templateString = "Hello {{name}}";
var template = nano.compile(templateString);

console.log(template.render({name: "Nano"}))
```

**Output**
```html
Hello Nano!
```

### 2. Render template with context
**Template**
```html
<script type="text/template" id="list-template">
  <ul>
    {% ctx.$.each(data, function(item)do %}
      <li>{{item}}</li>
    {% end) %}
  <ul>
</script>
```

**Javascript**
```js
var context = {$: jQuery};
var data = ['this', 'is', 'an', 'array'];
var templateStr = document.getElementById("list-template").innerHTML;
var template = nano.compile(templateStr);
console.log(template.render({data: data}, context));
```


# Syntax

### 1. expression:

  **Template**

  `<span>{{ "hello" + " world" }}</span>`

  **Output**

  `<span>hello world</span>`

### 2. for loop block

  **Template**
  ```html
  {% var items = ['apple', 'pen', 'pineapple'] %}
  <ul>
    {% for(var i = 0; i < items.length; i++)do %}
    <li>{{ items[i] }}</li>
    {% end %}
  </ul>
  ```

  **Output**
  ```html
  <ul>
    <li>apple</li>
    <li>pen</li>
    <li>pineapple</li>
  </ul>
  ```

### 3. if .. else block

  **Template**
  ```html
  {% if(10 % 2 == 0) do %}
  <b>ODD</b>
  {% else %}
  <b>EVEN</b>
  {% end %}
  ```

  **Output**
  ```html
  <b>EVEN</b>
  ```
