class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  top() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  size() {
    return this.queue.length;
  }
}

export { Queue };
