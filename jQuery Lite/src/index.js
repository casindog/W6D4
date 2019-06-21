const DOMNodeCollection = require('./dom_node_collection');
console.log(DOMNodeCollection);
window.$l = function (arg) {
  if (typeof arg === 'string') {
    let arr = Array.from(document.querySelectorAll(arg));
    // debugger
    return new DOMNodeCollection(arr);
  } else if (arg instanceof HTMLElement) {
    let arr = Array.from(arg);
    return new DOMNodeCollection(arr);
  }
}
