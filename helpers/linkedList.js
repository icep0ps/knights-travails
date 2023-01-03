class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size <= 0 ? true : false;
  }

  append(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.size++;
      return;
    }

    let tmp = this.head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new Node(value);
    this.size++;
  }

  traverse() {
    const data = [];
    let tmp = this.head;
    while (tmp !== null) {
      data.push(tmp.value);
      tmp = tmp.next;
    }
    return data;
  }
}

module.exports = LinkedList;
