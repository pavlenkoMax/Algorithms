class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
};

class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepand(value) {
    const newNode = new Node(value);
    
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = previousNode;
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

    let nextNode = currentNode.next;

    previousNode.next = currentNode.next;
    nextNode.prev = currentNode.prev;
    currentNode = null;
  }
};
