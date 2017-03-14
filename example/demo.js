var test = {
  name: "Dzung",
  type: "ranger",
  age: 90,
  rank: "super man",
  items: ["axe", "bow", "sword", "diamon helmet", "wind shoes"]
};

var html = document.getElementById("sample").innerHTML;
var tpl = new nano.Template(html);
var container = document.getElementById("rendered-content");
container.innerHTML = tpl.render({test: test});

var context = {$: jQuery};
var data = ['this', 'is', 'an', 'array'];
var templateStr = document.getElementById("list-template").innerHTML;
var template = nano.compile(templateStr);
document.getElementById("rendered-list").innerHTML = template.render(data, context);
