function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}

/* where your prototypical methods go... */
Library.prototype.getElement = function (element) {
  if(element[0] == '.'){
    return document.getElementsByClassName(element.substr(1));
  } else if(element[0] == '#'){
    return document.getElementById(element.substr(1));
  } else {
    return document.getElementsByTagName(element);
  }
};

Library.prototype.css = function(thingToChange, changeTo){
  var arrayOfElements = [].slice.call(this[0]);
  arrayOfElements.forEach(function(node) {
    node.style[thingToChange] = changeTo;
  })
};


Library.prototype.remove = function () {
  var arrayOfElements = [].slice.call(this[0]);
  arrayOfElements.forEach(function(node){
    node.parentNode.removeChild(node);
  })
};

Library.prototype.append = function (string) {
  var arrayOfElements = [].slice.call(this[0]);
  arrayOfElements.forEach(function(node){
    debugger; 
    node.innerHTML += string;
  })
};


var myQuery = function(elString) {
  return new Library(elString);
}



// // how to use this code (don't include it in your file.)
// var myQuerySelectedElements = myQuery('div');
// myQuerySelectedElements.remove(); // removes selected divs
