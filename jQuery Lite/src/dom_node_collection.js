class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(arg) {
    let x = this.arr[0].innerHTML;
    if (arg === undefined) {
      return this.arr[0].innerHTML;
    } else {
      for (let i = 0; i < this.arr.length; i++) {
        this.arr[i].innerHTML = arg;
      }
    }
  }

  empty() {
    this.html('');
  }

  append(arg) {
    if (typeof arg === 'string') {
      for (let i = 0; i < this.arr.length; i++) {
        this.arr[i].innerHTML += arg;
      }
    } else if (arg instanceof HTMLElement) {
      for (let i = 0; i < this.arr.length; i++) {
        this.arr[i].innerHTML += arg.outerHTML;
      }
    } else {
      for (let i = 0; i<this.arr.length; i++) {
        for (let j = 0; j < arg.arr.length; j++) {
          this.arr[i].innerHTML += arg.arr[j].outerHTML;
        }
      }
    }
  }

  children() {
    let children = [];
    for (let i = 0; i < this.arr.length; i++) {
      children = children.concat(this.arr[i].children)
    }
    return new DOMNodeCollection(children);
  }
}

module.exports = DOMNodeCollection;