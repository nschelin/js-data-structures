class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
  }

  size() {
    return this.stack.length;
  }
}

export { Stack };
