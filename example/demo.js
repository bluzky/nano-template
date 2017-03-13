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
