# nano-template
A lightweight and pure javascript template engine

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
