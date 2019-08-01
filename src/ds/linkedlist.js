class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  insert(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current !== null) {
        if (current.next === null) {
          current.next = node;
          break;
        } else {
          current = current.next;
        }
      }
    }
    this._size += 1;
  }

  size() {
    return this._size;
  }

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (data === current.data) {
        break;
      }
      current = current.next;
    }
    if (current && current.data) return current.data;
    else return null;
  }

  remove(data) {
    let current = this.head;
    let prev = current;
    while (current !== null) {
      if (data === current.data) {
        if (current.next !== null) {
          prev.next = current.next;
        } else {
          prev.next = null;
        }
        this._size--;
        break;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }
}

export { Node, LinkedList };
