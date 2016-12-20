var NanoTemplate = function(html) {
  this.template = this._compile(html);
};

NanoTemplate.prototype._compile = function(html) {
  var re = /{%([\s\S]+?)%}/g,
    reExp = /(^( )?(if|for|else|switch|case|break|{|}|do|end|else|))([\s\S]*)?/g,
    code = 'var r=[]; var __temp;\n'
    valueExp = /{{(.+?)}}/g
    ;

  var add = function(line, js) {
    var code = ""
    if (js) {
      if(line.match(reExp)){
        line = line.replace(/\bdo\b/g, '{');
        line = line.replace(/\bend\b/g, '}');
        line = line.replace(/\belse\b/g, '}else{');
        code += line.replace(/\s+/g, " ") + '\n';
      }
    } else {
      if(line.match(valueExp)){
        code += parse(valueExp, line, addVariable);
      }else if( line != ''){
        code +=  'r.push("' + line.replace(/"/g, '\\"').replace(/\r\n|\n/g, "") + '");\n';
      }
    }
    return code;
  }

  var addVariable = function(line, js){
    var code = "";
    if(js)
      code = 'r.push('+ line +');';
    else if(line != ''){
      code =  'r.push("' + line.replace(/"/g, '\\"').replace(/\r\n|\n/g, "") + '");\n';
    }
    return code;
  }

  var parse = function(exp, html, parseAction){
    var match;
    var cursor = 0;
    var code = "";
    while (match = exp.exec(html)) {
      code += parseAction(html.slice(cursor, match.index));
      code += parseAction(match[1], true);
      cursor = match.index + match[0].length;
    }
    code += parseAction(html.substr(cursor, html.length - cursor));
    return code;
  }

  code += parse(re, html, add);
  code += 'return r.join("");';
  return new Function(code.replace(/[\r\t\n]/g, ''));
};

NanoTemplate.prototype.render = function(data) {
  return this.template.apply(data);
};
