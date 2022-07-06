class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepand(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }

  insert(index, value) {
    let currentNode = this.head;
    let previousNode = null;

    if (index >= this.length) {
      return this.append(value);
    }
    
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new Node(value);
    newNode.next = currentNode;
    previousNode.next = newNode;
    this.length += 1;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    } 

    let currentNode = this.head;
    let previousNode = null;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
    currentNode = null;
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;

      second.next = first;
      first = second;
      second = temp;

      
    }

    this.head.next = null;
    this.head = first;

    return this;
  }
};
