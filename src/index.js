import { Queue } from './ds/queue';
import { Stack } from './ds/stack';

const queue = new Queue();
const stack = new Stack();

queue.enqueue('queue 1');
queue.enqueue('queue 2');
queue.enqueue('queue 3');
queue.enqueue('queue 4');
queue.enqueue('queue 5');

stack.push('stack 1');
stack.push('stack 2');
stack.push('stack 3');
stack.push('stack 4');
stack.push('stack 5');

const app = document.getElementById('app');

app.innerHTML = `
  <div>queue size: ${queue.size()}</div> 
  <div>stack size: ${stack.size()}</div>
`;
