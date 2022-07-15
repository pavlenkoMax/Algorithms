class StackBasedOnArray {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }

  pop() {
    this.arr.pop();
    return this;
  }
}
