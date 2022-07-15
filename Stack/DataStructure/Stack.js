class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length -= 1;

    return this;
  }
}
